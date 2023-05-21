import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Toy Tronic | ${title}`;
    }, [title]);
};

export default useTitle;
