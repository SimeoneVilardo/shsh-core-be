const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const client = new SecretManagerServiceClient();
const secretHelper = {};

secretHelper.captchaSecret = null;

secretHelper.getSecret = async (name) => {
    var secret = await client.accessSecretVersion({ name: name });
    var payload = secret[0].payload.data.toString();
    return payload;
}

secretHelper.getCaptchaSecret = async () => {
    if (!secretHelper.captchaSecret)
        secretHelper.captchaSecret = await secretHelper.getSecret('projects/953951196959/secrets/recaptcha_secret_key/versions/latest');
    return secretHelper.captchaSecret;
}

module.exports = secretHelper;