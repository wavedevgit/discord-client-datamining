/** chunk id: 877260 params = (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => S
}), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(607399),
    u = n(397927),
    c = n(928039),
    d = n(932001),
    h = n(97469),
    m = n(199966),
    p = n(894858),
    f = n(397274),
    _ = n(189857),
    g = n(188180),
    y = n(133457),
    v = n(985018),
    x = n(107567);

function S(e) {
    let {
        root: t,
        onClose: n,
        footer: a,
        emptyState: g,
        searchBar: S
    } = e, A = p.A.useField("showNavigationMobile"), N = i.useRef(null), [b] = i.useState(t), {
        accessibleDirectory: j
    } = (0, m._)(), C = i.useMemo(() => (0, _.Z)(b, j), [b, j]), [R] = (0, d.kn)(C.allDismissibleContents);
    (0, y.B)({
        visibleContent: R,
        dismissibleBadges: C,
        accessibleDirectory: j
    });
    let [T, I] = i.useMemo(() => {
        let e = [],
            n = [];
        return t.layout.forEach(t => {
            t.hoisted ? e.push(t) : n.push(t)
        }), [e, n]
    }, [t.layout]), w = (0, h.NC)(), k = (0, c.A)("settings-sidebar", N);
    return (0, r.jsx)(u.NPJ, {
        theme: w,
        children: e => (0, r.jsxs)("div", {
            className: s()(x.pz, e, {
                [x.Hw]: o.Fr,
                [x.n7]: A
            }),
            children: [(0, r.jsxs)("div", {
                className: x.gM,
                children: [o.Fr && (0, r.jsx)("div", {
                    className: x.hg,
                    children: (0, r.jsx)(u.K0, {
                        icon: u.d$L,
                        onClick: n,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": v.intl.string(v.t.cpT0Cq)
                    })
                }), (0, r.jsx)("div", {
                    children: T.map(e => (0, r.jsx)(E, {
                        section: e,
                        visibleContent: R,
                        dismissibleBadges: C,
                        hoisted: !0
                    }, e.key))
                }), null != S && (0, r.jsx)(S, {}), null != g && 0 === I.length && (0, r.jsx)(g, {})]
            }), (0, r.jsx)(l.hD, {
                navigator: k,
                children: (0, r.jsx)(l.PR, {
                    children: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, r.jsxs)(u.ChK, {
                            ref: e => {
                                N.current = e, f.A.setSidebarScrollerRef(e), t.current = e?.getScrollerNode() ?? null
                            },
                            className: x.Mt,
                            fade: !0,
                            ...n,
                            children: [(0, r.jsx)("nav", {
                                className: x.C$,
                                children: I.map(e => (0, r.jsx)(E, {
                                    section: e,
                                    visibleContent: R,
                                    dismissibleBadges: C
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
    } = e, s = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: x.uW,
        "aria-label": s,
        children: [null != s && (0, r.jsx)("div", {
            className: x.a9,
            children: (0, r.jsx)(u.Heading, {
                className: x.Pf,
                variant: "heading-sm/medium",
                color: "text-muted",
                children: s
            })
        }), t.layout.map(e => (0, r.jsx)(g.X, {
            node: e,
            visibleContent: n,
            dismissibleBadges: i,
            hoisted: a
        }, e.key))]
    })
}