/** chunk id: 883662 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(521489),
    s = n(397927),
    o = n(775602),
    u = n(531685),
    c = n(203982),
    d = n(418829),
    h = n(652215);

function m(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: m,
        onViewChange: f,
        sidebarFooter: p,
        emptyState: v,
        searchQuery: y,
        clearSearchQuery: g,
        searchBar: _,
        ...x
    } = e, [E, A] = l.useState(!1), [S, b] = l.useState(1.4), N = l.useRef(null), j = (0, i.bG)([o.A], () => o.A.useReducedMotion), C = (0, i.bG)([u.A], () => u.A.isFocused());
    return l.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !j && C && (A(!0), b(t ?? 1.4), clearTimeout(N.current), N.current = setTimeout(() => A(!1), n ?? 1e3))
        };
        return c._.subscribe(h.jej.SHAKE_SETTINGS_MODAL, e), () => {
            c._.unsubscribe(h.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(N.current)
        }
    }, [j, C]), (0, r.jsx)(s.bfh, {
        isShaking: E,
        intensity: S,
        children: (0, r.jsx)(a.N, {
            ...x,
            children: (0, r.jsx)(d.A, {
                onClose: x.onClose,
                partialRoot: t,
                target: n,
                defaultTarget: m,
                onViewChange: f,
                emptyState: v,
                sidebarFooter: p,
                searchQuery: y,
                clearSearchQuery: g,
                searchBar: _
            })
        })
    })
}