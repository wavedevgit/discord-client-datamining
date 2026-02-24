/** chunk id: 789105, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(73153),
    r = n(272355),
    l = n(422258);

function a(e) {
    let {
        channel: {
            id: t
        }
    } = e;
    (0, l.i_)(t)
}
class s extends r.A {
    _initialize() {
        i.h.subscribe("CHANNEL_DELETE", a)
    }
    _terminate() {
        i.h.unsubscribe("CHANNEL_DELETE", a)
    }
}
let o = new s