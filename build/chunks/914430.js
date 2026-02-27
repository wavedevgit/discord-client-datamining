/** chunk id: 914430, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Al: () => l,
    Gv: () => r,
    fh: () => i,
    rZ: () => s
});
var a = n(73153);

function r(e) {
    a.h.dispatch({
        type: "CATEGORY_COLLAPSE",
        id: e
    })
}

function i(e) {
    a.h.dispatch({
        type: "CATEGORY_EXPAND",
        id: e
    })
}

function s(e) {
    a.h.dispatch({
        type: "CATEGORY_COLLAPSE_ALL",
        guildId: e
    })
}

function l(e) {
    a.h.dispatch({
        type: "CATEGORY_EXPAND_ALL",
        guildId: e
    })
}