/** chunk id: 883662 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(521489),
    s = n(397927),
    o = n(775602),
    u = n(531685),
    c = n(203982),
    d = n(418829),
    h = n(652215);

function f(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: f,
        onViewChange: m,
        sidebarFooter: p,
        emptyState: _,
        searchQuery: v,
        clearSearchQuery: y,
        searchBar: g,
        ...x
    } = e, [E, A] = i.useState(!1), [S, b] = i.useState(1.4), N = i.useRef(null), C = (0, l.bG)([o.A], () => o.A.useReducedMotion), j = (0, l.bG)([u.A], () => u.A.isFocused());
    return i.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !C && j && (A(!0), b(t ?? 1.4), clearTimeout(N.current), N.current = setTimeout(() => A(!1), n ?? 1e3))
        };
        return c._.subscribe(h.jej.SHAKE_SETTINGS_MODAL, e), () => {
            c._.unsubscribe(h.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(N.current)
        }
    }, [C, j]), (0, r.jsx)(s.bfh, {
        isShaking: E,
        intensity: S,
        children: (0, r.jsx)(a.N, {
            ...x,
            children: (0, r.jsx)(d.A, {
                onClose: x.onClose,
                partialRoot: t,
                target: n,
                defaultTarget: f,
                onViewChange: m,
                emptyState: _,
                sidebarFooter: p,
                searchQuery: v,
                clearSearchQuery: y,
                searchBar: g
            })
        })
    })
}