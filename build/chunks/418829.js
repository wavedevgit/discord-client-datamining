/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
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
    h = n(272053),
    p = n(397274),
    _ = n(910772);

function m(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: m,
        onClose: f,
        sidebarFooter: g,
        searchBar: y,
        onViewChange: v,
        emptyState: S,
        searchQuery: E,
        clearSearchQuery: x
    } = e, A = d.A.useField("currentPanelKey"), {
        node: b,
        visibleDirectory: N,
        accessibleDirectory: C
    } = (0, c.Ay)(t, E ?? ""), j = null != n && N.entry(n)?.parentPanelKey != null ? n : m, T = i.useMemo(() => {
        let e = C.entry(A ?? j)?.parentPanelKey;
        if (null != e) return C.getPanelOrThrow(e)
    }, [A, C, j]), {
        navigateWithValidation: I
    } = (0, o.L_)(), R = i.useMemo(() => () => I(f), [I, f]);
    i.useEffect(() => {
        h.A.init({
            accessibleDirectory: C,
            onViewChange: v,
            navigateWithValidation: (e, t) => {
                null == N.entry(e) && x?.(), I(t)
            },
            closeWithValidation: R
        })
    }, [C, I, v, x, N, R]);
    let [k, O] = i.useState(!0);
    (0, a.Ay)(() => (h.A.navigate(j, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), O(!1), () => {
        h.A.reset(), p.A.reset(), d.A.resetState()
    }));
    let w = i.useMemo(() => ({
            visibleDirectory: N,
            accessibleDirectory: C
        }), [N, C]),
        D = null != A ? N.get(A) : void 0;
    return (0, r.jsx)(u.x.Provider, {
        value: w,
        children: (0, r.jsxs)("div", {
            className: _.k,
            children: [(0, r.jsx)(l.L, {
                root: b,
                onClose: R,
                footer: g,
                emptyState: S,
                searchBar: y
            }), (0, r.jsx)(s.A, {
                onClose: R,
                setting: k ? void 0 : D ?? T
            })]
        })
    })
}

function f(e) {
    return (0, r.jsx)(o.ms, {
        children: (0, r.jsx)(m, {
            ...e
        })
    })
}