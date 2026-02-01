/** chunk id: 793998, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => U,
    p: () => k
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(607399),
    o = n(417597),
    c = n(397927),
    u = n(944791),
    d = n(793574),
    p = n(688810),
    h = n(726249),
    g = n(915089),
    f = n(742589),
    m = n(544028),
    b = n(253932),
    A = n(899847),
    y = n(695515),
    O = n(438732),
    j = n(834981),
    x = n(102615),
    _ = n(246109),
    v = n(452141),
    E = n(888772),
    C = n(614749),
    S = n(768985),
    I = n(191627),
    N = n(652215),
    T = n(842130),
    P = n(985018),
    w = n(914280);
let R = {
        [I.u9.REQUESTS]: E.A,
        [I.u9.ACTIVITY]: v.A,
        [I.u9.SETTINGS]: C.A,
        [I.u9.CONTENT_AND_SOCIAL]: x.A,
        [I.u9.DATA_AND_PRIVACY]: _.A
    },
    D = {
        [I.u9.REQUESTS]: E.A,
        [I.u9.ACTIVITY]: v.A,
        [I.u9.CONTENT_AND_SOCIAL]: x.A,
        [I.u9.DATA_AND_PRIVACY]: _.A
    };

function L() {
    return (0, r.jsx)(c.BJc, {
        justify: "center",
        align: "center",
        className: w.g4,
        children: (0, r.jsx)(c.y$y, {})
    })
}

function M(e) {
    let {
        section: t,
        handleItemSelect: n
    } = e, l = (0, j.VT)(), i = (0, O.A)();
    return t === I.u9.CONTENT_AND_SOCIAL || t === I.u9.DATA_AND_PRIVACY ? null : (0, r.jsxs)(c.VQ0, {
        className: w.c5,
        "aria-label": P.intl.string(T.default.RZqaJn),
        selectedItem: t,
        type: "top",
        look: "brand",
        onItemSelect: n,
        children: [(0, r.jsx)(c.VQ0.Item, {
            className: w.jA,
            id: I.u9.ACTIVITY,
            children: P.intl.string(T.default.bdBmqy)
        }), (0, r.jsxs)(c.VQ0.Item, {
            className: w.jA,
            id: I.u9.REQUESTS,
            "aria-label": P.intl.string(T.default["gVWG+6"]),
            children: [P.intl.string(T.default["gVWG+6"]), l > 0 ? (0, r.jsx)(c.hVq, {
                className: w.qS,
                count: l
            }) : null]
        }), i ? (0, r.jsx)(c.VQ0.Item, {
            className: w.jA,
            id: I.u9.SETTINGS,
            children: P.intl.string(P.t["3D5yo/"])
        }) : null]
    })
}

function G(e) {
    let {
        theme: t,
        section: n,
        handleItemSelect: l
    } = e, i = (0, g.GV)(), o = (0, j.VT)();
    return (0, r.jsx)(c.NPJ, {
        theme: t,
        children: e => (0, r.jsxs)(f.A, {
            className: s()(e, w.ZB),
            scrollable: a.Fr,
            role: "navigation",
            "aria-labelledby": i,
            toolbar: !0,
            children: [(0, r.jsx)(f.A.Icon, {
                icon: c.nFg,
                "aria-hidden": !0
            }), (0, r.jsx)(f.A.Title, {
                id: i,
                children: P.intl.string(T.default.RZqaJn)
            }), (0, r.jsx)(f.A.Divider, {}), (0, r.jsxs)(c.VQ0, {
                "aria-label": P.intl.string(T.default.RZqaJn),
                selectedItem: n,
                type: "top-pill",
                onItemSelect: l,
                children: [(0, r.jsx)(c.VQ0.Item, {
                    id: I.u9.ACTIVITY,
                    className: w.AS,
                    children: P.intl.string(T.default.bdBmqy)
                }), (0, r.jsxs)(c.VQ0.Item, {
                    id: I.u9.REQUESTS,
                    className: w.AS,
                    "aria-label": P.intl.string(T.default["gVWG+6"]),
                    children: [P.intl.string(T.default["gVWG+6"]), o > 0 ? (0, r.jsx)(c.hVq, {
                        className: w.qS,
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
            handleTabChange: l,
            showAgeGateModal: i
        } = (0, S.j)({
            location: I.MH.SETTINGS,
            onMountEffect: () => {
                A.Ay.initialPageLoad()
            }
        });
    if (i) return null;
    let s = R[n];
    return (0, r.jsxs)("main", {
        className: w.kL,
        "aria-label": P.intl.string(T.default.RZqaJn),
        children: [(0, r.jsx)(h.HI, {
            location: P.intl.string(T.default.RZqaJn)
        }), (0, r.jsx)(M, {
            section: n,
            handleItemSelect: e => {
                l(e)
            }
        }), (0, r.jsx)(c.VQ0.Panel, {
            id: n,
            "aria-labelledby": e,
            className: w.Us,
            children: t ? (0, r.jsx)(L, {}) : (0, r.jsx)(s, {})
        })]
    })
}

function U() {
    let {
        analyticsLocations: e
    } = (0, p.Ay)(d.A.FAMILY_CENTER), t = (0, O.A)(), n = (0, o.bG)([y.A], () => y.A.getIsInitialized()), i = (0, o.bG)([m.A], () => m.A.theme), a = (0, g.GV)(), {
        isLoading: f,
        selectedTab: j,
        handleTabChange: x,
        showAgeGateModal: _
    } = (0, S.j)({
        location: I.MH.SIDENAV,
        onMountEffect: () => {
            u.I(N.BVt.FAMILY_CENTER), !y.A.isLoading() && y.A.canRefetch() && A.Ay.initialPageLoad()
        }
    });
    if (l.useEffect(() => {
            let e = b.dm.getSetting();
            n && t && void 0 === e && b.dm.updateSetting(!0)
        }, [n, t]), _) return null;
    let v = j !== I.u9.SETTINGS ? j : I.u9.ACTIVITY,
        E = D[v];
    return (0, r.jsx)(p.f5, {
        value: e,
        children: (0, r.jsxs)("main", {
            className: s()(w.kL, w.ei),
            "aria-label": P.intl.string(T.default.RZqaJn),
            children: [(0, r.jsx)(h.HI, {
                location: P.intl.string(T.default.RZqaJn)
            }), (0, r.jsx)(G, {
                theme: i,
                section: v,
                handleItemSelect: e => {
                    x(e)
                }
            }), (0, r.jsx)(c.VQ0.Panel, {
                id: v,
                "aria-labelledby": a,
                className: w.Om,
                children: (0, r.jsx)(c.HOs, {
                    children: (0, r.jsx)("div", {
                        className: w.O4,
                        children: f ? (0, r.jsx)(L, {}) : (0, r.jsx)(E, {})
                    })
                })
            })]
        })
    })
}