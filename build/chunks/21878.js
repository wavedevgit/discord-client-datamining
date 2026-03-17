/** chunk id: 21878 params = (module,exports,require) **/
n.d(t, {
    A: () => h,
    M: () => _
});
var i = n(627968),
    l = n(64700),
    r = n(284009),
    a = n.n(r),
    s = n(417597),
    o = n(843472),
    d = n(320501),
    c = n(951727);
let u = l.createContext(void 0);

function _(e) {
    let t = l.useContext(u) ?? e;
    return a()(null != t, "Using PollReferenceMessageContext without a provider (or a fallback)"), t
}

function m(e) {
    let {
        message: t,
        children: n
    } = e, r = (0, s.bG)([d.A], () => d.A.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), a = null != r;
    return l.useEffect(() => {
        a || o.A.focusMessage({
            channelId: t.channel_id,
            messageId: t.id
        })
    }, [a, t.channel_id, t.id]), (0, i.jsx)(u.Provider, {
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