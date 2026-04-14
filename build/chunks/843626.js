/** chunk id: 843626 params = (module,exports,require) **/
n.d(t, {
    m: () => u,
    p: () => _
}), n(938796);
var a = n(665260),
    i = n(311907),
    r = n(717125),
    o = n(734057),
    l = n(71393),
    c = n(576705),
    s = n(652215);
let d = s.pr7.CROSSPOSTED | s.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | s.pr7.GUILD_FEED_HIDDEN | s.pr7.HAS_SNAPSHOT | s.pr7.HAS_THREAD | s.pr7.IS_CROSSPOST | s.pr7.IS_VOICE_MESSAGE | s.pr7.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | s.pr7.SUPPRESS_EMBEDS | s.pr7.SUPPRESS_NOTIFICATIONS | s.pr7.URGENT | s.pr7.IS_COMPONENTS_V2 | s.pr7.IS_GUILD_OFFICIAL;

function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.A,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.A,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.A,
        _ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l.A;
    if (null == e || !(e.state !== s.cmJ.SEND_FAILED && s.MRS.FORWARDABLE.has(e.type) && null == e.poll && null == e.sharedClientTheme && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, a.VL)(e.flags, d) && 1)) return !1;
    let u = i.getChannel(e.channel_id),
        m = t.can(s.xBc.READ_MESSAGE_HISTORY, u);
    if (null != u && !m && !u.isPrivate()) return !1;
    let p = u?.guild_id;
    return !(null != p && _.getGuild(p)?.features.has(s.GuildFeatures.FORWARDING_DISABLED) || null != p && n.isChannelOrThreadParentGated(p, e.channel_id) || u?.isModeratorReportChannel())
}

function u(e) {
    return (0, i.bG)([c.A, r.A, o.A, l.A], () => _(e, c.A, r.A, o.A, l.A))
}