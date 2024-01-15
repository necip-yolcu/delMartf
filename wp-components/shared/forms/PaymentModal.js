import React from 'react';
import { Modal } from 'antd';
import PaymentComponent from './PaymentComponent';

const PaymentModal = ({ isVisible, handleCancel, amount, email }) => {
  return (
    <Modal
      title="Payment"
      visible={isVisible}
      onCancel={handleCancel}
      footer={null}
    >
      <PaymentComponent amount={amount} email={email} />
    </Modal>
  );
};

export default PaymentModal;