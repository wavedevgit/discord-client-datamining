/** chunk id: 475723 params = (module,exports,require) **/
n.d(e, {
    A: () => f,
    w: () => k
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(827734),
    c = n(990078),
    d = n(421380),
    u = n(397927),
    _ = n(669953),
    E = n(713125),
    T = n(967305),
    A = n(739455),
    I = n(997509),
    N = n(976860),
    R = n(309010),
    p = n(967198),
    h = n(792831),
    C = n(147925),
    g = n(723702),
    m = n(529942),
    O = n(164956),
    S = n(311127),
    y = n(652215),
    x = n(746080);
n(500208);
var M = n(2242),
    U = n(985018),
    P = n(192069);

function j(t) {
    let {
        className: e,
        onClick: n,
        children: l,
        buttonRef: r
    } = t;
    return (0, i.jsx)(d.$n, {
        buttonRef: r,
        className: s()(P.x6, e),
        innerClassName: P.hZ,
        look: d.$n.Looks.OUTLINED,
        color: d.$n.Colors.WHITE,
        size: d.$n.Sizes.NONE,
        onClick: n,
        children: l
    })
}

function D(t) {
    let {
        onClick: e
    } = t;
    return (0, i.jsx)(j, {
        onClick: e,
        children: U.intl.string(U.t.R9GHya)
    })
}

function f() {
    let t = l.useRef(null),
        e = (0, a.bG)([p.A], () => p.A.getGuildId()),
        n = (0, a.bG)([R.A], () => R.A.getChannelId(e)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: d,
            isServerShopPreview: g
        } = (0, a.cf)([O.A], () => ({
            viewingRoles: null != e ? O.A.getViewingRoles(e) : null,
            backNavigationSection: O.A.getBackNavigationSection(e),
            isFullServerPreview: null != e && O.A.isFullServerPreview(e),
            isServerShopPreview: null != e && O.A.isViewingServerShop(e)
        }));
    if (null == r || null == e) return null;
    let f = function(t) {
            switch (t) {
                case y.BEX.INTEGRATIONS:
                    return U.intl.string(U.t.k7LGdh);
                case y.BEX.ROLE_SUBSCRIPTIONS:
                    return U.intl.string(U.t.bRqiqa);
                case y.BEX.ONBOARDING:
                    return U.intl.string(U.t.qZpU3S);
                default:
                    return U.intl.string(U.t.MTIXhi)
            }
        }(s),
        k = s === y.BEX.ROLE_SUBSCRIPTIONS ? U.intl.string(U.t.hZUCzd) : U.intl.string(U.t["/djIh7"]),
        L = n === x.VV.GUILD_ONBOARDING,
        G = t => {
            let {
                backToSettings: n
            } = t;
            null != e && (O.A.isFullServerPreview(e) && (0, N.pX)(y.BVt.CHANNEL(e)), E.Ay.shouldShowOnboarding(e) && (_.A.finishOnboarding(e), (0, T.Jg)(e)), (0, m.rf)(e), n && I.A.open(e, s), s === y.BEX.ROLE_SUBSCRIPTIONS && (0, A.Fx)(e))
        };
    return (0, i.jsxs)(u.$Td, {
        color: u.Hv$.BRAND,
        className: P.lm,
        children: [(0, i.jsxs)(j, {
            onClick: () => G({
                backToSettings: !0
            }),
            className: P.Gv,
            children: [(0, i.jsx)(h.A, {
                width: 16,
                height: 16,
                direction: h.A.Directions.LEFT,
                className: P.lJ
            }), f]
        }), L && d ? (0, i.jsx)("div", {
            className: P.XI,
            children: (0, i.jsx)("div", {
                className: P.ut,
                children: U.intl.string(U.t.PxbiAf)
            })
        }) : (0, i.jsxs)("div", {
            className: P.XI,
            children: [(0, i.jsx)("div", {
                className: P.ut,
                children: d ? U.intl.formatToPlainString(U.t["0PHahI"], {
                    numRoles: Object.keys(r).length
                }) : U.intl.formatToPlainString(U.t.vMlK8t, {
                    numRoles: Object.keys(r).length
                })
            }), (0, i.jsx)(u.YNO, {
                targetElementRef: t,
                position: "bottom",
                renderPopout: () => (0, i.jsx)(S.A, {
                    guildId: e
                }),
                children: e => {
                    let {
                        onClick: n
                    } = e;
                    return (0, i.jsxs)(j, {
                        onClick: n,
                        buttonRef: t,
                        children: [k, (0, i.jsx)(C.A, {
                            width: 16,
                            height: 16,
                            direction: C.A.Directions.DOWN,
                            className: P.k5
                        })]
                    })
                }
            }), d && (0, i.jsx)(c.m, {
                asContainer: !0,
                text: U.intl.string(U.t.mW4DUE),
                children: (0, i.jsx)(u.EpV, {
                    size: "xs",
                    color: o.A.unsafe_rawColors.YELLOW_300.css
                })
            }), g && (0, i.jsx)(c.m, {
                asContainer: !0,
                text: U.intl.formatToPlainString(U.t.eummvd, {
                    maxTiers: M.f7,
                    maxProducts: 50
                }),
                children: (0, i.jsx)(u.EpV, {
                    size: "xs",
                    color: o.A.unsafe_rawColors.YELLOW_300.css
                })
            })]
        }), d || s === y.BEX.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(D, {
            onClick: () => G({
                backToSettings: !1
            })
        })]
    })
}

function k(t) {
    let {
        guildId: e
    } = t;
    return (0, a.bG)([O.A], () => O.A.isViewingRoles(e)) ? (0, i.jsx)("div", {
        className: s()(P.xd, {
            [P.KF]: (0, g.isWindows)(),
            [P.Xz]: (0, g.isMac)()
        }),
        children: (0, i.jsx)(f, {})
    }) : null
}