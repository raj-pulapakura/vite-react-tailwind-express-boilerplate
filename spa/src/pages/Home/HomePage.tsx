import axios from 'axios';
import { useState, useEffect } from 'react';

export default function HomePage() {
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        axios.get("api/").then(response => {
            setMessage(response.data);
        });
    }, []);

    return (
        <div>
            <h1 className="text-blue-700">Home</h1>
            <p><strong>Message from server:</strong> {message}</p>
        </div>
    )
}
