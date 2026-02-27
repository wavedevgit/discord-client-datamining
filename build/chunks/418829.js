/** chunk id: 418829, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var a = n(627968),
    r = n(64700),
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
        onClose: p,
        sidebarFooter: b,
        onPanelChange: f,
        emptyState: h,
        searchQuery: x,
        onSearchChange: y
    } = e, C = _.A.useField("currentPanelKey"), {
        node: A,
        visibleDirectory: v,
        accessibleDirectory: S
    } = (0, d.Ay)(t, x ?? ""), T = null != n && v.entry(n)?.parentPanelKey != null ? n : g, I = r.useMemo(() => {
        let e = S.entry(C ?? T)?.parentPanelKey;
        if (null != e) return S.getPanelOrThrow(e)
    }, [C, S, T]), {
        navigateWithValidation: N
    } = (0, c.L_)();
    (0, s.Ay)(() => {
        let e = v.entry(T).parentPanelKey,
            t = v.entry(T)?.parentTabKey,
            a = v.entry(T)?.parentCategoryKey,
            r = v.entry(T)?.parentAccordionKey;
        return _.A.setState({
            currentPanelKey: e,
            currentTabKeys: null != t ? new Map([
                [e, t]
            ]) : new Map,
            currentCategoryKey: a,
            navTransition: {
                targetKey: T,
                targetAccordionKey: r,
                animateScroll: !1
            },
            showNavigationMobile: null == n
        }), () => _.A.resetState()
    }), r.useEffect(() => _.A.subscribe(e => ({
        requestedTargetKey: e.requestedTargetKey,
        currentPanelKey: e.currentPanelKey
    }), e => {
        let {
            requestedTargetKey: t,
            currentPanelKey: n
        } = e;
        if (null == t) return;
        let a = v.entry(t);
        if (null == a) return void y?.("");
        let r = a.parentPanelKey;
        if (null == r) return void _.A.setState({
            requestedTargetKey: void 0
        });
        let i = _.A.getField("currentTabKeys"),
            s = null != a.parentTabKey ? new Map(i).set(r, a.parentTabKey) : i,
            l = a.parentPanelKey === n && (null == a.parentTabKey || a.parentTabKey === i.get(r)),
            o = () => {
                _.A.setState({
                    requestedTargetKey: void 0,
                    currentPanelKey: a.parentPanelKey,
                    currentTabKeys: s,
                    currentCategoryKey: a.parentCategoryKey,
                    navTransition: {
                        targetKey: t,
                        targetAccordionKey: a.parentAccordionKey,
                        animateScroll: l
                    }
                })
            };
        a.parentPanelKey !== n ? N(() => {
            o(), f?.(r)
        }) : o()
    }, {
        equalityFn: i.x
    }), [v, N, f, y]);
    let j = r.useMemo(() => ({
            visibleDirectory: v,
            accessibleDirectory: S
        }), [v, S]),
        k = r.useMemo(() => () => N(p), [N, p]),
        E = null != C ? v.get(C) : void 0;
    return (0, a.jsx)(u.x.Provider, {
        value: j,
        children: (0, a.jsxs)("div", {
            className: m.k,
            children: [(0, a.jsx)(o.L, {
                root: A,
                footer: b,
                onClose: k,
                emptyState: h,
                searchQuery: x,
                onSearchChange: y
            }), (0, a.jsx)(l.A, {
                onClose: k,
                setting: E ?? I
            })]
        })
    })
}

function p(e) {
    return (0, a.jsx)(c.ms, {
        children: (0, a.jsx)(g, {
            ...e
        })
    })
}