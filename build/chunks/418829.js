/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var r = n(627968),
    i = n(64700),
    a = n(964486),
    s = n(250703),
    l = n(877260),
    o = n(823092),
    u = n(199966),
    c = n(669550),
    d = n(894858),
    f = n(272053),
    m = n(397274),
    g = n(500425);

function h(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: h,
        onClose: y,
        sidebarFooter: p,
        onPanelChange: v,
        emptyState: x,
        searchQuery: b,
        onSearchChange: A
    } = e, _ = d.A.useField("currentPanelKey"), {
        node: j,
        visibleDirectory: S,
        accessibleDirectory: N
    } = (0, c.Ay)(t, b ?? ""), C = null != n && S.entry(n)?.parentPanelKey != null ? n : h, k = i.useMemo(() => {
        let e = N.entry(_ ?? C)?.parentPanelKey;
        if (null != e) return N.getPanelOrThrow(e)
    }, [_, N, C]), {
        navigateWithValidation: E
    } = (0, o.L_)();
    i.useEffect(() => {
        f.A.init({
            accessibleDirectory: N,
            onPanelChange: v,
            navigateWithValidation: (e, t) => {
                null == S.entry(e) && A?.(""), E(t)
            }
        })
    }, [N, E, v, A, S]);
    let [w, R] = i.useState(!0);
    (0, a.Ay)(() => (f.A.navigate(C, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), R(!1), () => {
        f.A.reset(), m.A.reset(), d.A.resetState()
    }));
    let T = i.useMemo(() => ({
            visibleDirectory: S,
            accessibleDirectory: N
        }), [S, N]),
        I = i.useMemo(() => () => E(y), [E, y]),
        P = null != _ ? S.get(_) : void 0;
    return (0, r.jsx)(u.x.Provider, {
        value: T,
        children: (0, r.jsxs)("div", {
            className: g.k,
            children: [(0, r.jsx)(l.L, {
                root: j,
                footer: p,
                onClose: I,
                emptyState: x,
                searchQuery: b,
                onSearchChange: A
            }), (0, r.jsx)(s.A, {
                onClose: I,
                setting: w ? void 0 : P ?? k
            })]
        })
    })
}

function y(e) {
    return (0, r.jsx)(o.ms, {
        children: (0, r.jsx)(h, {
            ...e
        })
    })
}