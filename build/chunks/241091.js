/** Chunk was on 94678 **/
/** chunk id: 241091, original params: t,r,e (module,exports,require) **/
"use strict";
var n = e(375797),
    o = e(999843),
    s = e(691805),
    i = n(n.bind);
t.exports = function(t, r) {
    return o(t), void 0 === r ? t : s ? i(t, r) : function() {
        return t.apply(r, arguments)
    }
}