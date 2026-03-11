/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    a = n(964486),
    s = n(250703),
    l = n(877260),
    o = n(823092),
    c = n(199966),
    u = n(669550),
    d = n(894858),
    m = n(272053),
    f = n(397274),
    g = n(500425);

function h(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: h,
        onClose: p,
        sidebarFooter: y,
        onPanelChange: _,
        emptyState: x,
        searchQuery: v,
        onSearchChange: b
    } = e, A = d.A.useField("currentPanelKey"), {
        node: j,
        visibleDirectory: N,
        accessibleDirectory: S
    } = (0, u.Ay)(t, v ?? ""), C = null != n && N.entry(n)?.parentPanelKey != null ? n : h, k = i.useMemo(() => {
        let e = S.entry(A ?? C)?.parentPanelKey;
        if (null != e) return S.getPanelOrThrow(e)
    }, [A, S, C]), {
        navigateWithValidation: E
    } = (0, o.L_)();
    i.useEffect(() => {
        m.A.init({
            accessibleDirectory: S,
            onPanelChange: _,
            navigateWithValidation: (e, t) => {
                null == N.entry(e) && b?.(""), E(t)
            }
        })
    }, [S, E, _, b, N]);
    let [w, I] = i.useState(!0);
    (0, a.Ay)(() => (m.A.navigate(C, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), I(!1), () => {
        m.A.reset(), f.A.reset(), d.A.resetState()
    }));
    let T = i.useMemo(() => ({
            visibleDirectory: N,
            accessibleDirectory: S
        }), [N, S]),
        R = i.useMemo(() => () => E(p), [E, p]),
        P = null != A ? N.get(A) : void 0;
    return (0, r.jsx)(c.x.Provider, {
        value: T,
        children: (0, r.jsxs)("div", {
            className: g.k,
            children: [(0, r.jsx)(l.L, {
                root: j,
                footer: y,
                onClose: R,
                emptyState: x,
                searchQuery: v,
                onSearchChange: b
            }), (0, r.jsx)(s.A, {
                onClose: R,
                setting: w ? void 0 : P ?? k
            })]
        })
    })
}

function p(e) {
    return (0, r.jsx)(o.ms, {
        children: (0, r.jsx)(h, {
            ...e
        })
    })
}