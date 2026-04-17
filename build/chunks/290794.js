/** chunk id: 290794 params = (module,exports,require) **/
n.d(t, {
    Tu: () => d,
    hd: () => o,
    y0: () => r,
    y5: () => s
});
var i = n(627968),
    a = n(64700);
let l = a.createContext(void 0);

function r() {
    let e = a.useContext(l);
    if (null == e) throw Error("No PollContextProvider found");
    return e
}

function s(e) {
    let {
        children: t,
        message: n,
        poll: r
    } = e, s = a.useMemo(() => ({
        message: n,
        poll: r
    }), [n, r]);
    return (0, i.jsx)(l.Provider, {
        value: s,
        children: t
    })
}

function o(e) {
    return function() {
        let {
            poll: e
        } = r();
        return e.resources
    }().styles[e]
}

function d() {
    let {
        message: e
    } = r(), t = e.getChannelId();
    return a.useMemo(() => ({
        channelId: t,
        messageId: e.id
    }), [e.id, t])
}