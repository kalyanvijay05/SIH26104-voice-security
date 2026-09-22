# 🐍 V.I.P.E.R.

### Voice Identity & Protection Engine for Real-time Threats

**AI-Powered Real-Time Detection & Prevention of Voice-Cloning Impersonation Attacks**

> **Smart India Hackathon 2026 — SIH26104**

V.I.P.E.R. is an AI-powered voice security system designed to detect synthetic and cloned speech, verify speaker identity, analyze spoken content for social-engineering threats, and generate an explainable risk assessment.

Instead of treating voice-clone detection as a simple **real/fake** decision, V.I.P.E.R. combines multiple security signals to determine **why a voice interaction may be dangerous**.

---

## 🚨 Problem

Voice-cloning technology has made it possible for attackers to imitate a person's voice with high realism.

These attacks can be used to:

* Impersonate family members, employees, or trusted individuals
* Request money or financial information
* Ask for OTPs, passwords, or sensitive details
* Create urgency and pressure victims into acting quickly
* Bypass trust based on familiar voices

Traditional voice authentication systems may focus primarily on whether a voice matches a speaker.

V.I.P.E.R. goes further by combining **voice authenticity, speaker identity, speech understanding, and threat context**.

---

## 🛡️ Our Solution

V.I.P.E.R. analyzes an uploaded audio recording or browser microphone capture through multiple AI security layers.

### Detection Pipeline

```text
Audio Input
     ↓
Audio Validation & Preprocessing
     ↓
┌─────────────────────────────────────┐
│       V.I.P.E.R. AI ANALYSIS        │
├─────────────────────────────────────┤
│                                     │
│  1. Voice Authenticity              │
│     AASIST Anti-Spoofing            │
│                                     │
│  2. Speaker Identity                │
│     ECAPA-TDNN Verification         │
│                                     │
│  3. Speech Recognition              │
│     Whisper Transcription           │
│                                     │
│  4. Semantic Threat Analysis        │
│     Financial / Social Engineering  │
│     Urgency / Sensitive Requests    │
│                                     │
│  5. Explainable Risk Assessment     │
│                                     │
└─────────────────────────────────────┘
     ↓
Threat Evidence + Risk Level
     ↓
Recommended Security Action
```

---

## ⚡ Key Features

### 🎙️ Voice Clone Detection

Uses **AASIST** to analyze acoustic characteristics and detect potential synthetic or spoofed speech.

### 🧬 Speaker Verification

Uses **ECAPA-TDNN** speaker embeddings to compare a recording against an enrolled reference voice.

### 📝 Speech Transcription

Uses **Whisper** to convert detected speech into text for contextual analysis.

### 🧠 Semantic Threat Detection

Analyzes the transcript for suspicious patterns such as:

* Financial requests
* OTP requests
* Bank-detail requests
* Credential requests
* Urgent payment instructions
* Social-engineering language

### 📊 Explainable Risk Assessment

V.I.P.E.R. does not simply display **SAFE** or **DANGEROUS**.

It presents the evidence contributing to the decision, including:

* Voice authenticity signals
* Speaker verification status
* Audio quality
* Semantic threat indicators
* Risk level
* Confidence
* Recommended action

### 🔍 Forensic Analysis

The interface provides a detailed breakdown of the signals used to reach the final result, making the AI decision easier to understand.

### 🎤 Browser Microphone Analysis

Users can record audio directly through the browser and submit it for analysis.

### 📁 Audio Upload

Existing recordings can also be uploaded for analysis.

---

## 🧠 AI / ML Technology

| Component                | Technology                |
| ------------------------ | ------------------------- |
| Voice Anti-Spoofing      | AASIST                    |
| Speaker Verification     | ECAPA-TDNN                |
| Speech Recognition       | Whisper                   |
| Semantic Threat Analysis | NLP / contextual analysis |
| Deep Learning            | PyTorch                   |
| Audio Processing         | Torchaudio                |
| Backend                  | FastAPI                   |
| Frontend                 | React + TypeScript        |
| Build Tool               | Vite                      |
| Database                 | SQLite                    |
| API Server               | Uvicorn                   |

---

## 🔐 Risk Assessment

V.I.P.E.R. combines multiple security signals into an application-level risk assessment.

| Risk Level  | Meaning                                                |
| ----------- | ------------------------------------------------------ |
| 🟢 LOW      | No significant threat indicators detected              |
| 🟡 MEDIUM   | Suspicious indicators require attention                |
| 🟠 HIGH     | Multiple threat indicators detected                    |
| 🔴 CRITICAL | Strong evidence of a potentially dangerous interaction |

> The risk score is an application-level security signal and should not be interpreted as a calibrated probability of fraud.

---

## 🖥️ User Workflow

