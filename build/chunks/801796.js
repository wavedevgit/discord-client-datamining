/** Chunk was on 5606 **/
/** chunk id: 801796, original params: e,t,n (module,exports,require) **/
n.d(t, {
    BD: () => A,
    US: () => b,
    X8: () => E,
    mH: () => f
});
var r = n(757942),
    i = n(455234),
    l = n(366811),
    s = n(95701),
    a = n(734057),
    o = n(222823),
    c = n(309010),
    d = n(543465),
    u = n(652215),
    p = n(790782);
let _ = (e, t) => {
        let n = a.A.getChannel(t);
        return null != n && ((0, s.Gw)(n.type) || u.kvI.GUILD_VOCAL.has(n.type) ? o.Ay.getMentionCount(t) > 0 || c.A.getVoiceChannelId() === t : (!d.Ay.isChannelMuted(e, t) || o.Ay.getMentionCount(t) > 0) && (0, i.Y)(n))
    },
    m = (e, t) => t === p.P.GUILD_EVENT ? !d.Ay.isMuteScheduledEventsEnabled(e) && o.Ay.hasUnread(e, t) : o.Ay.hasUnread(e, t),
    g = (e, t) => {
        let n = a.A.getChannel(t);
        return null != n && !!u.kvI.GUILD_VOCAL.has(n.type) && (o.Ay.getMentionCount(t) > 0 || c.A.getVoiceChannelId() === t && o.Ay.getUnreadCount(t) > 0)
    },
    f = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let t = null != (e = l.A.getState().guildId) ? e : u.ME;
            return (0, r.A)(1, {
                channelPredicate: _,
                guildPredicate: e => e === t || !d.Ay.isMuted(e),
                guildFeaturePredicate: m,
                ensureChatIsVisible: g,
                withVoiceChannels: !0
            }), !1
        }
    },
    b = {
        binds: ["alt+shift+up"],
        comboKeysBindGlobal: !0,
        action() {
            var e;
            let t = null != (e = l.A.getState().guildId) ? e : u.ME;
            return (0, r.A)(-1, {
                channelPredicate: _,
                guildPredicate: e => e === t || !d.Ay.isMuted(e),
                guildFeaturePredicate: m,
                ensureChatIsVisible: g,
                withVoiceChannels: !0
            }), !1
        }
    },
    h = (e, t) => o.Ay.getMentionCount(t) > 0,
    A = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.A)(1, {
            channelPredicate: h,
            ensureChatIsVisible: g,
            withVoiceChannels: !0
        }), !1)
    },
    E = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => ((0, r.A)(-1, {
            channelPredicate: h,
            ensureChatIsVisible: g,
            withVoiceChannels: !0
        }), !1)
    }