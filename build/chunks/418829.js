/** Chunk was on 65076 **/
/** chunk id: 418829, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => p
}), r(896048);
var n = r(627968),
    l = r(64700),
    o = r(942381),
    a = r(964486),
    i = r(250703),
    c = r(877260),
    s = r(823092),
    u = r(199966),
    y = r(669550),
    f = r(894858),
    b = r(500425);

function d(e) {
    var t;
    let {
        partialRoot: r,
        target: d,
        defaultTarget: p,
        onClose: g,
        sidebarFooter: O,
        onPanelChange: j,
        emptyState: m,
        searchQuery: h,
        onSearchChange: v
    } = e, x = f.A.useField("currentPanelKey"), {
        node: S,
        visibleDirectory: P,
        accessibleDirectory: _
    } = (0, y.Ay)(r, null != h ? h : ""), w = null != d && (null == (t = P.entry(d)) ? void 0 : t.parentPanelKey) != null ? d : p, C = l.useMemo(() => {
        var e;
        let t = null == (e = _.entry(null != x ? x : w)) ? void 0 : e.parentPanelKey;
        if (null != t) return _.getPanelOrThrow(t)
    }, [x, _, w]), {
        navigateWithValidation: A
    } = (0, s.L_)();
    (0, a.Ay)(() => {
        var e, t, r;
        let n = P.entry(w).parentPanelKey,
            l = null == (e = P.entry(w)) ? void 0 : e.parentTabKey,
            o = null == (t = P.entry(w)) ? void 0 : t.parentCategoryKey,
            a = null == (r = P.entry(w)) ? void 0 : r.parentAccordionKey;
        return f.A.setState({
            currentPanelKey: n,
            currentTabKeys: null != l ? new Map([
                [n, l]
            ]) : new Map,
            currentCategoryKey: o,
            disableSidebarCategoryAutoSelect: !0,
            navTransition: {
                targetKey: w,
                targetAccordionKey: a,
                animateScroll: !1
            },
            showNavigationMobile: null == d
        }), () => f.A.resetState()
    }), l.useEffect(() => f.A.subscribe(e => ({
        requestedTargetKey: e.requestedTargetKey,
        currentPanelKey: e.currentPanelKey
    }), e => {
        let {
            requestedTargetKey: t,
            currentPanelKey: r
        } = e;
        if (null == t) return;
        let n = P.entry(t);
        if (null == n) {
            null == v || v("");
            return
        }
        let l = n.parentPanelKey;
        if (null == l) return void f.A.setState({
            requestedTargetKey: void 0
        });
        let o = f.A.getField("currentTabKeys"),
            a = null != n.parentTabKey ? new Map(o).set(l, n.parentTabKey) : o,
            i = n.parentPanelKey === r && (null == n.parentTabKey || n.parentTabKey === o.get(l)),
            c = () => {
                f.A.setState({
                    requestedTargetKey: void 0,
                    currentPanelKey: n.parentPanelKey,
                    currentTabKeys: a,
                    currentCategoryKey: n.parentCategoryKey,
                    disableSidebarCategoryAutoSelect: !0,
                    navTransition: {
                        targetKey: t,
                        targetAccordionKey: n.parentAccordionKey,
                        animateScroll: i
                    }
                })
            };
        n.parentPanelKey !== r ? A(() => {
            c(), null == j || j(l)
        }) : c()
    }, {
        equalityFn: o.x
    }), [P, A, j, v]);
    let T = l.useMemo(() => ({
            visibleDirectory: P,
            accessibleDirectory: _
        }), [P, _]),
        N = l.useMemo(() => () => A(g), [A, g]),
        E = null != x ? P.get(x) : void 0;
    return (0, n.jsx)(u.x.Provider, {
        value: T,
        children: (0, n.jsxs)("div", {
            className: b.k,
            children: [(0, n.jsx)(c.L, {
                root: S,
                footer: O,
                onClose: N,
                emptyState: m,
                searchQuery: h,
                onSearchChange: v
            }), (0, n.jsx)(i.A, {
                onClose: N,
                setting: null != E ? E : C
            })]
        })
    })
}

function p(e) {
    return (0, n.jsx)(s.ms, {
        children: (0, n.jsx)(d, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n;
                    n = r[t], t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })
            }
            return e
        }({}, e))
    })
}