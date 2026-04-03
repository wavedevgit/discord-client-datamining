/** chunk id: 21878 params = (module,exports,require) **/
n.d(t, {
    A: () => h,
    M: () => m
});
var i = n(627968),
    l = n(64700),
    r = n(284009),
    s = n.n(r),
    a = n(417597),
    o = n(843472),
    d = n(320501),
    c = n(951727);
let u = l.createContext(void 0);

function m(e) {
    let t = l.useContext(u) ?? e;
    return s()(null != t, "Using PollReferenceMessageContext without a provider (or a fallback)"), t
}

function _(e) {
    let {
        message: t,
        children: n
    } = e, r = (0, a.bG)([d.A], () => d.A.getMessage(t.channel_id, t.id), [t.channel_id, t.id]), s = null != r;
    return l.useEffect(() => {
        s || o.A.focusMessage({
            channelId: t.channel_id,
            messageId: t.id
        })
    }, [s, t.channel_id, t.id]), (0, i.jsx)(u.Provider, {
        value: r ?? t,
        children: n
    })
}

function h(e) {
    let {
        message: t,
        children: n
    } = e;
    return (0, c.Ls)(t) ? n : (0, i.jsx)(_, {
        message: t,
        children: n
    })
}