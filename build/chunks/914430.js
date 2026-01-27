/** Chunk was on 96430 **/
/** chunk id: 914430, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Al: () => o,
    Gv: () => i,
    fh: () => a,
    rZ: () => l
});
var r = n(73153);

function i(t) {
    r.h.dispatch({
        type: "CATEGORY_COLLAPSE",
        id: t
    })
}

function a(t) {
    r.h.dispatch({
        type: "CATEGORY_EXPAND",
        id: t
    })
}

function l(t) {
    r.h.dispatch({
        type: "CATEGORY_COLLAPSE_ALL",
        guildId: t
    })
}

function o(t) {
    r.h.dispatch({
        type: "CATEGORY_EXPAND_ALL",
        guildId: t
    })
}