/** chunk id: 418829 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
});
var r = n(627968),
    a = n(64700),
    i = n(942381),
    l = n(964486),
    s = n(250703),
    o = n(877260),
    u = n(823092),
    c = n(199966),
    d = n(669550),
    h = n(894858),
    g = n(894803);

function f(e) {
    let {
        partialRoot: t,
        target: n,
        defaultTarget: f,
        onClose: m,
        sidebarFooter: y,
        onPanelChange: p,
        emptyState: v,
        searchQuery: x,
        onSearchChange: b
    } = e, A = h.A.useField("currentPanelKey"), {
        node: S,
        visibleDirectory: _,
        accessibleDirectory: j
    } = (0, d.Ay)(t, x ?? ""), N = null != n && _.entry(n)?.parentPanelKey != null ? n : f, C = a.useMemo(() => {
        let e = j.entry(A ?? N)?.parentPanelKey;
        if (null != e) return j.getPanelOrThrow(e)
    }, [A, j, N]), {
        navigateWithValidation: E
    } = (0, u.L_)();
    (0, l.Ay)(() => {
        let e = _.entry(N).parentPanelKey,
            t = _.entry(N)?.parentTabKey,
            r = _.entry(N)?.parentCategoryKey,
            a = _.entry(N)?.parentAccordionKey;
        return h.A.setState({
            currentPanelKey: e,
            currentTabKeys: null != t ? new Map([
                [e, t]
            ]) : new Map,
            currentCategoryKey: r,
            navTransition: {
                targetKey: N,
                targetAccordionKey: a,
                animateScroll: !1
            },
            showNavigationMobile: null == n
        }), () => h.A.resetState()
    }), a.useEffect(() => h.A.subscribe(e => ({
        requestedTargetKey: e.requestedTargetKey,
        currentPanelKey: e.currentPanelKey
    }), e => {
        let {
            requestedTargetKey: t,
            currentPanelKey: n
        } = e;
        if (null == t) return;
        let r = _.entry(t);
        if (null == r) return void b?.("");
        let a = r.parentPanelKey;
        if (null == a) return void h.A.setState({
            requestedTargetKey: void 0
        });
        let i = h.A.getField("currentTabKeys"),
            l = null != r.parentTabKey ? new Map(i).set(a, r.parentTabKey) : i,
            s = r.parentPanelKey === n && (null == r.parentTabKey || r.parentTabKey === i.get(a)),
            o = () => {
                h.A.setState({
                    requestedTargetKey: void 0,
                    currentPanelKey: r.parentPanelKey,
                    currentTabKeys: l,
                    currentCategoryKey: r.parentCategoryKey,
                    navTransition: {
                        targetKey: t,
                        targetAccordionKey: r.parentAccordionKey,
                        animateScroll: s
                    }
                })
            };
        r.parentPanelKey !== n ? E(() => {
            o(), p?.(a)
        }) : o()
    }, {
        equalityFn: i.x
    }), [_, E, p, b]);
    let T = a.useMemo(() => ({
            visibleDirectory: _,
            accessibleDirectory: j
        }), [_, j]),
        k = a.useMemo(() => () => E(m), [E, m]),
        w = null != A ? _.get(A) : void 0;
    return (0, r.jsx)(c.x.Provider, {
        value: T,
        children: (0, r.jsxs)("div", {
            className: g.k,
            children: [(0, r.jsx)(o.L, {
                root: S,
                footer: y,
                onClose: k,
                emptyState: v,
                searchQuery: x,
                onSearchChange: b
            }), (0, r.jsx)(s.A, {
                onClose: k,
                setting: w ?? C
            })]
        })
    })
}

function m(e) {
    return (0, r.jsx)(u.ms, {
        children: (0, r.jsx)(f, {
            ...e
        })
    })
}