/** chunk id: 799808 params = (module,exports,require) **/
"use strict";
i.d(t, {
    AE: () => a,
    Mw: () => l,
    j_: () => r
});
var n = i(73153),
    s = i(157257);

function a(e) {
    return !e.isPreviewingInGame && !e.locked || e.pinned
}

function l(e, t, i) {
    (e.locked !== t.locked || e.pinned !== t.pinned || i(e) !== i(t) || a(e) !== a(t)) && r(t, i(t))
}

function r(e, t) {
    let i = a(e),
        l = s.A.getGame();
    n.h.dispatch({
        type: "OVERLAY_WIDGET_CHANGED",
        gameName: l?.name ?? null,
        gameId: l?.id ?? null,
        widgetType: e.widget,
        visible: i && t,
        locked: e.locked,
        pinned: e.pinned
    })
}