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
                    <img src={undraw_welcome_cats_thqn} alt="welcome cats"/>
					
				</div>
				<Particles
					id="particles-js"
					params={{
						particles: {
							number: {
								value: 400,
								density: {
									enable: true,
									value_area: 1000
								}
                            },
                            // image: {
                            //     src: star,
                            //     width: 100,
                            //     height: 100
                            //   },
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
								value: 7,
								random: true,
								//size changes (smaller and larger)
								anim: {
									enable: true,
									speed: 3
								}
                            },
                           
							line_linked: {
                                enable: false,
							},
							move: {
								// enable: false,
								speed: 0.2
							}
                        },
					}}
				/>
			</div>
		</div>
	);
}

export default App;
