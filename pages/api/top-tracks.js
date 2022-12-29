import { getTopTracks } from "../../lib/spotify";

export default async(req, res) => {
    const response = await getTopTracks();
    const items = await response.json();

    console.log(items);
}