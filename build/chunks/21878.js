/** chunk id: 21878 params = (module,exports,require) **/
n.d(t, {
    A: () => h,
    M: () => _
});
var i = n(627968),
    a = n(64700),
    r = n(284009),
    l = n.n(r),
    s = n(417597),
    o = n(843472),
    d = n(320501),
    c = n(951727);
let u = a.createContext(void 0);

function _(e) {
    let t = a.useContext(u) ?? e;
    return l()(null != t, "Using PollReferenceMessageContext without a provider (or a fallback)"), t
}

function m(e) {
    let {
        message: t,
        children: n
    } = e, r = (0, s.bG)([d.A], () => d.A.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), l = null != r;
    return a.useEffect(() => {
        l || o.A.focusMessage({
            channelId: t.channel_id,
            messageId: t.id
        })
    }, [l, t.channel_id, t.id]), (0, i.jsx)(u.Provider, {
        value: r ?? t,
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