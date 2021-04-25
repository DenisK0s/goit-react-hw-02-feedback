// модули
import React, { Component } from 'react';

// компоненты
import Statistics from '../components/Statistics';
import FeedbackOptions from '../components/FeedbackOpt';
import Button from '../components/Utils/Button';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleClick = event => {
    const currentActiveBtnId = event.target.id;

    this.setState(prevState => {
      if (currentActiveBtnId === 'good') {
        return { good: prevState.good + 1 };
      }
      if (currentActiveBtnId === 'neutral') {
        return { neutral: prevState.neutral + 1 };
      }
      if (currentActiveBtnId === 'bad') {
        return { bad: prevState.bad + 1 };
      }
    });
  };

  resetStatistics = () => {
    this.setState({ ...INITIAL_STATE });
  };

  countTotalFeedback = items => {
    const arrOfValues = Object.values(items);
    const total = arrOfValues.reduce((acc, value) => acc + value, 0);
    return total;
  };

  countPositiveFeedbackPercentage = (value, amount) =>
    Math.floor((value * 100) / amount);

  render() {
    const { good, neutral, bad } = this.state;
    const FeedbackOptionsArr = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback(this.state);
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      good,
      totalFeedback,
    );

    return (
      <>
        <FeedbackOptions
          options={FeedbackOptionsArr}
          onLeaveFeedback={this.handleClick}
        />
        ,
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={PositiveFeedbackPercentage}
        />
        ,<Button onReset={this.resetStatistics}>Clear feedback</Button>
      </>
    );
  }
}

export default App;
