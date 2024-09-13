import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div style="background-color: #4d1d9515; border-radius: 0.75em;">
      <button onClick={() => setGreeting(randomMessage())} style="margin: 0.5rem;padding: 0.2rem 2rem; font-size: 1rem; font-weight: bold; border-radius: 0.75em;">
        Click ME!
      </button>
      <h3 style="font-size: 1rem; display: inline; padding: 0.5rem; background-color: #fff78070; border-radius: 0.75em; color: black;" >{greeting}!  Ty for visiting my Island! <span style="font-family: 'Segoe UI Emoji';">🏝</span></h3>
    </div>
  );
}
