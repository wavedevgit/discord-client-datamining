/** Chunk was on 60449 **/
/** chunk id: 793998, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => w,
    p: () => M
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(607399),
    o = n(417597),
    c = n(397927),
    d = n(944791),
    u = n(793574),
    g = n(688810),
    h = n(726249),
    x = n(915089),
    A = n(742589),
    p = n(544028),
    m = n(253932),
    j = n(899847),
    O = n(695515),
    E = n(438732),
    b = n(834981),
    S = n(102615),
    v = n(246109),
    C = n(452141),
    f = n(888772),
    T = n(614749),
    N = n(768985),
    _ = n(191627),
    I = n(652215),
    y = n(842130),
    D = n(985018),
    G = n(914280);
let P = {
        [_.u9.REQUESTS]: f.A,
        [_.u9.ACTIVITY]: C.A,
        [_.u9.SETTINGS]: T.A,
        [_.u9.CONTENT_AND_SOCIAL]: S.A,
        [_.u9.DATA_AND_PRIVACY]: v.A
    },
    R = {
        [_.u9.REQUESTS]: f.A,
        [_.u9.ACTIVITY]: C.A,
        [_.u9.CONTENT_AND_SOCIAL]: S.A,
        [_.u9.DATA_AND_PRIVACY]: v.A
    };

function V() {
    return (0, i.jsx)(c.BJc, {
        justify: "center",
        align: "center",
        className: G.g4,
        children: (0, i.jsx)(c.y$y, {})
    })
}

function L(e) {
    let {
        section: t,
        handleItemSelect: n
    } = e, s = (0, b.VT)(), l = (0, E.A)();
    return t === _.u9.CONTENT_AND_SOCIAL || t === _.u9.DATA_AND_PRIVACY ? null : (0, i.jsxs)(c.VQ0, {
        className: G.c5,
        "aria-label": D.intl.string(y.default.RZqaJn),
        selectedItem: t,
        type: "top",
        look: "brand",
        onItemSelect: n,
        children: [(0, i.jsx)(c.VQ0.Item, {
            className: G.jA,
            id: _.u9.ACTIVITY,
            children: D.intl.string(y.default.bdBmqy)
        }), (0, i.jsxs)(c.VQ0.Item, {
            className: G.jA,
            id: _.u9.REQUESTS,
            "aria-label": D.intl.string(y.default["gVWG+6"]),
            children: [D.intl.string(y.default["gVWG+6"]), s > 0 ? (0, i.jsx)(c.hVq, {
                className: G.qS,
                count: s
            }) : null]
        }), l ? (0, i.jsx)(c.VQ0.Item, {
            className: G.jA,
            id: _.u9.SETTINGS,
            children: D.intl.string(D.t["3D5yo/"])
        }) : null]
    })
}

function k(e) {
    let {
        theme: t,
        section: n,
        handleItemSelect: s
    } = e, l = (0, x.GV)(), o = (0, b.VT)();
    return (0, i.jsx)(c.NPJ, {
        theme: t,
        children: e => (0, i.jsxs)(A.A, {
            className: r()(e, G.ZB),
            scrollable: a.Fr,
            role: "navigation",
            "aria-labelledby": l,
            toolbar: !0,
            children: [(0, i.jsx)(A.A.Icon, {
                icon: c.nFg,
                "aria-hidden": !0
            }), (0, i.jsx)(A.A.Title, {
                id: l,
                children: D.intl.string(y.default.RZqaJn)
            }), (0, i.jsx)(A.A.Divider, {}), (0, i.jsxs)(c.VQ0, {
                "aria-label": D.intl.string(y.default.RZqaJn),
                selectedItem: n,
                type: "top-pill",
                onItemSelect: s,
                children: [(0, i.jsx)(c.VQ0.Item, {
                    id: _.u9.ACTIVITY,
                    className: G.AS,
                    children: D.intl.string(y.default.bdBmqy)
                }), (0, i.jsxs)(c.VQ0.Item, {
                    id: _.u9.REQUESTS,
                    className: G.AS,
                    "aria-label": D.intl.string(y.default["gVWG+6"]),
                    children: [D.intl.string(y.default["gVWG+6"]), o > 0 ? (0, i.jsx)(c.hVq, {
                        className: G.qS,
                        count: o
                    }) : null]
                })]
            })]
        })
    })
}

function M() {
    let e = (0, x.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: s,
            showAgeGateModal: l
        } = (0, N.j)({
            location: _.MH.SETTINGS,
            onMountEffect: () => {
                j.Ay.initialPageLoad()
            }
        });
    if (l) return null;
    let r = P[n];
    return (0, i.jsxs)("main", {
        className: G.kL,
        "aria-label": D.intl.string(y.default.RZqaJn),
        children: [(0, i.jsx)(h.HI, {
            location: D.intl.string(y.default.RZqaJn)
        }), (0, i.jsx)(L, {
            section: n,
            handleItemSelect: e => {
                s(e)
            }
        }), (0, i.jsx)(c.VQ0.Panel, {
            id: n,
            "aria-labelledby": e,
            className: G.Us,
            children: t ? (0, i.jsx)(V, {}) : (0, i.jsx)(r, {})
        })]
    })
}

function w() {
    let {
        analyticsLocations: e
    } = (0, g.Ay)(u.A.FAMILY_CENTER), t = (0, E.A)(), n = (0, o.bG)([O.A], () => O.A.getIsInitialized()), l = (0, o.bG)([p.A], () => p.A.theme), a = (0, x.GV)(), {
        isLoading: A,
        selectedTab: b,
        handleTabChange: S,
        showAgeGateModal: v
    } = (0, N.j)({
        location: _.MH.SIDENAV,
        onMountEffect: () => {
            d.I(I.BVt.FAMILY_CENTER), !O.A.isLoading() && O.A.canRefetch() && j.Ay.initialPageLoad()
        }
    });
    if (s.useEffect(() => {
            let e = m.dm.getSetting();
            n && t && void 0 === e && m.dm.updateSetting(!0)
        }, [n, t]), v) return null;
    let C = b !== _.u9.SETTINGS ? b : _.u9.ACTIVITY,
        f = R[C];
    return (0, i.jsx)(g.f5, {
        value: e,
        children: (0, i.jsxs)("main", {
            className: r()(G.kL, G.ei),
            "aria-label": D.intl.string(y.default.RZqaJn),
            children: [(0, i.jsx)(h.HI, {
                location: D.intl.string(y.default.RZqaJn)
            }), (0, i.jsx)(k, {
                theme: l,
                section: C,
                handleItemSelect: e => {
                    S(e)
                }
            }), (0, i.jsx)(c.VQ0.Panel, {
                id: C,
                "aria-labelledby": a,
                className: G.Om,
                children: (0, i.jsx)(c.HOs, {
                    children: (0, i.jsx)("div", {
                        className: G.O4,
                        children: A ? (0, i.jsx)(V, {}) : (0, i.jsx)(f, {})
                    })
                })
            })]
        })
    })
}