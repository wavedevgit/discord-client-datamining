/** chunk id: 567035, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
}), n(321073);
var a = n(735438),
    i = n.n(a),
    r = n(334738),
    c = n(591552),
    o = n(863005),
    s = n(808728),
    l = n(222823),
    _ = n(954571),
    d = n(661191),
    u = n(652215),
    g = n(790782);

function b(e, t, n) {
    let a = i().flatMap(e, e => {
        let t = s.Ay.getSelectableChannelIds(e),
            n = [...t, ...s.Ay.getVocalChannelIds(e)],
            a = o.A.getActiveJoinedThreadsForGuild(e);
        for (let e of t) {
            let t = a[e] ?? {};
            for (let e in t) n.push(e)
        }
        return n
    }).map(e => ({
        channelId: e,
        readStateType: g.P.CHANNEL,
        messageId: l.Ay.lastMessageId(e)
    }));
    return e.forEach(e => {
        a.push({
            channelId: d.default.cast(e),
            readStateType: g.P.GUILD_EVENT,
            messageId: l.Ay.lastMessageId(e, g.P.GUILD_EVENT)
        }), a.push({
            channelId: d.default.cast(e),
            readStateType: g.P.GUILD_ONBOARDING_QUESTION,
            messageId: c.A.ackIdForGuild(e)
        })
    }), _.default.track(u.HAw.MARK_AS_READ, {
        source: t,
        type: "guild"
    }), (0, r.Uq)(a, n)
}