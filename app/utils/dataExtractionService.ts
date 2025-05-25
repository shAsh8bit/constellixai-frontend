

export async function extractData(markdown: string, query: string, apiKey: string): Promise<string | null> {
    try {
        const backendUrl = process.env.NEXT_PUBLIC_EXTRACT_DATA_URL;
        const response = await fetch(`${backendUrl}`, {
            method: 'POST',
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