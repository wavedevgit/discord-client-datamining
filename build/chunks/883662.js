/** chunk id: 883662 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
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
    m = n(652215);

function f(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: f,
        onViewChange: h,
        sidebarFooter: p,
        emptyState: g,
        searchQuery: x,
        clearSearchQuery: _,
        searchBar: y,
        ...b
    } = e, [v, A] = a.useState(!1), [j, N] = a.useState(1.4), S = a.useRef(null), C = (0, i.bG)([o.A], () => o.A.useReducedMotion), k = (0, i.bG)([c.A], () => c.A.isFocused());
    return a.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !C && k && (A(!0), N(t ?? 1.4), clearTimeout(S.current), S.current = setTimeout(() => A(!1), n ?? 1e3))
        };
        return u._.subscribe(m.jej.SHAKE_SETTINGS_MODAL, e), () => {
            u._.unsubscribe(m.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(S.current)
        }
    }, [C, k]), (0, r.jsx)(l.bfh, {
        isShaking: v,
        intensity: j,
        children: (0, r.jsx)(s.N, {
            ...b,
            children: (0, r.jsx)(d.A, {
                onClose: b.onClose,
                partialRoot: t,
                target: n,
                defaultTarget: f,
                onViewChange: h,
                emptyState: g,
                sidebarFooter: p,
                searchQuery: x,
                clearSearchQuery: _,
                searchBar: y
            })
        })
    })
}