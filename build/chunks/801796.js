/** chunk id: 801796 params = (module,exports,require) **/
n.d(t, {
    BD: () => p,
    US: () => C,
    X8: () => T,
    mH: () => g
});
var i = n(757942),
    l = n(455234),
    r = n(366811),
    s = n(95701),
    o = n(734057),
    a = n(222823),
    d = n(309010),
    c = n(543465),
    u = n(652215),
    A = n(790782);
let E = (e, t) => {
        let n = o.A.getChannel(t);
        return null != n && ((0, s.Gw)(n.type) || u.kvI.GUILD_VOCAL.has(n.type) ? a.Ay.getMentionCount(t) > 0 || d.A.getVoiceChannelId() === t : (!c.Ay.isChannelMuted(e, t) || a.Ay.getMentionCount(t) > 0) && (0, l.Y)(n))
    },
    _ = (e, t) => t === A.P.GUILD_EVENT ? !c.Ay.isMuteScheduledEventsEnabled(e) && a.Ay.hasUnread(e, t) : a.Ay.hasUnread(e, t),
    I = (e, t) => {
        let n = o.A.getChannel(t);
        return null != n && !!u.kvI.GUILD_VOCAL.has(n.type) && (a.Ay.getMentionCount(t) > 0 || d.A.getVoiceChannelId() === t && a.Ay.getUnreadCount(t) > 0)
    },
    g = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = r.A.getState().guildId ?? u.ME;
            return (0, i.A)(1, {
                channelPredicate: E,
                guildPredicate: t => t === e || !c.Ay.isMuted(t),
                guildFeaturePredicate: _,
                ensureChatIsVisible: I,
                withVoiceChannels: !0
            }), !1
        }
    },
    C = {
        binds: ["alt+shift+up"],
        comboKeysBindGlobal: !0,
        action() {
            let e = r.A.getState().guildId ?? u.ME;
            return (0, i.A)(-1, {
                channelPredicate: E,
                guildPredicate: t => t === e || !c.Ay.isMuted(t),
                guildFeaturePredicate: _,
                ensureChatIsVisible: I,
                withVoiceChannels: !0
            }), !1
        }
    },
    h = (e, t) => a.Ay.getMentionCount(t) > 0,
    p = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.A)(1, {
            channelPredicate: h,
            ensureChatIsVisible: I,
            withVoiceChannels: !0
        }), !1)
    },
    T = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.A)(-1, {
            channelPredicate: h,
            ensureChatIsVisible: I,
            withVoiceChannels: !0
        }), !1)
    }