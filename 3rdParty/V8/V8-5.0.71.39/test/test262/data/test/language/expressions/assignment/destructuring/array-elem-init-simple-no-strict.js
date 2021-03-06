// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Identifiers that appear as the DestructuringAssignmentTarget in an
    AssignmentElement should take on the iterated value corresponding to their
    position in the ArrayAssignmentPattern.
es6id: 12.14.5.3
flags: [noStrict]
---*/

var value = [];
var result, argument, eval;

result = [arguments = 4, eval = 5] = value;

assert.sameValue(result, value);
assert.sameValue(arguments, 4);
assert.sameValue(eval, 5);
