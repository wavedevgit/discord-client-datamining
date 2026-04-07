/** chunk id: 914430 params = (module,exports,require) **/
n.d(e, {
    Al: () => a,
    Gv: () => l,
    fh: () => r,
    rZ: () => s
});
var i = n(73153);

function l(t) {
    i.h.dispatch({
        type: "CATEGORY_COLLAPSE",
        id: t
    })
}

function r(t) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND",
        id: t
    })
}

function s(t) {
    i.h.dispatch({
        type: "CATEGORY_COLLAPSE_ALL",
        guildId: t
    })
}

function a(t) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND_ALL",
        guildId: t
    })
}