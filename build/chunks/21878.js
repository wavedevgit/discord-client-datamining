/** Chunk was on 64935 **/
/** chunk id: 21878, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f,
    M: () => p
});
var r = n(627968),
    i = n(64700),
    l = n(284009),
    a = n.n(l),
    s = n(417597),
    o = n(843472),
    c = n(320501),
    u = n(951727);
let d = i.createContext(void 0);

function p(e) {
    var t;
    let n = null != (t = i.useContext(d)) ? t : e;
    return a()(null != n, "Using PollReferenceMessageContext without a provider (or a fallback)"), n
}

function m(e) {
    let {
        message: t,
        children: n
    } = e, l = (0, s.bG)([c.A], () => c.A.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), a = null != l;
    return i.useEffect(() => {
        a || o.A.focusMessage({
            channelId: t.channel_id,
            messageId: t.id
        })
    }, [a, t.channel_id, t.id]), (0, r.jsx)(d.Provider, {
        value: null != l ? l : t,
        children: n
    })
}

function f(e) {
    let {
        message: t,
        children: n
    } = e;
    return (0, u.Ls)(t) ? n : (0, r.jsx)(m, {
        message: t,
        children: n
    })
}