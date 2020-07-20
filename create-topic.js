const AWS = require('aws-sdk');
const sns = new AWS.SNS({ region: '' });

const Name = '';

(async () => {
  const params = {
    Name,
    Attributes: {
      DisplayName: 'New client signups',
    },
  };

  try {
    const response = await sns.createTopic().promise();
    console.log({ response });
  } catch (error) {
    console.log('Error creating topic: ', error);
  }
})();
