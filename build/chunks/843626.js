/** chunk id: 843626 params = (module,exports,require) **/
n.d(t, {
    m: () => _,
    p: () => u
}), n(938796);
var a = n(665260),
    i = n(311907),
    r = n(717125),
    o = n(734057),
    l = n(71393),
    s = n(576705),
    c = n(652215);
let d = c.pr7.CROSSPOSTED | c.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | c.pr7.GUILD_FEED_HIDDEN | c.pr7.HAS_SNAPSHOT | c.pr7.HAS_THREAD | c.pr7.IS_CROSSPOST | c.pr7.IS_VOICE_MESSAGE | c.pr7.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | c.pr7.SUPPRESS_EMBEDS | c.pr7.SUPPRESS_NOTIFICATIONS | c.pr7.URGENT | c.pr7.IS_COMPONENTS_V2 | c.pr7.IS_GUILD_OFFICIAL;

function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.A,
        u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l.A;
    if (null == e || !(e.state !== c.cmJ.SEND_FAILED && c.MRS.FORWARDABLE.has(e.type) && null == e.poll && null == e.sharedClientTheme && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, a.VL)(e.flags, d) && 1)) return !1;
    let _ = i.getChannel(e.channel_id),
        m = t.can(c.xBc.READ_MESSAGE_HISTORY, _);
    if (null != _ && !m && !_.isPrivate()) return !1;
    let p = _?.guild_id;
    return !(null != p && u.getGuild(p)?.features.has(c.GuildFeatures.FORWARDING_DISABLED) || null != p && n.isChannelOrThreadParentGated(p, e.channel_id) || _?.isModeratorReportChannel())
}

function _(e) {
    return (0, i.bG)([s.A, r.A, o.A, l.A], () => u(e, s.A, r.A, o.A, l.A))
}