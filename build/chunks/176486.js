/** Chunk was on web.js **/
/** chunk id: 176486, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(367932),
    i = n(1140).strlen;
e.exports = function(e, t) {
    var n = [];
    return e.findEntityRanges(function(e) {
        return !!e.getEntity()
    }, function(a, s) {
        var o = e.getText(),
            l = e.getEntityAt(a);
        n.push({
            offset: i(o.slice(0, a)),
            length: i(o.slice(a, s)),
            key: Number(t[r.stringify(l)])
        })
    }), n
}