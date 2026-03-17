/** chunk id: 194894 params = (module,exports,require) **/
n.d(t, {
    n9: () => r,
    pU: () => l,
    vt: () => a
});
var i = n(73153);

function a(e, t) {
    i.h.dispatch({
        type: "LIBRARY_TABLE_SORT_UPDATE",
        key: e,
        direction: t
    })
}

function r(e) {
    i.h.dispatch({
        type: "LIBRARY_APPLICATION_FILTER_UPDATE",
        query: e
    })
}

function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    i.h.dispatch({
        type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE",
        key: e,
        isKeyboardEvent: t
    })
}