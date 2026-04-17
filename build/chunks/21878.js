/** chunk id: 21878 params = (module,exports,require) **/
n.d(t, {
    A: () => h,
    M: () => _
});
var i = n(627968),
    a = n(64700),
    l = n(284009),
    r = n.n(l),
    s = n(417597),
    o = n(843472),
    d = n(320501),
    c = n(951727);
let u = a.createContext(void 0);

function _(e) {
    let t = a.useContext(u) ?? e;
    return r()(null != t, "Using PollReferenceMessageContext without a provider (or a fallback)"), t
}

function m(e) {
    let {
        message: t,
        children: n
    } = e, l = (0, s.bG)([d.A], () => d.A.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), r = null != l;
    return a.useEffect(() => {
        r || o.A.focusMessage({
            channelId: t.channel_id,
            messageId: t.id
        })
    }, [r, t.channel_id, t.id]), (0, i.jsx)(u.Provider, {
        value: l ?? t,
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