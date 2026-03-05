/** chunk id: 963169, original params: e,t,n (module,exports,require) **/
n.d(t, {
    MS: () => d,
    OE: () => u,
    Qb: () => _
});
var i = n(73153),
    a = n(824865),
    r = n(976860),
    l = n(954571),
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
    if (!(0, r.TX)()) return;
    if (l.default.track(c.HAw.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: -1,
            nav_trigger: e
        }), !(0, s.v)({
            location: "navigatingBackForward"
        })) return void(0, r.aX)();
    let t = o.A.backDestination;
    null != t && (0, r.pX)(t.path, {
        source: a.A.USER_NAVIGATED_BACK
    })
}

function _(e) {
    if (!(0, r.TX)()) return;
    if (l.default.track(c.HAw.APP_BACK_FORWARD_NAVIGATED, {
            nav_direction: 1,
            nav_trigger: e
        }), !(0, s.v)({
            location: "navigatingBackForward"
        })) return void(0, r.sY)();
    let t = o.A.forwardDestination;
    null != t && (0, r.pX)(t.path, {
        source: a.A.USER_NAVIGATED_FORWARD
    })
}