/** chunk id: 914430, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Al: () => o,
    Gv: () => r,
    fh: () => l,
    rZ: () => a
});
var i = n(73153);

function r(e) {
    i.h.dispatch({
        type: "CATEGORY_COLLAPSE",
        id: e
    })
}

function l(e) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND",
        id: e
    })
}

function a(e) {
    i.h.dispatch({
        type: "CATEGORY_COLLAPSE_ALL",
        guildId: e
    })
}

function o(e) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND_ALL",
        guildId: e
    })
}