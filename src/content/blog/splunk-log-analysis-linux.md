---
title: "Linux Log Analysis with Splunk: A SOC Analyst Walkthrough"
date: "2026-08-21"
description: "How I set up centralized log collection on Linux with Splunk to detect brute-force attacks, root escalations, and port scans."
tags: ["Splunk", "SOC", "Linux", "SIEM"]
---

## Overview

As part of my cybersecurity training, I built a centralized log monitoring environment using **Splunk** on Linux. The goal was to simulate what a SOC analyst does daily: ingest logs, write queries, and set alerts for suspicious behavior.

## Environment Setup

- **Splunk Enterprise** installed on Ubuntu (indexer + search head)
- **Splunk Universal Forwarder** deployed on Kali Linux (log source)
- Log sources: `/var/log/auth.log`, `/var/log/syslog`, Apache access logs

## Log Forwarding

On the Kali machine, I configured the Universal Forwarder to send logs to the Splunk server:

```bash
./splunk add forward-server <SPLUNK_IP>:9997
./splunk add monitor /var/log/auth.log
./splunk add monitor /var/log/syslog
```

## SPL Queries

### Detecting Failed SSH Logins (Brute Force)

```spl
index=main source="/var/log/auth.log" "Failed password"
| stats count by src_ip, user
| where count > 5
| sort -count
```

### Root Privilege Escalation

```spl
index=main source="/var/log/auth.log" "sudo"
| rex "user=(?<sudo_user>\w+)"
| stats count by sudo_user, _time
```

### Port Scan Detection

```spl
index=main sourcetype="access_combined"
| stats dc(uri_path) as unique_paths count by clientip
| where unique_paths > 50
```

## Alerts Configured

- **Brute-force SSH**: Triggers when >5 failed logins from same IP within 5 minutes
- **Root escalation**: Triggers on any `sudo su` or `su root` command
- **Port scan**: Triggers when a single IP hits >50 unique endpoints in 1 minute

## Key Takeaways

- Log forwarding with Splunk UF is straightforward but requires proper index and source configuration
- SPL (Search Processing Language) is powerful — even simple queries reveal critical activity
- Setting proper alert thresholds is crucial to avoid alert fatigue
- **Defender mindset**: Understanding attacker patterns is what makes detection possible
