/** Chunk was on web.js **/
/** chunk id: 832368, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(869639);
e.exports = function(e) {
    var t = e.getSelection(),
        n = t.getEndKey(),
        i = e.getCurrentContent().getBlockForKey(n).getLength();
    return r.set(e, {
        selection: t.merge({
            anchorKey: n,
            anchorOffset: i,
            focusKey: n,
            focusOffset: i,
            isBackward: !1
        }),
        forceSelection: !0
    })
}