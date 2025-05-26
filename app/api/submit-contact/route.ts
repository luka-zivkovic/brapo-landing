import { NextRequest, NextResponse } from 'next/server';

/**
 * API route that proxies contact form submissions to n8n
 * This avoids CORS issues by having the server make the request to n8n
 */
export async function POST(request: NextRequest) {
  try {
    // Get the webhook URL from environment variables
    const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    
    if (!n8nWebhookUrl) {
      return NextResponse.json(
        { error: 'N8N webhook URL not configured' },
        { status: 500 }
      );
    }

    // Get the form data from the request
    const formData = await request.json();
    
    // Forward the request to n8n
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        // Add any additional metadata you want to include
        submittedFromProxy: true,
        timestamp: new Date().toISOString()
      }),
    });

    // Check if the request was successful
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error submitting to n8n:', errorText);
      return NextResponse.json(
        { error: 'Failed to submit to external service' },
        { status: response.status }
      );
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in submit-contact API route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
