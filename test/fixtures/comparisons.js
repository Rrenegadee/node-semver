'use strict'

// [version1, version2]
// version1 should be greater than version2
// used by the cmp, eq, gt, lt, and neq tests
module.exports = [
  ['0.0.0', '0.0.0-foo'],
  ['0.0.1', '0.0.0'],
  ['1.0.0', '0.9.9'],
  ['0.10.0', '0.9.0'],
  ['0.99.0', '0.10.0', {}],
  ['2.0.0', '1.2.3', { loose: false }],
  ['v0.0.0', '0.0.0-foo', true],
  ['v0.0.1', '0.0.0', { loose: true }],
  ['v1.0.0', '0.9.9', true],
  ['v0.10.0', '0.9.0', true],
  ['v0.99.0', '0.10.0', true],
  ['v2.0.0', '1.2.3', true],
  ['0.0.0', 'v0.0.0-foo', true],
  ['0.0.1', 'v0.0.0', true],
  ['1.0.0', 'v0.9.9', true],
  ['0.10.0', 'v0.9.0', true],
  ['0.99.0', 'v0.10.0', true],
  ['2.0.0', 'v1.2.3', true],
  ['1.2.3', '1.2.3-asdf'],
  ['1.2.3', '1.2.3-4'],
  ['1.2.3', '1.2.3-4-foo'],
  ['1.2.3-5-foo', '1.2.3-5'],
  ['1.2.3-5', '1.2.3-4'],
  ['1.2.3-5-foo', '1.2.3-5-Foo'],
  ['3.0.0', '2.7.2+asdf'],
  ['1.2.3-a.10', '1.2.3-a.5'],
  ['1.2.3-a.b', '1.2.3-a.5'],
  ['1.2.3-a.b', '1.2.3-a'],
  ['1.2.3-a.b.c.10.d.5', '1.2.3-a.b.c.5.d.100'],
  ['1.2.3-r2', '1.2.3-r100'],
  ['1.2.3-r100', '1.2.3-R2'],
]
