/** chunk id: 299679 params = (module,exports,require) **/
t.d(e, {
    Ar: () => c,
    dB: () => o
});
var s = t(627968),
    n = t(64700);
let r = n.createContext(null);

function c() {
    return n.useContext(r)
}

function o(i) {
    let {
        newValue: e,
        children: t
    } = i, n = {
        ...c(),
        ...e
    };
    return (0, s.jsx)(r.Provider, {
        value: n,
        children: t
    })
}