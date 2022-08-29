import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const LoginModel = ({ setModelGet, hotelId }) => {
	return (
		<div className="reserve">
			<div className="reserve_container">
				asdas
				<FontAwesomeIcon
					icon={faCircleXmark}
					onClick={setModelGet(false)}
					className="reserver_close"
				/>
			</div>
		</div>
	);
};

export default LoginModel;
