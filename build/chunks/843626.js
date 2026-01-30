/** Chunk was on 48654 **/
/** chunk id: 843626, original params: e,t,n (module,exports,require) **/
n.d(t, {
    m: () => p,
    p: () => d
}), n(938796);
var r = n(665260),
    i = n(311907),
    l = n(717125),
    o = n(734057),
    a = n(71393),
    s = n(576705),
    c = n(652215);
let u = c.pr7.CROSSPOSTED | c.pr7.FAILED_TO_MENTION_SOME_ROLES_IN_THREAD | c.pr7.GUILD_FEED_HIDDEN | c.pr7.HAS_SNAPSHOT | c.pr7.HAS_THREAD | c.pr7.IS_CROSSPOST | c.pr7.IS_VOICE_MESSAGE | c.pr7.SHOULD_SHOW_LINK_NOT_DISCORD_WARNING | c.pr7.SUPPRESS_EMBEDS | c.pr7.SUPPRESS_NOTIFICATIONS | c.pr7.URGENT | c.pr7.IS_COMPONENTS_V2;

function d(e) {
    var t, n;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.A,
        d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.A,
        p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.A,
        f = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a.A;
    if (null == e || !(e.state !== c.cmJ.SEND_FAILED && c.MRS.FORWARDABLE.has(e.type) && null == e.poll && null == e.sharedClientTheme && null == e.activity && null == e.call && null == e.activityInstance && 0 === (0, r.VL)(e.flags, u) && 1) || !i.canWithPartialContext(c.xBc.READ_MESSAGE_HISTORY, {
            channelId: e.channel_id
        })) return !1;
    let m = p.getChannel(e.channel_id),
        O = null == m ? void 0 : m.guild_id;
    return !(null != O && (null == (n = f.getGuild(O)) ? void 0 : n.features.has(c.GuildFeatures.FORWARDING_DISABLED)) || null != O && d.isChannelOrThreadParentGated(O, e.channel_id)) && (null == (t = null == m ? void 0 : m.isModeratorReportChannel()) || !t)
}

function p(e) {
    return (0, i.bG)([s.A, l.A, o.A, a.A], () => d(e, s.A, l.A, o.A, a.A))
}