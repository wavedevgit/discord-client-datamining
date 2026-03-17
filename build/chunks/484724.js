/** chunk id: 484724 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    a = n(686956),
    s = n(688810),
    o = n(202384),
    d = n(51758),
    c = n(665066),
    u = n(323443),
    _ = n(734057),
    m = n(696451),
    h = n(71393),
    p = n(287809),
    g = n(285059),
    A = n(698441),
    x = n(496092),
    f = n(427080),
    C = n(652215);

function I(e) {
    let {
        code: t
    } = e, [n, I, E] = t.split("-"), {
        analyticsLocations: v
    } = (0, s.Ay)(), {
        guildScheduledEvent: b,
        guild: T,
        channel: S,
        isMember: y
    } = (0, r.cf)([A.Ay, h.A, _.A, m.Ay, p.default], () => {
        let e = A.Ay.getGuildScheduledEvent(I) ?? void 0,
            t = h.A.getGuild(n),
            i = _.A.getChannel(e?.channel_id);
        return {
            guildScheduledEvent: e,
            guild: t,
            channel: i,
            isMember: m.Ay.isMember(n, p.default.getCurrentUser()?.id)
        }
    }, [n, I]);
    return l.useEffect(() => {
        b?.id == null && x.A.fetchGuildEvent(n, I), g.A.getGuildEventUserCounts(n, I, null != E ? [E] : []), g.A.getGuildEventsForCurrentUser(n)
    }, [I, n, b?.id, E]), (0, i.jsx)(f.Ay, {
        guild: T,
        channel: S,
        guildScheduledEvent: b,
        isMember: y,
        onAcceptInstantInvite: () => {
            if ((0, c.g)({
                    guild: T,
                    isMember: y,
                    analyticsLocations: v
                }) === c.W.PROCEED) {
                if ((0, d.V)(n)) return void(0, o.Ze)(n);
                a.A.joinGuild(n, {
                    source: C.Q4z.GUILD_EVENT_EMBED
                }).catch(() => {})
            }
        },
        onTransitionToInviteChannel: function() {
            (0, d.V)(n) ? (0, o.Ze)(n) : S?.isGuildStageVoice() ? (0, u.av)(S) : S?.isGuildVoice() && x.A.joinVoiceEvent(S.guild_id, S.id)
        },
        recurrenceId: E
    })
}