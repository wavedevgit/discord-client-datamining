/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    a = n(964486),
    l = n(250703),
    s = n(877260),
    o = n(823092),
    c = n(199966),
    u = n(669550),
    d = n(894858),
    _ = n(272053),
    h = n(397274),
    f = n(776644);

function m(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: m,
        onClose: p,
        sidebarFooter: b,
        searchBar: v,
        onViewChange: y,
        emptyState: g,
        searchQuery: x,
        clearSearchQuery: E
    } = e, S = d.A.useField("currentPanelKey"), {
        node: A,
        visibleDirectory: N,
        accessibleDirectory: C
    } = (0, u.Ay)(t, x ?? ""), I = null != n && N.entry(n)?.parentPanelKey != null ? n : m, j = i.useMemo(() => {
        let e = C.entry(S ?? I)?.parentPanelKey;
        if (null != e) return C.getPanelOrThrow(e)
    }, [S, C, I]), {
        navigateWithValidation: T
    } = (0, o.L_)();
    i.useEffect(() => {
        _.A.init({
            accessibleDirectory: C,
            onViewChange: y,
            navigateWithValidation: (e, t) => {
                null == N.entry(e) && E?.(), T(t)
            }
        })
    }, [C, T, y, E, N]);
    let [R, k] = i.useState(!0);
    (0, a.Ay)(() => (_.A.navigate(I, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), k(!1), () => {
        _.A.reset(), h.A.reset(), d.A.resetState()
    }));
    let w = i.useMemo(() => ({
            visibleDirectory: N,
            accessibleDirectory: C
        }), [N, C]),
        L = i.useMemo(() => () => T(p), [T, p]),
        O = null != S ? N.get(S) : void 0;
    return (0, r.jsx)(c.x.Provider, {
        value: w,
        children: (0, r.jsxs)("div", {
            className: f.k,
            children: [(0, r.jsx)(s.L, {
                root: A,
                onClose: L,
                footer: b,
                emptyState: g,
                searchBar: v
            }), (0, r.jsx)(l.A, {
                onClose: L,
                setting: R ? void 0 : O ?? j
            })]
        })
    })
}

function p(e) {
    return (0, r.jsx)(o.ms, {
        children: (0, r.jsx)(m, {
            ...e
        })
    })
}