/** chunk id: 877260 params = (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => x
}), n(321073);
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(837381),
    o = n(607399),
    c = n(397927),
    u = n(928039),
    d = n(932001),
    _ = n(97469),
    h = n(199966),
    f = n(894858),
    p = n(397274),
    m = n(189857),
    b = n(188180),
    g = n(133457),
    y = n(985018),
    v = n(658646);

function x(e) {
    let {
        root: t,
        onClose: n,
        footer: i,
        emptyState: b,
        searchBar: x
    } = e, S = f.A.useField("showNavigationMobile"), A = a.useRef(null), [N] = a.useState(t), {
        accessibleDirectory: C
    } = (0, h._)(), j = a.useMemo(() => (0, m.Z)(N, C), [N, C]), [I] = (0, d.kn)(j.allDismissibleContents);
    (0, g.B)({
        visibleContent: I,
        dismissibleBadges: j,
        accessibleDirectory: C
    });
    let [T, R] = a.useMemo(() => {
        let e = [],
            n = [];
        return t.layout.forEach(t => {
            t.hoisted ? e.push(t) : n.push(t)
        }), [e, n]
    }, [t.layout]), k = (0, _.NC)(), w = (0, u.A)("settings-sidebar", A);
    return (0, r.jsx)(c.NPJ, {
        theme: k,
        children: e => (0, r.jsxs)("div", {
            className: l()(v.pz, e, {
                [v.Hw]: o.Fr,
                [v.n7]: S
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
                    children: T.map(e => (0, r.jsx)(E, {
                        section: e,
                        visibleContent: I,
                        dismissibleBadges: j,
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
                                A.current = e, p.A.setSidebarScrollerRef(e), t.current = e?.getScrollerNode() ?? null
                            },
                            className: v.Mt,
                            fade: !0,
                            ...n,
                            children: [(0, r.jsx)("nav", {
                                className: v.C$,
                                children: R.map(e => (0, r.jsx)(E, {
                                    section: e,
                                    visibleContent: I,
                                    dismissibleBadges: j
                                }, e.key))
                            }), null != i && (0, r.jsx)(i, {})]
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
        dismissibleBadges: a,
        hoisted: i = !1
    } = e, l = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: v.uW,
        "aria-label": l,
        children: [null != l && (0, r.jsx)("div", {
            className: v.a9,
            children: (0, r.jsx)(c.Heading, {
                className: v.Pf,
                variant: "heading-sm/medium",
                color: "text-muted",
                children: l
            })
        }), t.layout.map(e => (0, r.jsx)(b.X, {
            node: e,
            visibleContent: n,
            dismissibleBadges: a,
            hoisted: i
        }, e.key))]
    })
}