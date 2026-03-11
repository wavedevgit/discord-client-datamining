/** chunk id: 567035 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
}), n(321073);
var i = n(735438),
    a = n.n(i),
    r = n(334738),
    l = n(591552),
    _ = n(863005),
    o = n(808728),
    s = n(222823),
    c = n(954571),
    d = n(661191),
    u = n(652215),
    g = n(790782);

function b(e, t, n) {
    let i = a().flatMap(e, e => {
        let t = o.Ay.getSelectableChannelIds(e),
            n = [...t, ...o.Ay.getVocalChannelIds(e)],
            i = _.A.getActiveJoinedThreadsForGuild(e);
        for (let e of t) {
            let t = i[e] ?? {};
            for (let e in t) n.push(e)
        }
        return n
    }).map(e => ({
        channelId: e,
        readStateType: g.P.CHANNEL,
        messageId: s.Ay.lastMessageId(e)
    }));
    return e.forEach(e => {
        i.push({
            channelId: d.default.cast(e),
            readStateType: g.P.GUILD_EVENT,
            messageId: s.Ay.lastMessageId(e, g.P.GUILD_EVENT)
        }), i.push({
            channelId: d.default.cast(e),
            readStateType: g.P.GUILD_ONBOARDING_QUESTION,
            messageId: l.A.ackIdForGuild(e)
        })
    }), c.default.track(u.HAw.MARK_AS_READ, {
        source: t,
        type: "guild"
    }), (0, r.Uq)(i, n)
}