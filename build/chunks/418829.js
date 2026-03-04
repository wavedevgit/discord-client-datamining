/** chunk id: 418829, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var r = n(627968),
    a = n(64700),
    i = n(942381),
    s = n(964486),
    l = n(250703),
    o = n(877260),
    c = n(823092),
    u = n(199966),
    d = n(669550),
    _ = n(894858),
    m = n(500425);

function g(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: g,
        onClose: b,
        sidebarFooter: p,
        onPanelChange: h,
        emptyState: f,
        searchQuery: x,
        onSearchChange: y
    } = e, C = _.A.useField("currentPanelKey"), {
        node: A,
        visibleDirectory: v,
        accessibleDirectory: S
    } = (0, d.Ay)(t, x ?? ""), T = null != n && v.entry(n)?.parentPanelKey != null ? n : g, I = a.useMemo(() => {
        let e = S.entry(C ?? T)?.parentPanelKey;
        if (null != e) return S.getPanelOrThrow(e)
    }, [C, S, T]), {
        navigateWithValidation: N
    } = (0, c.L_)();
    (0, s.Ay)(() => {
        let e = v.entry(T).parentPanelKey,
            t = v.entry(T)?.parentTabKey,
            r = v.entry(T)?.parentCategoryKey,
            a = v.entry(T)?.parentAccordionKey;
        return _.A.setState({
            currentPanelKey: e,
            currentTabKeys: null != t ? new Map([
                [e, t]
            ]) : new Map,
            currentCategoryKey: r,
            navTransition: {
                targetKey: T,
                targetAccordionKey: a,
                animateScroll: !1
            },
            showNavigationMobile: null == n
        }), () => _.A.resetState()
    }), a.useEffect(() => _.A.subscribe(e => ({
        requestedTargetKey: e.requestedTargetKey,
        currentPanelKey: e.currentPanelKey
    }), e => {
        let {
            requestedTargetKey: t,
            currentPanelKey: n
        } = e;
        if (null == t) return;
        let r = v.entry(t);
        if (null == r) return void y?.("");
        let a = r.parentPanelKey;
        if (null == a) return void _.A.setState({
            requestedTargetKey: void 0
        });
        let i = _.A.getField("currentTabKeys"),
            s = null != r.parentTabKey ? new Map(i).set(a, r.parentTabKey) : i,
            l = r.parentPanelKey === n && (null == r.parentTabKey || r.parentTabKey === i.get(a)),
            o = () => {
                _.A.setState({
                    requestedTargetKey: void 0,
                    currentPanelKey: r.parentPanelKey,
                    currentTabKeys: s,
                    currentCategoryKey: r.parentCategoryKey,
                    navTransition: {
                        targetKey: t,
                        targetAccordionKey: r.parentAccordionKey,
                        animateScroll: l
                    }
                })
            };
        r.parentPanelKey !== n ? N(() => {
            o(), h?.(a)
        }) : o()
    }, {
        equalityFn: i.x
    }), [v, N, h, y]);
    let j = a.useMemo(() => ({
            visibleDirectory: v,
            accessibleDirectory: S
        }), [v, S]),
        k = a.useMemo(() => () => N(b), [N, b]),
        E = null != C ? v.get(C) : void 0;
    return (0, r.jsx)(u.x.Provider, {
        value: j,
        children: (0, r.jsxs)("div", {
            className: m.k,
            children: [(0, r.jsx)(o.L, {
                root: A,
                footer: p,
                onClose: k,
                emptyState: f,
                searchQuery: x,
                onSearchChange: y
            }), (0, r.jsx)(l.A, {
                onClose: k,
                setting: E ?? I
            })]
        })
    })
}

function b(e) {
    return (0, r.jsx)(c.ms, {
        children: (0, r.jsx)(g, {
            ...e
        })
    })
}