/** chunk id: 475723 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => j,
    w: () => L
});
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(311907),
    o = n(827734),
    c = n(990078),
    u = n(421380),
    d = n(397927),
    E = n(669953),
    _ = n(713125),
    T = n(967305),
    A = n(739455),
    I = n(997509),
    N = n(976860),
    p = n(309010),
    R = n(967198),
    g = n(792831),
    h = n(147925),
    O = n(723702),
    m = n(529942),
    C = n(164956),
    S = n(311127),
    y = n(652215),
    x = n(746080);
n(500208);
var P = n(2242),
    U = n(985018),
    M = n(840199);

function f(t) {
    let {
        className: e,
        onClick: n,
        children: r,
        buttonRef: s
    } = t;
    return (0, i.jsx)(u.$n, {
        buttonRef: s,
        className: l()(M.x6, e),
        innerClassName: M.hZ,
        look: u.$n.Looks.OUTLINED,
        color: u.$n.Colors.WHITE,
        size: u.$n.Sizes.NONE,
        onClick: n,
        children: r
    })
}

function D(t) {
    let {
        onClick: e
    } = t;
    return (0, i.jsx)(f, {
        onClick: e,
        children: U.intl.string(U.t.R9GHya)
    })
}

function j() {
    let t = r.useRef(null),
        e = (0, a.bG)([R.A], () => R.A.getGuildId()),
        n = (0, a.bG)([p.A], () => p.A.getChannelId(e)),
        {
            viewingRoles: s,
            backNavigationSection: l,
            isFullServerPreview: u,
            isServerShopPreview: O
        } = (0, a.cf)([C.A], () => ({
            viewingRoles: null != e ? C.A.getViewingRoles(e) : null,
            backNavigationSection: C.A.getBackNavigationSection(e),
            isFullServerPreview: null != e && C.A.isFullServerPreview(e),
            isServerShopPreview: null != e && C.A.isViewingServerShop(e)
        }));
    if (null == s || null == e) return null;
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
        }(l),
        L = l === y.BEX.ROLE_SUBSCRIPTIONS ? U.intl.string(U.t.hZUCzd) : U.intl.string(U.t["/djIh7"]),
        k = n === x.VV.GUILD_ONBOARDING,
        G = t => {
            let {
                backToSettings: n
            } = t;
            null != e && (C.A.isFullServerPreview(e) && (0, N.pX)(y.BVt.CHANNEL(e)), _.Ay.shouldShowOnboarding(e) && (E.A.finishOnboarding(e), (0, T.Jg)(e)), (0, m.rf)(e), n && I.A.open(e, l), l === y.BEX.ROLE_SUBSCRIPTIONS && (0, A.Fx)(e))
        };
    return (0, i.jsxs)(d.$Td, {
        color: d.Hv$.BRAND,
        className: M.lm,
        children: [(0, i.jsxs)(f, {
            onClick: () => G({
                backToSettings: !0
            }),
            className: M.Gv,
            children: [(0, i.jsx)(g.A, {
                width: 16,
                height: 16,
                direction: g.A.Directions.LEFT,
                className: M.lJ
            }), j]
        }), k && u ? (0, i.jsx)("div", {
            className: M.XI,
            children: (0, i.jsx)("div", {
                className: M.ut,
                children: U.intl.string(U.t.PxbiAf)
            })
        }) : (0, i.jsxs)("div", {
            className: M.XI,
            children: [(0, i.jsx)("div", {
                className: M.ut,
                children: u ? U.intl.formatToPlainString(U.t["0PHahI"], {
                    numRoles: Object.keys(s).length
                }) : U.intl.formatToPlainString(U.t.vMlK8t, {
                    numRoles: Object.keys(s).length
                })
            }), (0, i.jsx)(d.YNO, {
                targetElementRef: t,
                position: "bottom",
                renderPopout: () => (0, i.jsx)(S.A, {
                    guildId: e
                }),
                children: e => {
                    let {
                        onClick: n
                    } = e;
                    return (0, i.jsxs)(f, {
                        onClick: n,
                        buttonRef: t,
                        children: [L, (0, i.jsx)(h.A, {
                            width: 16,
                            height: 16,
                            direction: h.A.Directions.DOWN,
                            className: M.k5
                        })]
                    })
                }
            }), u && (0, i.jsx)(c.m, {
                asContainer: !0,
                text: U.intl.string(U.t.mW4DUE),
                children: (0, i.jsx)(d.EpV, {
                    size: "xs",
                    color: o.A.unsafe_rawColors.YELLOW_300.css
                })
            }), O && (0, i.jsx)(c.m, {
                asContainer: !0,
                text: U.intl.formatToPlainString(U.t.eummvd, {
                    maxTiers: P.f7,
                    maxProducts: 50
                }),
                children: (0, i.jsx)(d.EpV, {
                    size: "xs",
                    color: o.A.unsafe_rawColors.YELLOW_300.css
                })
            })]
        }), u || l === y.BEX.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(D, {
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
    return (0, a.bG)([C.A], () => C.A.isViewingRoles(e)) ? (0, i.jsx)("div", {
        className: l()(M.xd, {
            [M.KF]: (0, O.isWindows)(),
            [M.Xz]: (0, O.isMac)()
        }),
        children: (0, i.jsx)(j, {})
    }) : null
}