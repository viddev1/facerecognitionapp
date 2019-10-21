import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm =() => {
	return (
		<div className = 'ma4 mt0'>
			<p className = 'f3'>
				{'This Magic Face Recognition app will detect faces in your pictures. Give it a shake!!'}
			</p>
			<div className='center'>
			<div className= 'form center pa4 br3 shadow-3'>
					<input className='f4 pa2 w-70 center' type='text' />
					<button className= 'w-30 grow f4 link ph3 pv2 dib white bg-silver'> Detect </button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;