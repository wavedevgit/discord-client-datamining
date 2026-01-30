/** chunk id: 417021, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048), n(228524);
var l = n(627968),
    i = n(311907),
    r = n(397927),
    s = n(793574),
    o = n(688810),
    a = n(632738),
    d = n(994500),
    c = n(562153),
    u = n(183555),
    p = n(672385),
    f = n(950191),
    m = n(249790),
    A = n(946356),
    x = n(254828),
    g = n(783123),
    j = n(652215),
    h = n(996988),
    b = n(985018),
    v = n(599929);

function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = l
        })
    }
    return e
}

function y(e) {
    let {
        user: t,
        guildId: n,
        channelId: y,
        messageId: _,
        roleId: O,
        transitionState: N,
        openedAt: E,
        onHide: P,
        sourceAnalyticsLocations: T = []
    } = e, C = n === j.ME ? void 0 : n, S = (0, i.bG)([d.A], () => d.A.isBlocked(t.id)), {
        analyticsLocations: L
    } = (0, o.Ay)([...T, S ? s.A.BLOCKED_PROFILE_MODAL : s.A.IGNORED_PROFILE_MODAL]), R = (0, u.pb)({
        layout: "MODAL_V2",
        userId: t.id,
        showGuildProfile: !0,
        guildId: C,
        channelId: y,
        messageId: _,
        roleId: O
    }), D = [{
        icon: r.yr3,
        description: b.intl.string(b.t.kcuWva)
    }, {
        icon: r.yr3,
        description: b.intl.string(S ? b.t.QxrDY1 : b.t.W6fjkS)
    }], w = (0, f.Ay)(t.id, C), M = c.Ay.getName(null == w ? void 0 : w.guildId, y, t), G = b.intl.formatToPlainString(b.t.KRe1Fk, {
        name: M
    });
    return (0, l.jsx)(o.f5, {
        value: L,
        children: (0, l.jsx)(u.of, {
            value: R,
            openedAt: E,
            fetchStartedAt: null == w ? void 0 : w.fetchStartedAt,
            fetchEndedAt: null == w ? void 0 : w.fetchEndedAt,
            isLoaded: null == w ? void 0 : w.isLoaded,
            children: (0, l.jsx)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: N,
                className: v.zr,
                "aria-label": G,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, l.jsxs)(A.A, {
                    user: t,
                    displayProfile: w,
                    themeType: h.d.MODAL_V2,
                    children: [(0, l.jsx)("div", {
                        className: v.Tp
                    }), (0, l.jsxs)("div", {
                        className: v.Qs,
                        children: [(0, l.jsx)(m.A, {
                            user: t,
                            guildId: C
                        }), (0, l.jsxs)("div", {
                            className: v.FS,
                            children: [(0, l.jsx)(r.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: b.intl.string(b.t.b33pLD)
                            }), (0, l.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: b.intl.format(S ? b.t.T7QiLn : b.t.MnEowy, {
                                    username: M
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: v.vb,
                            children: D.map((e, t) => {
                                let {
                                    icon: n,
                                    description: i
                                } = e;
                                return (0, l.jsx)(a.PQ, {
                                    icon: n,
                                    title: i,
                                    titleVariant: "text-md/normal",
                                    color: r.LU0.colors.TEXT_DEFAULT.css
                                }, t)
                            })
                        }), (0, l.jsxs)(r.BJc, {
                            align: "center",
                            children: [(0, l.jsx)(g.A, {
                                size: "md",
                                isBlocked: S,
                                onClick: () => {
                                    P(), (0, p.Wn)(I({
                                        action: S ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: L
                                    }, R))
                                }
                            }), (0, l.jsx)(x.A, {
                                userId: t.id,
                                onClick: () => {
                                    P(), (0, p.Wn)(I({
                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                        analyticsLocations: L
                                    }, R))
                                }
                            })]
                        })]
                    })]
                })
            })
        })
    })
}