import React from 'react';
import { AUREBESH } from './AurebeshAlphabet';

const Aurebesh = () => {
	const keys = Object.keys(AUREBESH);

	const svgComponents = keys.map((key) => {
		const { icon: SvgComponent, string } = AUREBESH[key];
		return (
			<div key={key} className="p-2 text-center border-2 rounded-sm border-neutral-200">
				{' '}
				<SvgComponent className="w-6 h-6" />
				<span>{string}</span>
			</div>
		);
	});

	return (
		<div>
			<h2>Aurebesh Alphabet</h2>
			<div className="flex flex-wrap gap-2">{svgComponents}</div>
		</div>
	);
};

export default Aurebesh;
