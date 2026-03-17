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
    g = n(500425);

function h(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: h,
        onClose: p,
        sidebarFooter: y,
        searchBar: _,
        onPanelChange: x,
        emptyState: b,
        searchQuery: v,
        clearSearchQuery: A
    } = e, j = d.A.useField("currentPanelKey"), {
        node: S,
        visibleDirectory: N,
        accessibleDirectory: C
    } = (0, u.Ay)(t, v ?? ""), k = null != n && N.entry(n)?.parentPanelKey != null ? n : h, E = i.useMemo(() => {
        let e = C.entry(j ?? k)?.parentPanelKey;
        if (null != e) return C.getPanelOrThrow(e)
    }, [j, C, k]), {
        navigateWithValidation: w
    } = (0, o.L_)();
    i.useEffect(() => {
        m.A.init({
            accessibleDirectory: C,
            onPanelChange: x,
            navigateWithValidation: (e, t) => {
                null == N.entry(e) && A?.(), w(t)
            }
        })
    }, [C, w, x, A, N]);
    let [T, I] = i.useState(!0);
    (0, a.Ay)(() => (m.A.navigate(k, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), I(!1), () => {
        m.A.reset(), f.A.reset(), d.A.resetState()
    }));
    let R = i.useMemo(() => ({
            visibleDirectory: N,
            accessibleDirectory: C
        }), [N, C]),
        D = i.useMemo(() => () => w(p), [w, p]),
        M = null != j ? N.get(j) : void 0;
    return (0, r.jsx)(c.x.Provider, {
        value: R,
        children: (0, r.jsxs)("div", {
            className: g.k,
            children: [(0, r.jsx)(l.L, {
                root: S,
                onClose: D,
                footer: y,
                emptyState: b,
                searchBar: _
            }), (0, r.jsx)(s.A, {
                onClose: D,
                setting: T ? void 0 : M ?? E
            })]
        })
    })
}

function p(e) {
    return (0, r.jsx)(o.ms, {
        children: (0, r.jsx)(h, {
            ...e
        })
    })
}