import { getTopTracks } from "../../lib/spotify";

export default async(req, res) => {
    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks = 

    return res.status(200).json(items);
}