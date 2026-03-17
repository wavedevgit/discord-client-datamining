/** chunk id: 281913 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(139033),
    a = n(73153),
    r = n(272355),
    l = n(985018);
class s extends r.A {
    _initialize() {
        a.h.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
    }
    _terminate() {
        a.h.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, i.A)({
            title: l.intl.string(l.t.wDQgnX),
            subtitle: l.intl.string(l.t.OJklbS)
        })
    }
}
let o = new s