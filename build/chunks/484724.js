/** Chunk was on web.js **/
/** chunk id: 484724, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => O
}), n(896048), n(747238);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(686956),
    o = n(688810),
    l = n(202384),
    c = n(51758),
    u = n(665066),
    d = n(323443),
    f = n(734057),
    p = n(696451),
    _ = n(71393),
    h = n(287809),
    m = n(285059),
    g = n(698441),
    E = n(496092),
    y = n(427080),
    b = n(652215);

function O(e) {
    let {
        code: t
    } = e, [n, O, v] = t.split("-"), {
        analyticsLocations: A
    } = (0, o.Ay)(), {
        guildScheduledEvent: I,
        guild: S,
        channel: T,
        isMember: C
    } = (0, a.cf)([g.Ay, _.A, f.A, p.Ay, h.default], () => {
        var e, t;
        let r = null != (e = g.Ay.getGuildScheduledEvent(O)) ? e : void 0,
            i = _.A.getGuild(n),
            a = f.A.getChannel(null == r ? void 0 : r.channel_id);
        return {
            guildScheduledEvent: r,
            guild: i,
            channel: a,
            isMember: p.Ay.isMember(n, null == (t = h.default.getCurrentUser()) ? void 0 : t.id)
        }
    }, [n, O]), N = () => {
        if ((0, u.g)({
                guild: S,
                isMember: C,
                analyticsLocations: A
            }) === u.W.PROCEED) {
            if ((0, c.V)(n)) return void(0, l.Ze)(n);
            s.A.joinGuild(n, {
                source: b.Q4z.GUILD_EVENT_EMBED
            }).catch(() => {})
        }
    };

    function w() {
        (0, c.V)(n) ? (0, l.Ze)(n) : (null == T ? void 0 : T.isGuildStageVoice()) ? (0, d.av)(T) : (null == T ? void 0 : T.isGuildVoice()) && E.A.joinVoiceEvent(T.guild_id, T.id)
    }
    return i.useEffect(() => {
        (null == I ? void 0 : I.id) == null && E.A.fetchGuildEvent(n, O), m.A.getGuildEventUserCounts(n, O, null != v ? [v] : []), m.A.getGuildEventsForCurrentUser(n)
    }, [O, n, null == I ? void 0 : I.id, v]), (0, r.jsx)(y.Ay, {
        guild: S,
        channel: T,
        guildScheduledEvent: I,
        isMember: C,
        onAcceptInstantInvite: N,
        onTransitionToInviteChannel: w,
        recurrenceId: v
    })
}