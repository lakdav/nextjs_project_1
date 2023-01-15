import { useEffect, useState } from 'react';

function useMedia(query: string) {
	const [matches, setMatches] = useState(false);
	useEffect(() => {
		let media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		let listener = () => {
			setMatches(media.matches);
		};
		media.addEventListener('change', listener);
		return () => media.removeEventListener('change', listener);
	}, [query]);

	return matches;
}
export default useMedia;
