/** chunk id: 883662 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    l = n(521489),
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
        onPanelChange: m,
        sidebarFooter: g,
        emptyState: v,
        searchQuery: p,
        onSearchChange: y,
        ...x
    } = e, [_, b] = i.useState(!1), [j, S] = i.useState(1.4), A = i.useRef(null), N = (0, a.bG)([o.A], () => o.A.useReducedMotion), C = (0, a.bG)([u.A], () => u.A.isFocused());
    return i.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !N && C && (b(!0), S(t ?? 1.4), clearTimeout(A.current), A.current = setTimeout(() => b(!1), n ?? 1e3))
        };
        return c._.subscribe(h.jej.SHAKE_SETTINGS_MODAL, e), () => {
            c._.unsubscribe(h.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(A.current)
        }
    }, [N, C]), (0, r.jsx)(s.bfh, {
        isShaking: _,
        intensity: j,
        children: (0, r.jsx)(l.N, {
            ...x,
            children: (0, r.jsx)(d.A, {
                onClose: x.onClose,
                partialRoot: t,
                target: n,
                defaultTarget: f,
                onPanelChange: m,
                emptyState: v,
                sidebarFooter: g,
                searchQuery: p,
                onSearchChange: y
            })
        })
    })
}