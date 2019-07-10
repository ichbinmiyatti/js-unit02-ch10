import BaseValidator from './BaseValidator';

export default class extends BaseValidator {
  constructor(val) {
    super(val, 'パスワード');
    this.checkLength = this.checkLength.bind(this);
  }

  validate() {
    return super.cannotEmpty()
      .then(this.checkLength)
      .then(() => ({
        success: true
      }))
      .catch(err => err);
  }

  checkLength() {
    if (this.val.length >= 8) {
      return Promise.resolve();
    }
    return Promise.reject({
      success: false,
      message: 'パスワードが短すぎます。'
    });
  }
}
