export async function captureScreenshot(url: string): Promise<{screenshot: string, markdown: string} | null> {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_CAPTURE_SCREENSHOT_URL;
    const response = await fetch(`${backendUrl}`, {
      method: 'POST',
      body: JSON.stringify({ url }),
    });
    
    if (!response.ok) {
      if (response.status === 429) {
        throw new Error('TOO_MANY_REQUESTS');
      } else if (response.status === 500) {
        throw new Error('SERVER_ERROR');
      } else {
        throw new Error(`Error: ${response.status}`);
      }
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