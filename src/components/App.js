// модули
import React, { Component } from 'react';

// компоненты
import Statistics from '../components/Statistics';
import FeedbackOptions from '../components/FeedbackOpt';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedbackPercentage: 0,
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

  countTotalFeedback = items => {
    const arrOfValues = Object.values(items);
    const total = arrOfValues.reduce((acc, value) => acc + value, 0);
    return total;
  };

  countPositiveFeedbackPercentage = (value, amount) => (value * 100) / amount;

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback(this.state);
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage(
      good,
      totalFeedback,
    );

    return (
      <>
        <FeedbackOptions onLeaveFeedback={this.handleClick} />,
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={PositiveFeedbackPercentage}
        />
      </>
    );
  }
}

export default App;
