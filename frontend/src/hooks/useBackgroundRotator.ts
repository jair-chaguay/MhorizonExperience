import {useState, useEffect} from 'react';

export const useBackgroundRotator = (images: string[], intervalMs: number = 4000) =>{
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(()=>{
        if(!images || images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, intervalMs);

        return () => clearInterval(interval);
    }, [images, intervalMs]);

    return images[currentIndex];
}