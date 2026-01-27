/** Chunk was on 51901 **/
/** chunk id: 567035, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(114821), n(339614), n(896048), n(321073);
var r = n(735438),
    o = n.n(r),
    a = n(334738),
    l = n(591552),
    i = n(863005),
    c = n(808728),
    s = n(222823),
    u = n(954571),
    d = n(661191),
    b = n(652215),
    f = n(790782);

function p(e, t, n) {
    let r = o().flatMap(e, e => {
        let t = c.Ay.getSelectableChannelIds(e),
            n = [...t, ...c.Ay.getVocalChannelIds(e)],
            r = i.A.getActiveJoinedThreadsForGuild(e);
        for (let e of t) {
            var o;
            let t = null != (o = r[e]) ? o : {};
            for (let e in t) n.push(e)
        }
        return n
    }).map(e => ({
        channelId: e,
        readStateType: f.P.CHANNEL,
        messageId: s.Ay.lastMessageId(e)
    }));
    return e.forEach(e => {
        r.push({
            channelId: d.default.cast(e),
            readStateType: f.P.GUILD_EVENT,
            messageId: s.Ay.lastMessageId(e, f.P.GUILD_EVENT)
        }), r.push({
            channelId: d.default.cast(e),
            readStateType: f.P.GUILD_ONBOARDING_QUESTION,
            messageId: l.A.ackIdForGuild(e)
        })
    }), u.default.track(b.HAw.MARK_AS_READ, {
        source: t,
        type: "guild"
    }), (0, a.Uq)(r, n)
}