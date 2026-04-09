exports.handler = async () => {
  try {
    const token = process.env.NETLIFY_ACCESS_TOKEN;

    if (!token) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing NETLIFY_ACCESS_TOKEN" }),
      };
    }

    const res = await fetch("https://api.netlify.com/api/v1/sites", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: "Netlify API error" }),
      };
    }

    const data = await res.json();

    const sites = (data || [])
      .filter((site) => site.name !== "niedzwiecki")
      .map((site) => ({
        id: site.id,
        name: site.name,
        url: site.ssl_url || site.url,
        screenshot_url: site.screenshot_url,
        build_settings: {
          repo_url: site.build_settings?.repo_url || null,
        },
        caption: (site.name || "").replace("bn-", "").replaceAll("-", " "),
      }));

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sites }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal error" }),
    };
  }
};
