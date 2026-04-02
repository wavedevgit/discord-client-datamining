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
    g = n(726249),
    _ = n(915089),
    x = n(742589),
    A = n(544028),
    h = n(253932),
    p = n(178241),
    T = n(899847),
    f = n(695515),
    S = n(438732),
    E = n(809697),
    b = n(834981),
    C = n(102615),
    N = n(246109),
    v = n(452141),
    I = n(888772),
    j = n(614749),
    y = n(768985),
    O = n(191627),
    R = n(652215),
    P = n(842130),
    L = n(985018),
    D = n(394397);
let G = {
        [O.u9.REQUESTS]: I.A,
        [O.u9.ACTIVITY]: v.A,
        [O.u9.SETTINGS]: j.A,
        [O.u9.CONTENT_AND_SOCIAL]: C.A,
        [O.u9.DATA_AND_PRIVACY]: N.A
    },
    M = {
        [O.u9.REQUESTS]: I.A,
        [O.u9.ACTIVITY]: v.A,
        [O.u9.CONTENT_AND_SOCIAL]: C.A,
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
    } = e, s = (0, b.VT)(), l = (0, S.A)();
    return t === O.u9.CONTENT_AND_SOCIAL || t === O.u9.DATA_AND_PRIVACY ? null : (0, i.jsxs)(d.VQ0, {
        className: D.c5,
        "aria-label": L.intl.string(P.default.RZqaJn),
        selectedItem: t,
        type: "top",
        look: "brand",
        onItemSelect: n,
        children: [(0, i.jsx)(d.VQ0.Item, {
            className: D.jA,
            id: O.u9.ACTIVITY,
            children: L.intl.string(P.default.bdBmqy)
        }), (0, i.jsxs)(d.VQ0.Item, {
            className: D.jA,
            id: O.u9.REQUESTS,
            "aria-label": L.intl.string(P.default["gVWG+6"]),
            children: [L.intl.string(P.default["gVWG+6"]), s > 0 ? (0, i.jsx)(d.hVq, {
                className: D.qS,
                count: s
            }) : null]
        }), l ? (0, i.jsx)(d.VQ0.Item, {
            className: D.jA,
            id: O.u9.SETTINGS,
            children: L.intl.string(L.t["3D5yo/"])
        }) : null]
    })
}

function w(e) {
    let {
        theme: t,
        section: n,
        handleItemSelect: s
    } = e, l = (0, _.GV)(), o = (0, b.VT)();
    return (0, i.jsx)(d.NPJ, {
        theme: t,
        children: e => (0, i.jsxs)(x.A, {
            className: a()(e, D.ZB),
            scrollable: r.Fr,
            role: "navigation",
            "aria-labelledby": l,
            toolbar: !0,
            children: [(0, i.jsx)(x.A.Icon, {
                icon: d.nFg,
                "aria-hidden": !0
            }), (0, i.jsx)(x.A.Title, {
                id: l,
                children: L.intl.string(P.default.RZqaJn)
            }), (0, i.jsx)(x.A.Divider, {}), (0, i.jsxs)(d.VQ0, {
                "aria-label": L.intl.string(P.default.RZqaJn),
                selectedItem: n,
                type: "top-pill",
                onItemSelect: s,
                children: [(0, i.jsx)(d.VQ0.Item, {
                    id: O.u9.ACTIVITY,
                    className: D.AS,
                    children: L.intl.string(P.default.bdBmqy)
                }), (0, i.jsxs)(d.VQ0.Item, {
                    id: O.u9.REQUESTS,
                    className: D.AS,
                    "aria-label": L.intl.string(P.default["gVWG+6"]),
                    children: [L.intl.string(P.default["gVWG+6"]), o > 0 ? (0, i.jsx)(d.hVq, {
                        className: D.qS,
                        count: o
                    }) : null]
                })]
            })]
        })
    })
}

function V() {
    let e = (0, _.GV)(),
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
            (0, p._)(E.q[n])
        }, [n]), a) return null;
    let r = G[n];
    return (0, i.jsxs)("main", {
        className: D.kL,
        "aria-label": L.intl.string(P.default.RZqaJn),
        children: [(0, i.jsx)(g.HI, {
            location: L.intl.string(P.default.RZqaJn)
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
    } = (0, m.Ay)(u.A.FAMILY_CENTER), t = (0, S.A)(), n = (0, o.bG)([f.A], () => f.A.getIsInitialized()), l = (0, o.bG)([A.A], () => A.A.theme), r = (0, _.GV)(), {
        isLoading: x,
        selectedTab: p,
        handleTabChange: E,
        showAgeGateModal: b
    } = (0, y.j)({
        location: O.MH.SIDENAV,
        onMountEffect: () => {
            c.I(R.BVt.FAMILY_CENTER), !f.A.isLoading() && f.A.canRefetch() && T.Ay.initialPageLoad()
        }
    });
    if (s.useEffect(() => {
            let e = h.dm.getSetting();
            n && t && void 0 === e && h.dm.updateSetting(!0)
        }, [n, t]), b) return null;
    let C = p !== O.u9.SETTINGS ? p : O.u9.ACTIVITY,
        N = M[C];
    return (0, i.jsx)(m.f5, {
        value: e,
        children: (0, i.jsxs)("main", {
            className: a()(D.kL, D.ei),
            "aria-label": L.intl.string(P.default.RZqaJn),
            children: [(0, i.jsx)(g.HI, {
                location: L.intl.string(P.default.RZqaJn)
            }), (0, i.jsx)(w, {
                theme: l,
                section: C,
                handleItemSelect: e => {
                    E(e)
                }
            }), (0, i.jsx)(d.VQ0.Panel, {
                id: C,
                "aria-labelledby": r,
                className: D.Om,
                children: (0, i.jsx)(d.HOs, {
                    children: (0, i.jsx)("div", {
                        className: D.O4,
                        children: x ? (0, i.jsx)(k, {}) : (0, i.jsx)(N, {})
                    })
                })
            })]
        })
    })
}