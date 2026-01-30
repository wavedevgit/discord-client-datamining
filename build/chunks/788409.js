/** chunk id: 788409, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(741623),
    i = n(315646),
    a = n(363364),
    o = n(12161),
    s = n(158056) || o || a;
e.exports = function() {
    var e, t = {
        assert: function(e) {
            if (!t.has(e)) throw new r("Side channel does not contain " + i(e))
        },
        delete: function(t) {
            return !!e && e.delete(t)
        },
        get: function(t) {
            return e && e.get(t)
        },
        has: function(t) {
            return !!e && e.has(t)
        },
        set: function(t, n) {
            e || (e = s()), e.set(t, n)
        }
    };
    return t
}