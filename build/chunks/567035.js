/** chunk id: 567035 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
}), n(321073);
var i = n(735438),
    r = n.n(i),
    a = n(334738),
    l = n(591552),
    o = n(863005),
    s = n(808728),
    c = n(222823),
    _ = n(954571),
    u = n(661191),
    d = n(652215),
    b = n(790782);

function m(e, t, n) {
    let i = r().flatMap(e, e => {
        let t = s.Ay.getSelectableChannelIds(e),
            n = [...t, ...s.Ay.getVocalChannelIds(e)],
            i = o.A.getActiveJoinedThreadsForGuild(e);
        for (let e of t) {
            let t = i[e] ?? {};
            for (let e in t) n.push(e)
        }
        return n
    }).map(e => ({
        channelId: e,
        readStateType: b.P.CHANNEL,
        messageId: c.Ay.lastMessageId(e)
    }));
    return e.forEach(e => {
        i.push({
            channelId: u.default.cast(e),
            readStateType: b.P.GUILD_EVENT,
            messageId: c.Ay.lastMessageId(e, b.P.GUILD_EVENT)
        }), i.push({
            channelId: u.default.cast(e),
            readStateType: b.P.GUILD_ONBOARDING_QUESTION,
            messageId: l.A.ackIdForGuild(e)
        })
    }), _.default.track(d.HAw.MARK_AS_READ, {
        source: t,
        type: "guild"
    }), (0, a.Uq)(i, n)
}