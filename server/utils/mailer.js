require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.sendConfirmationEmail = async (toEmail) => {
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: toEmail,
  subject: "🚀 Master Real Engineering with OneStack | Build What Matters",
  text: `Hi there,

At OneStack, we don’t just learn, we build.  
Every project, every roadmap, and every challenge is designed to push you closer to professional-grade engineering.

🌟 This Month’s Focus: Depth over breadth.  
Build projects that make you think, debug, and design like an engineer.

⚙️ Project Challenges of the Month:

1. AI-Powered Chat Companion:  
   Train and deploy a lightweight conversational agent using OpenAI or Gemini APIs.  
   Integrate vector embeddings and retrieval pipelines for real, context-aware responses.

2. Distributed Task Scheduler:  
   Architect a fault-tolerant backend service in Node.js or Go that schedules, queues, and executes background jobs efficiently — think of it as your mini Celery or Airflow.

3. Data-Driven Insight Dashboard:  
   Use Python, Pandas, and Plotly to transform raw datasets into an interactive, analytical dashboard with automated report generation.

4. Secure Authentication System with 2FA:  
   Build a robust auth service with JWT, refresh tokens, and two-factor authentication using OTP or email verification flows.

5. Automation Agent:  
   Create a Python script that automates tedious web workflows: scraping, summarizing, and storing information intelligently.

🧭 Refined Learning Roadmaps:  
Now optimized for adaptability, from Full Stack to AI & Data Science.  
Track your progress in real time and receive insights on what to learn next.

📚 Elite Resource Vault:  
Handpicked YouTube lectures, technical blogs, and open-source repositories curated weekly for applied learning.

💡 Pro Insight:  
Projects aren’t checkboxes — they’re systems of thought.  
The harder you build, the smarter you become.

Let’s turn your curiosity into capability — one build at a time.  
Stay consistent. Stay unstoppable.

- Team OneStack
`,
};


    try {
        const info = await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};
