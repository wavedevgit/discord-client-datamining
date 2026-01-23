/** Chunk was on web.js **/
/** chunk id: 900923, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(374316),
    i = TypeError;
e.exports = function(e) {
    var t = r(e, "number");
    if ("number" == typeof t) throw new i("Can't convert number to bigint");
    return BigInt(t)
}