/** Chunk was on web.js **/
/** chunk id: 475723, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j,
    w: () => M
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(827734),
    c = n(990078),
    u = n(421380),
    d = n(397927),
    f = n(669953),
    p = n(713125),
    _ = n(967305),
    h = n(739455),
    m = n(997509),
    g = n(976860),
    E = n(309010),
    y = n(967198),
    b = n(792831),
    O = n(147925),
    v = n(723702),
    A = n(529942),
    I = n(164956),
    S = n(311127),
    T = n(652215),
    C = n(746080);
n(500208);
var N = n(2242),
    w = n(985018),
    R = n(840199);

function P(e) {
    let {
        className: t,
        onClick: n,
        children: i,
        buttonRef: a
    } = e;
    return (0, r.jsx)(u.$n, {
        buttonRef: a,
        className: s()(R.x6, t),
        innerClassName: R.hZ,
        look: u.$n.Looks.OUTLINED,
        color: u.$n.Colors.WHITE,
        size: u.$n.Sizes.NONE,
        onClick: n,
        children: i
    })
}

function D(e) {
    let {
        onClick: t
    } = e;
    return (0, r.jsx)(P, {
        onClick: t,
        children: w.intl.string(w.t.R9GHya)
    })
}

function x(e) {
    switch (e) {
        case T.BEX.INTEGRATIONS:
            return w.intl.string(w.t.k7LGdh);
        case T.BEX.ROLE_SUBSCRIPTIONS:
            return w.intl.string(w.t.bRqiqa);
        case T.BEX.ONBOARDING:
            return w.intl.string(w.t.qZpU3S);
        default:
            return w.intl.string(w.t.MTIXhi)
    }
}

function L(e) {
    return e === T.BEX.ROLE_SUBSCRIPTIONS ? w.intl.string(w.t.hZUCzd) : w.intl.string(w.t["/djIh7"])
}

function j() {
    let e = i.useRef(null),
        t = (0, o.bG)([y.A], () => y.A.getGuildId()),
        n = (0, o.bG)([E.A], () => E.A.getChannelId(t)),
        {
            viewingRoles: a,
            backNavigationSection: s,
            isFullServerPreview: u,
            isServerShopPreview: v
        } = (0, o.cf)([I.A], () => ({
            viewingRoles: null != t ? I.A.getViewingRoles(t) : null,
            backNavigationSection: I.A.getBackNavigationSection(t),
            isFullServerPreview: null != t && I.A.isFullServerPreview(t),
            isServerShopPreview: null != t && I.A.isViewingServerShop(t)
        }));
    if (null == a || null == t) return null;
    let j = x(s),
        M = L(s),
        k = n === C.VV.GUILD_ONBOARDING,
        U = e => {
            let {
                backToSettings: n
            } = e;
            null != t && (I.A.isFullServerPreview(t) && (0, g.pX)(T.BVt.CHANNEL(t)), p.Ay.shouldShowOnboarding(t) && (f.A.finishOnboarding(t), (0, _.Jg)(t)), (0, A.rf)(t), n && m.A.open(t, s), s === T.BEX.ROLE_SUBSCRIPTIONS && (0, h.Fx)(t))
        };
    return (0, r.jsxs)(d.$Td, {
        color: d.Hv$.BRAND,
        className: R.lm,
        children: [(0, r.jsxs)(P, {
            onClick: () => U({
                backToSettings: !0
            }),
            className: R.Gv,
            children: [(0, r.jsx)(b.A, {
                width: 16,
                height: 16,
                direction: b.A.Directions.LEFT,
                className: R.lJ
            }), j]
        }), k && u ? (0, r.jsx)("div", {
            className: R.XI,
            children: (0, r.jsx)("div", {
                className: R.ut,
                children: w.intl.string(w.t.PxbiAf)
            })
        }) : (0, r.jsxs)("div", {
            className: R.XI,
            children: [(0, r.jsx)("div", {
                className: R.ut,
                children: u ? w.intl.formatToPlainString(w.t["0PHahI"], {
                    numRoles: Object.keys(a).length
                }) : w.intl.formatToPlainString(w.t.vMlK8t, {
                    numRoles: Object.keys(a).length
                })
            }), (0, r.jsx)(d.YNO, {
                targetElementRef: e,
                position: "bottom",
                renderPopout: () => (0, r.jsx)(S.A, {
                    guildId: t
                }),
                children: t => {
                    let {
                        onClick: n
                    } = t;
                    return (0, r.jsxs)(P, {
                        onClick: n,
                        buttonRef: e,
                        children: [M, (0, r.jsx)(O.A, {
                            width: 16,
                            height: 16,
                            direction: O.A.Directions.DOWN,
                            className: R.k5
                        })]
                    })
                }
            }), u && (0, r.jsx)(c.m, {
                asContainer: !0,
                text: w.intl.string(w.t.mW4DUE),
                children: (0, r.jsx)(d.EpV, {
                    size: "xs",
                    color: l.A.unsafe_rawColors.YELLOW_300.css
                })
            }), v && (0, r.jsx)(c.m, {
                asContainer: !0,
                text: w.intl.formatToPlainString(w.t.eummvd, {
                    maxTiers: N.f7,
                    maxProducts: 50
                }),
                children: (0, r.jsx)(d.EpV, {
                    size: "xs",
                    color: l.A.unsafe_rawColors.YELLOW_300.css
                })
            })]
        }), u || s === T.BEX.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(D, {
            onClick: () => U({
                backToSettings: !1
            })
        })]
    })
}

function M(e) {
    let {
        guildId: t
    } = e;
    return (0, o.bG)([I.A], () => I.A.isViewingRoles(t)) ? (0, r.jsx)("div", {
        className: s()(R.xd, {
            [R.KF]: (0, v.isWindows)(),
            [R.Xz]: (0, v.isMac)()
        }),
        children: (0, r.jsx)(j, {})
    }) : null
}