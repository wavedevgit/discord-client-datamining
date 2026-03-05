/** chunk id: 883662 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968),
    a = n(64700),
    i = n(311907),
    l = n(521489),
    s = n(397927),
    o = n(775602),
    u = n(531685),
    c = n(203982),
    d = n(418829),
    h = n(652215);

function g(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: g,
        onPanelChange: f,
        sidebarFooter: m,
        emptyState: y,
        searchQuery: p,
        onSearchChange: v,
        ...x
    } = e, [b, A] = a.useState(!1), [S, _] = a.useState(1.4), j = a.useRef(null), N = (0, i.bG)([o.A], () => o.A.useReducedMotion), C = (0, i.bG)([u.A], () => u.A.isFocused());
    return a.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !N && C && (A(!0), _(t ?? 1.4), clearTimeout(j.current), j.current = setTimeout(() => A(!1), n ?? 1e3))
        };
        return c._.subscribe(h.jej.SHAKE_SETTINGS_MODAL, e), () => {
            c._.unsubscribe(h.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(j.current)
        }
    }, [N, C]), (0, r.jsx)(s.bfh, {
        isShaking: b,
        intensity: S,
        children: (0, r.jsx)(l.N, {
            ...x,
            children: (0, r.jsx)(d.A, {
                onClose: x.onClose,
                partialRoot: t,
                target: n,
                defaultTarget: g,
                onPanelChange: f,
                emptyState: y,
                sidebarFooter: m,
                searchQuery: p,
                onSearchChange: v
            })
        })
    })
}