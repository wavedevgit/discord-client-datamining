/** Chunk was on web.js **/
/** chunk id: 628290, original params: e,t,n (module,exports,require) **/
"use strict";
var r = n(954055),
    i = n(595042),
    a = n(869639),
    s = n(573750),
    o = n(611122).notEmptyKey,
    l = n(587321),
    c = n(907014),
    u = n(670200),
    d = s.isEngine("Gecko"),
    f = "\n\n";

function p(e, t) {
    return "deleteContentBackward" === e ? c(t) : t
}
e.exports = function(e, t) {
    void 0 !== e._pendingStateFromBeforeInput && (e.update(e._pendingStateFromBeforeInput), e._pendingStateFromBeforeInput = void 0);
    var n, s, c, _, h = e.editor.ownerDocument.defaultView.getSelection(),
        m = h.anchorNode,
        g = h.isCollapsed;
    if ((null == m ? void 0 : m.nodeType) === Node.TEXT_NODE || (null == m ? void 0 : m.nodeType) === Node.ELEMENT_NODE) {
        if (m.nodeType === Node.TEXT_NODE && (null !== m.previousSibling || null !== m.nextSibling)) {
            var E = m.parentNode;
            m.nodeValue = E.textContent;
            for (var y = E.firstChild; null !== y; y = y.nextSibling) y !== m && E.removeChild(y)
        }
        var b = m.textContent,
            O = e._latestEditorState,
            v = u(l(m)),
            A = i.decode(v),
            I = A.blockKey,
            S = A.decoratorKey,
            T = A.leafKey,
            C = O.getBlockTree(I).getIn([S, "leaves", T]),
            N = C.start,
            w = C.end,
            R = O.getCurrentContent(),
            P = R.getBlockForKey(I),
            D = P.getText().slice(N, w);
        if (b.endsWith(f) && (b = b.slice(0, -1)), b === D) {
            var x = t.nativeEvent.inputType;
            if (x) {
                var L = p(x, O);
                L !== O && (e.restoreEditorDOM(), e.update(L))
            }
            return
        }
        var j = O.getSelection(),
            M = j.merge({
                anchorOffset: N,
                focusOffset: w,
                isBackward: !1
            }),
            k = P.getEntityAt(N),
            U = o(k) ? R.getEntity(k) : null,
            G = null != U ? U.getMutability() : null,
            V = "MUTABLE" === G,
            F = V ? "spellcheck-change" : "apply-entity",
            B = r.replaceText(R, M, b, P.getInlineStyleAt(N), V ? P.getEntityAt(N) : null);
        if (d) n = h.anchorOffset, _ = (c = N + Math.min(n, s = h.focusOffset)) + Math.abs(n - s), n = c, s = _;
        else {
            var H = b.length - D.length;
            c = j.getStartOffset(), _ = j.getEndOffset(), n = g ? _ + H : c, s = _ + H
        }
        var Y = B.merge({
            selectionBefore: R.getSelectionAfter(),
            selectionAfter: j.merge({
                anchorOffset: n,
                focusOffset: s
            })
        });
        e.update(a.push(O, Y, F))
    }
}