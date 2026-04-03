/** chunk id: 484724 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    l = n(64700),
    r = n(311907),
    s = n(686956),
    a = n(688810),
    o = n(202384),
    d = n(51758),
    c = n(665066),
    u = n(323443),
    m = n(734057),
    _ = n(696451),
    h = n(71393),
    p = n(287809),
    g = n(285059),
    A = n(698441),
    x = n(496092),
    f = n(427080),
    C = n(652215);

function E(e) {
    let {
        code: t
    } = e, [n, E, I] = t.split("-"), {
        analyticsLocations: v
    } = (0, a.Ay)(), {
        guildScheduledEvent: b,
        guild: T,
        channel: N,
        isMember: S
    } = (0, r.cf)([A.Ay, h.A, m.A, _.Ay, p.default], () => {
        let e = A.Ay.getGuildScheduledEvent(E) ?? void 0,
            t = h.A.getGuild(n),
            i = m.A.getChannel(e?.channel_id);
        return {
            guildScheduledEvent: e,
            guild: t,
            channel: i,
            isMember: _.Ay.isMember(n, p.default.getCurrentUser()?.id)
        }
    }, [n, E]);
    return l.useEffect(() => {
        b?.id == null && x.A.fetchGuildEvent(n, E), g.A.getGuildEventUserCounts(n, E, null != I ? [I] : []), g.A.getGuildEventsForCurrentUser(n)
    }, [E, n, b?.id, I]), (0, i.jsx)(f.Ay, {
        guild: T,
        channel: N,
        guildScheduledEvent: b,
        isMember: S,
        onAcceptInstantInvite: () => {
            if ((0, c.g)({
                    guild: T,
                    isMember: S,
                    analyticsLocations: v
                }) === c.W.PROCEED) {
                if ((0, d.V)(n)) return void(0, o.Ze)(n);
                s.A.joinGuild(n, {
                    source: C.Q4z.GUILD_EVENT_EMBED
                }).catch(() => {})
            }
        },
        onTransitionToInviteChannel: function() {
            (0, d.V)(n) ? (0, o.Ze)(n) : N?.isGuildStageVoice() ? (0, u.av)(N) : N?.isGuildVoice() && x.A.joinVoiceEvent(N.guild_id, N.id)
        },
        recurrenceId: I
    })
}