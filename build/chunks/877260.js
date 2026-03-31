/** chunk id: 877260 params = (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => x
}), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(837381),
    o = n(607399),
    c = n(397927),
    u = n(928039),
    d = n(932001),
    _ = n(97469),
    h = n(199966),
    f = n(894858),
    m = n(397274),
    p = n(189857),
    b = n(188180),
    v = n(133457),
    y = n(985018),
    g = n(107567);

function x(e) {
    let {
        root: t,
        onClose: n,
        footer: a,
        emptyState: b,
        searchBar: x
    } = e, S = f.A.useField("showNavigationMobile"), A = i.useRef(null), [N] = i.useState(t), {
        accessibleDirectory: C
    } = (0, h._)(), I = i.useMemo(() => (0, p.Z)(N, C), [N, C]), [j] = (0, d.kn)(I.allDismissibleContents);
    (0, v.B)({
        visibleContent: j,
        dismissibleBadges: I,
        accessibleDirectory: C
    });
    let [T, R] = i.useMemo(() => {
        let e = [],
            n = [];
        return t.layout.forEach(t => {
            t.hoisted ? e.push(t) : n.push(t)
        }), [e, n]
    }, [t.layout]), k = (0, _.NC)(), w = (0, u.A)("settings-sidebar", A);
    return (0, r.jsx)(c.NPJ, {
        theme: k,
        children: e => (0, r.jsxs)("div", {
            className: l()(g.pz, e, {
                [g.Hw]: o.Fr,
                [g.n7]: S
            }),
            children: [(0, r.jsxs)("div", {
                className: g.gM,
                children: [o.Fr && (0, r.jsx)("div", {
                    className: g.hg,
                    children: (0, r.jsx)(c.K0, {
                        icon: c.d$L,
                        onClick: n,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": y.intl.string(y.t.cpT0Cq)
                    })
                }), (0, r.jsx)("div", {
                    children: T.map(e => (0, r.jsx)(E, {
                        section: e,
                        visibleContent: j,
                        dismissibleBadges: I,
                        hoisted: !0
                    }, e.key))
                }), null != x && (0, r.jsx)(x, {}), null != b && 0 === R.length && (0, r.jsx)(b, {})]
            }), (0, r.jsx)(s.hD, {
                navigator: w,
                children: (0, r.jsx)(s.PR, {
                    children: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, r.jsxs)(c.ChK, {
                            ref: e => {
                                A.current = e, m.A.setSidebarScrollerRef(e), t.current = e?.getScrollerNode() ?? null
                            },
                            className: g.Mt,
                            fade: !0,
                            ...n,
                            children: [(0, r.jsx)("nav", {
                                className: g.C$,
                                children: R.map(e => (0, r.jsx)(E, {
                                    section: e,
                                    visibleContent: j,
                                    dismissibleBadges: I
                                }, e.key))
                            }), null != a && (0, r.jsx)(a, {})]
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
        visibleContent: n,
        dismissibleBadges: i,
        hoisted: a = !1
    } = e, l = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: g.uW,
        "aria-label": l,
        children: [null != l && (0, r.jsx)("div", {
            className: g.a9,
            children: (0, r.jsx)(c.Heading, {
                className: g.Pf,
                variant: "heading-sm/medium",
                color: "text-muted",
                children: l
            })
        }), t.layout.map(e => (0, r.jsx)(b.X, {
            node: e,
            visibleContent: n,
            dismissibleBadges: i,
            hoisted: a
        }, e.key))]
    })
}