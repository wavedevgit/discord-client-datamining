/** chunk id: 829444, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(64700),
    r = n(417597),
    i = n(73153),
    a = n(775602),
    s = n(649963),
    o = n(253932),
    c = n(900210),
    u = n(505527);

function d() {
    let e = o.Sf.useSetting(),
        t = (0, r.bG)([a.A], () => a.A.useReducedMotion);
    l.useEffect(() => {
        function n(n) {
            let {
                messageId: l,
                channelId: r,
                emoji: i,
                optimistic: a,
                reactionType: o
            } = n;
            a || o !== u.v.BURST || !e || t || (0, s.on)({
                channelId: r,
                messageId: l,
                emoji: i,
                key: c.W.EXTERNAL
            })
        }
        return i.h.subscribe("MESSAGE_REACTION_ADD", n), () => {
            i.h.unsubscribe("MESSAGE_REACTION_ADD", n)
        }
    }, [e, t])
}