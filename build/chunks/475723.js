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
    C = n(147925),
    h = n(723702),
    m = n(529942),
    g = n(164956),
    S = n(311127),
    y = n(652215),
    M = n(746080);
n(500208);
var P = n(2242),
    D = n(985018),
    x = n(595156);

function U(t) {
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
    return (0, i.jsx)(U, {
        onClick: e,
        children: D.intl.string(D.t.R9GHya)
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
            isServerShopPreview: h
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
                    return D.intl.string(D.t.k7LGdh);
                case y.BEX.ROLE_SUBSCRIPTIONS:
                    return D.intl.string(D.t.bRqiqa);
                case y.BEX.ONBOARDING:
                    return D.intl.string(D.t.qZpU3S);
                default:
                    return D.intl.string(D.t.MTIXhi)
            }
        }(s),
        k = s === y.BEX.ROLE_SUBSCRIPTIONS ? D.intl.string(D.t.hZUCzd) : D.intl.string(D.t["/djIh7"]),
        L = n === M.VV.GUILD_ONBOARDING,
        G = t => {
            let {
                backToSettings: n
            } = t;
            null != e && (g.A.isFullServerPreview(e) && (0, N.pX)(y.BVt.CHANNEL(e)), _.Ay.shouldShowOnboarding(e) && (E.A.finishOnboarding(e), (0, T.Jg)(e)), (0, m.rf)(e), n && I.A.open(e, s), s === y.BEX.ROLE_SUBSCRIPTIONS && (0, A.Fx)(e))
        };
    return (0, i.jsxs)(u.$Td, {
        color: u.Hv$.BRAND,
        className: x.lm,
        children: [(0, i.jsxs)(U, {
            onClick: () => G({
                backToSettings: !0
            }),
            className: x.Gv,
            children: [(0, i.jsx)(O.A, {
                width: 16,
                height: 16,
                direction: O.A.Directions.LEFT,
                className: x.lJ
            }), j]
        }), L && d ? (0, i.jsx)("div", {
            className: x.XI,
            children: (0, i.jsx)("div", {
                className: x.ut,
                children: D.intl.string(D.t.PxbiAf)
            })
        }) : (0, i.jsxs)("div", {
            className: x.XI,
            children: [(0, i.jsx)("div", {
                className: x.ut,
                children: d ? D.intl.formatToPlainString(D.t["0PHahI"], {
                    numRoles: Object.keys(r).length
                }) : D.intl.formatToPlainString(D.t.vMlK8t, {
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
                        children: [k, (0, i.jsx)(C.A, {
                            width: 16,
                            height: 16,
                            direction: C.A.Directions.DOWN,
                            className: x.k5
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
        className: s()(x.xd, {
            [x.KF]: (0, h.isWindows)(),
            [x.Xz]: (0, h.isMac)()
        }),
        children: (0, i.jsx)(j, {})
    }) : null
}