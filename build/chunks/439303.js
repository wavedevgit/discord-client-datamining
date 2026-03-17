/** chunk id: 439303 params = (module,exports,require) **/
n.d(e, {
    E9: () => c,
    jM: () => u
});
var r = n(627968),
    s = n(64700),
    a = n(812729),
    i = n.n(a);
let l = s.createContext({});

function u() {
    return s.useContext(l)
}

function c(t) {
    let {
        newValue: e,
        children: n
    } = t, a = u(), c = s.useMemo(() => {
        let t = {
            ...a,
            ...e
        };
        return i()(a, t) ? a ?? t : t
    }, [a, e]);
    return (0, r.jsx)(l.Provider, {
        value: c,
        children: n
    })
}