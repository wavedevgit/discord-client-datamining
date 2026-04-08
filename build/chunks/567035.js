/** chunk id: 567035 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
}), n(321073);
var a = n(735438),
    i = n.n(a),
    r = n(334738),
    o = n(591552),
    l = n(863005),
    c = n(808728),
    s = n(222823),
    _ = n(954571),
    u = n(661191),
    d = n(652215),
    m = n(790782);

function b(e, t, n) {
    let a = i().flatMap(e, e => {
        let t = c.Ay.getSelectableChannelIds(e),
            n = [...t, ...c.Ay.getVocalChannelIds(e)],
            a = l.A.getActiveJoinedThreadsForGuild(e);
        for (let e of t) {
            let t = a[e] ?? {};
            for (let e in t) n.push(e)
        }
        return n
    }).map(e => ({
        channelId: e,
        readStateType: m.P.CHANNEL,
        messageId: s.Ay.lastMessageId(e)
    }));
    return e.forEach(e => {
        a.push({
            channelId: u.default.cast(e),
            readStateType: m.P.GUILD_EVENT,
            messageId: s.Ay.lastMessageId(e, m.P.GUILD_EVENT)
        }), a.push({
            channelId: u.default.cast(e),
            readStateType: m.P.GUILD_ONBOARDING_QUESTION,
            messageId: o.A.ackIdForGuild(e)
        })
    }), _.default.track(d.HAw.MARK_AS_READ, {
        source: t,
        type: "guild"
    }), (0, r.Uq)(a, n)
}