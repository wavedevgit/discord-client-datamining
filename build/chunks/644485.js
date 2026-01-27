/** Chunk was on 38939 **/
/** chunk id: 644485, original params: t,e,r (module,exports,require) **/
"use strict";
var n = r(241976);
t.exports = function(t, e) {
    var r = e.ownerDocument.defaultView.getSelection();
    return 0 === r.rangeCount ? {
        selectionState: t.getSelection().set("hasFocus", !1),
        needsRecovery: !1
    } : n(t, e, r.anchorNode, r.anchorOffset, r.focusNode, r.focusOffset)
}