import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (_, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Beautiful Backend</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          background: linear-gradient(to right, #667eea, #764ba2);
          color: #fff;
        }
        header {
          background-color: rgba(0, 0, 0, 0.2);
          padding: 30px 0;
          text-align: center;
        }
        header h1 {
          font-size: 3rem;
        }
        section {
          padding: 60px 20px;
          max-width: 900px;
          margin: auto;
        }
        .hero {
          text-align: center;
        }
        .hero p {
          font-size: 1.2rem;
          margin-top: 10px;
        }
        .btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 24px;
          font-size: 1rem;
          color: #764ba2;
          background: #fff;
          border-radius: 30px;
          text-decoration: none;
          transition: background 0.3s ease;
        }
        .btn:hover {
          background: #eee;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        .feature-card {
          background-color: rgba(255, 255, 255, 0.1);
          padding: 20px;
          border-radius: 15px;
          text-align: center;
        }
        .feature-card h3 {
          margin-bottom: 10px;
        }
        footer {
          background-color: rgba(0, 0, 0, 0.2);
          text-align: center;
          padding: 30px 0;
          margin-top: 60px;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>🚀 My Beautiful Backend Application</h1>
        <p>A fully working backend with Node.js + TypeScript + Express</p>
      </header>

      <section class="hero">
        <h2>Welcome to the Future of Backend Development</h2>
        <p>This app is built with love using modern technologies like TypeScript and Express.</p>
        <a class="btn" href="/api">Try the API</a>
      </section>

      <section>
        <h2>💡 Why Use This Backend?</h2>
        <div class="features">
          <div class="feature-card">
            <h3>⚡ Fast</h3>
            <p>Built on Express and optimized for performance.</p>
          </div>
          <div class="feature-card">
            <h3>🧠 Type Safe</h3>
            <p>Using TypeScript ensures fewer bugs and better development experience.</p>
          </div>
          <div class="feature-card">
            <h3>📦 Modular</h3>
            <p>Organized and clean code structure ready to scale.</p>
          </div>
          <div class="feature-card">
            <h3>🔐 Secure</h3>
            <p>Set up for adding CORS, rate-limiting, Helmet, and more.</p>
          </div>
          <div class="feature-card">
            <h3>📤 API Ready</h3>
            <p>RESTful structure makes integration with frontend seamless.</p>
          </div>
          <div class="feature-card">
            <h3>🌍 Deployed Anywhere</h3>
            <p>Docker-ready and deployable on Vercel, Render, Railway, or DigitalOcean.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 My Backend App. Built with ❤️ using Node.js & TypeScript.</p>
      </footer>
    </body>
    </html>
  `);
});

app.get("/api", (_, res) => {
  res.json({
    message: "✅ Backend is working perfectly!",
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
