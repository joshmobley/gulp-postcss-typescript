/*
** header.js
** @description: this is an example of a module or component file
*/

export class Header{

  prop: string;

  someMethod () : string {

    this.prop = 'baz';
    return this.prop;

  }

}
