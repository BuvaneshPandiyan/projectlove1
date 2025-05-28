import React, { useState } from 'react';
import './Countdown.css';

function Countdown() {
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === 'immovingon') {
      setIsPasswordCorrect(true);
    } else {
      alert('Incorrect password!');
    }
  };

  const stopMessage = () => {
    setIsStopped(true);
    const message = "She moved on. It's time for me to move on too.";
    const phoneNumber = "7338816479";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="countdown" className="countdown-section">
      {isStopped ? (
        <div className="closure-message">
          <h2>You Won.</h2>
          <p>
            You walked away. You chose silence. And maybe for you, that was victory.
            <br /><br />
            But in winning, you lost something rare — a man who would’ve stayed no matter the storms. A nice guy, in a world that doesn't have many left.
            <br /><br />
            I loved you with everything I had. I held on when I should’ve let go. I believed in “us” even when there was no sign of “we” in your eyes anymore.
            <br /><br />
            But I’m done now. I’m done waiting for a heart that stopped beating for me.
            <br /><br />
            So here’s your win. I let go.
          </p>
        </div>
      ) : (
        <>
          <h2>The Countdown Is Over</h2>
          <h3 className="countdown-note">
            I was holding on to hope. But hope doesn’t hold you back — pain does.
          </h3>

          <div className="closure-message">
            <p>
              No more clocks. No more waiting. No more pretending that maybe one day you’d come back.
              <br /><br />
              I gave my love freely, genuinely, fully. You left anyway.
              <br /><br />
              And that’s okay now. Because I’ve finally realized — letting go isn’t losing. It’s choosing peace over pain, dignity over desperation.
            </p>
          </div>

          <div className="password-section">
            {!isPasswordCorrect ? (
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter password to move on"
                />
                <button onClick={handlePasswordSubmit}>Submit Password</button>
              </div>
            ) : (
              <div>
                <button className="stop-countdown-button" onClick={stopMessage}>
                  Let Go
                </button>
              </div>
            )}
            <p className="password-info">
              This isn’t weakness. It’s closure. It’s courage. It’s self-respect.
              <br />
              And one last time — You won.
              <br />
              But you lost a nice guy.
            </p>
          </div>
        </>
      )}
    </section>
  );
}

export default Countdown;
