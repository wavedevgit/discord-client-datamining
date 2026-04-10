/** chunk id: 567035 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => m
}), n(321073);
var a = n(735438),
    i = n.n(a),
    r = n(334738),
    o = n(591552),
    c = n(863005),
    _ = n(808728),
    l = n(222823),
    s = n(954571),
    d = n(661191),
    u = n(652215),
    b = n(790782);

function m(e, t, n) {
    let a = i().flatMap(e, e => {
        let t = _.Ay.getSelectableChannelIds(e),
            n = [...t, ..._.Ay.getVocalChannelIds(e)],
            a = c.A.getActiveJoinedThreadsForGuild(e);
        for (let e of t) {
            let t = a[e] ?? {};
            for (let e in t) n.push(e)
        }
        return n
    }).map(e => ({
        channelId: e,
        readStateType: b.P.CHANNEL,
        messageId: l.Ay.lastMessageId(e)
    }));
    return e.forEach(e => {
        a.push({
            channelId: d.default.cast(e),
            readStateType: b.P.GUILD_EVENT,
            messageId: l.Ay.lastMessageId(e, b.P.GUILD_EVENT)
        }), a.push({
            channelId: d.default.cast(e),
            readStateType: b.P.GUILD_ONBOARDING_QUESTION,
            messageId: o.A.ackIdForGuild(e)
        })
    }), s.default.track(u.HAw.MARK_AS_READ, {
        source: t,
        type: "guild"
    }), (0, r.Uq)(a, n)
}