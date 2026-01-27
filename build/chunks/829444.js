/** Chunk was on 77870 **/
/** chunk id: 829444, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(64700),
    l = n(417597),
    i = n(73153),
    s = n(775602),
    a = n(649963),
    o = n(253932),
    c = n(900210),
    u = n(505527);

function d() {
    let e = o.Sf.useSetting(),
        t = (0, l.bG)([s.A], () => s.A.useReducedMotion);
    r.useEffect(() => {
        function n(n) {
            let {
                messageId: r,
                channelId: l,
                emoji: i,
                optimistic: s,
                reactionType: o
            } = n;
            s || o !== u.v.BURST || !e || t || (0, a.on)({
                channelId: l,
                messageId: r,
                emoji: i,
                key: c.W.EXTERNAL
            })
        }
        return i.h.subscribe("MESSAGE_REACTION_ADD", n), () => {
            i.h.unsubscribe("MESSAGE_REACTION_ADD", n)
        }
    }, [e, t])
}