import React from 'react';
import './App.css';
import { SoundboardEntryComponent } from './components/soundboard-entry.component';
import sounds from './sounds.json';

function App() {
  return (
  	<div>
	    <header>
		    <h1 className="title">
			    Team blue sound board
		    </h1>
	    </header>
	    <div className="sound-board">
		    {
		        sounds.map(
				    (sound, i) => (
				        <span
						    className={'sound-board__item sound-board__item--' + ((i % 4) + 1)}
						    key={'sound-board__item--' + i}>

			                <SoundboardEntryComponent
							    {...sound}>
						    </SoundboardEntryComponent>
					    </span>
				    )
			    )
		    }
	    </div>
    </div>
  );
}

export default App;
