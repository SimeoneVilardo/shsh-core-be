const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();
const secretHelper = {};

secretHelper.captchaSecret = null;

secretHelper.getCaptchaSecret = async () => {
    if (!secretHelper.captchaSecret) {
        var secret = await client.accessSecretVersion({ name: 'projects/953951196959/secrets/recaptcha_secret_key/versions/latest' });
        var payload = secret[0].payload.data.toString();
        secretHelper.captchaSecret = payload;
    }
    return secretHelper.captchaSecret;
}

module.exports = secretHelper;