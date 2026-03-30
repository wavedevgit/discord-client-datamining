/** chunk id: 883662 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    l = n(521489),
    s = n(397927),
    o = n(775602),
    c = n(531685),
    u = n(203982),
    d = n(418829),
    h = n(652215);

function _(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: _,
        onViewChange: f,
        sidebarFooter: m,
        emptyState: p,
        searchQuery: v,
        clearSearchQuery: y,
        searchBar: b,
        ...g
    } = e, [x, E] = i.useState(!1), [A, S] = i.useState(1.4), N = i.useRef(null), C = (0, a.bG)([o.A], () => o.A.useReducedMotion), j = (0, a.bG)([c.A], () => c.A.isFocused());
    return i.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !C && j && (E(!0), S(t ?? 1.4), clearTimeout(N.current), N.current = setTimeout(() => E(!1), n ?? 1e3))
        };
        return u._.subscribe(h.jej.SHAKE_SETTINGS_MODAL, e), () => {
            u._.unsubscribe(h.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(N.current)
        }
    }, [C, j]), (0, r.jsx)(s.bfh, {
        isShaking: x,
        intensity: A,
        children: (0, r.jsx)(l.N, {
            ...g,
            children: (0, r.jsx)(d.A, {
                onClose: g.onClose,
                partialRoot: t,
                target: n,
                defaultTarget: _,
                onViewChange: f,
                emptyState: p,
                sidebarFooter: m,
                searchQuery: v,
                clearSearchQuery: y,
                searchBar: b
            })
        })
    })
}