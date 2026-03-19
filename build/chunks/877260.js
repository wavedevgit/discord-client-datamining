/** chunk id: 877260 params = (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => b
}), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(607399),
    c = n(397927),
    u = n(928039),
    d = n(932001),
    m = n(97469),
    f = n(199966),
    h = n(894858),
    p = n(397274),
    g = n(189857),
    x = n(188180),
    _ = n(133457),
    y = n(985018),
    v = n(45272);

function b(e) {
    let {
        root: t,
        onClose: n,
        footer: a,
        emptyState: x,
        searchBar: b
    } = e, j = h.A.useField("showNavigationMobile"), N = i.useRef(null), [S] = i.useState(t), {
        accessibleDirectory: C
    } = (0, f._)(), k = i.useMemo(() => (0, g.Z)(S, C), [S, C]), [E] = (0, d.kn)(k.allDismissibleContents);
    (0, _.B)({
        visibleContent: E,
        dismissibleBadges: k,
        accessibleDirectory: C
    });
    let [w, I] = i.useMemo(() => {
        let e = [],
            n = [];
        return t.layout.forEach(t => {
            t.hoisted ? e.push(t) : n.push(t)
        }), [e, n]
    }, [t.layout]), T = (0, m.NC)(), R = (0, u.A)("settings-sidebar", N);
    return (0, r.jsx)(c.NPJ, {
        theme: T,
        children: e => (0, r.jsxs)("div", {
            className: s()(v.pz, e, {
                [v.Hw]: o.Fr,
                [v.n7]: j
            }),
            children: [(0, r.jsxs)("div", {
                className: v.gM,
                children: [o.Fr && (0, r.jsx)("div", {
                    className: v.hg,
                    children: (0, r.jsx)(c.K0, {
                        icon: c.d$L,
                        onClick: n,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": y.intl.string(y.t.cpT0Cq)
                    })
                }), (0, r.jsx)("div", {
                    children: w.map(e => (0, r.jsx)(A, {
                        section: e,
                        visibleContent: E,
                        dismissibleBadges: k,
                        hoisted: !0
                    }, e.key))
                }), null != b && (0, r.jsx)(b, {}), null != x && 0 === I.length && (0, r.jsx)(x, {})]
            }), (0, r.jsx)(l.hD, {
                navigator: R,
                children: (0, r.jsx)(l.PR, {
                    children: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, r.jsxs)(c.ChK, {
                            ref: e => {
                                N.current = e, p.A.setSidebarScrollerRef(e), t.current = e?.getScrollerNode() ?? null
                            },
                            className: v.Mt,
                            fade: !0,
                            ...n,
                            children: [(0, r.jsx)("nav", {
                                className: v.C$,
                                children: I.map(e => (0, r.jsx)(A, {
                                    section: e,
                                    visibleContent: E,
                                    dismissibleBadges: k
                                }, e.key))
                            }), null != a && (0, r.jsx)(a, {})]
                        })
                    }
                })
            })]
        })
    })
}

function A(e) {
    let {
        section: t,
        visibleContent: n,
        dismissibleBadges: i,
        hoisted: a = !1
    } = e, s = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: v.uW,
        "aria-label": s,
        children: [null != s && (0, r.jsx)("div", {
            className: v.a9,
            children: (0, r.jsx)(c.Heading, {
                className: v.Pf,
                variant: "heading-sm/medium",
                color: "text-muted",
                children: s
            })
        }), t.layout.map(e => (0, r.jsx)(x.X, {
            node: e,
            visibleContent: n,
            dismissibleBadges: i,
            hoisted: a
        }, e.key))]
    })
}