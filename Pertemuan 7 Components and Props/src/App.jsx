import { useState } from "react";
import Card from "./Card";
import Login from "./Login";
import { artist } from "./artist";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="app-container">
      {/* Decorative Glowing Blobs */}
      <div className="glow-bg">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {!isLoggedIn ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <div className="dashboard-container">
          {/* Header */}
          <header className="dashboard-header">
            <div className="user-profile">
              <div className="user-details">
                <h2>Welcome Back</h2>
                <p>Premium Listener</p>
              </div>
            </div>
            <button className="btn-logout" onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          </header>

          {/* Title and Intro */}
          <div className="dashboard-title">
            <h1>My Favorite Artists</h1>
            <p>
              Your curated collection of top-performing musicians and awards
            </p>
          </div>

          {/* Cards Grid */}
          <div className="card-grid">
            {artist.map((item) => (
              <Card
                name={item.name}
                image={item.image}
                description={item.description}
                awards={item.awards}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
