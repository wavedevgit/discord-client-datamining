/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
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
    } = (0, u.Ay)(t, E ?? ""), C = null != n && N.entry(n)?.parentPanelKey != null ? n : p, R = i.useMemo(() => {
        let e = j.entry(S ?? C)?.parentPanelKey;
        if (null != e) return j.getPanelOrThrow(e)
    }, [S, j, C]), {
        navigateWithValidation: I
    } = (0, o.L_)();
    i.useEffect(() => {
        h.A.init({
            accessibleDirectory: j,
            onViewChange: g,
            navigateWithValidation: (e, t) => {
                null == N.entry(e) && A?.(), I(t)
            }
        })
    }, [j, I, g, A, N]);
    let [T, w] = i.useState(!0);
    (0, a.Ay)(() => (h.A.navigate(C, {
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
        L = i.useMemo(() => () => I(_), [I, _]),
        O = null != S ? N.get(S) : void 0;
    return (0, r.jsx)(c.x.Provider, {
        value: k,
        children: (0, r.jsxs)("div", {
            className: f.k,
            children: [(0, r.jsx)(s.L, {
                root: b,
                onClose: L,
                footer: v,
                emptyState: x,
                searchBar: y
            }), (0, r.jsx)(l.A, {
                onClose: L,
                setting: T ? void 0 : O ?? R
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