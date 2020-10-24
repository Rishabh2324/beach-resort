import { createClient } from "contentful";

export default createClient({
    accessToken: process.env.REACT_API_ACCESS_TOKEN,
    space: process.env.REACT_API_SPACE_ID
});
