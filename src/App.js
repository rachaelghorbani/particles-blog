import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import undraw_welcome_cats_thqn from './undraw_welcome_cats_thqn.svg'

function App() {
	return (
		<div
		// id="container"
		>
			<div>
				<div className="scale-in-center" id="welcome">
                    <img src={undraw_welcome_cats_thqn}/>
					
				</div>
				<Particles
					id="particles-js"
					params={{
						particles: {
							number: {
								value: 200,
								density: {
									enable: true,
									value_area: 1000
								}
							},
							color: {
								value: '#fff'
							},
							opacity: {
								value: 0.5,
								//opacity changes (blinking)
								anim: {
									enable: true
								}
							},
							size: {
								value: 10,
								random: true,
								//size changes (smaller and larger)
								anim: {
									enable: true,
									speed: 1
								}
							},
							line_linked: {
                                enable: true,
                                distance: 100
							},
							move: {
								// enable: false,
								speed: 1
							}
						},
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: 'repulse'
								}
							},
							modes: {
								repulse: {
									distance: 100
								}
							}
						}
					}}
				/>
			</div>
		</div>
	);
}

export default App;
