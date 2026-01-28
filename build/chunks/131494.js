/** Chunk was on 78528 **/
/** chunk id: 131494, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(896048);
var r = n(478437),
    l = n(311907),
    i = n(811024),
    s = n(933958),
    a = n(969151),
    o = n(297334),
    c = n(508654),
    u = n(233993),
    d = n(446600),
    p = n(95701),
    h = n(616356),
    f = n(961350),
    g = n(734057),
    m = n(71393),
    b = n(576705),
    A = n(994500),
    y = n(309010),
    _ = n(543465),
    O = n(977997),
    j = n(661191),
    v = n(652215);

function x(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.A;
    return null != e && e.type !== r.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(v.hVb.VIEW_CHANNEL, e)
}

function E(e) {
    var t;
    let n = (0, l.bG)([_.Ay], () => _.Ay.isMuted(e)),
        r = (0, c.BP)(e),
        v = (0, l.yK)([s.Ay, A.A], () => s.Ay.getEmbeddedActivitiesForGuild(e).filter(e => !(0, o.PH)([...e.userIds], A.A.getBlockedOrIgnoredIDs()))),
        E = (0, a.H)(null == (t = v[0]) ? void 0 : t.location),
        C = (0, i.Gp)(E),
        {
            guildHasVoice: S,
            guildHasVideo: I,
            selectedVoiceChannelHasVideo: N
        } = (0, l.cf)([y.A, O.A, m.A, b.A, g.A], () => {
            var t;
            let r = y.A.getVoiceChannelId(),
                l = null == (t = m.A.getGuild(e)) ? void 0 : t.afkChannelId,
                i = O.A.getUsersWithVideo(e),
                s = (0, o.hs)(O.A.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (n) return !1;
                    for (let e in s)
                        if (x(g.A.getBasicChannel(s[e].channelId), null != l ? l : void 0, b.A)) return !0;
                    return !1
                })(),
                guildHasVideo: (() => {
                    if (n) return !1;
                    for (let t of i) {
                        var e;
                        if (x(g.A.getBasicChannel(null == (e = s[t]) ? void 0 : e.channelId), null != l ? l : void 0, b.A)) return !0
                    }
                    return !1
                })(),
                selectedVoiceChannelHasVideo: null != r && O.A.hasVideo(r)
            }
        }, [e, n]),
        T = f.default.getId();
    return (0, l.cf)([y.A, g.A, s.Ay, d.A, h.A, b.A], () => {
        var t, l, i;
        let c = y.A.getVoiceChannelId(),
            f = (null == (l = g.A.getChannel(c)) ? void 0 : l.guild_id) === e,
            m = !1,
            A = !1,
            _ = !1,
            O = !1,
            x = !1,
            E = !1;
        if (!f && n) return {
            audio: m,
            video: O,
            screenshare: x,
            liveStage: _,
            activeEvent: A,
            activity: E,
            isCurrentUserConnected: !1
        };
        let P = j.default.keys(d.A.getStageInstancesByGuild(e)).some(e => {
                let t = g.A.getChannel(e);
                return null != t && b.A.can(u.Gk, t)
            }),
            w = f && null != (t = null == (i = g.A.getChannel(c)) ? void 0 : i.isGuildStageVoice()) && t,
            R = !!f && null != h.A.getActiveStreamForUser(T, e),
            D = (0, o.Mt)(h.A.getAllApplicationStreams()).some(t => t.guildId === e),
            M = f && N,
            L = (() => {
                if (C) return v.length > 0;
                for (let e of v) {
                    let t = g.A.getChannel((0, a.H)(e.location));
                    if (null != t && (0, p.gV)(t.type)) return !0
                }
                return !1
            })(),
            k = s.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return f ? (m = !0, A = (null == r ? void 0 : r.channel_id) === c, _ = w, O = M, x = R, E = k) : (m = S, A = null != r, _ = P, O = I, x = D, E = L), {
            audio: m,
            video: O,
            screenshare: x,
            liveStage: _,
            activeEvent: A,
            activity: E,
            isCurrentUserConnected: f || w
        }
    }, [e, n, N, T, C, v, r, S, I])
}