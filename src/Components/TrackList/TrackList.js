import './TrackList.css';
import React from 'react';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render () {
        console.log(this.props.tracks)
        const trackList = this.props.tracks.map(track => {
            return (
                <Track
                    track={track}
                    key={track.id}
                    onAdd={this.props.onAdd}
                />
            )
        });
        return (
            <div className="TrackList">
                {trackList}
            </div>
        );
    };
};

export default TrackList;