/** chunk id: 521000, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    VA: () => s
});
var r = n(627968);
n(64700);
let l = e => {
        var t;
        let {
            clientX: n,
            clientY: r,
            currentTarget: l
        } = e;
        l.style.pointerEvents = "none";
        let s = document.elementFromPoint(n, r);
        return l.style.pointerEvents = "auto", {
            elementBelow: s,
            button: null != (t = null == s ? void 0 : s.closest("button")) ? t : null
        }
    },
    s = e => {
        let {
            isCustomCursorEnabled: t,
            className: n,
            riveEventTargetRef: s
        } = e, a = e => {
            let {
                button: n
            } = l(e), r = e.currentTarget;
            t ? r.style.cursor = null != n ? "var(--custom-cursor-pointer)" : "var(--custom-cursor)" : r.style.cursor = null != n ? "pointer" : "default"
        };
        return (0, r.jsx)("div", {
            ref: s,
            className: n,
            onMouseMove: a,
            onMouseDown: e => {
                let {
                    button: t
                } = l(e);
                null != t && t.click()
            }
        })
    }