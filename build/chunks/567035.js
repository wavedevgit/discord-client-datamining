/** chunk id: 567035 params = (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(321073);
var i = n(735438),
    l = n.n(i),
    r = n(334738),
    s = n(591552),
    o = n(863005),
    a = n(808728),
    d = n(222823),
    c = n(954571),
    u = n(661191),
    A = n(652215),
    E = n(790782);

function _(e, t, n) {
    let i = l().flatMap(e, e => {
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
        readStateType: E.P.CHANNEL,
        messageId: d.Ay.lastMessageId(e)
    }));
    return e.forEach(e => {
        i.push({
            channelId: u.default.cast(e),
            readStateType: E.P.GUILD_EVENT,
            messageId: d.Ay.lastMessageId(e, E.P.GUILD_EVENT)
        }), i.push({
            channelId: u.default.cast(e),
            readStateType: E.P.GUILD_ONBOARDING_QUESTION,
            messageId: s.A.ackIdForGuild(e)
        })
    }), c.default.track(A.HAw.MARK_AS_READ, {
        source: t,
        type: "guild"
    }), (0, r.Uq)(i, n)
}