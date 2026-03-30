/** chunk id: 484724 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968),
    r = n(64700),
    a = n(311907),
    l = n(686956),
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
        analyticsLocations: b
    } = (0, s.Ay)(), {
        guildScheduledEvent: v,
        guild: T,
        channel: y,
        isMember: S
    } = (0, a.cf)([A.Ay, h.A, _.A, m.Ay, p.default], () => {
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
    return r.useEffect(() => {
        v?.id == null && x.A.fetchGuildEvent(n, I), g.A.getGuildEventUserCounts(n, I, null != E ? [E] : []), g.A.getGuildEventsForCurrentUser(n)
    }, [I, n, v?.id, E]), (0, i.jsx)(f.Ay, {
        guild: T,
        channel: y,
        guildScheduledEvent: v,
        isMember: S,
        onAcceptInstantInvite: () => {
            if ((0, c.g)({
                    guild: T,
                    isMember: S,
                    analyticsLocations: b
                }) === c.W.PROCEED) {
                if ((0, d.V)(n)) return void(0, o.Ze)(n);
                l.A.joinGuild(n, {
                    source: C.Q4z.GUILD_EVENT_EMBED
                }).catch(() => {})
            }
        },
        onTransitionToInviteChannel: function() {
            (0, d.V)(n) ? (0, o.Ze)(n) : y?.isGuildStageVoice() ? (0, u.av)(y) : y?.isGuildVoice() && x.A.joinVoiceEvent(y.guild_id, y.id)
        },
        recurrenceId: E
    })
}