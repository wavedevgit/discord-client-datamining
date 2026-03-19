/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(64700),
    a = n(964486),
    s = n(250703),
    l = n(877260),
    o = n(823092),
    c = n(199966),
    u = n(669550),
    d = n(894858),
    m = n(272053),
    f = n(397274),
    h = n(894803);

function p(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: p,
        onClose: g,
        sidebarFooter: x,
        searchBar: _,
        onViewChange: y,
        emptyState: v,
        searchQuery: b,
        clearSearchQuery: A
    } = e, j = d.A.useField("currentPanelKey"), {
        node: N,
        visibleDirectory: S,
        accessibleDirectory: C
    } = (0, u.Ay)(t, b ?? ""), k = null != n && S.entry(n)?.parentPanelKey != null ? n : p, E = i.useMemo(() => {
        let e = C.entry(j ?? k)?.parentPanelKey;
        if (null != e) return C.getPanelOrThrow(e)
    }, [j, C, k]), {
        navigateWithValidation: w
    } = (0, o.L_)();
    i.useEffect(() => {
        m.A.init({
            accessibleDirectory: C,
            onViewChange: y,
            navigateWithValidation: (e, t) => {
                null == S.entry(e) && A?.(), w(t)
            }
        })
    }, [C, w, y, A, S]);
    let [I, T] = i.useState(!0);
    (0, a.Ay)(() => (m.A.navigate(k, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), T(!1), () => {
        m.A.reset(), f.A.reset(), d.A.resetState()
    }));
    let R = i.useMemo(() => ({
            visibleDirectory: S,
            accessibleDirectory: C
        }), [S, C]),
        D = i.useMemo(() => () => w(g), [w, g]),
        O = null != j ? S.get(j) : void 0;
    return (0, r.jsx)(c.x.Provider, {
        value: R,
        children: (0, r.jsxs)("div", {
            className: h.k,
            children: [(0, r.jsx)(l.L, {
                root: N,
                onClose: D,
                footer: x,
                emptyState: v,
                searchBar: _
            }), (0, r.jsx)(s.A, {
                onClose: D,
                setting: I ? void 0 : O ?? E
            })]
        })
    })
}

function g(e) {
    return (0, r.jsx)(o.ms, {
        children: (0, r.jsx)(p, {
            ...e
        })
    })
}