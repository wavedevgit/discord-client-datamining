/** chunk id: 883662 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
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
    f = n(652215);

function m(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: m,
        onPanelChange: g,
        sidebarFooter: h,
        emptyState: y,
        searchQuery: p,
        onSearchChange: v,
        ...x
    } = e, [b, A] = i.useState(!1), [_, j] = i.useState(1.4), S = i.useRef(null), N = (0, a.bG)([o.A], () => o.A.useReducedMotion), C = (0, a.bG)([u.A], () => u.A.isFocused());
    return i.useEffect(() => {
        let e = e => {
            let {
                intensity: t,
                duration: n
            } = e;
            !N && C && (A(!0), j(t ?? 1.4), clearTimeout(S.current), S.current = setTimeout(() => A(!1), n ?? 1e3))
        };
        return c._.subscribe(f.jej.SHAKE_SETTINGS_MODAL, e), () => {
            c._.unsubscribe(f.jej.SHAKE_SETTINGS_MODAL, e), clearTimeout(S.current)
        }
    }, [N, C]), (0, r.jsx)(l.bfh, {
        isShaking: b,
        intensity: _,
        children: (0, r.jsx)(s.N, {
            ...x,
            children: (0, r.jsx)(d.A, {
                onClose: x.onClose,
                partialRoot: t,
                target: n,
                defaultTarget: m,
                onPanelChange: g,
                emptyState: y,
                sidebarFooter: h,
                searchQuery: p,
                onSearchChange: v
            })
        })
    })
}