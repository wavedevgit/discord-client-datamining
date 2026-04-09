/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
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
    m = n(397274),
    p = n(776644);

function f(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: f,
        onClose: _,
        sidebarFooter: g,
        searchBar: y,
        onViewChange: v,
        emptyState: x,
        searchQuery: S,
        clearSearchQuery: E
    } = e, A = d.A.useField("currentPanelKey"), {
        node: N,
        visibleDirectory: b,
        accessibleDirectory: j
    } = (0, c.Ay)(t, S ?? ""), C = null != n && b.entry(n)?.parentPanelKey != null ? n : f, R = i.useMemo(() => {
        let e = j.entry(A ?? C)?.parentPanelKey;
        if (null != e) return j.getPanelOrThrow(e)
    }, [A, j, C]), {
        navigateWithValidation: T
    } = (0, o.L_)(), I = i.useMemo(() => () => T(_), [T, _]);
    i.useEffect(() => {
        h.A.init({
            accessibleDirectory: j,
            onViewChange: v,
            navigateWithValidation: (e, t) => {
                null == b.entry(e) && E?.(), T(t)
            },
            closeWithValidation: I
        })
    }, [j, T, v, E, b, I]);
    let [w, k] = i.useState(!0);
    (0, a.Ay)(() => (h.A.navigate(C, {
        animatePanelScroll: !1,
        animateSidebarScroll: !1,
        showNavigationMobile: null == n
    }), k(!1), () => {
        h.A.reset(), m.A.reset(), d.A.resetState()
    }));
    let O = i.useMemo(() => ({
            visibleDirectory: b,
            accessibleDirectory: j
        }), [b, j]),
        L = null != A ? b.get(A) : void 0;
    return (0, r.jsx)(u.x.Provider, {
        value: O,
        children: (0, r.jsxs)("div", {
            className: p.k,
            children: [(0, r.jsx)(l.L, {
                root: N,
                onClose: I,
                footer: g,
                emptyState: x,
                searchBar: y
            }), (0, r.jsx)(s.A, {
                onClose: I,
                setting: w ? void 0 : L ?? R
            })]
        })
    })
}

function _(e) {
    return (0, r.jsx)(o.ms, {
        children: (0, r.jsx)(f, {
            ...e
        })
    })
}