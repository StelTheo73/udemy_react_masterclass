import { useEffect, useRef, useState } from 'react';

export const useFetch = (url, _body={}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    // Use an object as Reference,
    // otherwise the page will keep reloading for ever
    const body = useRef(_body);

    useEffect(() => {
        const controller = new AbortController()

        const fetchData = async () => {
            setLoading(true);

            try {
                const response = await fetch(url,
                    {signal: controller.signal});
                if (!response.ok) {
                    throw new Error("Fetch failed");
                }

                // Use object
                // console.log(body);

                const data = await response.json();
                setLoading(false);
                setError("");
                setData(data);
            }
            catch (error) {
                setLoading(false);
                setError(error.message);
            }

        }
        fetchData();

        // return () => controller.abort();
    }, [url, body]);

    return { data, loading, error };
}
