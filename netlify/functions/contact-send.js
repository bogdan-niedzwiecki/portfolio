exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const serviceId = process.env.EMAIL_SERVICE_ID;
    const templateId = process.env.EMAIL_TEMPLATE_ID;
    const publicKey = process.env.EMAIL_PUBLIC_KEY;
    const privateKey = process.env.EMAIL_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing EmailJS configuration" }),
      };
    }

    const body = JSON.parse(event.body || "{}");
    const userName = body.user_name;
    const userEmail = body.user_email;
    const userMessage = body.user_message;

    if (!userName || !userEmail || !userMessage) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: {
        user_name: userName,
        user_email: userEmail,
        user_message: userMessage,
      },
    };

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: errorText || "EmailJS error" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal error" }),
    };
  }
};
