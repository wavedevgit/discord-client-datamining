/** chunk id: 290794 params = (module,exports,require) **/
n.d(t, {
    Tu: () => d,
    hd: () => o,
    y0: () => a,
    y5: () => r
});
var i = n(627968),
    l = n(64700);
let s = l.createContext(void 0);

function a() {
    let e = l.useContext(s);
    if (null == e) throw Error("No PollContextProvider found");
    return e
}

function r(e) {
    let {
        children: t,
        message: n,
        poll: a
    } = e, r = l.useMemo(() => ({
        message: n,
        poll: a
    }), [n, a]);
    return (0, i.jsx)(s.Provider, {
        value: r,
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