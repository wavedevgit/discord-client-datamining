/** chunk id: 475723 params = (module,exports,require) **/
n.d(t, {
    A: () => M,
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
    A = n(967305),
    T = n(739455),
    I = n(997509),
    N = n(976860),
    p = n(309010),
    h = n(967198),
    m = n(792831),
    S = n(147925),
    C = n(723702),
    R = n(529942),
    g = n(164956),
    O = n(311127),
    y = n(652215),
    x = n(746080);
n(500208);
var P = n(2242),
    f = n(985018),
    D = n(840199);

function L(e) {
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

function U(e) {
    let {
        onClick: t
    } = e;
    return (0, i.jsx)(L, {
        onClick: t,
        children: f.intl.string(f.t.R9GHya)
    })
}

function M() {
    let e = l.useRef(null),
        t = (0, a.bG)([h.A], () => h.A.getGuildId()),
        n = (0, a.bG)([p.A], () => p.A.getChannelId(t)),
        {
            viewingRoles: r,
            backNavigationSection: s,
            isFullServerPreview: u,
            isServerShopPreview: C
        } = (0, a.cf)([g.A], () => ({
            viewingRoles: null != t ? g.A.getViewingRoles(t) : null,
            backNavigationSection: g.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && g.A.isFullServerPreview(t),
            isServerShopPreview: null != t && g.A.isViewingServerShop(t)
        }));
    if (null == r || null == t) return null;
    let M = function(e) {
            switch (e) {
                case y.BEX.INTEGRATIONS:
                    return f.intl.string(f.t.k7LGdh);
                case y.BEX.ROLE_SUBSCRIPTIONS:
                    return f.intl.string(f.t.bRqiqa);
                case y.BEX.ONBOARDING:
                    return f.intl.string(f.t.qZpU3S);
                default:
                    return f.intl.string(f.t.MTIXhi)
            }
        }(s),
        j = s === y.BEX.ROLE_SUBSCRIPTIONS ? f.intl.string(f.t.hZUCzd) : f.intl.string(f.t["/djIh7"]),
        b = n === x.VV.GUILD_ONBOARDING,
        G = e => {
            let {
                backToSettings: n
            } = e;
            null != t && (g.A.isFullServerPreview(t) && (0, N.pX)(y.BVt.CHANNEL(t)), E.Ay.shouldShowOnboarding(t) && (_.A.finishOnboarding(t), (0, A.Jg)(t)), (0, R.rf)(t), n && I.A.open(t, s), s === y.BEX.ROLE_SUBSCRIPTIONS && (0, T.Fx)(t))
        };
    return (0, i.jsxs)(d.$Td, {
        color: d.Hv$.BRAND,
        className: D.lm,
        children: [(0, i.jsxs)(L, {
            onClick: () => G({
                backToSettings: !0
            }),
            className: D.Gv,
            children: [(0, i.jsx)(m.A, {
                width: 16,
                height: 16,
                direction: m.A.Directions.LEFT,
                className: D.lJ
            }), M]
        }), b && u ? (0, i.jsx)("div", {
            className: D.XI,
            children: (0, i.jsx)("div", {
                className: D.ut,
                children: f.intl.string(f.t.PxbiAf)
            })
        }) : (0, i.jsxs)("div", {
            className: D.XI,
            children: [(0, i.jsx)("div", {
                className: D.ut,
                children: u ? f.intl.formatToPlainString(f.t["0PHahI"], {
                    numRoles: Object.keys(r).length
                }) : f.intl.formatToPlainString(f.t.vMlK8t, {
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
                    return (0, i.jsxs)(L, {
                        onClick: n,
                        buttonRef: e,
                        children: [j, (0, i.jsx)(S.A, {
                            width: 16,
                            height: 16,
                            direction: S.A.Directions.DOWN,
                            className: D.k5
                        })]
                    })
                }
            }), u && (0, i.jsx)(c.m, {
                asContainer: !0,
                text: f.intl.string(f.t.mW4DUE),
                children: (0, i.jsx)(d.EpV, {
                    size: "xs",
                    color: o.A.unsafe_rawColors.YELLOW_300.css
                })
            }), C && (0, i.jsx)(c.m, {
                asContainer: !0,
                text: f.intl.formatToPlainString(f.t.eummvd, {
                    maxTiers: P.f7,
                    maxProducts: 50
                }),
                children: (0, i.jsx)(d.EpV, {
                    size: "xs",
                    color: o.A.unsafe_rawColors.YELLOW_300.css
                })
            })]
        }), u || s === y.BEX.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(U, {
            onClick: () => G({
                backToSettings: !1
            })
        })]
    })
}

function j(e) {
    let {
        guildId: t
    } = e;
    return (0, a.bG)([g.A], () => g.A.isViewingRoles(t)) ? (0, i.jsx)("div", {
        className: s()(D.xd, {
            [D.KF]: (0, C.isWindows)(),
            [D.Xz]: (0, C.isMac)()
        }),
        children: (0, i.jsx)(M, {})
    }) : null
}