import { getTopTracks } from "../../lib/spotify";

export default async function(req, res) {
    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks = items.slice(0,10).map((track) => ({
        title: track.name,
        songUrl: track.external_urls.spotify,
        artist: track.artists.map(_artist => _artist.name).join(', '),
        image: track.album.images[0].url,
        preview: track.preview_url
    }));

    return res.status(200).json(tracks);
}