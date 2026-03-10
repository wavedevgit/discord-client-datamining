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
    d = n(421380),
    u = n(397927),
    _ = n(669953),
    E = n(713125),
    T = n(967305),
    A = n(739455),
    I = n(997509),
    N = n(976860),
    p = n(309010),
    R = n(967198),
    S = n(792831),
    m = n(147925),
    h = n(723702),
    g = n(529942),
    C = n(164956),
    O = n(311127),
    y = n(652215),
    x = n(746080);
n(500208);
var P = n(2242),
    D = n(985018),
    U = n(840199);

function f(e) {
    let {
        className: t,
        onClick: n,
        children: l,
        buttonRef: r
    } = e;
    return (0, i.jsx)(d.$n, {
        buttonRef: r,
        className: s()(U.x6, t),
        innerClassName: U.hZ,
        look: d.$n.Looks.OUTLINED,
        color: d.$n.Colors.WHITE,
        size: d.$n.Sizes.NONE,
        onClick: n,
        children: l
    })
}

function M(e) {
    let {
        onClick: t
    } = e;
    return (0, i.jsx)(f, {
        onClick: t,
        children: D.intl.string(D.t.R9GHya)
    })
}

function L() {
    let e = l.useRef(null),
        t = (0, a.bG)([R.A], () => R.A.getGuildId()),
        n = (0, a.bG)([p.A], () => p.A.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: d,
            isServerShopPreview: h
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
                    return D.intl.string(D.t.k7LGdh);
                case y.BEX.ROLE_SUBSCRIPTIONS:
                    return D.intl.string(D.t.bRqiqa);
                case y.BEX.ONBOARDING:
                    return D.intl.string(D.t.qZpU3S);
                default:
                    return D.intl.string(D.t.MTIXhi)
            }
        }(s),
        j = s === y.BEX.ROLE_SUBSCRIPTIONS ? D.intl.string(D.t.hZUCzd) : D.intl.string(D.t["/djIh7"]),
        b = n === x.VV.GUILD_ONBOARDING,
        k = e => {
            let {
                backToSettings: n
            } = e;
            null != t && (C.A.isFullServerPreview(t) && (0, N.pX)(y.BVt.CHANNEL(t)), E.Ay.shouldShowOnboarding(t) && (_.A.finishOnboarding(t), (0, T.Jg)(t)), (0, g.rf)(t), n && I.A.open(t, s), s === y.BEX.ROLE_SUBSCRIPTIONS && (0, A.Fx)(t))
        };
    return (0, i.jsxs)(u.$Td, {
        color: u.Hv$.BRAND,
        className: U.lm,
        children: [(0, i.jsxs)(f, {
            onClick: () => k({
                backToSettings: !0
            }),
            className: U.Gv,
            children: [(0, i.jsx)(S.A, {
                width: 16,
                height: 16,
                direction: S.A.Directions.LEFT,
                className: U.lJ
            }), L]
        }), b && d ? (0, i.jsx)("div", {
            className: U.XI,
            children: (0, i.jsx)("div", {
                className: U.ut,
                children: D.intl.string(D.t.PxbiAf)
            })
        }) : (0, i.jsxs)("div", {
            className: U.XI,
            children: [(0, i.jsx)("div", {
                className: U.ut,
                children: d ? D.intl.formatToPlainString(D.t["0PHahI"], {
                    numRoles: Object.keys(r).length
                }) : D.intl.formatToPlainString(D.t.vMlK8t, {
                    numRoles: Object.keys(r).length
                })
            }), (0, i.jsx)(u.YNO, {
                targetElementRef: e,
                position: "bottom",
                renderPopout: () => (0, i.jsx)(O.A, {
                    guildId: t
                }),
                children: t => {
                    let {
                        onClick: n
                    } = t;
                    return (0, i.jsxs)(f, {
                        onClick: n,
                        buttonRef: e,
                        children: [j, (0, i.jsx)(m.A, {
                            width: 16,
                            height: 16,
                            direction: m.A.Directions.DOWN,
                            className: U.k5
                        })]
                    })
                }
            }), d && (0, i.jsx)(c.m, {
                asContainer: !0,
                text: D.intl.string(D.t.mW4DUE),
                children: (0, i.jsx)(u.EpV, {
                    size: "xs",
                    color: o.A.unsafe_rawColors.YELLOW_300.css
                })
            }), h && (0, i.jsx)(c.m, {
                asContainer: !0,
                text: D.intl.formatToPlainString(D.t.eummvd, {
                    maxTiers: P.f7,
                    maxProducts: 50
                }),
                children: (0, i.jsx)(u.EpV, {
                    size: "xs",
                    color: o.A.unsafe_rawColors.YELLOW_300.css
                })
            })]
        }), d || s === y.BEX.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(M, {
            onClick: () => k({
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
        className: s()(U.xd, {
            [U.KF]: (0, h.isWindows)(),
            [U.Xz]: (0, h.isMac)()
        }),
        children: (0, i.jsx)(L, {})
    }) : null
}