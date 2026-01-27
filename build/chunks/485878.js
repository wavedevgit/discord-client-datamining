/** Chunk was on web.js **/
/** chunk id: 485878, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    L8: () => a,
    Wy: () => i,
    uM: () => o
});
var r = n(64700),
    i = function(e) {
        return e.HOME = "home", e.LIST = "list", e.APPLICATION = "application", e
    }({});
let a = r.createContext({
    history: [],
    discard: {},
    currentView: void 0,
    pushHistory: () => {},
    goBack: () => {},
    getMostRecentHistoryItemByType: () => void 0,
    isSlideReady: !1,
    setSlideReady: () => {}
});

function o() {
    return r.useContext(a)
}