/** chunk id: 877260, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => j
}), n(321073), n(896048);
var r = n(627968),
    o = n(64700),
    a = n(503698),
    i = n.n(a),
    l = n(837381),
    c = n(607399),
    s = n(554146),
    u = n(397927),
    _ = n(775602),
    d = n(928039),
    b = n(379848),
    p = n(97469),
    f = n(933297),
    y = n(894858),
    g = n(130177),
    m = n(188180),
    O = n(985018),
    h = n(658646);

function j(e) {
    let {
        root: t,
        footer: n,
        onClose: a,
        emptyState: s,
        searchQuery: g,
        onSearchChange: m
    } = e, j = y.A.useField("showNavigationMobile"), S = o.useRef(null), C = o.useMemo(() => {
        let e = [];
        return t.layout.forEach(t => {
            let {
                layout: n
            } = t;
            n.forEach(t => {
                if (null != t.trailing) switch (t.trailing.type) {
                    case f.S.BADGE_NEW:
                    case f.S.STRONGLY_DISCOURAGED_CUSTOM:
                        var n, r, o;
                        null == (r = (o = t.trailing).getDismissibleContentTypes) || null == (n = r.call(o)) || n.forEach(t => {
                            e.push(t)
                        })
                }
            })
        }), e
    }, [t.layout]), [P, w] = o.useMemo(() => {
        let e = [],
            n = [];
        return t.layout.forEach(t => {
            t.hoisted ? e.push(t) : n.push(t)
        }), [e, n]
    }, [t.layout]), k = (0, p.NC)(), T = (0, d.A)("settings-sidebar", S), A = y.A.useField("currentPanelKey");
    return o.useEffect(() => {
        var e;
        if (null == S.current || null == A) return;
        let t = y.A.getField("navTransition"),
            n = null == t || t.animateScroll,
            r = null == (e = S.current.getScrollerNode()) ? void 0 : e.querySelector('[data-settings-sidebar-item="'.concat(A, '"]'));
        null != r && S.current.scrollIntoViewNode({
            node: r,
            padding: 8,
            animate: !_.A.useReducedMotion && n
        })
    }, [A]), (0, r.jsx)(u.NPJ, {
        theme: k,
        children: e => (0, r.jsx)(b.Ay, {
            contentTypes: C,
            children: t => {
                let {
                    visibleContent: o
                } = t;
                return (0, r.jsxs)("div", {
                    className: i()(h.pz, e, {
                        [h.Hw]: c.Fr,
                        [h.n7]: j
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: h.gM,
                        children: [c.Fr && (0, r.jsx)("div", {
                            className: h.hg,
                            children: (0, r.jsx)(u.K0, {
                                icon: u.d$L,
                                onClick: a,
                                variant: "icon-only",
                                size: "sm",
                                "aria-label": O.intl.string(O.t.cpT0Cq)
                            })
                        }), (0, r.jsx)("div", {
                            children: P.map(e => (0, r.jsx)(x, {
                                section: e,
                                visibleContent: o,
                                hoisted: !0
                            }, e.key))
                        }), null != g && null != m && (0, r.jsx)(v, {
                            searchQuery: g,
                            onSearchChange: m
                        }), null != s && 0 === w.length && (0, r.jsx)(s, {})]
                    }), (0, r.jsx)(l.hD, {
                        navigator: T,
                        children: (0, r.jsx)(l.PR, {
                            children: e => {
                                var t, a;
                                let {
                                    ref: i
                                } = e, l = function(e, t) {
                                    if (null == e) return {};
                                    var n, r, o, a = {};
                                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                                        for (o = 0, n = Reflect.ownKeys(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                                        return a
                                    }
                                    if (a = function(e, t) {
                                            if (null == e) return {};
                                            var n, r, o = {},
                                                a = Object.getOwnPropertyNames(e);
                                            for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                                            return o
                                        }(e, t), Object.getOwnPropertySymbols)
                                        for (o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) r = n[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                                    return a
                                }(e, ["ref"]);
                                return (0, r.jsxs)(u.ChK, (t = function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))), r.forEach(function(t) {
                                            var r;
                                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                                value: r,
                                                enumerable: !0,
                                                configurable: !0,
                                                writable: !0
                                            }) : e[t] = r
                                        })
                                    }
                                    return e
                                }({
                                    ref: e => {
                                        var t;
                                        S.current = e, i.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null
                                    },
                                    className: h.Mt,
                                    fade: !0
                                }, l), a = a = {
                                    children: [(0, r.jsx)("nav", {
                                        className: h.C$,
                                        children: w.map(e => (0, r.jsx)(x, {
                                            section: e,
                                            visibleContent: o
                                        }, e.key))
                                    }), null != n && (0, r.jsx)(n, {})]
                                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r)
                                    }
                                    return n
                                })(Object(a)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                                }), t))
                            }
                        })
                    })]
                })
            }
        })
    })
}

function x(e) {
    var t;
    let {
        section: n,
        visibleContent: o,
        hoisted: a = !1
    } = e, i = null == (t = n.useTitle) ? void 0 : t.call(n);
    return (0, r.jsxs)("ul", {
        className: h.uW,
        "aria-label": i,
        children: [null != i && (0, r.jsx)("div", {
            className: h.a9,
            children: (0, r.jsx)(u.Heading, {
                className: h.Pf,
                variant: "heading-sm/medium",
                color: "text-muted",
                children: i
            })
        }), n.layout.map(e => (0, r.jsx)(m.X, {
            node: e,
            visibleContent: o,
            hoisted: a
        }, e.key))]
    })
}

function v(e) {
    let {
        searchQuery: t,
        onSearchChange: n
    } = e, a = o.useRef(null), [i, l] = (0, b.kn)([s.M.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]), c = o.useCallback(() => {
        n("")
    }, [n]), _ = o.useMemo(() => ({
        title: O.intl.string(O.t.Kv519a),
        body: O.intl.string(O.t.cTGJBZ),
        badge: "new",
        position: "right",
        align: "center",
        scrollBehavior: "sticky"
    }), []);
    return (0, r.jsxs)("div", {
        className: h.PP,
        children: [(0, r.jsx)(u.IWV, {
            size: "md",
            query: t,
            onChange: n,
            onClear: c
        }), (0, r.jsx)("div", {
            className: h.To,
            ref: a
        }), (0, r.jsx)(g.A, {
            dismissibleContentType: s.M.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
            targetElementRef: a,
            visibleContent: i,
            markAsDismissed: l,
            props: _
        })]
    })
}