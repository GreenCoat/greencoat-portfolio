import React, {Component} from 'react';
import Links from './Links';
import profile from '../images/profile.jpg';

class Bio extends Component {
	render(){
		return (
			<div className='bio row'>
				<div className='left-col'>
					<img src={profile} alt="It was me, Nick Cunningham"></img>
				</div>
				<div className='right-col'>
					<p>
						I am a full stack developer with a lifelong love of design and games. I enjoy finding solutions to problems at working to make user experiences as delightful as possible.
						Get in contact with me through the links below or check out some of the work I've done with the links at the bottom.
					</p>
					<Links />
				</div>
			</div>
		);
	}
}

export default Bio;
