/** chunk id: 567035 params = (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(321073);
var i = n(735438),
    r = n.n(i),
    l = n(334738),
    s = n(591552),
    o = n(863005),
    a = n(808728),
    d = n(222823),
    c = n(954571),
    u = n(661191),
    _ = n(652215),
    A = n(790782);

function E(e, t, n) {
    let i = r().flatMap(e, e => {
        let t = a.Ay.getSelectableChannelIds(e),
            n = [...t, ...a.Ay.getVocalChannelIds(e)],
            i = o.A.getActiveJoinedThreadsForGuild(e);
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
            channelId: u.default.cast(e),
            readStateType: A.P.GUILD_EVENT,
            messageId: d.Ay.lastMessageId(e, A.P.GUILD_EVENT)
        }), i.push({
            channelId: u.default.cast(e),
            readStateType: A.P.GUILD_ONBOARDING_QUESTION,
            messageId: s.A.ackIdForGuild(e)
        })
    }), c.default.track(_.HAw.MARK_AS_READ, {
        source: t,
        type: "guild"
    }), (0, l.Uq)(i, n)
}