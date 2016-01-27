'use strict';
import React, {
    Component,
    Image,
    Text,
    View
    } from 'react-native';

export class Movie extends Component {
    render() {
        return (
            <View style={this.props.movieStyles}>
                <Image
                    source={{uri: this.props.movie.posters.thumbnail}}
                    style={this.props.imageStyles}
                    />
                <View style={this.props.movieDescriptionStyles}>
                    <Text style={this.props.movieTitleStyles}>{this.props.movie.title}</Text>
                    <Text style={this.props.movieYearStyles}>{this.props.movie.year}</Text>
                </View>
            </View>
        );
    }
}
