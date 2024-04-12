// components/file-picker.js
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FilePickerComponent extends Component {
  @tracked inputId = `file-input-${Math.random().toString(36).substring(7)}`;

  @action
  openFilePicker() {
    const input = document.getElementById(this.inputId);
    input.click();
  }

  @action
  handleFileChange(event) {
    const file = event.target.files[0];
    const { maxSize } = this.args;
    if (file.size <= maxSize) {
      this.args.onFileSelected(file);
    } else {
      this.args.onError(`Please select a file smaller than ${maxSize / (1024 * 1024)}MB.`);
    }
  }
}
