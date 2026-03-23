/** chunk id: 883662 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => f
});
var n = r(627968),
    a = r(64700),
    i = r(311907),
    l = r(521489),
    s = r(397927),
    o = r(775602),
    c = r(531685),
    u = r(203982),
    d = r(418829),
    h = r(652215);

function f(e) {
    let {
        partialRoot: t,
        target: r,
        defaultTarget: f,
        onViewChange: _,
        sidebarFooter: m,
        emptyState: p,
        searchQuery: g,
        clearSearchQuery: b,
        searchBar: y,
        ...v
    } = e, [x, E] = a.useState(!1), [S, A] = a.useState(1.4), N = a.useRef(null), C = (0, i.bG)([o.A], () => o.A.useReducedMotion), j = (0, i.bG)([c.A], () => c.A.isFocused());
    return a.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: r
            } = e;
            !C && j && (E(!0), A(t ?? 1.4), clearTimeout(N.current), N.current = setTimeout(() => E(!1), r ?? 1e3))
        };
        return u._.subscribe(h.jej.SHAKE_SETTINGS_MODAL, e), () => {
            u._.unsubscribe(h.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(N.current)
        }
    }, [C, j]), (0, n.jsx)(s.bfh, {
        isShaking: x,
        intensity: S,
        children: (0, n.jsx)(l.N, {
            ...v,
            children: (0, n.jsx)(d.A, {
                onClose: v.onClose,
                partialRoot: t,
                target: r,
                defaultTarget: f,
                onViewChange: _,
                emptyState: p,
                sidebarFooter: m,
                searchQuery: g,
                clearSearchQuery: b,
                searchBar: y
            })
        })
    })
}