```text
1. Upload Audio / Record Voice
              ↓
2. V.I.P.E.R. Processes Audio
              ↓
3. Detect Synthetic Voice Signals
              ↓
4. Verify Speaker (if reference exists)
              ↓
5. Transcribe Speech
              ↓
6. Analyze Threat Context
              ↓
7. Generate Explainable Risk
              ↓
8. Display Security Recommendation
```

---

## 🏗️ System Architecture

```text
                    ┌──────────────────┐
                    │      USER        │
                    └────────┬─────────┘
                             │
                    Audio Upload / Mic
                             │
                             ▼
                 ┌──────────────────────┐
                 │   React + TypeScript │
                 │       Frontend       │
                 └──────────┬───────────┘
                            │ REST API
                            ▼
                 ┌──────────────────────┐
                 │       FastAPI        │
                 │       Backend        │
                 └──────────┬───────────┘
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
     ┌──────────┐      ┌──────────┐      ┌──────────┐
     │  AASIST  │      │  ECAPA   │      │ Whisper  │
     │ Anti-    │      │ Speaker  │      │   ASR    │
     │ Spoofing │      │ Verify   │      │          │
     └────┬─────┘      └────┬─────┘      └────┬─────┘
          │                 │                 │
          └─────────────────┼─────────────────┘
                            ▼
                 ┌──────────────────────┐
                 │ Semantic Threat      │
                 │ Analysis             │
                 └──────────┬───────────┘
                            ▼
                 ┌──────────────────────┐
                 │ Explainable Risk     │
                 │ Assessment           │
                 └──────────┬───────────┘
                            ▼
                 ┌──────────────────────┐
                 │ Security Result      │
                 │ + Evidence           │
                 │ + Recommendation     │
                 └──────────────────────┘
```

---

## 🚀 Getting Started

### Requirements

* Python 3.11+
* Node.js
* npm
* Git

### 1. Clone the Repository

```bash
git clone https://github.com/kalyanvijay05/SIH26104-voice-security.git
cd SIH26104-voice-security
```

### 2. Backend Setup

```bash
cd backend

python -m venv .venv
```

#### Windows

```powershell
.\.venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the backend:

```bash
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

Backend:

```text
http://127.0.0.1:8000
```

Swagger API Documentation:

```text
http://127.0.0.1:8000/docs
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

## 🔌 API

Main API routes are available under:

```text
/api/v1
```

Important endpoints include:

```text
GET  /health
GET  /models/status
POST /analyze
POST /enroll
POST /speaker/verify
GET  /reports
GET  /reports/{request_id}
```

Interactive API documentation is available through FastAPI Swagger:

```text
http://127.0.0.1:8000/docs
```

---

## 🔬 Technical Foundation

V.I.P.E.R. was developed using an existing voice-security foundation and customized for the **SIH26104 problem statement**.

Our development work focuses on:

* V.I.P.E.R. product identity and security workflow
* Modern security-focused user interface
* Voice authenticity visualization
* Speaker verification workflow
* Semantic threat analysis presentation
* Explainable forensic evidence
* Risk assessment visualization
* Security recommendations
* Hackathon-specific user experience

The project retains relevant underlying technologies while extending the system into the V.I.P.E.R. prototype.

---

## ⚠️ Scope & Limitations

V.I.P.E.R. is currently a prototype for analyzing **audio recordings and browser microphone input**.

It does **not** directly intercept cellular calls or operate on telecom basebands.

The system should therefore be understood as an AI-assisted security analysis prototype rather than a production telecommunications interception system.

---

# 👥 Team V.I.P.E.R.

### Smart India Hackathon 2026 — SIH26104

| # | Team Member         |
| - | ------------------- |
| 1 | **M. Vijay Kalyan** |
| 2 | **K. Maneesh**      |
| 3 | **K. Dileep Kumar** |
| 4 | **C. Kunal**        |
| 5 | **A. Lahari**       |
| 6 | **Y. Manikanta**    |

> **Team V.I.P.E.R.** — Building AI-powered protection against voice-cloning impersonation attacks.

---

## 🎯 Project Goal

V.I.P.E.R. aims to move voice security beyond a simple question:

> **"Is this voice real?"**

toward a more complete security question:

> **"Is this voice authentic, does it belong to the claimed speaker, and is the interaction itself suspicious?"**

---

## 📌 Hackathon

**Smart India Hackathon 2026**

**Problem Statement:** SIH26104

**Theme:** AI-Powered Real-Time Detection & Prevention of Voice Cloning Impersonation Attacks

**Project:** V.I.P.E.R.

**Voice Identity & Protection Engine for Real-time Threats**

---

## 📄 License & Attribution

This repository is a fork and customized development of the original **SIH26104-voice-security / SUTRA** project.

Original repository:

https://github.com/Saqib-Hussain-xo/SIH26104-voice-security

Please refer to the original repository and its applicable licensing/attribution information for the underlying components.

V.I.P.E.R.-specific modifications and presentation have been developed for the Smart India Hackathon 2026 prototype.
