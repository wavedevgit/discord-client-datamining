/** chunk id: 877260 params = (module,exports,require) **/
"use strict";
r.d(t, {
    L: () => x
}), r(321073);
var n = r(627968),
    a = r(64700),
    i = r(503698),
    l = r.n(i),
    s = r(837381),
    o = r(607399),
    c = r(397927),
    u = r(928039),
    d = r(932001),
    h = r(97469),
    f = r(199966),
    _ = r(894858),
    m = r(397274),
    p = r(189857),
    g = r(188180),
    b = r(133457),
    y = r(985018),
    v = r(658646);

function x(e) {
    let {
        root: t,
        onClose: r,
        footer: i,
        emptyState: g,
        searchBar: x
    } = e, S = _.A.useField("showNavigationMobile"), A = a.useRef(null), [N] = a.useState(t), {
        accessibleDirectory: C
    } = (0, f._)(), j = a.useMemo(() => (0, p.Z)(N, C), [N, C]), [R] = (0, d.kn)(j.allDismissibleContents);
    (0, b.B)({
        visibleContent: R,
        dismissibleBadges: j,
        accessibleDirectory: C
    });
    let [I, T] = a.useMemo(() => {
        let e = [],
            r = [];
        return t.layout.forEach(t => {
            t.hoisted ? e.push(t) : r.push(t)
        }), [e, r]
    }, [t.layout]), k = (0, h.NC)(), w = (0, u.A)("settings-sidebar", A);
    return (0, n.jsx)(c.NPJ, {
        theme: k,
        children: e => (0, n.jsxs)("div", {
            className: l()(v.pz, e, {
                [v.Hw]: o.Fr,
                [v.n7]: S
            }),
            children: [(0, n.jsxs)("div", {
                className: v.gM,
                children: [o.Fr && (0, n.jsx)("div", {
                    className: v.hg,
                    children: (0, n.jsx)(c.K0, {
                        icon: c.d$L,
                        onClick: r,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": y.intl.string(y.t.cpT0Cq)
                    })
                }), (0, n.jsx)("div", {
                    children: I.map(e => (0, n.jsx)(E, {
                        section: e,
                        visibleContent: R,
                        dismissibleBadges: j,
                        hoisted: !0
                    }, e.key))
                }), null != x && (0, n.jsx)(x, {}), null != g && 0 === T.length && (0, n.jsx)(g, {})]
            }), (0, n.jsx)(s.hD, {
                navigator: w,
                children: (0, n.jsx)(s.PR, {
                    children: e => {
                        let {
                            ref: t,
                            ...r
                        } = e;
                        return (0, n.jsxs)(c.ChK, {
                            ref: e => {
                                A.current = e, m.A.setSidebarScrollerRef(e), t.current = e?.getScrollerNode() ?? null
                            },
                            className: v.Mt,
                            fade: !0,
                            ...r,
                            children: [(0, n.jsx)("nav", {
                                className: v.C$,
                                children: T.map(e => (0, n.jsx)(E, {
                                    section: e,
                                    visibleContent: R,
                                    dismissibleBadges: j
                                }, e.key))
                            }), null != i && (0, n.jsx)(i, {})]
                        })
                    }
                })
            })]
        })
    })
}

function E(e) {
    let {
        section: t,
        visibleContent: r,
        dismissibleBadges: a,
        hoisted: i = !1
    } = e, l = t.useTitle?.();
    return (0, n.jsxs)("ul", {
        className: v.uW,
        "aria-label": l,
        children: [null != l && (0, n.jsx)("div", {
            className: v.a9,
            children: (0, n.jsx)(c.Heading, {
                className: v.Pf,
                variant: "heading-sm/medium",
                color: "text-muted",
                children: l
            })
        }), t.layout.map(e => (0, n.jsx)(g.X, {
            node: e,
            visibleContent: r,
            dismissibleBadges: a,
            hoisted: i
        }, e.key))]
    })
}