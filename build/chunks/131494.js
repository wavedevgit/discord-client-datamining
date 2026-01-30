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
    h = n(95701),
    p = n(616356),
    g = n(961350),
    f = n(734057),
    m = n(71393),
    b = n(576705),
    A = n(994500),
    y = n(309010),
    O = n(543465),
    _ = n(977997),
    j = n(661191),
    x = n(652215);

function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.A;
    return null != e && e.type !== r.r.GUILD_STAGE_VOICE && t !== e.id && n.canBasicChannel(x.hVb.VIEW_CHANNEL, e)
}

function E(e) {
    var t;
    let n = (0, l.bG)([O.Ay], () => O.Ay.isMuted(e)),
        r = (0, c.BP)(e),
        x = (0, l.yK)([s.Ay, A.A], () => s.Ay.getEmbeddedActivitiesForGuild(e).filter(e => !(0, o.PH)([...e.userIds], A.A.getBlockedOrIgnoredIDs()))),
        E = (0, a.H)(null == (t = x[0]) ? void 0 : t.location),
        C = (0, i.Gp)(E),
        {
            guildHasVoice: S,
            guildHasVideo: I,
            selectedVoiceChannelHasVideo: N
        } = (0, l.cf)([y.A, _.A, m.A, b.A, f.A], () => {
            var t;
            let r = y.A.getVoiceChannelId(),
                l = null == (t = m.A.getGuild(e)) ? void 0 : t.afkChannelId,
                i = _.A.getUsersWithVideo(e),
                s = (0, o.hs)(_.A.getVoiceStates(e));
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
                selectedVoiceChannelHasVideo: null != r && _.A.hasVideo(r)
            }
        }, [e, n]),
        T = g.default.getId();
    return (0, l.cf)([y.A, f.A, s.Ay, d.A, p.A, b.A], () => {
        var t, l, i;
        let c = y.A.getVoiceChannelId(),
            g = (null == (l = f.A.getChannel(c)) ? void 0 : l.guild_id) === e,
            m = !1,
            A = !1,
            O = !1,
            _ = !1,
            v = !1,
            E = !1;
        if (!g && n) return {
            audio: m,
            video: _,
            screenshare: v,
            liveStage: O,
            activeEvent: A,
            activity: E,
            isCurrentUserConnected: !1
        };
        let P = j.default.keys(d.A.getStageInstancesByGuild(e)).some(e => {
                let t = f.A.getChannel(e);
                return null != t && b.A.can(u.Gk, t)
            }),
            w = g && null != (t = null == (i = f.A.getChannel(c)) ? void 0 : i.isGuildStageVoice()) && t,
            R = !!g && null != p.A.getActiveStreamForUser(T, e),
            D = (0, o.Mt)(p.A.getAllApplicationStreams()).some(t => t.guildId === e),
            L = g && N,
            M = (() => {
                if (C) return x.length > 0;
                for (let e of x) {
                    let t = f.A.getChannel((0, a.H)(e.location));
                    if (null != t && (0, h.gV)(t.type)) return !0
                }
                return !1
            })(),
            G = s.Ay.getEmbeddedActivitiesForGuild(e).length > 0;
        return g ? (m = !0, A = (null == r ? void 0 : r.channel_id) === c, O = w, _ = L, v = R, E = G) : (m = S, A = null != r, O = P, _ = I, v = D, E = M), {
            audio: m,
            video: _,
            screenshare: v,
            liveStage: O,
            activeEvent: A,
            activity: E,
            isCurrentUserConnected: g || w
        }
    }, [e, n, N, T, C, x, r, S, I])
}