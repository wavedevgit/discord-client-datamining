/** chunk id: 801796 params = (module,exports,require) **/
n.d(t, {
    BD: () => p,
    US: () => h,
    X8: () => m,
    mH: () => I
});
var i = n(757942),
    r = n(455234),
    s = n(366811),
    a = n(95701),
    l = n(734057),
    o = n(222823),
    d = n(309010),
    _ = n(543465),
    c = n(652215),
    u = n(790782);
let A = (e, t) => {
        let n = l.A.getChannel(t);
        return null != n && ((0, a.Gw)(n.type) || c.kvI.GUILD_VOCAL.has(n.type) ? o.Ay.getMentionCount(t) > 0 || d.A.getVoiceChannelId() === t : (!_.Ay.isChannelMuted(e, t) || o.Ay.getMentionCount(t) > 0) && (0, r.Y)(n))
    },
    E = (e, t) => t === u.P.GUILD_EVENT ? !_.Ay.isMuteScheduledEventsEnabled(e) && o.Ay.hasUnread(e, t) : o.Ay.hasUnread(e, t),
    g = (e, t) => {
        let n = l.A.getChannel(t);
        return null != n && !!c.kvI.GUILD_VOCAL.has(n.type) && (o.Ay.getMentionCount(t) > 0 || d.A.getVoiceChannelId() === t && o.Ay.getUnreadCount(t) > 0)
    },
    I = {
        binds: ["alt+shift+down"],
        comboKeysBindGlobal: !0,
        action() {
            let e = s.A.getState().guildId ?? c.ME;
            return (0, i.A)(1, {
                channelPredicate: A,
                guildPredicate: t => t === e || !_.Ay.isMuted(t),
                guildFeaturePredicate: E,
                ensureChatIsVisible: g,
                withVoiceChannels: !0
            }), !1
        }
    },
    h = {
        binds: ["alt+shift+up"],
        comboKeysBindGlobal: !0,
        action() {
            let e = s.A.getState().guildId ?? c.ME;
            return (0, i.A)(-1, {
                channelPredicate: A,
                guildPredicate: t => t === e || !_.Ay.isMuted(t),
                guildFeaturePredicate: E,
                ensureChatIsVisible: g,
                withVoiceChannels: !0
            }), !1
        }
    },
    C = (e, t) => o.Ay.getMentionCount(t) > 0,
    p = {
        binds: ["mod+shift+alt+down"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.A)(1, {
            channelPredicate: C,
            ensureChatIsVisible: g,
            withVoiceChannels: !0
        }), !1)
    },
    m = {
        binds: ["mod+shift+alt+up"],
        comboKeysBindGlobal: !0,
        action: () => ((0, i.A)(-1, {
            channelPredicate: C,
            ensureChatIsVisible: g,
            withVoiceChannels: !0
        }), !1)
    }