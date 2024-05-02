interface DeviceProps {
	bgImage: string;
	image: string;
	bgCn: string;
	cn: string;
}

const Device = ({ bgImage, image, bgCn, cn }: DeviceProps) => {
    return (
		<div className="hidden lg:block">
			<img src={bgImage} className={`${bgCn} overflow-hidden`} />
			<img loading="lazy" src={image} className={`${cn} overflow-hidden`} />
		</div>
	);
}

export default Device;