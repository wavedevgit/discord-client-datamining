/** Chunk was on web.js **/
/** chunk id: 713517, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o,
    M: () => s
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(775602);

function o(e) {
    let [t, n] = r.useState(!1), [o, s] = r.useState(!1), l = (0, i.bG)([a.A], () => a.A.keyboardModeEnabled);
    r.useEffect(() => {
        let t = e.current;
        if (null == t) return;
        n(!1), s(!1);
        let r = () => n(!0),
            i = () => n(!1),
            a = () => s(!0),
            o = e => {
                t.contains(e.relatedTarget) || s(!1)
            };
        return t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", i), t.addEventListener("focusin", a), t.addEventListener("focusout", o), () => {
            t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", i), t.removeEventListener("focusin", a), t.removeEventListener("focusout", o)
        }
    }, [e]);
    let c = l && o;
    return {
        isHovering: t,
        isFocusing: c,
        isHoveringOrFocusing: t || c
    }
}

function s(e) {
    let [t, n] = r.useState(!1);
    return r.useEffect(() => {
        let t = e.current;
        if (null == t) return;
        let r = () => n(!0),
            i = () => n(!1);
        return t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", i), () => {
            t.removeEventListener("mouseenter", r), t.removeEventListener("mouseleave", i)
        }
    }, [e]), t
}