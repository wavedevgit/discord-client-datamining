/** Chunk was on 65076 **/
/** chunk id: 877260, original params: e,t,r (module,exports,require) **/
r.d(t, {
    L: () => v
}), r(321073), r(896048);
var n = r(627968),
    l = r(64700),
    o = r(503698),
    a = r.n(o),
    i = r(837381),
    c = r(607399),
    s = r(554146),
    u = r(397927),
    y = r(775602),
    f = r(928039),
    b = r(379848),
    d = r(97469),
    p = r(933297),
    g = r(894858),
    O = r(130177),
    j = r(188180),
    m = r(985018),
    h = r(658646);

function v(e) {
    let {
        root: t,
        footer: r,
        onClose: o,
        emptyState: s,
        searchQuery: O,
        onSearchChange: j
    } = e, v = g.A.useField("showNavigationMobile"), P = l.useRef(null), _ = l.useMemo(() => {
        let e = [];
        return t.layout.forEach(t => {
            let {
                layout: r
            } = t;
            r.forEach(t => {
                if (null != t.trailing) switch (t.trailing.type) {
                    case p.S.BADGE_NEW:
                    case p.S.STRONGLY_DISCOURAGED_CUSTOM:
                        var r, n, l;
                        null == (n = (l = t.trailing).getDismissibleContentTypes) || null == (r = n.call(l)) || r.forEach(t => {
                            e.push(t)
                        })
                }
            })
        }), e
    }, [t.layout]), [w, C] = l.useMemo(() => {
        let e = [],
            r = [];
        return t.layout.forEach(t => {
            t.hoisted ? e.push(t) : r.push(t)
        }), [e, r]
    }, [t.layout]), A = (0, d.NC)(), T = (0, f.A)("settings-sidebar", P), N = g.A.useField("currentPanelKey");
    return l.useEffect(() => {
        var e;
        if (null == P.current || null == N) return;
        let t = g.A.getField("navTransition"),
            r = null == t || t.animateScroll,
            n = null == (e = P.current.getScrollerNode()) ? void 0 : e.querySelector('[data-settings-sidebar-item="'.concat(N, '"]'));
        null != n && P.current.scrollIntoViewNode({
            node: n,
            padding: 8,
            animate: !y.A.useReducedMotion && r
        })
    }, [N]), (0, n.jsx)(u.NPJ, {
        theme: A,
        children: e => (0, n.jsx)(b.Ay, {
            contentTypes: _,
            children: t => {
                let {
                    visibleContent: l
                } = t;
                return (0, n.jsxs)("div", {
                    className: a()(h.pz, e, {
                        [h.Hw]: c.Fr,
                        [h.n7]: v
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: h.gM,
                        children: [c.Fr && (0, n.jsx)("div", {
                            className: h.hg,
                            children: (0, n.jsx)(u.K0, {
                                icon: u.d$L,
                                onClick: o,
                                variant: "icon-only",
                                size: "sm",
                                "aria-label": m.intl.string(m.t.cpT0Cq)
                            })
                        }), (0, n.jsx)("div", {
                            children: w.map(e => (0, n.jsx)(x, {
                                section: e,
                                visibleContent: l,
                                hoisted: !0
                            }, e.key))
                        }), null != O && null != j && (0, n.jsx)(S, {
                            searchQuery: O,
                            onSearchChange: j
                        }), null != s && 0 === C.length && (0, n.jsx)(s, {})]
                    }), (0, n.jsx)(i.hD, {
                        navigator: T,
                        children: (0, n.jsx)(i.PR, {
                            children: e => {
                                var t, o;
                                let {
                                    ref: a
                                } = e, i = function(e, t) {
                                    if (null == e) return {};
                                    var r, n, l, o = {};
                                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                                        for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                                        return o
                                    }
                                    if (o = function(e, t) {
                                            if (null == e) return {};
                                            var r, n, l = {},
                                                o = Object.getOwnPropertyNames(e);
                                            for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                                            return l
                                        }(e, t), Object.getOwnPropertySymbols)
                                        for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                                    return o
                                }(e, ["ref"]);
                                return (0, n.jsxs)(u.ChK, (t = function(e) {
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
                                }({
                                    ref: e => {
                                        var t;
                                        P.current = e, a.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null
                                    },
                                    className: h.Mt,
                                    fade: !0
                                }, i), o = o = {
                                    children: [(0, n.jsx)("nav", {
                                        className: h.C$,
                                        children: C.map(e => (0, n.jsx)(x, {
                                            section: e,
                                            visibleContent: l
                                        }, e.key))
                                    }), null != r && (0, n.jsx)(r, {})]
                                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var n = Object.getOwnPropertySymbols(e);
                                        r.push.apply(r, n)
                                    }
                                    return r
                                })(Object(o)).forEach(function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
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
        section: r,
        visibleContent: l,
        hoisted: o = !1
    } = e, a = null == (t = r.useTitle) ? void 0 : t.call(r);
    return (0, n.jsxs)("ul", {
        className: h.uW,
        "aria-label": a,
        children: [null != a && (0, n.jsx)("div", {
            className: h.a9,
            children: (0, n.jsx)(u.Heading, {
                className: h.Pf,
                variant: "heading-sm/medium",
                color: "text-muted",
                children: a
            })
        }), r.layout.map(e => (0, n.jsx)(j.X, {
            node: e,
            visibleContent: l,
            hoisted: o
        }, e.key))]
    })
}

function S(e) {
    let {
        searchQuery: t,
        onSearchChange: r
    } = e, o = l.useRef(null), [a, i] = (0, b.kn)([s.M.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]), c = l.useCallback(() => {
        r("")
    }, [r]), y = l.useMemo(() => ({
        title: m.intl.string(m.t.Kv519a),
        body: m.intl.string(m.t.cTGJBZ),
        badge: "new",
        position: "right",
        align: "center",
        scrollBehavior: "sticky"
    }), []);
    return (0, n.jsxs)("div", {
        className: h.PP,
        children: [(0, n.jsx)(u.IWV, {
            size: "md",
            query: t,
            onChange: r,
            onClear: c
        }), (0, n.jsx)("div", {
            className: h.To,
            ref: o
        }), (0, n.jsx)(O.A, {
            dismissibleContentType: s.M.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
            targetElementRef: o,
            visibleContent: a,
            markAsDismissed: i,
            props: y
        })]
    })
}