import axios from 'axios';
import { useState, useEffect } from 'react';

export default function HomePage() {
    const [message, setMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            axios.get("/api").then(response => {
                setMessage(response.data);
            });
            setLoading(false);
        }, 1000)
    }, []);

    return (
        <div>
            <h1 className="text-blue-700">Home</h1>
            <p><strong>Message from server:</strong> {loading ? "Loading..." : message} </p>
        </div>
    )
}
