import React, { useState, useEffect, useRef } from 'react';
import './Countdown.css';

function Countdown() {
  const [timeLeft, setTimeLeft] = useState('');
  const [isCountdownEnded, setIsCountdownEnded] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  // Set the target date to January 1, 2125 (100 years from January 1, 2025)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const targetDate = new Date('January 01, 2125 00:00:00 am');
  
  // Use useRef to store the timer ID
  const timerRef = useRef(null);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordSubmit = () => {
    if (password === 'ihavefeelings') {
      setIsPasswordCorrect(true);
    } else {
      alert('Incorrect password!');
    }
  };

  const stopCountdown = () => {
    setIsStopped(true);
    clearInterval(timerRef.current); // Stop the countdown timer
    // Send WhatsApp message when countdown is stopped
    const message = "Dai nanum onna love panran";
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
        clearInterval(timerRef.current); // Ensure cleanup on countdown end
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

    // Set the interval and store it in the ref
    timerRef.current = setInterval(updateCountdown, 1000);

    updateCountdown(); // Initial call to display immediately

    // Cleanup on component unmount or countdown end
    return () => clearInterval(timerRef.current);
  }, [targetDate]);

  return (
    <section id="countdown" className="countdown-section">
      {/* Only show the message when countdown is stopped */}
      {isStopped && (
        <div className="closure-message">
          <h2>The Start Of Something Beautiful</h2>
          <p>
            Well, look who cracked the code! Guess what? You’ve just unlocked my heart (and maybe some hilarious moments ahead). But seriously, this is only the beginning. I can’t wait to write more chapters with you—filled with love, laughter, and maybe a little bit of chaos (because, well, that’s how we roll).
            So, let’s make this journey unforgettable. Let’s keep surprising each other, laughing until our cheeks hurt, and creating memories we’ll talk about forever. Are you ready to dive in? I know I am. ❤️
          </p>
        </div>
      )}

      {/* Show the rest of the content only when countdown is not stopped */}
      {!isStopped && (
        <>
          <h2>The Countdown</h2>
          <h3 className="countdown-note">
            100 years might be a long time, but don’t worry I’m in no rush. So, while we’re counting down, let’s make sure you never forget how incredible you are. And if I ever stop loving you, I guess I’ll be the first person in history to do it, because you’re just too hot to forget. 😎🔥
          </h3>

          {/* My Promise Section */}
          {!isCountdownEnded && (
            <div className="my-promise">
              <p>
                You thought I would stop loving you...<br />
                You thought, "Oh, he’ll give up eventually. He'll forget about me." Well, surprise! I'm not going anywhere. In fact, I’ve set a countdown for 100 years because, let’s face it, if I’m still holding onto these feelings after all this time, you’ll just have to accept it.
                And here’s the truth: I’ll love you for every one of those 100 years and more. I know, I know, you're probably rolling your eyes thinking, “This guy just won’t quit." Well, guess what? I can’t. It's like I’m stuck in this romantic loop, and I’m okay with it. Whether you want me around or not, you’ll always have a fan cheering you on from a distance. Every laugh, every tear, every memory no matter how small will stay with me.
              </p>
            </div>
          )}

          {/* Countdown Section */}
          {!isCountdownEnded && (
            <div className="countdown">
              <p>Countdown to the last day:</p>
              <p className="time-left">{timeLeft}</p>
            </div>
          )}

          {/* Password input and Stop Countdown button */}
          {!isCountdownEnded && (
            <div className="password-section">
              {!isPasswordCorrect ? (
                <div>
                  <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter password"
                  />
                  <button onClick={handlePasswordSubmit}>Submit Password</button>
                </div>
              ) : (
                <div>
                  <button onClick={stopCountdown}>Stop Countdown</button>
                </div>
              )}

              {/* Add the romantic and funny text under the password input */}
              <p className="password-info">
                I bet you didn’t expect this when we first met. You didn’t sign up for this kind of dedication, but here we are. You thought I’d move on after all the drama, but I didn’t. It’s not that easy to forget someone who’s made such a huge impact. And I’m not going to let the challenges get in the way of this feeling that refuses to fade. If nothing else, this is my personal challenge to see just how long I can keep this up. Call it stubbornness, call it passion, I call it love.
                And hey, if 100 years isn’t enough, I’ve got eternity to work with. You may not always see it, but I’ll always care. So, whether you're close or far away, my love isn’t going anywhere. You’ve got me for the long haul, and I don’t plan on leaving anytime soon.
              </p>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default Countdown;
