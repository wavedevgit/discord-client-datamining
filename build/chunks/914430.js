/** chunk id: 914430 params = (module,exports,require) **/
e.d(t, {
    Al: () => s,
    Gv: () => l,
    fh: () => a,
    rZ: () => r
});
var i = e(73153);

function l(n) {
    i.h.dispatch({
        type: "CATEGORY_COLLAPSE",
        id: n
    })
}

function a(n) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND",
        id: n
    })
}

function r(n) {
    i.h.dispatch({
        type: "CATEGORY_COLLAPSE_ALL",
        guildId: n
    })
}

function s(n) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND_ALL",
        guildId: n
    })
}