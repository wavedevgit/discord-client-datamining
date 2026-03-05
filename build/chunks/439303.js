/** chunk id: 439303, original params: e,t,n (module,exports,require) **/
n.d(t, {
    E9: () => u,
    jM: () => o
});
var a = n(627968),
    r = n(64700),
    l = n(812729),
    s = n.n(l);
let i = r.createContext({});

function o() {
    return r.useContext(i)
}

function u(e) {
    let {
        newValue: t,
        children: n
    } = e, l = o(), u = r.useMemo(() => {
        let e = {
            ...l,
            ...t
        };
        return s()(l, e) ? l ?? e : e
    }, [l, t]);
    return (0, a.jsx)(i.Provider, {
        value: u,
        children: n
    })
}