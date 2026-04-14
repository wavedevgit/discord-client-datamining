/** chunk id: 290794 params = (module,exports,require) **/
n.d(t, {
    Tu: () => d,
    hd: () => o,
    y0: () => s,
    y5: () => r
});
var i = n(627968),
    a = n(64700);
let l = a.createContext(void 0);

function s() {
    let e = a.useContext(l);
    if (null == e) throw Error("No PollContextProvider found");
    return e
}

function r(e) {
    let {
        children: t,
        message: n,
        poll: s
    } = e, r = a.useMemo(() => ({
        message: n,
        poll: s
    }), [n, s]);
    return (0, i.jsx)(l.Provider, {
        value: r,
        children: t
    })
}

function o(e) {
    return function() {
        let {
            poll: e
        } = s();
        return e.resources
    }().styles[e]
}

function d() {
    let {
        message: e
    } = s(), t = e.getChannelId();
    return a.useMemo(() => ({
        channelId: t,
        messageId: e.id
    }), [e.id, t])
}