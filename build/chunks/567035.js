/** Chunk was on 84018 **/
/** chunk id: 567035, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(114821), n(339614), n(896048), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(334738),
    l = n(591552),
    o = n(863005),
    a = n(808728),
    c = n(222823),
    d = n(954571),
    u = n(661191),
    p = n(652215),
    h = n(790782);

function f(e, t, n) {
    let i = r().flatMap(e, e => {
        let t = a.Ay.getSelectableChannelIds(e),
            n = [...t, ...a.Ay.getVocalChannelIds(e)],
            i = o.A.getActiveJoinedThreadsForGuild(e);
        for (let e of t) {
            var r;
            let t = null != (r = i[e]) ? r : {};
            for (let e in t) n.push(e)
        }
        return n
    }).map(e => ({
        channelId: e,
        readStateType: h.P.CHANNEL,
        messageId: c.Ay.lastMessageId(e)
    }));
    return e.forEach(e => {
        i.push({
            channelId: u.default.cast(e),
            readStateType: h.P.GUILD_EVENT,
            messageId: c.Ay.lastMessageId(e, h.P.GUILD_EVENT)
        }), i.push({
            channelId: u.default.cast(e),
            readStateType: h.P.GUILD_ONBOARDING_QUESTION,
            messageId: l.A.ackIdForGuild(e)
        })
    }), d.default.track(p.HAw.MARK_AS_READ, {
        source: t,
        type: "guild"
    }), (0, s.Uq)(i, n)
}