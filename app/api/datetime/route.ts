const GET = async () => {
    const response = await fetch('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata');
    const data = await response.json();
    return Response.json(data);
}

export { GET }