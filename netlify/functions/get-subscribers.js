exports.handler = async function(event, context) {
  const API_SECRET = process.env.KIT_SECRET_KEY;
  const FORM_ID = "9492985";
  try {
    const response = await fetch(
      `https://api.convertkit.com/v3/forms/${FORM_ID}?api_secret=${API_SECRET}`
    );
    const data = await response.json();
    const count = data.form?.subscriber_count || 0;
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ count })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ count: 1, error: err.message })
    };
  }
};
