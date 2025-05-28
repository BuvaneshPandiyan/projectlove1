import React, { useState, useEffect, useRef } from 'react';
import './Countdown.css';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState('');
  const [isCountdownStarted, setIsCountdownStarted] = useState(false);
  const [isCountdownEnded, setIsCountdownEnded] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const targetDate = new Date('January 01, 2125 00:00:00');
  const timerRef = useRef(null);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === 'startlove') {
      setIsPasswordCorrect(true);
      setIsCountdownStarted(true);
    } else {
      alert('Incorrect password!');
    }
  };

  const stopCountdown = () => {
    setIsStopped(true);
    clearInterval(timerRef.current);

    // Optional WhatsApp message
    const message = "Dai nanum onna love panran";
    const phoneNumber = "7338816479";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  useEffect(() => {
    if (!isCountdownStarted || isStopped) return;

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft('');
        setIsCountdownEnded(true);
        clearInterval(timerRef.current);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
      );
    };

    timerRef.current = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timerRef.current);
  }, [isCountdownStarted, isStopped]);

  return (
    <section id="countdown" className="countdown-section">
      {!isCountdownStarted && !isStopped && (
        <div className="password-section">
          <h2>Enter Password to Begin Countdown</h2>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
          />
          <button onClick={handlePasswordSubmit}>Submit Password</button>
        </div>
      )}

      {isCountdownStarted && !isStopped && (
        <>
          <h2>The Countdown</h2>
          <h3 className="countdown-note">
            100 years might be a long time, but don’t worry I’m in no rush.
          </h3>

          {!isCountdownEnded && (
            <div className="my-promise">
              <p>
                You thought I would stop loving you...<br />
                You thought, "Oh, he’ll give up eventually." Well, surprise! I'm not going anywhere. I set this countdown for 100 years hoping you'd come back. But I realize now, I never should have put this much effort trying to make you mine.
              </p>
              <p>
                I started this countdown hoping you would realize how much I love you and come back to me, but I was wrong. You've already made your decision, so there’s no point in trying. I can't talk about this, which is why I'm making these changes in this website.
              </p>
              <p>
                Drink all you want, smoke all you want, spoil your health—I don’t care anymore.
              </p>
              <p>
                I have waited for a long time. I can’t wait anymore. You have lost a nice guy who loved you for who you are. You will regret this in the future.
              </p>
              <p>
                It’s time for me to move on, and I’m not going to waste any more time on you. I know you already moved on. It’s easy for you to jump from one person to another—it’s not the same for me. I realized waiting for you doesn’t make any sense anymore. So, this is my final goodbye.
              </p>
            </div>
          )}

          {!isCountdownEnded && (
            <div className="countdown">
              <p>Countdown to the last day:</p>
              <p className="time-left">{timeLeft}</p>
            </div>
          )}

          {!isCountdownEnded && (
            <div className="password-section">
              <button className="stop-countdown-button" onClick={stopCountdown}>
                Stop Countdown
              </button>
            </div>
          )}
        </>
      )}

      {isStopped && (
        <div className="closure-message">
          <h2>The Countdown Has Stopped</h2>
          <p>
            I have waited for a long time. I can’t wait anymore. You have lost a nice guy who loved you for who you are. You will regret this in the future.
          </p>
          <p>
            It’s time for me to move on and I am not going to waste any more time on you. I know you already moved on. It’s easy for you to jump from one person to another. It’s not the same for me.
          </p>
          <p>
            I realized waiting for you doesn’t make any sense anymore. So this is my final goodbye. Drink all you want, smoke all you want, spoil your health—I don’t care anymore.
          </p>
          <p>
            I started this countdown hoping you would realize how much I love you and come back to me. But I was wrong. I never should’ve put in the effort to make you mine. You already made your decision. There’s no point in trying. I can’t talk about this—that’s why I made changes to this website.
          </p>
        </div>
      )}
    </section>
  );
}

export default Countdown;
