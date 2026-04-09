exports.handler = async () => {
  try {
    const token = process.env.VERCEL_ACCESS_TOKEN;

    if (!token) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing VERCEL_ACCESS_TOKEN" }),
      };
    }

    const res = await fetch("https://api.vercel.com/v9/projects", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: "Vercel API error" }),
      };
    }

    const data = await res.json();

    const projects = (data.projects || []).map((project) => {
      const alias = project.latestDeployments?.[0]?.alias?.[0];
      const fallback = project.latestDeployments?.[0]?.url;
      const deploymentUrl = alias || fallback || null;

      return {
        id: project.id,
        name: project.name,
        url: deploymentUrl
          ? deploymentUrl.startsWith("http")
            ? deploymentUrl
            : `https://${deploymentUrl}`
          : null,
        repo_url:
          project.link?.org && project.link?.repo
            ? `https://github.com/${project.link.org}/${project.link.repo}`
            : null,
        caption: (project.name || "").replaceAll("-", " "),
      };
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projects }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal error" }),
    };
  }
};
