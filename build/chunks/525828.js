/** chunk id: 525828 params = (module,exports,require) **/
s.d(t, {
    default: () => L
}), s(667532);
var _ = s(627968);
s(64700);
var i = s(110259),
    a = s(397927),
    n = s(954376),
    r = s(734057),
    A = s(287809),
    l = s(954571),
    o = s(549022),
    c = s(212758),
    I = s(90386),
    d = s(64175),
    E = s(652215),
    u = s(985018),
    h = s(317839);

function L(e) {
    var t, s;
    let L, N, {
            channelId: C,
            blockedUserIds: g,
            ignoredUserIds: m,
            transitionState: f,
            onClose: P,
            onJoin: O
        } = e,
        p = Array.from(g).map(e => A.default.getUser(e)).filter(e => null !== e),
        G = Array.from(m).map(e => A.default.getUser(e)).filter(e => null !== e);
    return 0 === p.length && 0 === G.length ? null : (0, _.jsx)(c.A, {
        headerText: u.intl.string(u.t.zPUmzZ),
        descriptionText: (t = g.size, s = m.size, L = t > 0, N = s > 0, L && N ? u.intl.string(u.t["X/iIjg"]) : L ? u.intl.formatToPlainString(u.t.WgQ12s, {
            n: t
        }) : N ? u.intl.formatToPlainString(u.t.bwibp1, {
            n: s
        }) : null),
        infoRows: (e => {
            let {
                channelId: t,
                blockedUsers: s,
                ignoredUsers: i
            } = e, A = r.A.getChannel(t), l = s.length > 0, o = i.length > 0, c = [{
                icon: (0, _.jsx)("div", {
                    className: h.Kk,
                    children: (0, _.jsx)(a.id, {})
                }),
                text: u.intl.string(u.t["7jN3FC"]),
                className: h.nM
            }];
            if (l && o) {
                let e = [...s, ...i],
                    r = e.slice(0, 2).map(e => e.id);
                c.unshift({
                    icon: (0, _.jsx)("div", {
                        className: h.Kk,
                        children: (0, _.jsx)(n.A, {
                            recipients: r,
                            size: a._3J.SIZE_32
                        })
                    }),
                    text: (0, I.T)(r, e.length, A?.guild_id, t),
                    className: h.nM
                })
            } else {
                let e = l ? s.slice(0, 2).map(e => e.id) : i.slice(0, 2).map(e => e.id),
                    a = l ? s.length : i.length;
                c.unshift({
                    icon: (0, _.jsx)("div", {
                        className: h.Kk,
                        children: (0, I.I)(e, A?.guild_id)
                    }),
                    text: (0, I.T)(e, a, A?.guild_id, t),
                    className: h.nM
                })
            }
            return c
        })({
            channelId: C,
            blockedUsers: p,
            ignoredUsers: G
        }),
        onDismissAndStay: () => {
            O(), P(), (0, o.Cs)(new Set([...g, ...m])), l.default.track(E.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: d.Qi.CLICK_TO_JOIN,
                channel_id: C,
                blocked_user_ids: Array.from(g),
                ignored_user_ids: Array.from(m),
                warning_surface: d.gD.PRE_JOIN_MODAL
            })
        },
        onDismissAndLeave: () => {
            P(), l.default.track(E.HAw.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, {
                action: d.Qi.CLICK_TO_LEAVE,
                channel_id: C,
                blocked_user_ids: Array.from(g),
                ignored_user_ids: Array.from(m),
                warning_surface: d.gD.PRE_JOIN_MODAL
            })
        },
        leaveButtonText: u.intl.string(u.t.rOXspL),
        stayButtonText: u.intl.string(u.t.VJlc0S),
        transitionState: f,
        onClose: P,
        impression: {
            impressionName: i.ImpressionNames.VOICE_CHANNEL_BLOCKED_USER_WARNING,
            impressionProperties: {
                channel_id: C,
                blocked_user_ids: Array.from(g),
                warning_surface: d.gD.PRE_JOIN_MODAL
            }
        }
    })
}