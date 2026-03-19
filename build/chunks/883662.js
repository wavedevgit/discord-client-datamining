/** chunk id: 883662 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(521489),
    l = n(397927),
    o = n(775602),
    c = n(531685),
    u = n(203982),
    d = n(418829),
    m = n(652215);

function f(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: f,
        onViewChange: h,
        sidebarFooter: g,
        emptyState: p,
        searchQuery: x,
        clearSearchQuery: _,
        searchBar: b,
        ...y
    } = e, [v, A] = i.useState(!1), [j, N] = i.useState(1.4), C = i.useRef(null), S = (0, a.bG)([o.A], () => o.A.useReducedMotion), k = (0, a.bG)([c.A], () => c.A.isFocused());
    return i.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !S && k && (A(!0), N(t ?? 1.4), clearTimeout(C.current), C.current = setTimeout(() => A(!1), n ?? 1e3))
        };
        return u._.subscribe(m.jej.SHAKE_SETTINGS_MODAL, e), () => {
            u._.unsubscribe(m.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(C.current)
        }
    }, [S, k]), (0, r.jsx)(l.bfh, {
        isShaking: v,
        intensity: j,
        children: (0, r.jsx)(s.N, {
            ...y,
            children: (0, r.jsx)(d.A, {
                onClose: y.onClose,
                partialRoot: t,
                target: n,
                defaultTarget: f,
                onViewChange: h,
                emptyState: p,
                sidebarFooter: g,
                searchQuery: x,
                clearSearchQuery: _,
                searchBar: b
            })
        })
    })
}