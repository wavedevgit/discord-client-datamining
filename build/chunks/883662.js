/** chunk id: 883662 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var r = n(627968),
    a = n(64700),
    i = n(311907),
    l = n(521489),
    s = n(397927),
    o = n(775602),
    c = n(531685),
    u = n(203982),
    d = n(418829),
    _ = n(652215);

function h(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: h,
        onViewChange: f,
        sidebarFooter: p,
        emptyState: m,
        searchQuery: b,
        clearSearchQuery: g,
        searchBar: y,
        ...v
    } = e, [x, E] = a.useState(!1), [S, A] = a.useState(1.4), N = a.useRef(null), C = (0, i.bG)([o.A], () => o.A.useReducedMotion), j = (0, i.bG)([c.A], () => c.A.isFocused());
    return a.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !C && j && (E(!0), A(t ?? 1.4), clearTimeout(N.current), N.current = setTimeout(() => E(!1), n ?? 1e3))
        };
        return u._.subscribe(_.jej.SHAKE_SETTINGS_MODAL, e), () => {
            u._.unsubscribe(_.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(N.current)
        }
    }, [C, j]), (0, r.jsx)(s.bfh, {
        isShaking: x,
        intensity: S,
        children: (0, r.jsx)(l.N, {
            ...v,
            children: (0, r.jsx)(d.A, {
                onClose: v.onClose,
                partialRoot: t,
                target: n,
                defaultTarget: h,
                onViewChange: f,
                emptyState: m,
                sidebarFooter: p,
                searchQuery: b,
                clearSearchQuery: g,
                searchBar: y
            })
        })
    })
}