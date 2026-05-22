export async function GET() {
  return Response.json(
    {
      name: "Murale Manohar",
      role: "Backend Software Engineer",
      company: "Zoho Corporation",
      experience_yrs: 3,
      stack: ["Java", "Spring Boot", "Kafka", "MySQL", "Next.js"],
      side_project: {
        name: "Packlio",
        url: "packlio.app",
        desc: "AI-powered listing generator",
      },
      location: "India",
      open_to_work: true,
    },
    {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Powered-By": "Spring-Boot",
      },
    }
  );
}
