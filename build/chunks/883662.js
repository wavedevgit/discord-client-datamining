/** chunk id: 883662 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(521489),
    l = n(397927),
    o = n(775602),
    u = n(531685),
    c = n(203982),
    d = n(418829),
    h = n(652215);

function p(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: p,
        onViewChange: _,
        sidebarFooter: m,
        emptyState: f,
        searchQuery: g,
        clearSearchQuery: y,
        searchBar: v,
        ...S
    } = e, [E, x] = i.useState(!1), [A, N] = i.useState(1.4), b = i.useRef(null), C = (0, a.bG)([o.A], () => o.A.useReducedMotion), j = (0, a.bG)([u.A], () => u.A.isFocused());
    return i.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !C && j && (x(!0), N(t ?? 1.4), clearTimeout(b.current), b.current = setTimeout(() => x(!1), n ?? 1e3))
        };
        return c._.subscribe(h.jej.SHAKE_SETTINGS_MODAL, e), () => {
            c._.unsubscribe(h.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(b.current)
        }
    }, [C, j]), (0, r.jsx)(l.bfh, {
        isShaking: E,
        intensity: A,
        children: (0, r.jsx)(s.N, {
            ...S,
            children: (0, r.jsx)(d.A, {
                onClose: S.onClose,
                partialRoot: t,
                target: n,
                defaultTarget: p,
                onViewChange: _,
                emptyState: f,
                sidebarFooter: m,
                searchQuery: g,
                clearSearchQuery: y,
                searchBar: v
            })
        })
    })
}