/** chunk id: 877260, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => x
}), n(321073);
var r = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(837381),
    o = n(607399),
    c = n(397927),
    u = n(775602),
    d = n(928039),
    _ = n(379848),
    m = n(97469),
    g = n(933297),
    b = n(894858),
    p = n(188180),
    h = n(985018),
    f = n(658646);

function x(e) {
    let {
        root: t,
        footer: n,
        onClose: i,
        emptyState: p,
        searchQuery: x,
        onSearchChange: A
    } = e, v = b.A.useField("showNavigationMobile"), S = a.useRef(null), T = a.useMemo(() => {
        let e = [];
        return t.layout.forEach(t => {
            let {
                layout: n
            } = t;
            n.forEach(t => {
                if (null != t.trailing) switch (t.trailing.type) {
                    case g.Si.BADGE_NEW:
                    case g.Si.STRONGLY_DISCOURAGED_CUSTOM:
                        t.trailing.getDismissibleContentTypes?.()?.forEach(t => {
                            e.push(t)
                        })
                }
            })
        }), e
    }, [t.layout]), [I, N] = a.useMemo(() => {
        let e = [],
            n = [];
        return t.layout.forEach(t => {
            t.hoisted ? e.push(t) : n.push(t)
        }), [e, n]
    }, [t.layout]), j = (0, m.NC)(), k = (0, d.A)("settings-sidebar", S);
    return a.useEffect(() => {
        let e = b.A.subscribe(e => {
            let {
                currentPanelKey: t
            } = e;
            return t
        }, e => {
            if (null == S.current || null == e) return;
            let t = S.current.getScrollerNode()?.querySelector(`[data-settings-sidebar-item="${e}"]`);
            if (null == t) return;
            let n = b.A.getField("disableSidebarScrollAnimate");
            requestAnimationFrame(() => {
                S.current?.scrollIntoViewNode({
                    node: t,
                    padding: 8,
                    animate: !n && !u.A.useReducedMotion
                })
            })
        }, {
            equalityFn: (e, t) => e === t,
            fireImmediately: !0
        });
        return () => {
            e(), b.A.setState({
                disableSidebarScrollAnimate: !0
            })
        }
    }, []), (0, r.jsx)(c.NPJ, {
        theme: j,
        children: e => (0, r.jsx)(_.Ay, {
            contentTypes: T,
            children: t => {
                let {
                    visibleContent: a
                } = t;
                return (0, r.jsxs)("div", {
                    className: s()(f.pz, e, {
                        [f.Hw]: o.Fr,
                        [f.n7]: v
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: f.gM,
                        children: [o.Fr && (0, r.jsx)("div", {
                            className: f.hg,
                            children: (0, r.jsx)(c.K0, {
                                icon: c.d$L,
                                onClick: i,
                                variant: "icon-only",
                                size: "sm",
                                "aria-label": h.intl.string(h.t.cpT0Cq)
                            })
                        }), (0, r.jsx)("div", {
                            children: I.map(e => (0, r.jsx)(y, {
                                section: e,
                                visibleContent: a,
                                hoisted: !0
                            }, e.key))
                        }), null != x && null != A && (0, r.jsx)(C, {
                            searchQuery: x,
                            onSearchChange: A
                        }), null != p && 0 === N.length && (0, r.jsx)(p, {})]
                    }), (0, r.jsx)(l.hD, {
                        navigator: k,
                        children: (0, r.jsx)(l.PR, {
                            children: e => {
                                let {
                                    ref: t,
                                    ...i
                                } = e;
                                return (0, r.jsxs)(c.ChK, {
                                    ref: e => {
                                        S.current = e, t.current = e?.getScrollerNode() ?? null
                                    },
                                    className: f.Mt,
                                    fade: !0,
                                    ...i,
                                    children: [(0, r.jsx)("nav", {
                                        className: f.C$,
                                        children: N.map(e => (0, r.jsx)(y, {
                                            section: e,
                                            visibleContent: a
                                        }, e.key))
                                    }), null != n && (0, r.jsx)(n, {})]
                                })
                            }
                        })
                    })]
                })
            }
        })
    })
}

function y(e) {
    let {
        section: t,
        visibleContent: n,
        hoisted: a = !1
    } = e, i = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: f.uW,
        "aria-label": i,
        children: [null != i && (0, r.jsx)("div", {
            className: f.a9,
            children: (0, r.jsx)(c.Heading, {
                className: f.Pf,
                variant: "heading-sm/medium",
                color: "text-muted",
                children: i
            })
        }), t.layout.map(e => (0, r.jsx)(p.X, {
            node: e,
            visibleContent: n,
            hoisted: a
        }, e.key))]
    })
}

function C(e) {
    let {
        searchQuery: t,
        onSearchChange: n
    } = e, i = a.useCallback(() => {
        n("")
    }, [n]);
    return (0, r.jsx)("div", {
        className: f.PP,
        children: (0, r.jsx)(c.IWV, {
            size: "md",
            query: t,
            onChange: n,
            onClear: i
        })
    })
}