import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons'
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import PropTypes from 'prop-types';
import { swapCurrency, changeCurrencyAmount, getInitialConversion } from '../actions/currencies';
import { connect } from 'react-redux';
import { connectAlert } from '../components/Alert';
class Home extends Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        lastConvertedDate: PropTypes.object,
        isFetching: PropTypes.bool,
        primaryColor: PropTypes.string,
        alertWithType: PropTypes.func,
        currencyError: PropTypes.string
    }

    componentWillMount() {
        this.props.dispatch(getInitialConversion());
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currencyError && nextProps.currencyError !== this.props.currencyError) {
            this.props.alertWithType("error", "Oh my god", nextProps.currencyError)
        }

    }
    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
    }

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
    }

    handleOptionsPress = () => {
        this.props.navigation.navigate('Options');
    };

    handleChangeText = (amount) => {
        this.props.dispatch(changeCurrencyAmount(amount))
    }

    handleSwapCurrency = () => {
        this.props.dispatch(swapCurrency())
    }



    render() {
        let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
        if (this.props.isFetching === true) {
            quotePrice = "..."
        }

        return (
            <Container backgroundColor={this.props.primaryColor}>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header onPress={this.handleOptionsPress} />
                <KeyboardAvoidingView behavior='padding'>
                    <Logo tintColor={this.props.primaryColor} />
                    <InputWithButton
                        buttonText={this.props.baseCurrency}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={this.props.amount.toString()}
                        keyboardType="numeric"
                        onChangeText={this.handleChangeText}
                        textColor={this.props.primaryColor}
                    />
                    <InputWithButton
                        buttonText={this.props.quoteCurrency}
                        onPress={this.handlePressQuoteCurrency}
                        defaultValue={quotePrice}
                        editable={false}
                        textColor={this.props.primaryColor}
                    />
                    <LastConverted base={this.props.baseCurrency} quote={this.props.quoteCurrency} date={this.props.lastConvertedDate} conversationRate={this.props.conversionRate} />
                    <ClearButton text="Reverse Currencies" onPress={this.handleSwapCurrency} />
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};

    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        conversionRate: rates[quoteCurrency] || 0,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
        isFetching: conversionSelector.isFetching,
        primaryColor: state.theme.primaryColor,
        currencyError: state.currencies.error
    }
}

export default connect(mapStateToProps)(connectAlert(Home));