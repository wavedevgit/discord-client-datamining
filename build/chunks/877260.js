/** chunk id: 877260 params = (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => E
}), n(321073);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(837381),
    o = n(607399),
    c = n(397927),
    u = n(928039),
    d = n(932001),
    h = n(97469),
    m = n(199966),
    f = n(894858),
    p = n(397274),
    _ = n(189857),
    v = n(188180),
    y = n(133457),
    g = n(985018),
    x = n(107567);

function E(e) {
    let {
        root: t,
        onClose: n,
        footer: l,
        emptyState: v,
        searchBar: E
    } = e, b = f.A.useField("showNavigationMobile"), S = i.useRef(null), [N] = i.useState(t), {
        accessibleDirectory: j
    } = (0, m._)(), C = i.useMemo(() => (0, _.Z)(N, j), [N, j]), [R] = (0, d.kn)(C.allDismissibleContents);
    (0, y.B)({
        visibleContent: R,
        dismissibleBadges: C,
        accessibleDirectory: j
    });
    let [I, T] = i.useMemo(() => {
        let e = [],
            n = [];
        return t.layout.forEach(t => {
            t.hoisted ? e.push(t) : n.push(t)
        }), [e, n]
    }, [t.layout]), w = (0, h.NC)(), k = (0, u.A)("settings-sidebar", S);
    return (0, r.jsx)(c.NPJ, {
        theme: w,
        children: e => (0, r.jsxs)("div", {
            className: a()(x.pz, e, {
                [x.Hw]: o.Fr,
                [x.n7]: b
            }),
            children: [(0, r.jsxs)("div", {
                className: x.gM,
                children: [o.Fr && (0, r.jsx)("div", {
                    className: x.hg,
                    children: (0, r.jsx)(c.K0, {
                        icon: c.d$L,
                        onClick: n,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": g.intl.string(g.t.cpT0Cq)
                    })
                }), (0, r.jsx)("div", {
                    children: I.map(e => (0, r.jsx)(A, {
                        section: e,
                        visibleContent: R,
                        dismissibleBadges: C,
                        hoisted: !0
                    }, e.key))
                }), null != E && (0, r.jsx)(E, {}), null != v && 0 === T.length && (0, r.jsx)(v, {})]
            }), (0, r.jsx)(s.hD, {
                navigator: k,
                children: (0, r.jsx)(s.PR, {
                    children: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, r.jsxs)(c.ChK, {
                            ref: e => {
                                S.current = e, p.A.setSidebarScrollerRef(e), t.current = e?.getScrollerNode() ?? null
                            },
                            className: x.Mt,
                            fade: !0,
                            ...n,
                            children: [(0, r.jsx)("nav", {
                                className: x.C$,
                                children: T.map(e => (0, r.jsx)(A, {
                                    section: e,
                                    visibleContent: R,
                                    dismissibleBadges: C
                                }, e.key))
                            }), null != l && (0, r.jsx)(l, {})]
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
        hoisted: l = !1
    } = e, a = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: x.uW,
        "aria-label": a,
        children: [null != a && (0, r.jsx)("div", {
            className: x.a9,
            children: (0, r.jsx)(c.Heading, {
                className: x.Pf,
                variant: "heading-sm/medium",
                color: "text-muted",
                children: a
            })
        }), t.layout.map(e => (0, r.jsx)(v.X, {
            node: e,
            visibleContent: n,
            dismissibleBadges: i,
            hoisted: l
        }, e.key))]
    })
}