/** chunk id: 793998 params = (module,exports,require) **/
n.d(t, {
    A: () => V,
    p: () => k
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
    _ = n(688810),
    m = n(726249),
    g = n(915089),
    A = n(742589),
    h = n(544028),
    x = n(253932),
    p = n(899847),
    T = n(695515),
    E = n(438732),
    S = n(834981),
    C = n(102615),
    f = n(246109),
    b = n(452141),
    N = n(888772),
    I = n(614749),
    v = n(768985),
    j = n(191627),
    y = n(652215),
    R = n(842130),
    O = n(985018),
    P = n(914280);
let D = {
        [j.u9.REQUESTS]: N.A,
        [j.u9.ACTIVITY]: b.A,
        [j.u9.SETTINGS]: I.A,
        [j.u9.CONTENT_AND_SOCIAL]: C.A,
        [j.u9.DATA_AND_PRIVACY]: f.A
    },
    L = {
        [j.u9.REQUESTS]: N.A,
        [j.u9.ACTIVITY]: b.A,
        [j.u9.CONTENT_AND_SOCIAL]: C.A,
        [j.u9.DATA_AND_PRIVACY]: f.A
    };

function G() {
    return (0, i.jsx)(d.BJc, {
        justify: "center",
        align: "center",
        className: P.g4,
        children: (0, i.jsx)(d.y$y, {})
    })
}

function M(e) {
    let {
        section: t,
        handleItemSelect: n
    } = e, s = (0, S.VT)(), l = (0, E.A)();
    return t === j.u9.CONTENT_AND_SOCIAL || t === j.u9.DATA_AND_PRIVACY ? null : (0, i.jsxs)(d.VQ0, {
        className: P.c5,
        "aria-label": O.intl.string(R.default.RZqaJn),
        selectedItem: t,
        type: "top",
        look: "brand",
        onItemSelect: n,
        children: [(0, i.jsx)(d.VQ0.Item, {
            className: P.jA,
            id: j.u9.ACTIVITY,
            children: O.intl.string(R.default.bdBmqy)
        }), (0, i.jsxs)(d.VQ0.Item, {
            className: P.jA,
            id: j.u9.REQUESTS,
            "aria-label": O.intl.string(R.default["gVWG+6"]),
            children: [O.intl.string(R.default["gVWG+6"]), s > 0 ? (0, i.jsx)(d.hVq, {
                className: P.qS,
                count: s
            }) : null]
        }), l ? (0, i.jsx)(d.VQ0.Item, {
            className: P.jA,
            id: j.u9.SETTINGS,
            children: O.intl.string(O.t["3D5yo/"])
        }) : null]
    })
}

function U(e) {
    let {
        theme: t,
        section: n,
        handleItemSelect: s
    } = e, l = (0, g.GV)(), o = (0, S.VT)();
    return (0, i.jsx)(d.NPJ, {
        theme: t,
        children: e => (0, i.jsxs)(A.A, {
            className: a()(e, P.ZB),
            scrollable: r.Fr,
            role: "navigation",
            "aria-labelledby": l,
            toolbar: !0,
            children: [(0, i.jsx)(A.A.Icon, {
                icon: d.nFg,
                "aria-hidden": !0
            }), (0, i.jsx)(A.A.Title, {
                id: l,
                children: O.intl.string(R.default.RZqaJn)
            }), (0, i.jsx)(A.A.Divider, {}), (0, i.jsxs)(d.VQ0, {
                "aria-label": O.intl.string(R.default.RZqaJn),
                selectedItem: n,
                type: "top-pill",
                onItemSelect: s,
                children: [(0, i.jsx)(d.VQ0.Item, {
                    id: j.u9.ACTIVITY,
                    className: P.AS,
                    children: O.intl.string(R.default.bdBmqy)
                }), (0, i.jsxs)(d.VQ0.Item, {
                    id: j.u9.REQUESTS,
                    className: P.AS,
                    "aria-label": O.intl.string(R.default["gVWG+6"]),
                    children: [O.intl.string(R.default["gVWG+6"]), o > 0 ? (0, i.jsx)(d.hVq, {
                        className: P.qS,
                        count: o
                    }) : null]
                })]
            })]
        })
    })
}

function k() {
    let e = (0, g.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: s,
            showAgeGateModal: l
        } = (0, v.j)({
            location: j.MH.SETTINGS,
            onMountEffect: () => {
                p.Ay.initialPageLoad()
            }
        });
    if (l) return null;
    let a = D[n];
    return (0, i.jsxs)("main", {
        className: P.kL,
        "aria-label": O.intl.string(R.default.RZqaJn),
        children: [(0, i.jsx)(m.HI, {
            location: O.intl.string(R.default.RZqaJn)
        }), (0, i.jsx)(M, {
            section: n,
            handleItemSelect: e => {
                s(e)
            }
        }), (0, i.jsx)(d.VQ0.Panel, {
            id: n,
            "aria-labelledby": e,
            className: P.Us,
            children: t ? (0, i.jsx)(G, {}) : (0, i.jsx)(a, {})
        })]
    })
}

function V() {
    let {
        analyticsLocations: e
    } = (0, _.Ay)(u.A.FAMILY_CENTER), t = (0, E.A)(), n = (0, o.bG)([T.A], () => T.A.getIsInitialized()), l = (0, o.bG)([h.A], () => h.A.theme), r = (0, g.GV)(), {
        isLoading: A,
        selectedTab: S,
        handleTabChange: C,
        showAgeGateModal: f
    } = (0, v.j)({
        location: j.MH.SIDENAV,
        onMountEffect: () => {
            c.I(y.BVt.FAMILY_CENTER), !T.A.isLoading() && T.A.canRefetch() && p.Ay.initialPageLoad()
        }
    });
    if (s.useEffect(() => {
            let e = x.dm.getSetting();
            n && t && void 0 === e && x.dm.updateSetting(!0)
        }, [n, t]), f) return null;
    let b = S !== j.u9.SETTINGS ? S : j.u9.ACTIVITY,
        N = L[b];
    return (0, i.jsx)(_.f5, {
        value: e,
        children: (0, i.jsxs)("main", {
            className: a()(P.kL, P.ei),
            "aria-label": O.intl.string(R.default.RZqaJn),
            children: [(0, i.jsx)(m.HI, {
                location: O.intl.string(R.default.RZqaJn)
            }), (0, i.jsx)(U, {
                theme: l,
                section: b,
                handleItemSelect: e => {
                    C(e)
                }
            }), (0, i.jsx)(d.VQ0.Panel, {
                id: b,
                "aria-labelledby": r,
                className: P.Om,
                children: (0, i.jsx)(d.HOs, {
                    children: (0, i.jsx)("div", {
                        className: P.O4,
                        children: A ? (0, i.jsx)(G, {}) : (0, i.jsx)(N, {})
                    })
                })
            })]
        })
    })
}