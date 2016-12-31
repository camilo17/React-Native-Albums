import React , {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import Card from './Card';
import CardSectioin from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSectioin>
                <Text>{props.album.title}</Text>
            </CardSectioin>
        </Card>
    )
};

export default AlbumDetail;