/** Chunk was on 48654 **/
/** chunk id: 843626, original params: e,t,n (module,exports,require) **/
n.d(t, {
    m: () => f,
    p: () => p
}), n(938796);
var l = n(64700),
    i = n(665260),
    r = n(311907),
    o = n(717125),
    a = n(734057),
    s = n(71393),
    c = n(652215);
let u = c.pr7.CROSSPOSTED | c.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | c.pr7.GUILD_FEED_HIDDEN | c.pr7.HAS_SNAPSHOT | c.pr7.HAS_THREAD | c.pr7.IS_CROSSPOST | c.pr7.IS_VOICE_MESSAGE | c.pr7.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | c.pr7.SUPPRESS_EMBEDS | c.pr7.SUPPRESS_NOTIFICATIONS | c.pr7.URGENT | c.pr7.IS_COMPONENTS_V2;

function d(e) {
    return e.state !== c.cmJ.SEND_FAILED && !!c.MRS.FORWARDABLE.has(e.type) && null == e.poll && null == e.sharedClientTheme && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, i.VL)(e.flags, u) && !0
}

function p(e) {
    var t;
    if (!d(e)) return !1;
    let n = null == (t = a.A.getChannel(e.channel_id)) ? void 0 : t.guild_id;
    return !(null != n && o.A.isChannelOrThreadParentGated(n, e.channel_id))
}

function f(e) {
    let t = (0, r.bG)([s.A, o.A, a.A], () => {
        var t, n, l;
        if (null == e) return !0;
        let i = null == (t = a.A.getChannel(e.channel_id)) ? void 0 : t.guild_id;
        if (null != i && (null == (n = s.A.getGuild(i)) ? void 0 : n.features.has(c.GuildFeatures.FORWARDING_DISABLED))) return !0;
        let r = null != i && o.A.isChannelOrThreadParentGated(i, e.channel_id),
            u = null != e && (null == (l = a.A.getChannel(e.channel_id)) ? void 0 : l.isModeratorReportChannel());
        return r || u
    });
    return l.useMemo(() => !t && null != e && d(e), [t, e])
}