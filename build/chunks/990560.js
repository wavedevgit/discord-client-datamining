/** chunk id: 990560 params = (module,exports,require) **/
n.d(t, {
    A: () => R
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    l = n(846293),
    s = n(820284),
    o = n(688810),
    d = n(107123),
    c = n(698441),
    u = n(427080),
    _ = n(346542),
    m = n(665066),
    h = n(95701),
    p = n(961350),
    g = n(71393),
    A = n(299091),
    x = n(860689),
    f = n(62350),
    C = n(882072),
    I = n(58262),
    E = n(309818),
    b = n(112007),
    v = n(877695),
    T = n(242907),
    y = n(168428),
    S = n(448894),
    N = n(818352),
    j = n(422844),
    L = n(652215);

function R(e) {
    let {
        code: t,
        message: n,
        getAcceptInviteContext: R
    } = e, {
        invite: P,
        inviteError: w
    } = (0, r.cf)([A.A], () => ({
        invite: A.A.getInvite(t),
        inviteError: A.A.getInviteError(t)
    }), [t]), M = null == P;
    a.useEffect(() => {
        M && l.Ay.resolveInvite(t)
    }, [t, M]);
    let D = P ?? {
            state: L.elq.RESOLVING,
            code: ""
        },
        {
            analyticsLocations: k
        } = (0, o.Ay)(),
        O = (0, r.bG)([g.A], () => P?.guild != null ? g.A.getGuild(P.guild.id) : null, [P]),
        U = (0, r.bG)([p.default], () => p.default.getId()),
        B = (0, r.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(D.guild_scheduled_event?.id), [D]),
        G = () => {
            null != D.channel && l.Ay.transitionToInviteSync(D)
        },
        F = function() {
            let {
                autoJoin: e
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null == O && P?.guild != null ? x.DY(P.guild) : O;
            (0, m.g)({
                guild: n,
                isMember: null != O,
                analyticsLocations: k
            }) === m.W.PROCEED && l.Ay.acceptInviteAndTransitionToInviteChannel({
                inviteKey: t,
                context: R("Invite Button Embed"),
                autoJoin: e
            })
        },
        H = (0, i.jsx)(b.A, {
            onTransitionToInviteChannel: G,
            onAcceptInstantInvite: F,
            currentUserId: U,
            guild: O,
            invite: D,
            message: n
        });
    switch (D.state) {
        case L.elq.RESOLVING:
            H = (0, i.jsx)(y.A, {});
            break;
        case L.elq.EXPIRED:
        case L.elq.BANNED:
            H = (0, i.jsx)(T.A, {
                banned: D.state === L.elq.BANNED,
                author: n.author,
                channelId: n.channel_id
            });
            break;
        case L.elq.ERROR:
            H = (0, i.jsx)(C.A, {
                author: n.author,
                inviteError: w
            });
            break;
        default:
            switch ((0, _.On)(D)) {
                case _.Xd.GROUP_DM:
                    H = (0, i.jsx)(E.A, {
                        onTransitionToInviteChannel: G,
                        onAcceptInstantInvite: F,
                        currentUserId: U,
                        invite: D,
                        message: n
                    });
                    break;
                case _.Xd.FRIEND:
                    H = (0, i.jsx)(I.A, {
                        invite: D,
                        message: n,
                        getAcceptInviteContext: R
                    });
                    break;
                default:
                    if ((0, _.G4)(D)) {
                        if (null != D.channel && (0, h.OY)(D.channel).isGuildVoice() && (0, j.MR)("InviteEmbed.isStreamInvite").enabled) {
                            H = (0, i.jsx)(N.A, {
                                onTransitionToInviteChannel: G,
                                onAcceptInstantInvite: F,
                                currentUserId: U,
                                guild: O,
                                invite: D,
                                message: n
                            });
                            break
                        }
                        H = (0, i.jsx)(S.A, {
                            onTransitionToInviteChannel: G,
                            onAcceptInstantInvite: F,
                            currentUserId: U,
                            message: n,
                            guild: O,
                            invite: D
                        });
                        break
                    }
                    if ((0, _.ly)(D)) {
                        H = (0, i.jsx)(u.Ay, {
                            guildScheduledEvent: B,
                            guild: D.guild,
                            channel: D.channel,
                            isMember: null != O,
                            onAcceptInstantInvite: F,
                            onTransitionToInviteChannel: G
                        });
                        break
                    }
                    if ((0, _.oK)(D)) {
                        H = (0, i.jsx)(f.A, {
                            invite: D,
                            getAcceptInviteContext: R,
                            message: n
                        });
                        break
                    }
                    if (null != D.channel && (0, h.OY)(D.channel).isGuildVoice() && (0, j.MR)("InviteEmbed.isGuildVoice").enabled) {
                        H = (0, i.jsx)(N.A, {
                            onTransitionToInviteChannel: G,
                            onAcceptInstantInvite: F,
                            currentUserId: U,
                            guild: O,
                            invite: D,
                            message: n
                        });
                        break
                    }(0, d.v)(D) && (H = (0, i.jsx)(v.A, {
                        onTransitionToInviteChannel: G,
                        onAcceptInstantInvite: F,
                        isMemberOfGuild: null != O,
                        invite: D,
                        message: n
                    }))
            }
    }
    return (0, i.jsx)(s.A, {
        section: L.JJy.INVITE_LINK,
        children: H
    })
}