import React from 'react';
import { Text } from 'react-native';
import moment from 'moment';
import styles from './styles';
import PropTypes from 'prop-types';

const LastConverted = ({ base, quote, conversationRate, date }) => (
    <Text style={styles.smallText}>
        1 {base} = {conversationRate} {quote} as of {moment(date).format('MMMM D, YYYY')}
    </Text>

)

LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversationRate: PropTypes.number
}
export default LastConverted;