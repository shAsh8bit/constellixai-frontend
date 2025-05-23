export async function captureScreenshot(url: string): Promise<{screenshot: string, markdown: string} | null> {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const response = await fetch(`${backendUrl}/api/screenshot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url }),
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    const data = await response.json();

    if (data.screenshot) {
      return { screenshot : `data:image/png;base64,${data.screenshot}`, markdown: data.markdown};
    }
    
    return null;
  } catch (error) {
    console.error("Error capturing screenshot:", error);
    throw error;
  }
}