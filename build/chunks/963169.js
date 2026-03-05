/** chunk id: 963169 params = (module,exports,require) **/
n.d(t, {
    MS: () => s,
    OE: () => o,
    Qb: () => c
});
var i = n(73153),
    a = n(976860),
    r = n(954571),
    l = n(652215);

function s() {
    i.h.dispatch({
        type: "ROUTE_CHANGED"
    })
}

function o(e) {
    (0, a.TX)() && (r.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, {
        nav_direction: -1,
        nav_trigger: e
    }), (0, a.aX)())
}

function c(e) {
    (0, a.TX)() && (r.default.track(l.HAw.APP_BACK_FORWARD_NAVIGATED, {
        nav_direction: 1,
        nav_trigger: e
    }), (0, a.sY)())
}