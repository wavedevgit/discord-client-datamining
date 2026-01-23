/** Chunk was on web.js **/
/** chunk id: 187047, original params: e,t,n (module,exports,require) **/
"use strict";
var r, i = n(198668),
    a = n(116740),
    s = n(670200),
    o = a.OrderedMap;
e.exports = {
    getDirectionMap: function(e, t) {
        r ? r.reset() : r = new i;
        var n = e.getBlockMap(),
            l = n.valueSeq().map(function(e) {
                return s(r).getDirection(e.getText())
            }),
            c = o(n.keySeq().zip(l));
        return null != t && a.is(t, c) ? t : c
    }
}