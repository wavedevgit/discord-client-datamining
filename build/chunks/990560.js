/** chunk id: 990560, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(846293),
    s = n(820284),
    o = n(688810),
    d = n(107123),
    c = n(698441),
    u = n(427080),
    _ = n(346542),
    m = n(665066),
    h = n(961350),
    p = n(71393),
    g = n(299091),
    A = n(860689),
    x = n(62350),
    f = n(882072),
    C = n(58262),
    E = n(309818),
    I = n(112007),
    b = n(877695),
    T = n(242907),
    v = n(168428),
    S = n(448894),
    y = n(652215);

function N(e) {
    let {
        code: t,
        message: n,
        getAcceptInviteContext: N
    } = e, {
        invite: j,
        inviteError: L
    } = (0, r.cf)([g.A], () => ({
        invite: g.A.getInvite(t),
        inviteError: g.A.getInviteError(t)
    }), [t]), R = null == j;
    l.useEffect(() => {
        R && a.Ay.resolveInvite(t)
    }, [t, R]);
    let P = j ?? {
            state: y.elq.RESOLVING,
            code: ""
        },
        {
            analyticsLocations: M
        } = (0, o.Ay)(),
        D = (0, r.bG)([p.A], () => j?.guild != null ? p.A.getGuild(j.guild.id) : null, [j]),
        w = (0, r.bG)([h.default], () => h.default.getId()),
        k = (0, r.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(P.guild_scheduled_event?.id), [P]),
        O = () => {
            null != P.channel && a.Ay.transitionToInviteSync(P)
        },
        U = () => {
            let e = null == D && j?.guild != null ? A.DY(j.guild) : D;
            (0, m.g)({
                guild: e,
                isMember: null != D,
                analyticsLocations: M
            }) === m.W.PROCEED && a.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: N("Invite Button Embed")
            })
        },
        G = (0, i.jsx)(I.A, {
            onTransitionToInviteChannel: O,
            onAcceptInstantInvite: U,
            currentUserId: w,
            guild: D,
            invite: P,
            message: n
        });
    switch (P.state) {
        case y.elq.RESOLVING:
            G = (0, i.jsx)(v.A, {});
            break;
        case y.elq.EXPIRED:
        case y.elq.BANNED:
            G = (0, i.jsx)(T.A, {
                banned: P.state === y.elq.BANNED,
                author: n.author,
                channelId: n.channel_id
            });
            break;
        case y.elq.ERROR:
            G = (0, i.jsx)(f.A, {
                author: n.author,
                inviteError: L
            });
            break;
        default:
            switch ((0, _.On)(P)) {
                case _.Xd.GROUP_DM:
                    G = (0, i.jsx)(E.A, {
                        onTransitionToInviteChannel: O,
                        onAcceptInstantInvite: U,
                        currentUserId: w,
                        invite: P,
                        message: n
                    });
                    break;
                case _.Xd.FRIEND:
                    G = (0, i.jsx)(C.A, {
                        invite: P,
                        message: n,
                        getAcceptInviteContext: N
                    });
                    break;
                default:
                    if ((0, _.G4)(P)) {
                        G = (0, i.jsx)(S.A, {
                            onTransitionToInviteChannel: O,
                            onAcceptInstantInvite: U,
                            currentUserId: w,
                            message: n,
                            guild: D,
                            invite: P
                        });
                        break
                    }
                    if ((0, _.ly)(P)) {
                        G = (0, i.jsx)(u.Ay, {
                            guildScheduledEvent: k,
                            guild: P.guild,
                            channel: P.channel,
                            isMember: null != D,
                            onAcceptInstantInvite: U,
                            onTransitionToInviteChannel: O
                        });
                        break
                    }
                    if ((0, _.oK)(P)) {
                        G = (0, i.jsx)(x.A, {
                            invite: P,
                            getAcceptInviteContext: N,
                            message: n
                        });
                        break
                    }(0, d.v)(P) && (G = (0, i.jsx)(b.A, {
                        onTransitionToInviteChannel: O,
                        onAcceptInstantInvite: U,
                        isMemberOfGuild: null != D,
                        invite: P,
                        message: n
                    }))
            }
    }
    return (0, i.jsx)(s.A, {
        section: y.JJy.INVITE_LINK,
        children: G
    })
}