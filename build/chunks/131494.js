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
    g = n(961350),
    f = n(734057),
    m = n(71393),
    b = n(576705),
    A = n(994500),
    y = n(309010),
    O = n(543465),
    j = n(977997),
    x = n(661191),
    _ = n(652215);

function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.A;
    return null != e && e.type !== r.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(_.hVb.VIEW_CHANNEL, e)
}

function E(e) {
    var t;
    let n = (0, l.bG)([O.Ay], () => O.Ay.isMuted(e)),
        r = (0, c.BP)(e),
        _ = (0, l.yK)([s.Ay, A.A], () => s.Ay.getEmbeddedActivitiesForGuild(e).filter(e => !(0, o.PH)([...e.userIds], A.A.getBlockedOrIgnoredIDs()))),
        E = (0, a.H)(null == (t = _[0]) ? void 0 : t.location),
        C = (0, i.Gp)(E),
        {
            guildHasVoice: S,
            guildHasVideo: I,
            selectedVoiceChannelHasVideo: N
        } = (0, l.cf)([y.A, j.A, m.A, b.A, f.A], () => {
            var t;
            let r = y.A.getVoiceChannelId(),
                l = null == (t = m.A.getGuild(e)) ? void 0 : t.afkChannelId,
                i = j.A.getUsersWithVideo(e),
                s = (0, o.hs)(j.A.getVoiceStates(e));
            return {
                guildHasVoice: (() => {
                    if (n) return !1;
                    for (let e in s)
                        if (v(f.A.getBasicChannel(s[e].channelId), null != l ? l : void 0, b.A)) return !0;
                    return !1
                })(),
                guildHasVideo: (() => {
                    if (n) return !1;
                    for (let t of i) {
                        var e;
                        if (v(f.A.getBasicChannel(null == (e = s[t]) ? void 0 : e.channelId), null != l ? l : void 0, b.A)) return !0
                    }
                    return !1
                })(),
                selectedVoiceChannelHasVideo: null != r && j.A.hasVideo(r)
            }
        }, [e, n]),
        T = g.default.getId();
    return (0, l.cf)([y.A, f.A, s.Ay, d.A, h.A, b.A], () => {
        var t, l, i;
        let c = y.A.getVoiceChannelId(),
            g = (null == (l = f.A.getChannel(c)) ? void 0 : l.guild_id) === e,
            m = !1,
            A = !1,
            O = !1,
            j = !1,
            v = !1,
            E = !1;
        if (!g && n) return {
            audio: m,
            video: j,
            screenshare: v,
            liveStage: O,
            activeEvent: A,
            activity: E,
            isCurrentUserConnected: !1
        };
        let P = x.default.keys(d.A.getStageInstancesByGuild(e)).some(e => {
                let t = f.A.getChannel(e);
                return null != t && b.A.can(u.Gk, t)
            }),
            w = g && null != (t = null == (i = f.A.getChannel(c)) ? void 0 : i.isGuildStageVoice()) && t,
            R = !!g && null != h.A.getActiveStreamForUser(T, e),
            D = (0, o.Mt)(h.A.getAllApplicationStreams()).some(t => t.guildId === e),
            L = g && N,
            M = (() => {
                if (C) return _.length > 0;
                for (let e of _) {
                    let t = f.A.getChannel((0, a.H)(e.location));
                    if (null != t && (0, p.gV)(t.type)) return !0
                }
                return !1
            })(),
            G = s.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return g ? (m = !0, A = (null == r ? void 0 : r.channel_id) === c, O = w, j = L, v = R, E = G) : (m = S, A = null != r, O = P, j = I, v = D, E = M), {
            audio: m,
            video: j,
            screenshare: v,
            liveStage: O,
            activeEvent: A,
            activity: E,
            isCurrentUserConnected: g || w
        }
    }, [e, n, N, T, C, _, r, S, I])
}