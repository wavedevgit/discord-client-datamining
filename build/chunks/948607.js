/** chunk id: 948607, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(896048);
var r = n(64700),
    i = n(735438),
    a = n(311907),
    o = n(68166),
    s = n(775602),
    l = n(267102),
    c = n(203982),
    u = n(652215);
let d = (0, i.debounce)(e => {
    setTimeout(() => {
        var t;
        null == (t = e.current) || t.focus()
    }, 0)
}, 50);

function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        i = (0, a.bG)([s.A], () => s.A.keyboardModeEnabled),
        f = (0, o.A)(),
        [p, _] = r.useState(!1),
        h = (0, l.aL)();
    return r.useEffect(() => {
        if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

        function e() {
            f && (h.dispatch(u.jej.POPOUT_CLOSE), c._.dispatch(u.jej.CONTEXT_MENU_CLOSE))
        }
    }, [n, f, t, h]), r.useEffect(() => {
        var r;
        if (i || !p || !t) return;
        let {
            current: a
        } = e, o = f;

        function s(t) {
            let n = t.relatedTarget;
            setTimeout(() => {
                null != n && "BUTTON" !== n.tagName || o || d(e)
            }, 100)
        }
        return null == a || a.addEventListener("focusout", s), (null == (r = n.document.activeElement) ? void 0 : r.tagName) === "IFRAME" || o || null == a || a.focus(), () => {
            null == a || a.removeEventListener("focusout", s), o = !0
        }
    }, [t, p, i, e, n, f]), _
}