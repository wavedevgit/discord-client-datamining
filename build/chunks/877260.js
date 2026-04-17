/** chunk id: 877260 params = (module,exports,require) **/
"use strict";
n.d(t, {
    L: () => E
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
    p = n(199966),
    _ = n(894858),
    m = n(397274),
    f = n(189857),
    g = n(188180),
    y = n(133457),
    v = n(985018),
    S = n(443263);

function E(e) {
    let {
        root: t,
        onClose: n,
        footer: a,
        emptyState: g,
        searchBar: E
    } = e, A = _.A.useField("showNavigationMobile"), b = i.useRef(null), [N] = i.useState(t), {
        accessibleDirectory: C
    } = (0, p._)(), j = i.useMemo(() => (0, f.Z)(N, C), [N, C]), [T] = (0, d.kn)(j.allDismissibleContents);
    (0, y.B)({
        visibleContent: T,
        dismissibleBadges: j,
        accessibleDirectory: C
    });
    let [I, R] = i.useMemo(() => {
        let e = [],
            n = [];
        return t.layout.forEach(t => {
            t.hoisted ? e.push(t) : n.push(t)
        }), [e, n]
    }, [t.layout]), k = (0, h.NC)(), O = (0, c.A)("settings-sidebar", b);
    return (0, r.jsx)(u.NPJ, {
        theme: k,
        children: e => (0, r.jsxs)("div", {
            className: s()(S.pz, e, {
                [S.Hw]: o.Fr,
                [S.n7]: A
            }),
            children: [(0, r.jsxs)("div", {
                className: S.gM,
                children: [o.Fr && (0, r.jsx)("div", {
                    className: S.hg,
                    children: (0, r.jsx)(u.K0, {
                        icon: u.d$L,
                        onClick: n,
                        variant: "icon-only",
                        size: "sm",
                        "aria-label": v.intl.string(v.t.cpT0Cq)
                    })
                }), (0, r.jsx)("div", {
                    children: I.map(e => (0, r.jsx)(x, {
                        section: e,
                        visibleContent: T,
                        dismissibleBadges: j,
                        hoisted: !0
                    }, e.key))
                }), null != E && (0, r.jsx)(E, {}), null != g && 0 === R.length && (0, r.jsx)(g, {})]
            }), (0, r.jsx)(l.hD, {
                navigator: O,
                children: (0, r.jsx)(l.PR, {
                    children: e => {
                        let {
                            ref: t,
                            ...n
                        } = e;
                        return (0, r.jsxs)(u.ChK, {
                            ref: e => {
                                b.current = e, m.A.setSidebarScrollerRef(e), t.current = e?.getScrollerNode() ?? null
                            },
                            className: S.Mt,
                            fade: !0,
                            ...n,
                            children: [(0, r.jsx)("nav", {
                                className: S.C$,
                                children: R.map(e => (0, r.jsx)(x, {
                                    section: e,
                                    visibleContent: T,
                                    dismissibleBadges: j
                                }, e.key))
                            }), null != a && (0, r.jsx)(a, {})]
                        })
                    }
                })
            })]
        })
    })
}

function x(e) {
    let {
        section: t,
        visibleContent: n,
        dismissibleBadges: i,
        hoisted: a = !1
    } = e, s = t.useTitle?.();
    return (0, r.jsxs)("ul", {
        className: S.uW,
        "aria-label": s,
        children: [null != s && (0, r.jsx)("div", {
            className: S.a9,
            children: (0, r.jsx)(u.Heading, {
                className: S.Pf,
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