import React from 'react';
import { CipherSettingsContext } from '../Main';

function CipherSettings() {
	const { cipherSettings, setCipherSettings } = React.useContext(CipherSettingsContext);

	return (
		<div>
			<h2 className="">Cipher Settings</h2>
			<div className="max-w-96">
				<label className="block mb-2 text-sm font-bold" htmlFor="cipher-settings">
					Cipher Settings: {cipherSettings}
				</label>
				<input
					className="range range-primary"
					type="range"
					id="cipher-settings"
					min={-25}
					max={25}
					step="1"
					value={cipherSettings}
					onChange={(e) => {
						setCipherSettings(e.target.value);
					}}
				/>
			</div>
			<div>
				<p>
					E<sub>n</sub>(x) = (x{cipherSettings >= 0 ? '+' : ''}
					{cipherSettings}) mod 34
				</p>
			</div>
		</div>
	);
}

export default CipherSettings;
