import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import Tweet from '../components/Tweet';
import api from "../services/api";

export default class Timeline extends Component {
	// Configurações do App
	static navigationOptions = ({ navigation }) => ({
		title: "Início",
		headerRight: (
			<TouchableOpacity onPress={() => navigation.navigate('New')}>
				<Icon 
					style={{ marginRight: 10 }}
					name="add-circle-outline" 
					size={24} 
					color="#4BB0EE" 
				/>
			</TouchableOpacity>
		)
	});

	state = {
		tweets: []
	};

	async componentDidMount() {
		const response = await api.get('tweets');

		this.setState({
			tweets: response.data
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.tweets}
					keyExtractor={tweet => tweet._id}
					renderItem={({ item  }) => <Tweet key={item._id} tweet={item}/>} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFF"
	}
});
