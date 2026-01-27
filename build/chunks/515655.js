/** Chunk was on web.js **/
/** chunk id: 515655, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(257943),
    i = n(503628),
    a = n(101968),
    o = n(862784),
    s = Error.prototype.toString;
e.exports = i(function() {
    if (r) {
        var e = Object.create(Object.defineProperty({}, "name", {
            get: function() {
                return this === e
            }
        }));
        if ("true" !== s.call(e)) return !0
    }
    return "2: 1" !== s.call({
        message: 1,
        name: 2
    }) || "Error" !== s.call({})
}) ? function() {
    var e = a(this),
        t = o(e.name, "Error"),
        n = o(e.message);
    return t ? n ? t + ": " + n : t : n
} : s