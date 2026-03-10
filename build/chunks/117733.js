/** chunk id: 117733 params = (module,exports,require) **/
l.d(n, {
    A: () => H
});
var a = l(627968),
    s = l(64700),
    t = l(503698),
    i = l.n(t),
    r = l(417597),
    d = l(397927),
    c = l(686956),
    o = l(241524),
    u = l(58149),
    h = l(293865),
    m = l(742589),
    x = l(138298),
    g = l(761640),
    A = l(954571),
    _ = l(225142),
    f = l(701785),
    j = l(65995),
    b = l(978165),
    I = l(490171),
    N = l(119593),
    C = l(283012),
    p = l(12446),
    v = l(913423),
    y = l(652215),
    G = l(746080),
    M = l(985018),
    E = l(159453),
    T = l(638990);
let L = I.O + 300 + 64,
    w = s.memo(function(e) {
        let {
            guild: n
        } = e;
        return (0, a.jsxs)(m.A, {
            channelId: G.VV.GUILD_HOME,
            guildId: n.id,
            className: i()(E.DD, E.Tp),
            innerClassname: E.vi,
            children: [(0, a.jsx)(m.A.Icon, {
                icon: d.Zf8,
                "aria-hidden": !0
            }), (0, a.jsxs)(m.A.Title, {
                children: [(0, a.jsx)(d.AC4, {
                    children: n.name
                }), M.intl.string(M.t.VbpLyU)]
            })]
        })
    });

function H(e) {
    let {
        guild: n,
        width: l
    } = e, t = (0, r.bG)([g.Ay], () => g.Ay.getSection(G.VV.GUILD_HOME)), [m, M] = s.useState(!1), [H, R] = s.useState(y.da6), k = t === y.YvQ.SIDEBAR_CHAT, B = (0, d.R7z)(), S = (0, r.bG)([f.h], () => f.h.getSettings(n.id)), D = S?.welcomeMessage, U = (0, b.A)(n.id), V = !U && (S?.resourceChannels?.length ?? 0) === 0, O = (0, o.A)("(max-width: 1300px)"), z = l - y.MdR - H, K = k && z < L || O || V;
    return (s.useEffect(() => {
        S === f.A ? (0, _.ag)(n.id) : null != S && A.default.track(y.HAw.SERVER_GUIDE_VIEWED, {
            ...(0, u.H$)(n.id),
            num_member_actions: S.newMemberActions?.length ?? 0,
            num_member_actions_completed: Object.keys(j.A.getCompletedActions(n.id) ?? {}).length,
            num_resource_channels: S.resourceChannels?.length ?? 0
        })
    }, [n.id, S]), s.useEffect(() => () => {
        x.A.closeChannelSidebar(G.VV.GUILD_HOME)
    }, []), s.useEffect(() => {
        V && S !== f.A && c.A.escapeToDefaultChannel(n.id)
    }, [n.id, V, S]), V) ? null : (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)("div", {
            className: i()(T.TE, E.Tp, {
                [T.js]: k,
                [T.jl]: k && m
            }),
            children: [(0, a.jsx)(w, {
                guild: n
            }), (0, a.jsx)(d.GtU, {
                ...B,
                children: (0, a.jsxs)("div", {
                    className: i()(E.$d, {
                        [E.Mk]: K
                    }),
                    children: [(0, a.jsx)("div", {
                        className: E.QI,
                        children: (0, a.jsx)(h.A, {
                            guild: n,
                            titleClassName: O ? E.H2 : void 0
                        })
                    }), (0, a.jsxs)("div", {
                        className: i()(E.xr, E.QI),
                        children: [(0, a.jsxs)("div", {
                            className: E.rb,
                            children: [U && (0, a.jsx)(v.A, {
                                guildId: n.id,
                                welcomeMessage: D
                            }), U && (0, a.jsx)(C.A, {
                                guildId: n.id
                            }), !U || K ? (0, a.jsx)(p.Ay, {
                                guild: n,
                                isNewMember: U
                            }) : null]
                        }), K ? null : (0, a.jsx)(N.A, {
                            guild: n,
                            isNewMember: U
                        })]
                    })]
                })
            })]
        }), k ? (0, a.jsx)(I.A, {
            pageWidth: l,
            onSidebarResize: (e, n) => {
                M(n), R(e)
            }
        }) : null]
    })
}