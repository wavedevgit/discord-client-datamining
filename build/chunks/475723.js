/** chunk id: 475723 params = (module,exports,require) **/
n.d(e, {
    A: () => j,
    w: () => L
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
    E = n(669953),
    _ = n(713125),
    T = n(967305),
    A = n(739455),
    I = n(997509),
    N = n(976860),
    R = n(309010),
    p = n(967198),
    h = n(792831),
    O = n(147925),
    m = n(723702),
    C = n(529942),
    g = n(164956),
    S = n(311127),
    y = n(652215),
    P = n(746080);
n(500208);
var M = n(2242),
    U = n(985018),
    x = n(859812);

function D(t) {
    let {
        className: e,
        onClick: n,
        children: l,
        buttonRef: r
    } = t;
    return (0, i.jsx)(d.$n, {
        buttonRef: r,
        className: s()(x.x6, e),
        innerClassName: x.hZ,
        look: d.$n.Looks.OUTLINED,
        color: d.$n.Colors.WHITE,
        size: d.$n.Sizes.NONE,
        onClick: n,
        children: l
    })
}

function f(t) {
    let {
        onClick: e
    } = t;
    return (0, i.jsx)(D, {
        onClick: e,
        children: U.intl.string(U.t.R9GHya)
    })
}

function j() {
    let t = l.useRef(null),
        e = (0, a.bG)([p.A], () => p.A.getGuildId()),
        n = (0, a.bG)([R.A], () => R.A.getChannelId(e)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: d,
            isServerShopPreview: m
        } = (0, a.cf)([g.A], () => ({
            viewingRoles: null != e ? g.A.getViewingRoles(e) : null,
            backNavigationSection: g.A.getBackNavigationSection(e),
            isFullServerPreview: null != e && g.A.isFullServerPreview(e),
            isServerShopPreview: null != e && g.A.isViewingServerShop(e)
        }));
    if (null == r || null == e) return null;
    let j = function(t) {
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
        L = s === y.BEX.ROLE_SUBSCRIPTIONS ? U.intl.string(U.t.hZUCzd) : U.intl.string(U.t["/djIh7"]),
        k = n === P.VV.GUILD_ONBOARDING,
        G = t => {
            let {
                backToSettings: n
            } = t;
            null != e && (g.A.isFullServerPreview(e) && (0, N.pX)(y.BVt.CHANNEL(e)), _.Ay.shouldShowOnboarding(e) && (E.A.finishOnboarding(e), (0, T.Jg)(e)), (0, C.rf)(e), n && I.A.open(e, s), s === y.BEX.ROLE_SUBSCRIPTIONS && (0, A.Fx)(e))
        };
    return (0, i.jsxs)(u.$Td, {
        color: u.Hv$.BRAND,
        className: x.lm,
        children: [(0, i.jsxs)(D, {
            onClick: () => G({
                backToSettings: !0
            }),
            className: x.Gv,
            children: [(0, i.jsx)(h.A, {
                width: 16,
                height: 16,
                direction: h.A.Directions.LEFT,
                className: x.lJ
            }), j]
        }), k && d ? (0, i.jsx)("div", {
            className: x.XI,
            children: (0, i.jsx)("div", {
                className: x.ut,
                children: U.intl.string(U.t.PxbiAf)
            })
        }) : (0, i.jsxs)("div", {
            className: x.XI,
            children: [(0, i.jsx)("div", {
                className: x.ut,
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
                    return (0, i.jsxs)(D, {
                        onClick: n,
                        buttonRef: t,
                        children: [L, (0, i.jsx)(O.A, {
                            width: 16,
                            height: 16,
                            direction: O.A.Directions.DOWN,
                            className: x.k5
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
            }), m && (0, i.jsx)(c.m, {
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
        }), d || s === y.BEX.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(f, {
            onClick: () => G({
                backToSettings: !1
            })
        })]
    })
}

function L(t) {
    let {
        guildId: e
    } = t;
    return (0, a.bG)([g.A], () => g.A.isViewingRoles(e)) ? (0, i.jsx)("div", {
        className: s()(x.xd, {
            [x.KF]: (0, m.isWindows)(),
            [x.Xz]: (0, m.isMac)()
        }),
        children: (0, i.jsx)(j, {})
    }) : null
}