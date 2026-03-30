/** chunk id: 914430 params = (module,exports,require) **/
"use strict";
n.d(t, {
    Al: () => l,
    Gv: () => r,
    fh: () => a,
    rZ: () => o
});
var i = n(73153);

function r(e) {
    i.h.dispatch({
        type: "CATEGORY_COLLAPSE",
        id: e
    })
}

function a(e) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND",
        id: e
    })
}

function o(e) {
    i.h.dispatch({
        type: "CATEGORY_COLLAPSE_ALL",
        guildId: e
    })
}

function l(e) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND_ALL",
        guildId: e
    })
}