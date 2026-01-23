/** Chunk was on 64228 **/
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
    c = n(994500),
    d = n(562153),
    u = n(183555),
    p = n(672385),
    m = n(950191),
    f = n(249790),
    A = n(946356),
    x = n(254828),
    j = n(783123),
    h = n(652215),
    g = n(996988),
    v = n(985018),
    b = n(599929);

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
        onHide: T,
        sourceAnalyticsLocations: P = []
    } = e, C = n === h.ME ? void 0 : n, S = (0, i.bG)([c.A], () => c.A.isBlocked(t.id)), {
        analyticsLocations: L
    } = (0, o.Ay)([...P, S ? s.A.BLOCKED_PROFILE_MODAL : s.A.IGNORED_PROFILE_MODAL]), R = (0, u.pb)({
        layout: "MODAL_V2",
        userId: t.id,
        showGuildProfile: !0,
        guildId: C,
        channelId: y,
        messageId: _,
        roleId: O
    }), D = [{
        icon: r.yr3,
        description: v.intl.string(v.t.kcuWva)
    }, {
        icon: r.yr3,
        description: v.intl.string(S ? v.t.QxrDY1 : v.t.W6fjkS)
    }], w = (0, m.Ay)(t.id, C), M = d.Ay.getName(null == w ? void 0 : w.guildId, y, t), G = v.intl.formatToPlainString(v.t.KRe1Fk, {
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
                className: b.zr,
                "aria-label": G,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, l.jsxs)(A.A, {
                    user: t,
                    displayProfile: w,
                    themeType: g.d.MODAL_V2,
                    children: [(0, l.jsx)("div", {
                        className: b.Tp
                    }), (0, l.jsxs)("div", {
                        className: b.Qs,
                        children: [(0, l.jsx)(f.A, {
                            user: t,
                            guildId: C
                        }), (0, l.jsxs)("div", {
                            className: b.FS,
                            children: [(0, l.jsx)(r.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: v.intl.string(v.t.b33pLD)
                            }), (0, l.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: v.intl.format(S ? v.t.T7QiLn : v.t.MnEowy, {
                                    username: M
                                })
                            })]
                        }), (0, l.jsx)("div", {
                            className: b.vb,
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
                            children: [(0, l.jsx)(j.A, {
                                size: "md",
                                isBlocked: S,
                                onClick: () => {
                                    T(), (0, p.Wn)(I({
                                        action: S ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: L
                                    }, R))
                                }
                            }), (0, l.jsx)(x.A, {
                                userId: t.id,
                                onClick: () => {
                                    T(), (0, p.Wn)(I({
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