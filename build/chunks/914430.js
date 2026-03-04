/** chunk id: 914430, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Al: () => u,
    Gv: () => a,
    fh: () => r,
    rZ: () => l
});
var i = n(73153);

function a(e) {
    i.h.dispatch({
        type: "CATEGORY_COLLAPSE",
        id: e
    })
}

function r(e) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND",
        id: e
    })
}

function l(e) {
    i.h.dispatch({
        type: "CATEGORY_COLLAPSE_ALL",
        guildId: e
    })
}

function u(e) {
    i.h.dispatch({
        type: "CATEGORY_EXPAND_ALL",
        guildId: e
    })
}