import React, { useState, useEffect, useRef } from 'react';
import './Countdown.css';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState('');
  const [isCountdownEnded, setIsCountdownEnded] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const targetDate = new Date('January 01, 2125 00:00:00 am');
  const timerRef = useRef(null);

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

  const stopCountdown = () => {
    setIsStopped(true);
    clearInterval(timerRef.current);
    const message = "She moved on. It's time for me to move on too.";
    const phoneNumber = "7338816479";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  useEffect(() => {
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
  }, [targetDate]);

  return (
    <section id="countdown" className="countdown-section">
      {isStopped && (
        <div className="closure-message">
          <h2>Moving Forward</h2>
          <p>
            She moved on. It’s time for me to do the same.
            This countdown once stood for undying love. But love, like time, must be allowed to change.
            Holding on to something that no longer exists doesn’t heal — it holds us back.
            So, this is me choosing growth over grief, peace over obsession, and finally, myself over pain.
            Thank you for being part of my journey. It's time I start a new chapter.
          </p>
        </div>
      )}

      {!isStopped && (
        <>
          <h2>The Countdown Ends Now</h2>
          <h3 className="countdown-note">
            Once, this clock ticked for someone I loved deeply. But she moved on — and now, so must I.
            The countdown ends, and with it, so does the waiting. It's time for healing.
          </h3>

          {!isCountdownEnded && (
            <div className="closure-message">
              <p>
                Love taught me patience, but moving on taught me strength. I was stuck in a loop of memories, hoping time would reverse itself.
                But reality is clearer now — she found her path, and it's time I find mine. This countdown was a symbol of devotion, 
                but devotion without direction becomes delusion. No regrets, just lessons. No hatred, just space.
                I’m choosing to free myself — to live, to grow, and to be whole again.
              </p>
            </div>
          )}

          {!isCountdownEnded && (
            <div className="countdown">
              <p>Time remaining until I let go completely:</p>
              <p className="time-left">{timeLeft}</p>
            </div>
          )}

          {!isCountdownEnded && (
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
                  <button onClick={stopCountdown}>Stop Countdown</button>
                </div>
              )}

              <p className="password-info">
                This isn’t weakness. It’s strength in disguise. Accepting the end is hard, but pretending there’s still hope is harder.
                If you're reading this, know that letting go isn't about forgetting — it’s about honoring the past without being trapped in it.
                I’m no longer counting the days hoping to win her back. I’m counting on myself to heal.
              </p>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Countdown;
