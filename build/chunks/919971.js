/** Chunk was on web.js **/
/** chunk id: 919971, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(503628),
    i = n(860511).RegExp;
e.exports = r(function() {
    var e = i("(?<a>b)", "g");
    return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
})