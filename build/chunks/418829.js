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
    h = n(272053),
    _ = n(397274),
    f = n(776644);

function m(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: m,
        onClose: p,
        sidebarFooter: y,
        searchBar: b,
        onViewChange: v,
        emptyState: g,
        searchQuery: x,
        clearSearchQuery: E
    } = e, A = d.A.useField("currentPanelKey"), {
        node: S,
        visibleDirectory: N,
        accessibleDirectory: C
    } = (0, u.Ay)(t, x ?? ""), j = null != n && N.entry(n)?.parentPanelKey != null ? n : m, I = i.useMemo(() => {
        let e = C.entry(A ?? j)?.parentPanelKey;
        if (null != e) return C.getPanelOrThrow(e)
    }, [A, C, j]), {
        navigateWithValidation: T
    } = (0, o.L_)();
    i.useEffect(() => {
        h.A.init({
            accessibleDirectory: C,
            onViewChange: v,
            navigateWithValidation: (e, t) => {
                null == N.entry(e) && E?.(), T(t)
            }
        })
    }, [C, T, v, E, N]);
    let [R, k] = i.useState(!0);
    (0, a.Ay)(() => (h.A.navigate(j, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), k(!1), () => {
        h.A.reset(), _.A.reset(), d.A.resetState()
    }));
    let w = i.useMemo(() => ({
            visibleDirectory: N,
            accessibleDirectory: C
        }), [N, C]),
        L = i.useMemo(() => () => T(p), [T, p]),
        D = null != A ? N.get(A) : void 0;
    return (0, r.jsx)(c.x.Provider, {
        value: w,
        children: (0, r.jsxs)("div", {
            className: f.k,
            children: [(0, r.jsx)(s.L, {
                root: S,
                onClose: L,
                footer: y,
                emptyState: g,
                searchBar: b
            }), (0, r.jsx)(l.A, {
                onClose: L,
                setting: R ? void 0 : D ?? I
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