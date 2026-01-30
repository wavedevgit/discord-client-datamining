/** chunk id: 117733, original params: e,n,l (module,exports,require) **/
l.d(n, {
    A: () => T
}), l(896048);
var t = l(627968),
    r = l(64700),
    a = l(503698),
    i = l.n(a),
    s = l(417597),
    c = l(397927),
    o = l(686956),
    d = l(241524),
    u = l(58149),
    m = l(293865),
    h = l(742589),
    f = l(138298),
    g = l(761640),
    x = l(954571),
    b = l(225142),
    j = l(701785),
    p = l(65995),
    A = l(978165),
    _ = l(490171),
    v = l(119593),
    y = l(283012),
    I = l(12446),
    N = l(913423),
    C = l(652215),
    O = l(746080),
    w = l(985018),
    E = l(159453),
    G = l(638990);

function M(e) {
    for (var n = 1; n < arguments.length; n++) {
        var l = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
            return Object.getOwnPropertyDescriptor(l, e).enumerable
        }))), t.forEach(function(n) {
            var t;
            t = l[n], n in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t
        })
    }
    return e
}

function S(e, n) {
    return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(e, n) {
        var l = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var t = Object.getOwnPropertySymbols(e);
            l.push.apply(l, t)
        }
        return l
    })(Object(n)).forEach(function(l) {
        Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(n, l))
    }), e
}
let D = _.O + 300 + 64,
    P = r.memo(function(e) {
        let {
            guild: n
        } = e;
        return (0, t.jsxs)(h.A, {
            channelId: O.VV.GUILD_HOME,
            guildId: n.id,
            className: i()(E.DD, E.Tp),
            innerClassname: E.vi,
            children: [(0, t.jsx)(h.A.Icon, {
                icon: c.Zf8,
                "aria-hidden": !0
            }), (0, t.jsxs)(h.A.Title, {
                children: [(0, t.jsx)(c.AC4, {
                    children: n.name
                }), w.intl.string(w.t.VbpLyU)]
            })]
        })
    });

function T(e) {
    var n, l;
    let {
        guild: a,
        width: h
    } = e, w = (0, s.bG)([g.Ay], () => g.Ay.getSection(O.VV.GUILD_HOME)), [T, k] = r.useState(!1), [L, R] = r.useState(C.da6), H = w === C.YvQ.SIDEBAR_CHAT, B = (0, c.R7z)(), U = (0, s.bG)([j.h], () => j.h.getSettings(a.id)), V = null == U ? void 0 : U.welcomeMessage, K = (0, A.A)(a.id), z = !K && (null != (n = null == U || null == (l = U.resourceChannels) ? void 0 : l.length) ? n : 0) === 0, W = (0, d.A)("(max-width: 1300px)"), $ = h - C.MdR - L, F = H && $ < D || W || z;
    return (r.useEffect(() => {
        if (U === j.A)(0, b.ag)(a.id);
        else if (null != U) {
            var e, n, l, t, r;
            x.default.track(C.HAw.SERVER_GUIDE_VIEWED, S(M({}, (0, u.H$)(a.id)), {
                num_member_actions: null != (e = null == (t = U.newMemberActions) ? void 0 : t.length) ? e : 0,
                num_member_actions_completed: Object.keys(null != (n = p.A.getCompletedActions(a.id)) ? n : {}).length,
                num_resource_channels: null != (l = null == (r = U.resourceChannels) ? void 0 : r.length) ? l : 0
            }))
        }
    }, [a.id, U]), r.useEffect(() => () => {
        f.A.closeChannelSidebar(O.VV.GUILD_HOME)
    }, []), r.useEffect(() => {
        z && U !== j.A && o.A.escapeToDefaultChannel(a.id)
    }, [a.id, z, U]), z) ? null : (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsxs)("div", {
            className: i()(G.TE, E.Tp, {
                [G.js]: H,
                [G.jl]: H && T
            }),
            children: [(0, t.jsx)(P, {
                guild: a
            }), (0, t.jsx)(c.GtU, S(M({}, B), {
                children: (0, t.jsxs)("div", {
                    className: i()(E.$d, {
                        [E.Mk]: F
                    }),
                    children: [(0, t.jsx)("div", {
                        className: E.QI,
                        children: (0, t.jsx)(m.A, {
                            guild: a,
                            titleClassName: W ? E.H2 : void 0
                        })
                    }), (0, t.jsxs)("div", {
                        className: i()(E.xr, E.QI),
                        children: [(0, t.jsxs)("div", {
                            className: E.rb,
                            children: [K && (0, t.jsx)(N.A, {
                                guildId: a.id,
                                welcomeMessage: V
                            }), K && (0, t.jsx)(y.A, {
                                guildId: a.id
                            }), !K || F ? (0, t.jsx)(I.Ay, {
                                guild: a,
                                isNewMember: K
                            }) : null]
                        }), F ? null : (0, t.jsx)(v.A, {
                            guild: a,
                            isNewMember: K
                        })]
                    })]
                })
            }))]
        }), H ? (0, t.jsx)(_.A, {
            pageWidth: h,
            onSidebarResize: (e, n) => {
                k(n), R(e)
            }
        }) : null]
    })
}