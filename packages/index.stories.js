import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import SharedWidget from './shared/widgets/src/SharedWidget.vue';

storiesOf('Button', module)
  .add('as a component', () => ({
    components: { SharedWidget },
    template: '<shared-widget></shared-widget>'
  }));