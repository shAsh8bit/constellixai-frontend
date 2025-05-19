

export async function extractData(markdown: string, query: string, apiKey: string): Promise<string | null> {
    try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
        const response = await fetch(`${backendUrl}/api/get-data`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ markdown, query, apiKey }),
        });
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        return data.extractedData;
    } catch (error) {
        console.error('Failed to extract data', error);
        throw error;
    }
}