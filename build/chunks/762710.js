/** Chunk was on web.js **/
/** chunk id: 762710, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(797686);
e.exports = function(e, t) {
    var n = [];
    return e.findEntityRanges(function(e) {
        return e.getEntity() === t
    }, function(e, t) {
        n.push({
            start: e,
            end: t
        })
    }), n.length || r(!1), n
}