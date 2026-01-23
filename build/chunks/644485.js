/** Chunk was on web.js **/
/** chunk id: 644485, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(241976);
e.exports = function(e, t) {
    var n = t.ownerDocument.defaultView.getSelection();
    return 0 === n.rangeCount ? {
        selectionState: e.getSelection().set("hasFocus", !1),
        needsRecovery: !1
    } : r(e, t, n.anchorNode, n.anchorOffset, n.focusNode, n.focusOffset)
}