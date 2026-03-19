/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
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

function g(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: g,
        onClose: p,
        sidebarFooter: x,
        searchBar: _,
        onViewChange: b,
        emptyState: y,
        searchQuery: v,
        clearSearchQuery: A
    } = e, j = d.A.useField("currentPanelKey"), {
        node: N,
        visibleDirectory: C,
        accessibleDirectory: S
    } = (0, u.Ay)(t, v ?? ""), k = null != n && C.entry(n)?.parentPanelKey != null ? n : g, E = i.useMemo(() => {
        let e = S.entry(j ?? k)?.parentPanelKey;
        if (null != e) return S.getPanelOrThrow(e)
    }, [j, S, k]), {
        navigateWithValidation: w
    } = (0, o.L_)();
    i.useEffect(() => {
        m.A.init({
            accessibleDirectory: S,
            onViewChange: b,
            navigateWithValidation: (e, t) => {
                null == C.entry(e) && A?.(), w(t)
            }
        })
    }, [S, w, b, A, C]);
    let [I, T] = i.useState(!0);
    (0, a.Ay)(() => (m.A.navigate(k, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), T(!1), () => {
        m.A.reset(), f.A.reset(), d.A.resetState()
    }));
    let R = i.useMemo(() => ({
            visibleDirectory: C,
            accessibleDirectory: S
        }), [C, S]),
        D = i.useMemo(() => () => w(p), [w, p]),
        O = null != j ? C.get(j) : void 0;
    return (0, r.jsx)(c.x.Provider, {
        value: R,
        children: (0, r.jsxs)("div", {
            className: h.k,
            children: [(0, r.jsx)(l.L, {
                root: N,
                onClose: D,
                footer: x,
                emptyState: y,
                searchBar: _
            }), (0, r.jsx)(s.A, {
                onClose: D,
                setting: I ? void 0 : O ?? E
            })]
        })
    })
}

function p(e) {
    return (0, r.jsx)(o.ms, {
        children: (0, r.jsx)(g, {
            ...e
        })
    })
}