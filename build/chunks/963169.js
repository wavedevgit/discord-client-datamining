/** chunk id: 963169 params = (module,exports,require) **/
i.d(e, {
    MS: () => a,
    OE: () => o,
    Qb: () => c
});
var n = i(73153),
    r = i(976860),
    l = i(954571),
    s = i(652215);

function a() {
    n.h.dispatch({
        type: "ROUTE_CHANGED"
    })
}

function o(t) {
    (0, r.TX)() && (l.default.track(s.HAw.APP_BACK_FORWARD_NAVIGATED, {
        nav_direction: -1,
        nav_trigger: t
    }), (0, r.aX)())
}

function c(t) {
    (0, r.TX)() && (l.default.track(s.HAw.APP_BACK_FORWARD_NAVIGATED, {
        nav_direction: 1,
        nav_trigger: t
    }), (0, r.sY)())
}