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
        node: N,
        visibleDirectory: b,
        accessibleDirectory: C
    } = (0, c.Ay)(t, E ?? ""), j = null != n && b.entry(n)?.parentPanelKey != null ? n : m, T = i.useMemo(() => {
        let e = C.entry(A ?? j)?.parentPanelKey;
        if (null != e) return C.getPanelOrThrow(e)
    }, [A, C, j]), {
        navigateWithValidation: R
    } = (0, o.L_)(), I = i.useMemo(() => () => R(f), [R, f]);
    i.useEffect(() => {
        h.A.init({
            accessibleDirectory: C,
            onViewChange: v,
            navigateWithValidation: (e, t) => {
                null == b.entry(e) && x?.(), R(t)
            },
            closeWithValidation: I
        })
    }, [C, R, v, x, b, I]);
    let [k, w] = i.useState(!0);
    (0, a.Ay)(() => (h.A.navigate(j, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), w(!1), () => {
        h.A.reset(), p.A.reset(), d.A.resetState()
    }));
    let O = i.useMemo(() => ({
            visibleDirectory: b,
            accessibleDirectory: C
        }), [b, C]),
        D = null != A ? b.get(A) : void 0;
    return (0, r.jsx)(u.x.Provider, {
        value: O,
        children: (0, r.jsxs)("div", {
            className: _.k,
            children: [(0, r.jsx)(l.L, {
                root: N,
                onClose: I,
                footer: g,
                emptyState: S,
                searchBar: y
            }), (0, r.jsx)(s.A, {
                onClose: I,
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