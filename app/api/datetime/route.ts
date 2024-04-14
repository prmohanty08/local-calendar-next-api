import { unstable_noStore as noStore } from "next/cache";

const GET = async () => {
    noStore();
    const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata');
    const data = await response.json();
    return Response.json(data);
}

export { GET }