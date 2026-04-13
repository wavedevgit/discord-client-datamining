/** chunk id: 475723 params = (module,exports,require) **/
n.d(e, {
    A: () => j,
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
    E = n(669953),
    _ = n(713125),
    T = n(967305),
    A = n(739455),
    I = n(997509),
    N = n(976860),
    R = n(309010),
    p = n(967198),
    O = n(792831),
    h = n(147925),
    C = n(723702),
    m = n(529942),
    g = n(164956),
    S = n(311127),
    y = n(652215),
    M = n(746080);
n(500208);
var P = n(2242),
    x = n(985018),
    D = n(859812);

function U(t) {
    let {
        className: e,
        onClick: n,
        children: l,
        buttonRef: r
    } = t;
    return (0, i.jsx)(d.$n, {
        buttonRef: r,
        className: s()(D.x6, e),
        innerClassName: D.hZ,
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
    return (0, i.jsx)(U, {
        onClick: e,
        children: x.intl.string(x.t.R9GHya)
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
            isServerShopPreview: C
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
                    return x.intl.string(x.t.k7LGdh);
                case y.BEX.ROLE_SUBSCRIPTIONS:
                    return x.intl.string(x.t.bRqiqa);
                case y.BEX.ONBOARDING:
                    return x.intl.string(x.t.qZpU3S);
                default:
                    return x.intl.string(x.t.MTIXhi)
            }
        }(s),
        k = s === y.BEX.ROLE_SUBSCRIPTIONS ? x.intl.string(x.t.hZUCzd) : x.intl.string(x.t["/djIh7"]),
        L = n === M.VV.GUILD_ONBOARDING,
        G = t => {
            let {
                backToSettings: n
            } = t;
            null != e && (g.A.isFullServerPreview(e) && (0, N.pX)(y.BVt.CHANNEL(e)), _.Ay.shouldShowOnboarding(e) && (E.A.finishOnboarding(e), (0, T.Jg)(e)), (0, m.rf)(e), n && I.A.open(e, s), s === y.BEX.ROLE_SUBSCRIPTIONS && (0, A.Fx)(e))
        };
    return (0, i.jsxs)(u.$Td, {
        color: u.Hv$.BRAND,
        className: D.lm,
        children: [(0, i.jsxs)(U, {
            onClick: () => G({
                backToSettings: !0
            }),
            className: D.Gv,
            children: [(0, i.jsx)(O.A, {
                width: 16,
                height: 16,
                direction: O.A.Directions.LEFT,
                className: D.lJ
            }), j]
        }), L && d ? (0, i.jsx)("div", {
            className: D.XI,
            children: (0, i.jsx)("div", {
                className: D.ut,
                children: x.intl.string(x.t.PxbiAf)
            })
        }) : (0, i.jsxs)("div", {
            className: D.XI,
            children: [(0, i.jsx)("div", {
                className: D.ut,
                children: d ? x.intl.formatToPlainString(x.t["0PHahI"], {
                    numRoles: Object.keys(r).length
                }) : x.intl.formatToPlainString(x.t.vMlK8t, {
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
                    return (0, i.jsxs)(U, {
                        onClick: n,
                        buttonRef: t,
                        children: [k, (0, i.jsx)(h.A, {
                            width: 16,
                            height: 16,
                            direction: h.A.Directions.DOWN,
                            className: D.k5
                        })]
                    })
                }
            }), d && (0, i.jsx)(c.m, {
                asContainer: !0,
                text: x.intl.string(x.t.mW4DUE),
                children: (0, i.jsx)(u.EpV, {
                    size: "xs",
                    color: o.A.unsafe_rawColors.YELLOW_300.css
                })
            }), C && (0, i.jsx)(c.m, {
                asContainer: !0,
                text: x.intl.formatToPlainString(x.t.eummvd, {
                    maxTiers: P.f7,
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

function k(t) {
    let {
        guildId: e
    } = t;
    return (0, a.bG)([g.A], () => g.A.isViewingRoles(e)) ? (0, i.jsx)("div", {
        className: s()(D.xd, {
            [D.KF]: (0, C.isWindows)(),
            [D.Xz]: (0, C.isMac)()
        }),
        children: (0, i.jsx)(j, {})
    }) : null
}