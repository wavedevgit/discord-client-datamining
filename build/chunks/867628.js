/** Chunk was on web.js **/
/** chunk id: 867628, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
}), n(896048);
var r = n(64700),
    i = n(267102),
    a = n(652215);
let o = ["Shift", "Alt", "Meta", "Control"];

function s(e, t) {
    let [n, s] = r.useState(0), l = (0, i.aL)();
    r.useEffect(() => {
        let e = () => s(e => e + 1),
            t = () => s(e => Math.max(0, e - 1));
        return l.subscribe(a.jej.POPOUT_SHOW, e), l.subscribe(a.jej.POPOUT_HIDE, t), () => {
            l.unsubscribe(a.jej.POPOUT_SHOW, e), l.unsubscribe(a.jej.POPOUT_HIDE, t)
        }
    }, [l]);
    let [c, u] = r.useState(!1);
    return r.useLayoutEffect(() => {
        let r = e => {
                (!t || n > 0) && c ? u(!1) : !c && n > 0 || e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || o.indexOf(e.key) >= 0) || u(e => !e)
            },
            i = c ? "keyup" : "mousemove";
        return t && e.addEventListener(i, r), () => null == e ? void 0 : e.removeEventListener(i, r)
    }, [e, c, n, t]), t && 0 === n && c
}