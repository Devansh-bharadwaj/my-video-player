// "use-client"
import axios from "axios";

export const handleFetchVideos = async (setVideos: any, setAllVideos: any, setLoading: any) => {
    try {
        const res = await axios.get("/api/videos");
        setVideos(res.data)
        setAllVideos(res.data)
        setLoading(false);
    } catch (error) {
        console.error("Error saving Videos data:", error);
    }
};