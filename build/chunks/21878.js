/** chunk id: 21878 params = (module,exports,require) **/
n.d(t, {
    A: () => h,
    M: () => _
});
var i = n(627968),
    r = n(64700),
    a = n(284009),
    l = n.n(a),
    s = n(417597),
    o = n(843472),
    d = n(320501),
    c = n(951727);
let u = r.createContext(void 0);

function _(e) {
    let t = r.useContext(u) ?? e;
    return l()(null != t, "Using PollReferenceMessageContext without a provider (or a fallback)"), t
}

function m(e) {
    let {
        message: t,
        children: n
    } = e, a = (0, s.bG)([d.A], () => d.A.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), l = null != a;
    return r.useEffect(() => {
        l || o.A.focusMessage({
            channelId: t.channel_id,
            messageId: t.id
        })
    }, [l, t.channel_id, t.id]), (0, i.jsx)(u.Provider, {
        value: a ?? t,
        children: n
    })
}

function h(e) {
    let {
        message: t,
        children: n
    } = e;
    return (0, c.Ls)(t) ? n : (0, i.jsx)(m, {
        message: t,
        children: n
    })
}