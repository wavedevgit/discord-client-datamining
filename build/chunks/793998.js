/** chunk id: 793998 params = (module,exports,require) **/
n.d(t, {
    A: () => B,
    p: () => V
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(607399),
    o = n(417597),
    d = n(397927),
    c = n(944791),
    u = n(793574),
    m = n(688810),
    _ = n(726249),
    g = n(915089),
    A = n(742589),
    x = n(544028),
    p = n(253932),
    h = n(841329),
    T = n(899847),
    E = n(695515),
    f = n(438732),
    S = n(809697),
    C = n(834981),
    b = n(102615),
    N = n(246109),
    I = n(452141),
    v = n(888772),
    j = n(614749),
    y = n(768985),
    O = n(191627),
    R = n(652215),
    L = n(842130),
    P = n(985018),
    D = n(914280);
let M = {
        [O.u9.REQUESTS]: v.A,
        [O.u9.ACTIVITY]: I.A,
        [O.u9.SETTINGS]: j.A,
        [O.u9.CONTENT_AND_SOCIAL]: b.A,
        [O.u9.DATA_AND_PRIVACY]: N.A
    },
    G = {
        [O.u9.REQUESTS]: v.A,
        [O.u9.ACTIVITY]: I.A,
        [O.u9.CONTENT_AND_SOCIAL]: b.A,
        [O.u9.DATA_AND_PRIVACY]: N.A
    };

function k() {
    return (0, i.jsx)(d.BJc, {
        justify: "center",
        align: "center",
        className: D.g4,
        children: (0, i.jsx)(d.y$y, {})
    })
}

function U(e) {
    let {
        section: t,
        handleItemSelect: n
    } = e, s = (0, C.VT)(), l = (0, f.A)();
    return t === O.u9.CONTENT_AND_SOCIAL || t === O.u9.DATA_AND_PRIVACY ? null : (0, i.jsxs)(d.VQ0, {
        className: D.c5,
        "aria-label": P.intl.string(L.default.RZqaJn),
        selectedItem: t,
        type: "top",
        look: "brand",
        onItemSelect: n,
        children: [(0, i.jsx)(d.VQ0.Item, {
            className: D.jA,
            id: O.u9.ACTIVITY,
            children: P.intl.string(L.default.bdBmqy)
        }), (0, i.jsxs)(d.VQ0.Item, {
            className: D.jA,
            id: O.u9.REQUESTS,
            "aria-label": P.intl.string(L.default["gVWG+6"]),
            children: [P.intl.string(L.default["gVWG+6"]), s > 0 ? (0, i.jsx)(d.hVq, {
                className: D.qS,
                count: s
            }) : null]
        }), l ? (0, i.jsx)(d.VQ0.Item, {
            className: D.jA,
            id: O.u9.SETTINGS,
            children: P.intl.string(P.t["3D5yo/"])
        }) : null]
    })
}

function w(e) {
    let {
        theme: t,
        section: n,
        handleItemSelect: s
    } = e, l = (0, g.GV)(), o = (0, C.VT)();
    return (0, i.jsx)(d.NPJ, {
        theme: t,
        children: e => (0, i.jsxs)(A.A, {
            className: a()(e, D.ZB),
            scrollable: r.Fr,
            role: "navigation",
            "aria-labelledby": l,
            toolbar: !0,
            children: [(0, i.jsx)(A.A.Icon, {
                icon: d.nFg,
                "aria-hidden": !0
            }), (0, i.jsx)(A.A.Title, {
                id: l,
                children: P.intl.string(L.default.RZqaJn)
            }), (0, i.jsx)(A.A.Divider, {}), (0, i.jsxs)(d.VQ0, {
                "aria-label": P.intl.string(L.default.RZqaJn),
                selectedItem: n,
                type: "top-pill",
                onItemSelect: s,
                children: [(0, i.jsx)(d.VQ0.Item, {
                    id: O.u9.ACTIVITY,
                    className: D.AS,
                    children: P.intl.string(L.default.bdBmqy)
                }), (0, i.jsxs)(d.VQ0.Item, {
                    id: O.u9.REQUESTS,
                    className: D.AS,
                    "aria-label": P.intl.string(L.default["gVWG+6"]),
                    children: [P.intl.string(L.default["gVWG+6"]), o > 0 ? (0, i.jsx)(d.hVq, {
                        className: D.qS,
                        count: o
                    }) : null]
                })]
            })]
        })
    })
}

function V() {
    let e = (0, g.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: l,
            showAgeGateModal: a
        } = (0, y.j)({
            location: O.MH.SETTINGS,
            onMountEffect: () => {
                T.Ay.initialPageLoad()
            }
        });
    if (s.useEffect(() => {
            (0, h._)(S.q[n])
        }, [n]), a) return null;
    let r = M[n];
    return (0, i.jsxs)("main", {
        className: D.kL,
        "aria-label": P.intl.string(L.default.RZqaJn),
        children: [(0, i.jsx)(_.HI, {
            location: P.intl.string(L.default.RZqaJn)
        }), (0, i.jsx)(U, {
            section: n,
            handleItemSelect: e => {
                l(e)
            }
        }), (0, i.jsx)(d.VQ0.Panel, {
            id: n,
            "aria-labelledby": e,
            className: D.Us,
            children: t ? (0, i.jsx)(k, {}) : (0, i.jsx)(r, {})
        })]
    })
}

function B() {
    let {
        analyticsLocations: e
    } = (0, m.Ay)(u.A.FAMILY_CENTER), t = (0, f.A)(), n = (0, o.bG)([E.A], () => E.A.getIsInitialized()), l = (0, o.bG)([x.A], () => x.A.theme), r = (0, g.GV)(), {
        isLoading: A,
        selectedTab: h,
        handleTabChange: S,
        showAgeGateModal: C
    } = (0, y.j)({
        location: O.MH.SIDENAV,
        onMountEffect: () => {
            c.I(R.BVt.FAMILY_CENTER), !E.A.isLoading() && E.A.canRefetch() && T.Ay.initialPageLoad()
        }
    });
    if (s.useEffect(() => {
            let e = p.dm.getSetting();
            n && t && void 0 === e && p.dm.updateSetting(!0)
        }, [n, t]), C) return null;
    let b = h !== O.u9.SETTINGS ? h : O.u9.ACTIVITY,
        N = G[b];
    return (0, i.jsx)(m.f5, {
        value: e,
        children: (0, i.jsxs)("main", {
            className: a()(D.kL, D.ei),
            "aria-label": P.intl.string(L.default.RZqaJn),
            children: [(0, i.jsx)(_.HI, {
                location: P.intl.string(L.default.RZqaJn)
            }), (0, i.jsx)(w, {
                theme: l,
                section: b,
                handleItemSelect: e => {
                    S(e)
                }
            }), (0, i.jsx)(d.VQ0.Panel, {
                id: b,
                "aria-labelledby": r,
                className: D.Om,
                children: (0, i.jsx)(d.HOs, {
                    children: (0, i.jsx)("div", {
                        className: D.O4,
                        children: A ? (0, i.jsx)(k, {}) : (0, i.jsx)(N, {})
                    })
                })
            })]
        })
    })
}