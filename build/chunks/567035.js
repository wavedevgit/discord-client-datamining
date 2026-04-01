/** chunk id: 567035 params = (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(334738),
    a = n(591552),
    l = n(863005),
    o = n(808728),
    d = n(222823),
    c = n(954571),
    _ = n(661191),
    u = n(652215),
    A = n(790782);

function E(e, t, n) {
    let i = r().flatMap(e, e => {
        let t = o.Ay.getSelectableChannelIds(e),
            n = [...t, ...o.Ay.getVocalChannelIds(e)],
            i = l.A.getActiveJoinedThreadsForGuild(e);
        for (let e of t) {
            let t = i[e] ?? {};
            for (let e in t) n.push(e)
        }
        return n
    }).map(e => ({
        channelId: e,
        readStateType: A.P.CHANNEL,
        messageId: d.Ay.lastMessageId(e)
    }));
    return e.forEach(e => {
        i.push({
            channelId: _.default.cast(e),
            readStateType: A.P.GUILD_EVENT,
            messageId: d.Ay.lastMessageId(e, A.P.GUILD_EVENT)
        }), i.push({
            channelId: _.default.cast(e),
            readStateType: A.P.GUILD_ONBOARDING_QUESTION,
            messageId: a.A.ackIdForGuild(e)
        })
    }), c.default.track(u.HAw.MARK_AS_READ, {
        source: t,
        type: "guild"
    }), (0, s.Uq)(i, n)
}