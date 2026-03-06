/** chunk id: 439303 params = (module,exports,require) **/
n.d(e, {
    E9: () => c,
    jM: () => u
});
var r = n(627968),
    a = n(64700),
    s = n(812729),
    i = n.n(s);
let l = a.createContext({});

function u() {
    return a.useContext(l)
}

function c(t) {
    let {
        newValue: e,
        children: n
    } = t, s = u(), c = a.useMemo(() => {
        let t = {
            ...s,
            ...e
        };
        return i()(s, t) ? s ?? t : t
    }, [s, e]);
    return (0, r.jsx)(l.Provider, {
        value: c,
        children: n
    })
}