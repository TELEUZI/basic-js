const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

const dateSample = (sampleActivity) => isAdequatValue(sampleActivity) ?
    Math.ceil(calcActivityRatio(MODERN_ACTIVITY, parseFloat(sampleActivity)) / calcRateConstant()) :
    false;

const calcRateConstant = () => 0.693 / HALF_LIFE_PERIOD;

const isAdequatValue = (activityRate) => typeof(activityRate) === 'string' && parseFloat(activityRate) > 0 && parseFloat(activityRate) < MODERN_ACTIVITY;

const calcActivityRatio = (modernActivity, sampleActivity) => Math.log(modernActivity / sampleActivity);

module.exports = dateSample;