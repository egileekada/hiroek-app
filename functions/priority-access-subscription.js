import axios from 'axios';

exports.handler = async (event, context) => {
  const listId = process.env.LIST_ID;
  const apiKey = process.env.API_KEY;
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
      ...body,
      status: 'subscribed',
    }
    const { data } = await axios.post(`https://us18.api.mailchimp.com/3.0/lists/${listId}/members`, payload, {
      headers: {
        Authorization: `Basic ${apiKey}`,
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 400) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            message: error.response.data.detail
          }),
        }
      } else {
        console.log(error)
      }
    } else {
      return {
        statusCode: 500,
        body: 'Request failed. Please check your internet connection and try again.',
      }
    }
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    }
  }
}
