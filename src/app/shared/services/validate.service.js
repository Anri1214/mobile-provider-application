import * as _ from 'lodash';

/**
 * @const {Object} RULES - Validation rules.
 */
const RULES = Object.freeze({
  id: {
    require: true
  },
  providerName: {
    max: 30,
    min: 5,
    require: true
  },
  mcc: {
    max: 3,
    min: 3,
    require: true
  },
  mnc: {
    max: 3,
    min: 2,
    require: true
  },
  spn: {
    max: 15,
    min: 2,
    require: true
  },
  imsi: {
    max: 15,
    min: 12,
    require: true
  }
});

/**
 * Class representing a validation data service.
 */
class ValidateService {
  /**
   * @method get validate service rules
   *
   * @return {Object}
   */
  getRules () {
    return RULES;
  }

  /**
   * Check if input data is array type.
   * @param {any} data - Input data.
   * @return {Boolean}
   */
  isArrayData (data) {
    return _.isArray(data);
  }

  /**
   * Check if input data is empty.
   * @param {any} data - Input data.
   * @return {Boolean}
   */
  isEmptyData (data) {
    return _.isEmpty(data);
  }

  /**
   * Check if input data is valid by validation rules.
   * @param {Object} data - Input data.
   * @return {Boolean}
   */
  isValidData (data) {
    let valid = true;

    _.forEach(data, (val, key) => {
      const arr = _.isArray(val) ? val : [val];
      const ruleKey = _.isArray(val) ? key.slice(0, -1) : key;
      const rules = RULES[ruleKey];

      arr.forEach(item => {
        _.forEach(rules, (rule, method) => {
          const check = this[method](item, rules.require, rule);

          if (!check) {
            valid = false;
          }
        });
      });
    });

    return valid;
  }

  /**
   * Validate max field value.
   * @param {String} val - Validate value.
   * @param {Boolean} flag - Enable or disable require value.
   * @param {int} max - Maximum character length.
   * @return {Boolean}
   */
  max (val, flag, max) {
    return val ? val.toString().length <= max : !flag;
  }

  /**
   * Validate min field value.
   * @param {String} val - Validate value.
   * @param {Boolean} flag - Enable or disable require value.
   * @param {int} min - Minimum character length.
   * @return {Boolean}
   */
  min (val, flag, min) {
    return val ? val.toString().length >= min : !flag;
  }

  /**
   * Validate none empty field.
   * @param {String} val - Validate value.
   * @param {Boolean} flag - Enable or disable require value.
   * @return {Boolean}
   */
  require (val, flag) {
    return flag ? val !== '' : !flag;
  }
}

export default ValidateService;
