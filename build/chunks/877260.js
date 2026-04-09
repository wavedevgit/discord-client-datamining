/** chunk id: 877260 params = (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => E
}), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(837381),
    o = n(607399),
    u = n(397927),
    c = n(928039),
    d = n(932001),
    h = n(97469),
    m = n(199966),
    f = n(894858),
    p = n(397274),
    v = n(189857),
    y = n(188180),
    g = n(133457),
    _ = n(985018),
    x = n(621192);

function E(e) {
    let {
        root: t,
        onClose: n,
        footer: i,
        emptyState: y,
        searchBar: E
    } = e, S = f.A.useField("showNavigationMobile"), b = l.useRef(null), [N] = l.useState(t), {
        accessibleDirectory: j
    } = (0, m._)(), C = l.useMemo(() => (0, v.Z)(N, j), [N, j]), [R] = (0, d.kn)(C.allDismissibleContents);
    (0, g.B)({
        visibleContent: R,
        dismissibleBadges: C,
        accessibleDirectory: j
    });
    let [I, T] = l.useMemo(() => {
        let e = [],
            n = [];
        return t.layout.forEach(t => {
            t.hoisted ? e.push(t) : n.push(t)
        }), [e, n]
    }, [t.layout]), w = (0, h.NC)(), k = (0, c.A)("settings-sidebar", b);
    return (0, r.jsx)(u.NPJ, {
        theme: w,
        children: e => (0, r.jsxs)("div", {
            className: a()(x.pz, e, {
                [x.Hw]: o.Fr,
                [x.n7]: S
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
                        "aria-label": _.intl.string(_.t.cpT0Cq)
                    })
                }), (0, r.jsx)("div", {
                    children: I.map(e => (0, r.jsx)(A, {
                        section: e,
                        visibleContent: R,
                        dismissibleBadges: C,
                        hoisted: !0
                    }, e.key))
                }), null != E && (0, r.jsx)(E, {}), null != y && 0 === T.length && (0, r.jsx)(y, {})]
            }), (0, r.jsx)(s.hD, {
                navigator: k,
                children: (0, r.jsx)(s.PR, {
                    children: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, r.jsxs)(u.ChK, {
                            ref: e => {
                                b.current = e, p.A.setSidebarScrollerRef(e), t.current = e?.getScrollerNode() ?? null
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
                            }), null != i && (0, r.jsx)(i, {})]
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
        dismissibleBadges: l,
        hoisted: i = !1
    } = e, a = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: x.uW,
        "aria-label": a,
        children: [null != a && (0, r.jsx)("div", {
            className: x.a9,
            children: (0, r.jsx)(u.Heading, {
                className: x.Pf,
                variant: "heading-sm/medium",
                color: "text-muted",
                children: a
            })
        }), t.layout.map(e => (0, r.jsx)(y.X, {
            node: e,
            visibleContent: n,
            dismissibleBadges: l,
            hoisted: i
        }, e.key))]
    })
}