/** chunk id: 290794 params = (module,exports,require) **/
n.d(t, {
    Tu: () => d,
    hd: () => o,
    y0: () => a,
    y5: () => s
});
var i = n(627968),
    r = n(64700);
let l = r.createContext(void 0);

function a() {
    let e = r.useContext(l);
    if (null == e) throw Error("No PollContextProvider found");
    return e
}

function s(e) {
    let {
        children: t,
        message: n,
        poll: a
    } = e, s = r.useMemo(() => ({
        message: n,
        poll: a
    }), [n, a]);
    return (0, i.jsx)(l.Provider, {
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
    return r.useMemo(() => ({
        channelId: t,
        messageId: e.id
    }), [e.id, t])
}