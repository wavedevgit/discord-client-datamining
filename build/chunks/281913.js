/** chunk id: 281913 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(139033),
    l = n(73153),
    r = n(272355),
    a = n(985018);
class s extends r.A {
    _initialize() {
        l.h.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
    }
    _terminate() {
        l.h.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, i.A)({
            title: a.intl.string(a.t.wDQgnX),
            subtitle: a.intl.string(a.t.OJklbS)
        })
    }
}
let o = new s