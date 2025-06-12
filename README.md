# E-learning Quiz Generator

A MERN stack web application that enables educators to create custom quizzes with multiple-choice questions (MCQs), and students to take quizzes with instant scoring. Teachers can monitor student scores and quiz analytics. The app supports multiple quiz formats, timer-based attempts, and includes a question bank feature.

---

## Features

- **Teacher Role:**
  - Create, update, and delete quizzes.
  - Build quizzes using a question bank or custom questions.
  - View student scores and quiz statistics on the dashboard.
- **Student Role:**
  - Browse available quizzes.
  - Take quizzes with a countdown timer.
  - Get instant scoring and feedback after quiz submission.
- **Quiz Types Supported:**
  - Multiple-choice questions (MCQs).
  - Timer-based quiz attempts.
- **Authentication:**
  - JWT-based API security.
  - Role-based access control (Teacher / Student).

---

## Tech Stack

- **Frontend:** React.js, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **Authentication:** JWT (JSON Web Tokens)
- **API:** RESTful endpoints

---

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
