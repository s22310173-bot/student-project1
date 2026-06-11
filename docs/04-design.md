# Design Document

## Technology Stack

- HTML
- CSS
- JavaScript
- Jest

## User Flow

User membuka aplikasi
↓
Masukkan tugas
↓
Klik Tambah
↓
Tugas muncul
↓
Tandai selesai atau hapus

## Component Breakdown

- Input Task
- Button Add
- Task List
- Delete Button

## Data Model

Task:

- id
- title
- completed

## File Structure

src/
├── index.html
├── style.css
└── script.js

tests/
└── task.test.js

## Trade-offs

Menggunakan JavaScript sederhana tanpa framework agar mudah dipahami.
