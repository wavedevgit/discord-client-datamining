/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var r = n(627968),
    l = n(64700),
    i = n(964486),
    a = n(250703),
    s = n(877260),
    o = n(823092),
    u = n(199966),
    c = n(669550),
    d = n(894858),
    h = n(272053),
    m = n(397274),
    f = n(285347);

function p(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: p,
        onClose: v,
        sidebarFooter: y,
        searchBar: g,
        onViewChange: _,
        emptyState: x,
        searchQuery: E,
        clearSearchQuery: A
    } = e, S = d.A.useField("currentPanelKey"), {
        node: b,
        visibleDirectory: N,
        accessibleDirectory: j
    } = (0, c.Ay)(t, E ?? ""), C = null != n && N.entry(n)?.parentPanelKey != null ? n : p, R = l.useMemo(() => {
        let e = j.entry(S ?? C)?.parentPanelKey;
        if (null != e) return j.getPanelOrThrow(e)
    }, [S, j, C]), {
        navigateWithValidation: I
    } = (0, o.L_)(), T = l.useMemo(() => () => I(v), [I, v]);
    l.useEffect(() => {
        h.A.init({
            accessibleDirectory: j,
            onViewChange: _,
            navigateWithValidation: (e, t) => {
                null == N.entry(e) && A?.(), I(t)
            },
            closeWithValidation: T
        })
    }, [j, I, _, A, N, T]);
    let [w, k] = l.useState(!0);
    (0, i.Ay)(() => (h.A.navigate(C, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), k(!1), () => {
        h.A.reset(), m.A.reset(), d.A.resetState()
    }));
    let L = l.useMemo(() => ({
            visibleDirectory: N,
            accessibleDirectory: j
        }), [N, j]),
        O = null != S ? N.get(S) : void 0;
    return (0, r.jsx)(u.x.Provider, {
        value: L,
        children: (0, r.jsxs)("div", {
            className: f.k,
            children: [(0, r.jsx)(s.L, {
                root: b,
                onClose: T,
                footer: y,
                emptyState: x,
                searchBar: g
            }), (0, r.jsx)(a.A, {
                onClose: T,
                setting: w ? void 0 : O ?? R
            })]
        })
    })
}

function v(e) {
    return (0, r.jsx)(o.ms, {
        children: (0, r.jsx)(p, {
            ...e
        })
    })
}