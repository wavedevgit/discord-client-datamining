/** chunk id: 914430 params = (module,exports,require) **/
n.d(e, {
    Al: () => d,
    Gv: () => l,
    fh: () => a,
    rZ: () => r
});
var i = n(73153);

function l(t) {
    i.h.dispatch({
        type: "CATEGORY_COLLAPSE",
        id: t
    })
}

function a(t) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND",
        id: t
    })
}

function r(t) {
    i.h.dispatch({
        type: "CATEGORY_COLLAPSE_ALL",
        guildId: t
    })
}

function d(t) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND_ALL",
        guildId: t
    })
}