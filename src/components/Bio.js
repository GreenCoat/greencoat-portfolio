import React, {Component} from 'react';
import Links from './Links';

class Bio extends Component {
	render(){
		return (
			<div className='bio'>
				<div>
					<img src="../images/profile.jpg" alt="It was me, Nick Cunningham"></img>
				</div>
				<div>
					<p>
						I am a full stack developer with a lifelong love of design and games. I enjoy finding solutions to problems at working to make user experiences as delightful as possible.
					</p>
					<Links />
				</div>
			</div>
		);
	}
}

export default Bio;
