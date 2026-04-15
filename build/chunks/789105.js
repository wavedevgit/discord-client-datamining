/** chunk id: 789105 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(73153),
    l = n(272355),
    a = n(422258);

function r(e) {
    let {
        channel: {
            id: t
        }
    } = e;
    (0, a.i_)(t, {
        trackAnalytics: !1
    })
}
class s extends l.A {
    _initialize() {
        i.h.subscribe("CHANNEL_DELETE", r)
    }
    _terminate() {
        i.h.unsubscribe("CHANNEL_DELETE", r)
    }
}
let o = new s