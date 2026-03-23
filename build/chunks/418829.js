/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => p
});
var n = r(627968),
    a = r(64700),
    i = r(964486),
    l = r(250703),
    s = r(877260),
    o = r(823092),
    c = r(199966),
    u = r(669550),
    d = r(894858),
    h = r(272053),
    f = r(397274),
    _ = r(500425);

function m(e) {
    let {
        partialRoot: t,
        target: r,
        defaultTarget: m,
        onClose: p,
        sidebarFooter: g,
        searchBar: b,
        onViewChange: y,
        emptyState: v,
        searchQuery: x,
        clearSearchQuery: E
    } = e, S = d.A.useField("currentPanelKey"), {
        node: A,
        visibleDirectory: N,
        accessibleDirectory: C
    } = (0, u.Ay)(t, x ?? ""), j = null != r && N.entry(r)?.parentPanelKey != null ? r : m, R = a.useMemo(() => {
        let e = C.entry(S ?? j)?.parentPanelKey;
        if (null != e) return C.getPanelOrThrow(e)
    }, [S, C, j]), {
        navigateWithValidation: I
    } = (0, o.L_)();
    a.useEffect(() => {
        h.A.init({
            accessibleDirectory: C,
            onViewChange: y,
            navigateWithValidation: (e, t) => {
                null == N.entry(e) && E?.(), I(t)
            }
        })
    }, [C, I, y, E, N]);
    let [T, k] = a.useState(!0);
    (0, i.Ay)(() => (h.A.navigate(j, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == r
    }), k(!1), () => {
        h.A.reset(), f.A.reset(), d.A.resetState()
    }));
    let w = a.useMemo(() => ({
            visibleDirectory: N,
            accessibleDirectory: C
        }), [N, C]),
        L = a.useMemo(() => () => I(p), [I, p]),
        M = null != S ? N.get(S) : void 0;
    return (0, n.jsx)(c.x.Provider, {
        value: w,
        children: (0, n.jsxs)("div", {
            className: _.k,
            children: [(0, n.jsx)(s.L, {
                root: A,
                onClose: L,
                footer: g,
                emptyState: v,
                searchBar: b
            }), (0, n.jsx)(l.A, {
                onClose: L,
                setting: T ? void 0 : M ?? R
            })]
        })
    })
}

function p(e) {
    return (0, n.jsx)(o.ms, {
        children: (0, n.jsx)(m, {
            ...e
        })
    })
}