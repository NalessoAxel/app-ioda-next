import { useEffect, useState } from 'react';

const nearestIndex = (
	currentPosition,
	sectionPositionsArr,
	startIndex,
	endIndex
) => {
	if (startIndex === endIndex) {
		return startIndex;
	} else if (startIndex === endIndex - 1) {
		if (
			Math.abs(
				sectionPositionsArr[startIndex].headerRef.current.offsetTop -
					currentPosition
			) <
			Math.abs(
				sectionPositionsArr[endIndex].headerRef.current.offsetTop -
					currentPosition
			)
		)
			return startIndex;
		else return endIndex;
	} else {
		const nextNearest = ~~((startIndex + endIndex) / 2);
		let a = Math.abs(
			sectionPositionsArr[nextNearest].headerRef.current.offsetTop -
				currentPosition
		);
		let b = Math.abs(
			sectionPositionsArr[nextNearest + 1].headerRef.current.offsetTop -
				currentPosition
		);
		if (a < b) {
			return nearestIndex(
				currentPosition,
				sectionPositionsArr,
				startIndex,
				nextNearest
			);
		} else {
			return nearestIndex(
				currentPosition,
				sectionPositionsArr,
				nextNearest,
				endIndex
			);
		}
	}
};

const ScrollHighLightNav = ({ navBarItem }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const handleScroll = (e) => {
            const index = nearestIndex(
                window.scrollX,
                navBarItem,
                0,
                navBarItem.length - 1
            );
            document.addEventListener('scroll', handleScroll);
            return () => {
                document.removeEventListener('scroll', handleScroll);
            }

        }
    }, [navBarItem]);
    return (
        