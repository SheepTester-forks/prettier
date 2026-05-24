// https://github.com/brody2consult/prettierx/issues/21

export class Foo {
  static [Symbol.hasInstance]  (obj) {
    return 'bar' in obj
  }
}
