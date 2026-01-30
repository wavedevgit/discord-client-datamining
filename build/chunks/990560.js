/** chunk id: 990560, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(846293),
    s = n(820284),
    o = n(688810),
    c = n(107123),
    u = n(698441),
    d = n(427080),
    p = n(346542),
    m = n(665066),
    f = n(961350),
    g = n(71393),
    _ = n(299091),
    h = n(860689),
    b = n(62350),
    A = n(882072),
    y = n(58262),
    v = n(309818),
    x = n(112007),
    O = n(877695),
    E = n(242907),
    j = n(168428),
    C = n(448894),
    I = n(652215);

function S(e) {
    let {
        code: t,
        message: n,
        getAcceptInviteContext: S
    } = e, {
        invite: T,
        inviteError: N
    } = (0, l.cf)([_.A], () => ({
        invite: _.A.getInvite(t),
        inviteError: _.A.getInviteError(t)
    }), [t]), P = null == T;
    i.useEffect(() => {
        P && a.Ay.resolveInvite(t)
    }, [t, P]);
    let w = null != T ? T : {
            state: I.elq.RESOLVING,
            code: ""
        },
        {
            analyticsLocations: R
        } = (0, o.Ay)(),
        D = (0, l.bG)([g.A], () => (null == T ? void 0 : T.guild) != null ? g.A.getGuild(T.guild.id) : null, [T]),
        L = (0, l.bG)([f.default], () => f.default.getId()),
        M = (0, l.bG)([u.Ay], () => {
            var e;
            return u.Ay.getGuildScheduledEvent(null == (e = w.guild_scheduled_event) ? void 0 : e.id)
        }, [w]),
        k = () => {
            null != w.channel && a.Ay.transitionToInviteSync(w)
        },
        U = () => {
            let e = null == D && (null == T ? void 0 : T.guild) != null ? h.DY(T.guild) : D;
            (0, m.g)({
                guild: e,
                isMember: null != D,
                analyticsLocations: R
            }) === m.W.PROCEED && a.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: S("Invite Button Embed")
            })
        },
        G = (0, r.jsx)(x.A, {
            onTransitionToInviteChannel: k,
            onAcceptInstantInvite: U,
            currentUserId: L,
            guild: D,
            invite: w,
            message: n
        });
    switch (w.state) {
        case I.elq.RESOLVING:
            G = (0, r.jsx)(j.A, {});
            break;
        case I.elq.EXPIRED:
        case I.elq.BANNED:
            G = (0, r.jsx)(E.A, {
                banned: w.state === I.elq.BANNED,
                author: n.author,
                channelId: n.channel_id
            });
            break;
        case I.elq.ERROR:
            G = (0, r.jsx)(A.A, {
                author: n.author,
                inviteError: N
            });
            break;
        default:
            switch ((0, p.On)(w)) {
                case p.Xd.GROUP_DM:
                    G = (0, r.jsx)(v.A, {
                        onTransitionToInviteChannel: k,
                        onAcceptInstantInvite: U,
                        currentUserId: L,
                        invite: w,
                        message: n
                    });
                    break;
                case p.Xd.FRIEND:
                    G = (0, r.jsx)(y.A, {
                        invite: w,
                        message: n,
                        getAcceptInviteContext: S
                    });
                    break;
                default:
                    if ((0, p.G4)(w)) {
                        G = (0, r.jsx)(C.A, {
                            onTransitionToInviteChannel: k,
                            onAcceptInstantInvite: U,
                            currentUserId: L,
                            message: n,
                            guild: D,
                            invite: w
                        });
                        break
                    }
                    if ((0, p.ly)(w)) {
                        G = (0, r.jsx)(d.Ay, {
                            guildScheduledEvent: M,
                            guild: w.guild,
                            channel: w.channel,
                            isMember: null != D,
                            onAcceptInstantInvite: U,
                            onTransitionToInviteChannel: k
                        });
                        break
                    }
                    if ((0, p.oK)(w)) {
                        G = (0, r.jsx)(b.A, {
                            invite: w,
                            getAcceptInviteContext: S,
                            message: n
                        });
                        break
                    }(0, c.v)(w) && (G = (0, r.jsx)(O.A, {
                        onTransitionToInviteChannel: k,
                        onAcceptInstantInvite: U,
                        isMemberOfGuild: null != D,
                        invite: w,
                        message: n
                    }))
            }
    }
    return (0, r.jsx)(s.A, {
        section: I.JJy.INVITE_LINK,
        children: G
    })
}