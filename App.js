import _ from 'lodash';
import React, {Component} from 'react'
import {
  Text,
  View,
  FlatList,
} from 'react-native'
import Section from './src/Section';
import SearchInput from './src/SearchInput';
import data from './fixtures';

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
      searchText: '',
    }
  }
  componentDidMount() {
    this.setState({events: data});
  }
  handleChange = searchText => {
    this.setState({searchText});
    if(searchText.length) {
      this.filterSectionItems(searchText);
    } else {
      this.setState({events: data});
    }
  }
  filterSectionItems = searchText => {
    this.setState(() => {
      const filteredEvents = {};
      _.each(data, (item, key) => {
        const {title} = item;
        const text = _.toLower(searchText);
        const target = _.toLower(title);
        const match = target.indexOf(text) >= 0;
        if(match) {
          filteredEvents[key] = item;
        }
      });
      return {
       events: filteredEvents
      }
     });
  }
  render() {
    const {
      events,
      searchText
    } = this.state;
    if(!events) {
      return <View><Text>Список не загружен</Text></View>;
    }
    const groups = _.groupBy(events, (value, key) => _.toLower(value.title[0]));
    const sections = _.map(groups, (value, key) => ({title: _.toUpper(key), data: value}));
    return (
      <View style={{padding: 30}}>
        <SearchInput
          searchText={searchText}
          handleChange={this.handleChange}
        />
        <FlatList
          data={sections}
          renderItem={({item: {data, title}, key}) => <Section data={data} title={title} key={key}/>}
        />
      </View>
    )
   }
}
