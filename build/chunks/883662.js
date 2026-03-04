/** chunk id: 883662, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968),
    a = n(64700),
    i = n(311907),
    s = n(521489),
    l = n(397927),
    o = n(775602),
    c = n(531685),
    u = n(203982),
    d = n(418829),
    _ = n(652215);

function m(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: m,
        onPanelChange: g,
        sidebarFooter: b,
        emptyState: p,
        searchQuery: h,
        onSearchChange: f,
        ...x
    } = e, [y, C] = a.useState(!1), [A, v] = a.useState(1.4), S = a.useRef(null), T = (0, i.bG)([o.A], () => o.A.useReducedMotion), I = (0, i.bG)([c.A], () => c.A.isFocused());
    return a.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !T && I && (C(!0), v(t ?? 1.4), clearTimeout(S.current), S.current = setTimeout(() => C(!1), n ?? 1e3))
        };
        return u._.subscribe(_.jej.SHAKE_SETTINGS_MODAL, e), () => {
            u._.unsubscribe(_.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(S.current)
        }
    }, [T, I]), (0, r.jsx)(l.bfh, {
        isShaking: y,
        intensity: A,
        children: (0, r.jsx)(s.N, {
            ...x,
            children: (0, r.jsx)(d.A, {
                onClose: x.onClose,
                partialRoot: t,
                target: n,
                defaultTarget: m,
                onPanelChange: g,
                emptyState: p,
                sidebarFooter: b,
                searchQuery: h,
                onSearchChange: f
            })
        })
    })
}