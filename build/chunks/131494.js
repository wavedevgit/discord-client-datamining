/** chunk id: 131494 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(478437),
    l = n(311907),
    s = n(811024),
    a = n(933958),
    r = n(969151),
    o = n(297334),
    d = n(508654),
    c = n(233993),
    u = n(446600),
    h = n(95701),
    A = n(616356),
    _ = n(961350),
    m = n(734057),
    p = n(71393),
    g = n(576705),
    f = n(994500),
    x = n(309010),
    E = n(543465),
    I = n(977997),
    C = n(661191),
    N = n(652215);

function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g.A;
    return null != e && e.type !== i.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(N.hVb.VIEW_CHANNEL, e)
}

function S(e) {
    let t = (0, l.bG)([E.Ay], () => E.Ay.isMuted(e)),
        n = (0, d.BP)(e),
        i = (0, l.yK)([a.Ay, f.A], () => a.Ay.getEmbeddedActivitiesForGuild(e).filter(e => !(0, o.PH)([...e.userIds], f.A.getBlockedOrIgnoredIDs()))),
        N = (0, r.H)(i[0]?.location),
        S = (0, s.Gp)(N),
        {
            guildHasVoice: b,
            guildHasVideo: v,
            selectedVoiceChannelHasVideo: y
        } = (0, l.cf)([x.A, I.A, p.A, g.A, m.A], () => {
            let n = x.A.getVoiceChannelId(),
                i = p.A.getGuild(e)?.afkChannelId,
                l = I.A.getUsersWithVideo(e),
                s = (0, o.hs)(I.A.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (t) return !1;
                    for (let e in s)
                        if (T(m.A.getBasicChannel(s[e].channelId), i ?? void 0, g.A)) return !0;
                    return !1
                })(),
                guildHasVideo: (() => {
                    if (t) return !1;
                    for (let e of l)
                        if (T(m.A.getBasicChannel(s[e]?.channelId), i ?? void 0, g.A)) return !0;
                    return !1
                })(),
                selectedVoiceChannelHasVideo: null != n && I.A.hasVideo(n)
            }
        }, [e, t]),
        j = _.default.getId();
    return (0, l.cf)([x.A, m.A, a.Ay, u.A, A.A, g.A], () => {
        let l = x.A.getVoiceChannelId(),
            s = m.A.getChannel(l)?.guild_id === e,
            d = !1,
            _ = !1,
            p = !1,
            f = !1,
            E = !1,
            I = !1;
        if (!s && t) return {
            audio: d,
            video: f,
            screenshare: E,
            liveStage: p,
            activeEvent: _,
            activity: I,
            isCurrentUserConnected: !1
        };
        let N = C.default.keys(u.A.getStageInstancesByGuild(e)).some(e => {
                let t = m.A.getChannel(e);
                return null != t && g.A.can(c.Gk, t)
            }),
            T = s && (m.A.getChannel(l)?.isGuildStageVoice() ?? !1),
            R = !!s && null != A.A.getActiveStreamForUser(j, e),
            O = (0, o.Mt)(A.A.getAllApplicationStreams()).some(t => t.guildId === e),
            L = s && y,
            M = (() => {
                if (S) return i.length > 0;
                for (let e of i) {
                    let t = m.A.getChannel((0, r.H)(e.location));
                    if (null != t && (0, h.gV)(t.type)) return !0
                }
                return !1
            })(),
            D = a.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return s ? (d = !0, _ = n?.channel_id === l, p = T, f = L, E = R, I = D) : (d = b, _ = null != n, p = N, f = v, E = O, I = M), {
            audio: d,
            video: f,
            screenshare: E,
            liveStage: p,
            activeEvent: _,
            activity: I,
            isCurrentUserConnected: s || T
        }
    }, [e, t, y, j, S, i, n, b, v])
}