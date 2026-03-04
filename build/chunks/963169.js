/** chunk id: 963169, original params: e,t,n (module,exports,require) **/
n.d(t, {
    MS: () => d,
    OE: () => u,
    Qb: () => h
});
var i = n(73153),
    r = n(824865),
    l = n(976860),
    a = n(954571),
    s = n(545167),
    o = n(729904),
    c = n(652215);

function d(e, t) {
    i.h.dispatch({
        type: "ROUTE_CHANGED",
        location: e,
        action: t
    })
}

function u(e) {
    if (!(0, l.TX)()) return;
    if (a.default.track(c.HAw.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: -1,
            nav_trigger: e
        }), !(0, s.v)({
            location: "navigatingBackForward"
        })) return void(0, l.aX)();
    let t = o.A.backDestination;
    null != t && (0, l.pX)(t.path, {
        source: r.A.USER_NAVIGATED_BACK
    })
}

function h(e) {
    if (!(0, l.TX)()) return;
    if (a.default.track(c.HAw.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: 1,
            nav_trigger: e
        }), !(0, s.v)({
            location: "navigatingBackForward"
        })) return void(0, l.sY)();
    let t = o.A.forwardDestination;
    null != t && (0, l.pX)(t.path, {
        source: r.A.USER_NAVIGATED_FORWARD
    })
}