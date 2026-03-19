/** chunk id: 439303 params = (module,exports,require) **/
n.d(e, {
    E9: () => c,
    jM: () => u
});
var r = n(627968),
    s = n(64700),
    i = n(812729),
    a = n.n(i);
let l = s.createContext({});

function u() {
    return s.useContext(l)
}

function c(t) {
    let {
        newValue: e,
        children: n
    } = t, i = u(), c = s.useMemo(() => {
        let t = {
            ...i,
            ...e
        };
        return a()(i, t) ? i ?? t : t
    }, [i, e]);
    return (0, r.jsx)(l.Provider, {
        value: c,
        children: n
    })
}