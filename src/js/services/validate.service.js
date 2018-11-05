import * as _ from 'lodash';

/**
 * @const {Object} RULES (Validation rules)
 */
const RULES = {
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
  spns: {
    max: 15,
    min: 2,
    require: true
  },
  imsi: {
    max: 16,
    min: 16,
    require: true
  }
};

/**
 * @class ValidateService for validate data
 */
export default class ValidateService {
  /**
   * @method get validate service rules
   *
   * @return {Object}
   */
  getRules () {
    return RULES;
  }

  /**
   * @method check data is valid
   *
   * @param {Object} data (Input data)
   *
   * @return {Boolean}
   */
  isValidData (data) {
    let valid = true;

    _.forEach(data, (val, key) => {
      const rules = RULES[key];
      const arr = _.isArray(val) ? val : [val];

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
   * @method validate max field value
   *
   * @param { String } val (Validate value)
   * @param { Boolean } flag (Enable or disable require value)
   * @param { int } max (Maximum character length)
   *
   * @return { Boolean }
   */
  max (val, flag, max) {
    return val ? val.toString().length <= max : !flag;
  }

  /**
   * @method validate min field value
   *
   * @param { String } val (Validate value)
   * @param { Boolean } flag (Enable or disable require value)
   * @param { int } min (Minimum character length)
   *
   * @return { Boolean }
   */
  min (val, flag, min) {
    return val ? val.toString().length >= min : !flag;
  }

  /**
   * @method validate none empty field
   *
   * @param { String } val (Validate value)
   * @param { Boolean } flag (Enable or disable require value)
   *
   * @return { Boolean }
   */
  require (val, flag) {
    return flag ? val !== '' : !flag;
  }
}
