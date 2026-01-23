/** Chunk was on 35511 **/
/** chunk id: 123245, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(143733),
    a = n(509643);

function o(e) {
    return (o = "function" == typeof r && "symbol" == typeof a ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof r && e.constructor === r && e !== r.prototype ? "symbol" : typeof e
    })(e)
}