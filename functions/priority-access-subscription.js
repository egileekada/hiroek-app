import axios from 'axios';

exports.handler = async (event, context) => {
  const listId = '70320f2646';
  const apiKey = 'c831dbc817ef5c63a9adee0dfa98c669-us18';
  const body = JSON.parse(event.body);
  const { email_address } = body;

  if (!email_address) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Please provide an email address.' }),
    }
  }

  try {
    const payload = {
      email_address,
      status: 'subscribed',
    }
    const { data } = await axios.post(`https://us6.api.mailchimp.com/3.0/lists/${listId}/members`, payload, {
      headers: {
        Authorization: `Basic ${apiKey}`,
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    }
  }
}
