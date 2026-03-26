/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968),
    a = n(64700),
    i = n(964486),
    l = n(250703),
    s = n(877260),
    o = n(823092),
    c = n(199966),
    u = n(669550),
    d = n(894858),
    _ = n(272053),
    h = n(397274),
    f = n(776644);

function p(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: p,
        onClose: m,
        sidebarFooter: b,
        searchBar: g,
        onViewChange: y,
        emptyState: v,
        searchQuery: x,
        clearSearchQuery: E
    } = e, S = d.A.useField("currentPanelKey"), {
        node: A,
        visibleDirectory: N,
        accessibleDirectory: C
    } = (0, u.Ay)(t, x ?? ""), j = null != n && N.entry(n)?.parentPanelKey != null ? n : p, I = a.useMemo(() => {
        let e = C.entry(S ?? j)?.parentPanelKey;
        if (null != e) return C.getPanelOrThrow(e)
    }, [S, C, j]), {
        navigateWithValidation: T
    } = (0, o.L_)();
    a.useEffect(() => {
        _.A.init({
            accessibleDirectory: C,
            onViewChange: y,
            navigateWithValidation: (e, t) => {
                null == N.entry(e) && E?.(), T(t)
            }
        })
    }, [C, T, y, E, N]);
    let [R, k] = a.useState(!0);
    (0, i.Ay)(() => (_.A.navigate(j, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), k(!1), () => {
        _.A.reset(), h.A.reset(), d.A.resetState()
    }));
    let w = a.useMemo(() => ({
            visibleDirectory: N,
            accessibleDirectory: C
        }), [N, C]),
        L = a.useMemo(() => () => T(m), [T, m]),
        D = null != S ? N.get(S) : void 0;
    return (0, r.jsx)(c.x.Provider, {
        value: w,
        children: (0, r.jsxs)("div", {
            className: f.k,
            children: [(0, r.jsx)(s.L, {
                root: A,
                onClose: L,
                footer: b,
                emptyState: v,
                searchBar: g
            }), (0, r.jsx)(l.A, {
                onClose: L,
                setting: R ? void 0 : D ?? I
            })]
        })
    })
}

function m(e) {
    return (0, r.jsx)(o.ms, {
        children: (0, r.jsx)(p, {
            ...e
        })
    })
}