import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import './MembershipPlans.css';

const MembershipPlans = () => {
  const plans = [
    { name: 'Monthly', price: '₹1,500', period: '/month', features: ['Full gym access', 'Locker room', 'Free Wi-Fi', '1 Guest pass/month'] },
    { name: 'Quarterly', price: '₹3,500', period: '/3 months', popular: true, features: ['Full gym access', 'Locker room', 'Free Wi-Fi', '3 Guest passes/month', '1 Free PT session'] },
    { name: 'Yearly', price: '₹12,000', period: '/year', features: ['Full gym access', 'Locker room', 'Free Wi-Fi', 'Unlimited guest passes', '3 Free PT sessions', 'Merch pack'] }
  ];

  return (
    <Section id="plans" dark={false}>
      <h2>Membership <span className="text-accent">Plans</span></h2>
      <div className="plans-grid">
        {plans.map((plan, idx) => (
          <div key={idx} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <div className="plan-header">
              <h3>{plan.name}</h3>
              <div className="plan-price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
            </div>
            <ul className="plan-features">
              {plan.features.slice(0, 4).map((feat, i) => (
                <li key={i}>✓ {feat}</li>
              ))}
            </ul>
            <Button variant={plan.popular ? 'primary' : 'outline'} className="plan-btn">
              Join Now
            </Button>
          </div>
        ))}
      </div>

      <div className="comparison-table-wrapper">
        <h3 className="comparison-title">Feature Comparison</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Monthly</th>
              <th>Quarterly</th>
              <th>Yearly</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gym Access</td>
              <td>Full</td>
              <td>Full</td>
              <td>Full</td>
            </tr>
            <tr>
              <td>Locker Room</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>PT Sessions</td>
              <td>-</td>
              <td>1 Free</td>
              <td>3 Free</td>
            </tr>
            <tr>
              <td>Guest Passes</td>
              <td>1/mo</td>
              <td>3/mo</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Merch Pack</td>
              <td>-</td>
              <td>-</td>
              <td>✓</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
};

export default MembershipPlans;
