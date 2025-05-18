

export async function extractData(markdown: string, query: string, apiKey: string): Promise<string | null> {
    try {
        const response = await fetch('http://localhost:3001/api/get-data', {
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