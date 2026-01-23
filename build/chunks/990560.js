/** Chunk was on web.js **/
/** chunk id: 990560, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(846293),
    o = n(820284),
    l = n(688810),
    c = n(107123),
    u = n(698441),
    d = n(427080),
    f = n(346542),
    p = n(665066),
    _ = n(961350),
    h = n(71393),
    m = n(299091),
    g = n(860689),
    E = n(62350),
    y = n(882072),
    b = n(58262),
    O = n(309818),
    v = n(112007),
    A = n(877695),
    I = n(242907),
    S = n(168428),
    T = n(448894),
    C = n(652215);

function N(e) {
    let {
        code: t,
        message: n,
        getAcceptInviteContext: N
    } = e, {
        invite: w,
        inviteError: R
    } = (0, a.cf)([m.A], () => ({
        invite: m.A.getInvite(t),
        inviteError: m.A.getInviteError(t)
    }), [t]), P = null == w;
    i.useEffect(() => {
        P && s.Ay.resolveInvite(t)
    }, [t, P]);
    let D = null != w ? w : {
            state: C.elq.RESOLVING,
            code: ""
        },
        {
            analyticsLocations: x
        } = (0, l.Ay)(),
        L = (0, a.bG)([h.A], () => (null == w ? void 0 : w.guild) != null ? h.A.getGuild(w.guild.id) : null, [w]),
        j = (0, a.bG)([_.default], () => _.default.getId()),
        M = (0, a.bG)([u.Ay], () => {
            var e;
            return u.Ay.getGuildScheduledEvent(null == (e = D.guild_scheduled_event) ? void 0 : e.id)
        }, [D]),
        k = () => {
            null != D.channel && s.Ay.transitionToInviteSync(D)
        },
        U = () => {
            let e = null == L && (null == w ? void 0 : w.guild) != null ? g.DY(w.guild) : L;
            (0, p.g)({
                guild: e,
                isMember: null != L,
                analyticsLocations: x
            }) === p.W.PROCEED && s.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: N("Invite Button Embed")
            })
        },
        G = (0, r.jsx)(v.A, {
            onTransitionToInviteChannel: k,
            onAcceptInstantInvite: U,
            currentUserId: j,
            guild: L,
            invite: D,
            message: n
        });
    switch (D.state) {
        case C.elq.RESOLVING:
            G = (0, r.jsx)(S.A, {});
            break;
        case C.elq.EXPIRED:
        case C.elq.BANNED:
            G = (0, r.jsx)(I.A, {
                banned: D.state === C.elq.BANNED,
                author: n.author,
                channelId: n.channel_id
            });
            break;
        case C.elq.ERROR:
            G = (0, r.jsx)(y.A, {
                author: n.author,
                inviteError: R
            });
            break;
        default:
            switch ((0, f.On)(D)) {
                case f.Xd.GROUP_DM:
                    G = (0, r.jsx)(O.A, {
                        onTransitionToInviteChannel: k,
                        onAcceptInstantInvite: U,
                        currentUserId: j,
                        invite: D,
                        message: n
                    });
                    break;
                case f.Xd.FRIEND:
                    G = (0, r.jsx)(b.A, {
                        invite: D,
                        message: n,
                        getAcceptInviteContext: N
                    });
                    break;
                default:
                    if ((0, f.G4)(D)) {
                        G = (0, r.jsx)(T.A, {
                            onTransitionToInviteChannel: k,
                            onAcceptInstantInvite: U,
                            currentUserId: j,
                            message: n,
                            guild: L,
                            invite: D
                        });
                        break
                    }
                    if ((0, f.ly)(D)) {
                        G = (0, r.jsx)(d.Ay, {
                            guildScheduledEvent: M,
                            guild: D.guild,
                            channel: D.channel,
                            isMember: null != L,
                            onAcceptInstantInvite: U,
                            onTransitionToInviteChannel: k
                        });
                        break
                    }
                    if ((0, f.oK)(D)) {
                        G = (0, r.jsx)(E.A, {
                            invite: D,
                            getAcceptInviteContext: N,
                            message: n
                        });
                        break
                    }(0, c.v)(D) && (G = (0, r.jsx)(A.A, {
                        onTransitionToInviteChannel: k,
                        onAcceptInstantInvite: U,
                        isMemberOfGuild: null != L,
                        invite: D,
                        message: n
                    }))
            }
    }
    return (0, r.jsx)(o.A, {
        section: C.JJy.INVITE_LINK,
        children: G
    })
}