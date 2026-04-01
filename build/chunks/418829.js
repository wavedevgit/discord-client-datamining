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
    u = n(199966),
    c = n(669550),
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
        accessibleDirectory: j
    } = (0, c.Ay)(t, E ?? ""), C = null != n && N.entry(n)?.parentPanelKey != null ? n : p, I = i.useMemo(() => {
        let e = j.entry(S ?? C)?.parentPanelKey;
        if (null != e) return j.getPanelOrThrow(e)
    }, [S, j, C]), {
        navigateWithValidation: R
    } = (0, o.L_)();
    i.useEffect(() => {
        h.A.init({
            accessibleDirectory: j,
            onViewChange: g,
            navigateWithValidation: (e, t) => {
                null == N.entry(e) && A?.(), R(t)
            }
        })
    }, [j, R, g, A, N]);
    let [T, w] = i.useState(!0);
    (0, l.Ay)(() => (h.A.navigate(C, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), w(!1), () => {
        h.A.reset(), m.A.reset(), d.A.resetState()
    }));
    let k = i.useMemo(() => ({
            visibleDirectory: N,
            accessibleDirectory: j
        }), [N, j]),
        L = i.useMemo(() => () => R(_), [R, _]),
        O = null != S ? N.get(S) : void 0;
    return (0, r.jsx)(u.x.Provider, {
        value: k,
        children: (0, r.jsxs)("div", {
            className: f.k,
            children: [(0, r.jsx)(s.L, {
                root: b,
                onClose: L,
                footer: v,
                emptyState: x,
                searchBar: y
            }), (0, r.jsx)(a.A, {
                onClose: L,
                setting: T ? void 0 : O ?? I
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