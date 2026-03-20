/** chunk id: 789105 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(73153),
    a = n(272355),
    l = n(422258);

function r(e) {
    let {
        channel: {
            id: t
        }
    } = e;
    (0, l.i_)(t, {
        trackAnalytics: !1
    })
}
class s extends a.A {
    _initialize() {
        i.h.subscribe("CHANNEL_DELETE", r)
    }
    _terminate() {
        i.h.unsubscribe("CHANNEL_DELETE", r)
    }
}
let o = new s