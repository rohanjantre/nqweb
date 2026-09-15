# NoviqWeb — MERN Stack Website

A full website for NoviqWeb (Home, About, Services, Contact) built with
MongoDB, Express, React, and Node.js. The Contact page has a working form:
submissions are saved to MongoDB and emailed to **rohanjantre123@gmail.com**.
If someone submits the form again while their earlier message is still
unhandled, they see **"Your message is already in review"** instead of
sending a duplicate.

```
noviqweb/
├── backend/     Express API + MongoDB + email sending
└── frontend/    React app (Home, About, Services, Contact)
```

## 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:

- `MONGO_URI` — your MongoDB connection string (local Mongo or a free
  [MongoDB Atlas](https://www.mongodb.com/atlas) cluster).
- `EMAIL_USER` / `EMAIL_PASS` — a Gmail account used to **send** the emails.
  You must use a **Gmail App Password**, not your normal password:
  1. Turn on 2-Step Verification on that Gmail account.
  2. Go to https://myaccount.google.com/apppasswords
  3. Generate a password for "Mail" and paste it into `EMAIL_PASS`.
- `RECEIVER_EMAIL` — already set to `rohanjantre123@gmail.com`, the inbox
  that receives every enquiry.

Run the server:

```bash
npm run dev      # with nodemon, auto-restarts on changes
# or
npm start
```

The API runs at `http://localhost:5000`.

## 2. Frontend setup

```bash
cd frontend
npm install
cp .env.example .env    # REACT_APP_API_URL=http://localhost:5000/api
npm start
```

The site runs at `http://localhost:3000`.

## 3. How the "already in review" logic works

When the contact form is submitted, the backend (`routes/contactRoutes.js`)
checks MongoDB for an existing submission from the same email address with
`status: "pending"` created within the last `REVIEW_WINDOW_HOURS` (default
24 hours, configurable in `.env`). If one exists:

- No new email is sent.
- No duplicate record is created.
- The API responds with `duplicate: true` and the message *"Your message is
  already in review. Our team is on it and will get back to you soon."*

Once you (the business owner) have handled an enquiry, you can mark it as
reviewed so that person can submit again, using:

```
PATCH /api/contact/:id/reviewed
```

You can also list every submission at any time:

```
GET /api/contact
```

## 4. Deployment notes

- Frontend: deploy the `frontend` build (`npm run build`) to Vercel,
  Netlify, or similar.
- Backend: deploy to Render, Railway, or a VPS; set the same environment
  variables there. Update `CLIENT_URL` in the backend `.env` and
  `REACT_APP_API_URL` in the frontend `.env` to the deployed URLs.
- Use MongoDB Atlas for a hosted database instead of local MongoDB.
