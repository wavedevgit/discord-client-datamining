/** chunk id: 793998, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => M,
    p: () => V
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(607399),
    o = n(417597),
    c = n(397927),
    d = n(944791),
    u = n(793574),
    h = n(688810),
    g = n(726249),
    x = n(915089),
    p = n(742589),
    m = n(544028),
    A = n(253932),
    b = n(899847),
    j = n(695515),
    O = n(438732),
    E = n(834981),
    S = n(102615),
    f = n(246109),
    C = n(452141),
    v = n(888772),
    y = n(614749),
    T = n(768985),
    _ = n(191627),
    N = n(652215),
    I = n(842130),
    P = n(985018),
    R = n(914280);
let L = {
        [_.u9.REQUESTS]: v.A,
        [_.u9.ACTIVITY]: C.A,
        [_.u9.SETTINGS]: y.A,
        [_.u9.CONTENT_AND_SOCIAL]: S.A,
        [_.u9.DATA_AND_PRIVACY]: f.A
    },
    G = {
        [_.u9.REQUESTS]: v.A,
        [_.u9.ACTIVITY]: C.A,
        [_.u9.CONTENT_AND_SOCIAL]: S.A,
        [_.u9.DATA_AND_PRIVACY]: f.A
    };

function D() {
    return (0, i.jsx)(c.BJc, {
        justify: "center",
        align: "center",
        className: R.g4,
        children: (0, i.jsx)(c.y$y, {})
    })
}

function k(e) {
    let {
        section: t,
        handleItemSelect: n
    } = e, l = (0, E.VT)(), s = (0, O.A)();
    return t === _.u9.CONTENT_AND_SOCIAL || t === _.u9.DATA_AND_PRIVACY ? null : (0, i.jsxs)(c.VQ0, {
        className: R.c5,
        "aria-label": P.intl.string(I.default.RZqaJn),
        selectedItem: t,
        type: "top",
        look: "brand",
        onItemSelect: n,
        children: [(0, i.jsx)(c.VQ0.Item, {
            className: R.jA,
            id: _.u9.ACTIVITY,
            children: P.intl.string(I.default.bdBmqy)
        }), (0, i.jsxs)(c.VQ0.Item, {
            className: R.jA,
            id: _.u9.REQUESTS,
            "aria-label": P.intl.string(I.default["gVWG+6"]),
            children: [P.intl.string(I.default["gVWG+6"]), l > 0 ? (0, i.jsx)(c.hVq, {
                className: R.qS,
                count: l
            }) : null]
        }), s ? (0, i.jsx)(c.VQ0.Item, {
            className: R.jA,
            id: _.u9.SETTINGS,
            children: P.intl.string(P.t["3D5yo/"])
        }) : null]
    })
}

function w(e) {
    let {
        theme: t,
        section: n,
        handleItemSelect: l
    } = e, s = (0, x.GV)(), o = (0, E.VT)();
    return (0, i.jsx)(c.NPJ, {
        theme: t,
        children: e => (0, i.jsxs)(p.A, {
            className: r()(e, R.ZB),
            scrollable: a.Fr,
            role: "navigation",
            "aria-labelledby": s,
            toolbar: !0,
            children: [(0, i.jsx)(p.A.Icon, {
                icon: c.nFg,
                "aria-hidden": !0
            }), (0, i.jsx)(p.A.Title, {
                id: s,
                children: P.intl.string(I.default.RZqaJn)
            }), (0, i.jsx)(p.A.Divider, {}), (0, i.jsxs)(c.VQ0, {
                "aria-label": P.intl.string(I.default.RZqaJn),
                selectedItem: n,
                type: "top-pill",
                onItemSelect: l,
                children: [(0, i.jsx)(c.VQ0.Item, {
                    id: _.u9.ACTIVITY,
                    className: R.AS,
                    children: P.intl.string(I.default.bdBmqy)
                }), (0, i.jsxs)(c.VQ0.Item, {
                    id: _.u9.REQUESTS,
                    className: R.AS,
                    "aria-label": P.intl.string(I.default["gVWG+6"]),
                    children: [P.intl.string(I.default["gVWG+6"]), o > 0 ? (0, i.jsx)(c.hVq, {
                        className: R.qS,
                        count: o
                    }) : null]
                })]
            })]
        })
    })
}

function V() {
    let e = (0, x.GV)(),
        {
            isLoading: t,
            selectedTab: n,
            handleTabChange: l,
            showAgeGateModal: s
        } = (0, T.j)({
            location: _.MH.SETTINGS,
            onMountEffect: () => {
                b.Ay.initialPageLoad()
            }
        });
    if (s) return null;
    let r = L[n];
    return (0, i.jsxs)("main", {
        className: R.kL,
        "aria-label": P.intl.string(I.default.RZqaJn),
        children: [(0, i.jsx)(g.HI, {
            location: P.intl.string(I.default.RZqaJn)
        }), (0, i.jsx)(k, {
            section: n,
            handleItemSelect: e => {
                l(e)
            }
        }), (0, i.jsx)(c.VQ0.Panel, {
            id: n,
            "aria-labelledby": e,
            className: R.Us,
            children: t ? (0, i.jsx)(D, {}) : (0, i.jsx)(r, {})
        })]
    })
}

function M() {
    let {
        analyticsLocations: e
    } = (0, h.Ay)(u.A.FAMILY_CENTER), t = (0, O.A)(), n = (0, o.bG)([j.A], () => j.A.getIsInitialized()), s = (0, o.bG)([m.A], () => m.A.theme), a = (0, x.GV)(), {
        isLoading: p,
        selectedTab: E,
        handleTabChange: S,
        showAgeGateModal: f
    } = (0, T.j)({
        location: _.MH.SIDENAV,
        onMountEffect: () => {
            d.I(N.BVt.FAMILY_CENTER), !j.A.isLoading() && j.A.canRefetch() && b.Ay.initialPageLoad()
        }
    });
    if (l.useEffect(() => {
            let e = A.dm.getSetting();
            n && t && void 0 === e && A.dm.updateSetting(!0)
        }, [n, t]), f) return null;
    let C = E !== _.u9.SETTINGS ? E : _.u9.ACTIVITY,
        v = G[C];
    return (0, i.jsx)(h.f5, {
        value: e,
        children: (0, i.jsxs)("main", {
            className: r()(R.kL, R.ei),
            "aria-label": P.intl.string(I.default.RZqaJn),
            children: [(0, i.jsx)(g.HI, {
                location: P.intl.string(I.default.RZqaJn)
            }), (0, i.jsx)(w, {
                theme: s,
                section: C,
                handleItemSelect: e => {
                    S(e)
                }
            }), (0, i.jsx)(c.VQ0.Panel, {
                id: C,
                "aria-labelledby": a,
                className: R.Om,
                children: (0, i.jsx)(c.HOs, {
                    children: (0, i.jsx)("div", {
                        className: R.O4,
                        children: p ? (0, i.jsx)(D, {}) : (0, i.jsx)(v, {})
                    })
                })
            })]
        })
    })
}