/** chunk id: 700458, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Oi: () => s,
    Tj: () => o,
    ZM: () => c
}), n(65821), n(896048);
var r, i = n(627968),
    l = n(64700),
    s = ((r = {})[r.BASIC_INFO = 0] = "BASIC_INFO", r[r.TIERS = 1] = "TIERS", r[r.PAYMENT = 2] = "PAYMENT", r[r.EMOJIS = 3] = "EMOJIS", r);
let a = l.createContext({
    currentTab: 0,
    setCurrentTab: () => {
        throw Error("useTabBarState must be used within TabBarContextProvider")
    }
});

function o() {
    return l.useContext(a)
}

function c(e) {
    let {
        initialTab: t,
        children: n
    } = e, [r, s] = l.useState(t);
    return (0, i.jsx)(a.Provider, {
        value: {
            currentTab: r,
            setCurrentTab: s
        },
        children: n
    })
}