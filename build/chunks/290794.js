/** chunk id: 290794 params = (module,exports,require) **/
n.d(t, {
    Tu: () => d,
    hd: () => o,
    y0: () => l,
    y5: () => s
});
var i = n(627968),
    a = n(64700);
let r = a.createContext(void 0);

function l() {
    let e = a.useContext(r);
    if (null == e) throw Error("No PollContextProvider found");
    return e
}

function s(e) {
    let {
        children: t,
        message: n,
        poll: l
    } = e, s = a.useMemo(() => ({
        message: n,
        poll: l
    }), [n, l]);
    return (0, i.jsx)(r.Provider, {
        value: s,
        children: t
    })
}

function o(e) {
    return function() {
        let {
            poll: e
        } = l();
        return e.resources
    }().styles[e]
}

function d() {
    let {
        message: e
    } = l(), t = e.getChannelId();
    return a.useMemo(() => ({
        channelId: t,
        messageId: e.id
    }), [e.id, t])
}