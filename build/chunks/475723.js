/** chunk id: 475723 params = (module,exports,require) **/
n.d(t, {
    A: () => L,
    w: () => j
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(827734),
    c = n(990078),
    u = n(421380),
    d = n(397927),
    _ = n(669953),
    E = n(713125),
    T = n(967305),
    A = n(739455),
    I = n(997509),
    p = n(976860),
    N = n(309010),
    m = n(967198),
    R = n(792831),
    h = n(147925),
    S = n(723702),
    g = n(529942),
    C = n(164956),
    O = n(311127),
    y = n(652215),
    x = n(746080);
n(500208);
var f = n(2242),
    P = n(985018),
    D = n(840199);

function U(e) {
    let {
        className: t,
        onClick: n,
        children: l,
        buttonRef: r
    } = e;
    return (0, i.jsx)(u.$n, {
        buttonRef: r,
        className: s()(D.x6, t),
        innerClassName: D.hZ,
        look: u.$n.Looks.OUTLINED,
        color: u.$n.Colors.WHITE,
        size: u.$n.Sizes.NONE,
        onClick: n,
        children: l
    })
}

function M(e) {
    let {
        onClick: t
    } = e;
    return (0, i.jsx)(U, {
        onClick: t,
        children: P.intl.string(P.t.R9GHya)
    })
}

function L() {
    let e = l.useRef(null),
        t = (0, a.bG)([m.A], () => m.A.getGuildId()),
        n = (0, a.bG)([N.A], () => N.A.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: u,
            isServerShopPreview: S
        } = (0, a.cf)([C.A], () => ({
            viewingRoles: null != t ? C.A.getViewingRoles(t) : null,
            backNavigationSection: C.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && C.A.isFullServerPreview(t),
            isServerShopPreview: null != t && C.A.isViewingServerShop(t)
        }));
    if (null == r || null == t) return null;
    let L = function(e) {
            switch (e) {
                case y.BEX.INTEGRATIONS:
                    return P.intl.string(P.t.k7LGdh);
                case y.BEX.ROLE_SUBSCRIPTIONS:
                    return P.intl.string(P.t.bRqiqa);
                case y.BEX.ONBOARDING:
                    return P.intl.string(P.t.qZpU3S);
                default:
                    return P.intl.string(P.t.MTIXhi)
            }
        }(s),
        j = s === y.BEX.ROLE_SUBSCRIPTIONS ? P.intl.string(P.t.hZUCzd) : P.intl.string(P.t["/djIh7"]),
        b = n === x.VV.GUILD_ONBOARDING,
        v = e => {
            let {
                backToSettings: n
            } = e;
            null != t && (C.A.isFullServerPreview(t) && (0, p.pX)(y.BVt.CHANNEL(t)), E.Ay.shouldShowOnboarding(t) && (_.A.finishOnboarding(t), (0, T.Jg)(t)), (0, g.rf)(t), n && I.A.open(t, s), s === y.BEX.ROLE_SUBSCRIPTIONS && (0, A.Fx)(t))
        };
    return (0, i.jsxs)(d.$Td, {
        color: d.Hv$.BRAND,
        className: D.lm,
        children: [(0, i.jsxs)(U, {
            onClick: () => v({
                backToSettings: !0
            }),
            className: D.Gv,
            children: [(0, i.jsx)(R.A, {
                width: 16,
                height: 16,
                direction: R.A.Directions.LEFT,
                className: D.lJ
            }), L]
        }), b && u ? (0, i.jsx)("div", {
            className: D.XI,
            children: (0, i.jsx)("div", {
                className: D.ut,
                children: P.intl.string(P.t.PxbiAf)
            })
        }) : (0, i.jsxs)("div", {
            className: D.XI,
            children: [(0, i.jsx)("div", {
                className: D.ut,
                children: u ? P.intl.formatToPlainString(P.t["0PHahI"], {
                    numRoles: Object.keys(r).length
                }) : P.intl.formatToPlainString(P.t.vMlK8t, {
                    numRoles: Object.keys(r).length
                })
            }), (0, i.jsx)(d.YNO, {
                targetElementRef: e,
                position: "bottom",
                renderPopout: () => (0, i.jsx)(O.A, {
                    guildId: t
                }),
                children: t => {
                    let {
                        onClick: n
                    } = t;
                    return (0, i.jsxs)(U, {
                        onClick: n,
                        buttonRef: e,
                        children: [j, (0, i.jsx)(h.A, {
                            width: 16,
                            height: 16,
                            direction: h.A.Directions.DOWN,
                            className: D.k5
                        })]
                    })
                }
            }), u && (0, i.jsx)(c.m, {
                asContainer: !0,
                text: P.intl.string(P.t.mW4DUE),
                children: (0, i.jsx)(d.EpV, {
                    size: "xs",
                    color: o.A.unsafe_rawColors.YELLOW_300.css
                })
            }), S && (0, i.jsx)(c.m, {
                asContainer: !0,
                text: P.intl.formatToPlainString(P.t.eummvd, {
                    maxTiers: f.f7,
                    maxProducts: 50
                }),
                children: (0, i.jsx)(d.EpV, {
                    size: "xs",
                    color: o.A.unsafe_rawColors.YELLOW_300.css
                })
            })]
        }), u || s === y.BEX.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(M, {
            onClick: () => v({
                backToSettings: !1
            })
        })]
    })
}

function j(e) {
    let {
        guildId: t
    } = e;
    return (0, a.bG)([C.A], () => C.A.isViewingRoles(t)) ? (0, i.jsx)("div", {
        className: s()(D.xd, {
            [D.KF]: (0, S.isWindows)(),
            [D.Xz]: (0, S.isMac)()
        }),
        children: (0, i.jsx)(L, {})
    }) : null
}