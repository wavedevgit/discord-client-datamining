/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    l = n(964486),
    a = n(250703),
    s = n(877260),
    o = n(823092),
    c = n(199966),
    u = n(669550),
    d = n(894858),
    h = n(272053),
    m = n(397274),
    f = n(776644);

function p(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: p,
        onClose: _,
        sidebarFooter: v,
        searchBar: y,
        onViewChange: g,
        emptyState: x,
        searchQuery: E,
        clearSearchQuery: A
    } = e, S = d.A.useField("currentPanelKey"), {
        node: b,
        visibleDirectory: N,
        accessibleDirectory: C
    } = (0, u.Ay)(t, E ?? ""), j = null != n && N.entry(n)?.parentPanelKey != null ? n : p, R = i.useMemo(() => {
        let e = C.entry(S ?? j)?.parentPanelKey;
        if (null != e) return C.getPanelOrThrow(e)
    }, [S, C, j]), {
        navigateWithValidation: I
    } = (0, o.L_)(), T = i.useMemo(() => () => I(_), [I, _]);
    i.useEffect(() => {
        h.A.init({
            accessibleDirectory: C,
            onViewChange: g,
            navigateWithValidation: (e, t) => {
                null == N.entry(e) && A?.(), I(t)
            },
            closeWithValidation: T
        })
    }, [C, I, g, A, N, T]);
    let [w, k] = i.useState(!0);
    (0, l.Ay)(() => (h.A.navigate(j, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), k(!1), () => {
        h.A.reset(), m.A.reset(), d.A.resetState()
    }));
    let L = i.useMemo(() => ({
            visibleDirectory: N,
            accessibleDirectory: C
        }), [N, C]),
        O = null != S ? N.get(S) : void 0;
    return (0, r.jsx)(c.x.Provider, {
        value: L,
        children: (0, r.jsxs)("div", {
            className: f.k,
            children: [(0, r.jsx)(s.L, {
                root: b,
                onClose: T,
                footer: v,
                emptyState: x,
                searchBar: y
            }), (0, r.jsx)(a.A, {
                onClose: T,
                setting: w ? void 0 : O ?? R
            })]
        })
    })
}

function _(e) {
    return (0, r.jsx)(o.ms, {
        children: (0, r.jsx)(p, {
            ...e
        })
    })
}