import React from 'react';
import { Howl } from 'howler';

type SoundboardEntryComponentProps = {
	name: string,
	url: string,
};

type SoundboardEntryComponentState = {
	playing: boolean,
};

export class SoundboardEntryComponent extends React.Component<SoundboardEntryComponentProps, SoundboardEntryComponentState> {

	public constructor(
		props: SoundboardEntryComponentProps,
	) {
		super(props);

		this.state = {
			playing: false,
		};
	}

	public render () {
		let classes: string = 'sound-button ';

		if (this.state.playing) {
			classes += 'sound-button--playing';
		}

		return (
			<button
				type="button"
				className={classes}
				onClick={this.onClick.bind(this)}>
				{this.props.name}
			</button>
		);
	}

	public onClick(): void {
		const sound: Howl = new Howl({
			src: [
				`../../../sounds/${this.props.url}`,
			]
		});

		this.setState({
			...this.state,
			playing: true,
		});

		sound.play();

		sound.once(
			'end',
			() => {
				this.setState({
					...this.state,
					playing: false,
				});
			}
		);
	}

}
