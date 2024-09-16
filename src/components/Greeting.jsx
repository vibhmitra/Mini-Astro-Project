import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
    const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div style="background-color: #4d1d9515; border-radius: 0.75em; padding: 0.5rem; text-align: center;">
            <button onClick={() => setGreeting(randomMessage())} style="color: #4c1d95; padding: 0.5rem 0.5rem; font-size: 1rem; font-weight: bold; border-radius: 0.75rem;">
                👉 PRESS ME! 👈
            </button>
            <p style="margin-bottom: 0;font-size: 1rem; display: block; padding: 0.5rem; background-color: #fff78070; border-radius: 0.75rem; color: black; font-weight: bold;">
                {greeting}! Ty for visiting my Island! <span style="font-family: 'Segoe UI Emoji'; background-color: white;">🏝</span>
            </p>
        </div>
    );
}
