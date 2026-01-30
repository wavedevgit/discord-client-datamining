/** chunk id: 675879, original params: t,r,e (module,exports,require) **/
"use strict";
var n = e(691805),
    o = Function.prototype,
    s = o.call,
    i = n && o.bind.bind(s, s);
t.exports = n ? i : function(t) {
    return function() {
        return s.apply(t, arguments)
    }
}