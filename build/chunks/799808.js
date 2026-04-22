/** chunk id: 799808 params = (module,exports,require) **/
n.d(t, {
    AE: () => s,
    Mw: () => a,
    j_: () => r
});
var i = n(73153),
    l = n(157257);

function s(e) {
    return !e.isPreviewingInGame && !e.locked || e.pinned
}

function a(e, t, n) {
    (e.locked !== t.locked || e.pinned !== t.pinned || n(e) !== n(t) || s(e) !== s(t)) && r(t, n(t))
}

function r(e, t) {
    let n = s(e),
        a = l.A.getGame();
    i.h.dispatch({
        type: "OVERLAY_WIDGET_CHANGED",
        gameName: a?.name ?? null,
        gameId: a?.id ?? null,
        widgetType: e.widget,
        visible: n && t,
        locked: e.locked,
        pinned: e.pinned
    })
}