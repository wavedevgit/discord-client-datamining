/** chunk id: 290794, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Tu: () => d,
    hd: () => o,
    y0: () => a,
    y5: () => s
});
var i = n(627968),
    l = n(64700);
let r = l.createContext(void 0);

function a() {
    let e = l.useContext(r);
    if (null == e) throw Error("No PollContextProvider found");
    return e
}

function s(e) {
    let {
        children: t,
        message: n,
        poll: a
    } = e, s = l.useMemo(() => ({
        message: n,
        poll: a
    }), [n, a]);
    return (0, i.jsx)(r.Provider, {
        value: s,
        children: t
    })
}

function o(e) {
    return function() {
        let {
            poll: e
        } = a();
        return e.resources
    }().styles[e]
}

function d() {
    let {
        message: e
    } = a(), t = e.getChannelId();
    return l.useMemo(() => ({
        channelId: t,
        messageId: e.id
    }), [e.id, t])
}