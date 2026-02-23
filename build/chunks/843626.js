/** chunk id: 843626, original params: e,t,a (module,exports,require) **/
a.d(t, {
    m: () => m,
    p: () => u
}), a(938796);
var n = a(665260),
    i = a(311907),
    l = a(717125),
    s = a(734057),
    r = a(71393),
    o = a(576705),
    c = a(652215);
let d = c.pr7.CROSSPOSTED | c.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | c.pr7.GUILD_FEED_HIDDEN | c.pr7.HAS_SNAPSHOT | c.pr7.HAS_THREAD | c.pr7.IS_CROSSPOST | c.pr7.IS_VOICE_MESSAGE | c.pr7.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | c.pr7.SUPPRESS_EMBEDS | c.pr7.SUPPRESS_NOTIFICATIONS | c.pr7.URGENT | c.pr7.IS_COMPONENTS_V2;

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.A,
        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.A,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s.A,
        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : r.A;
    if (null == e || !(e.state !== c.cmJ.SEND_FAILED && c.MRS.FORWARDABLE.has(e.type) && null == e.poll && null == e.sharedClientTheme && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, n.VL)(e.flags, d) && 1)) return !1;
    let m = i.getChannel(e.channel_id),
        _ = t.can(c.xBc.READ_MESSAGE_HISTORY, m);
    if (null != m && !_ && !m.isPrivate()) return !1;
    let p = m?.guild_id;
    return !(null != p && u.getGuild(p)?.features.has(c.GuildFeatures.FORWARDING_DISABLED) || null != p && a.isChannelOrThreadParentGated(p, e.channel_id) || m?.isModeratorReportChannel())
}

function m(e) {
    return (0, i.bG)([o.A, l.A, s.A, r.A], () => u(e, o.A, l.A, s.A, r.A))
}