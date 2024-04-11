"use client";

const ScrollTopArrow = () => {
	return (
		<div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="absolute  bottom-[93px] cursor-pointer right-4 z-[40]">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
				<path d="M16 32C7.16343 32 0 24.8366 0 16C0 7.16343 7.16343 0 16 0C24.8366 0 32 7.16343 32 16C32 24.8366 24.8366 32 16 32ZM16 8.99179L6.99154 17.9709L8.48098 19.4653L16 11.9707L23.519 19.4653L25.0085 17.9709L16 8.99179Z" fill="white" />
			</svg>
		</div>
	);
};

export default ScrollTopArrow;