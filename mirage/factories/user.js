import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
    id(i) {return i+1},
    username(i) { return `User${i + 1}`;},
    mailId(i) {return `user${i+1}@mail.com`}
});
