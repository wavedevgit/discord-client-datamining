/** chunk id: 914430 params = (module,exports,require) **/
t.d(n, {
    Al: () => d,
    Gv: () => r,
    fh: () => l,
    rZ: () => a
});
var i = t(73153);

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

function d(e) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND_ALL",
        guildId: e
    })
}