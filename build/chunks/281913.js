/** chunk id: 281913 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(139033),
    l = n(73153),
    a = n(272355),
    r = n(985018);
class s extends a.A {
    _initialize() {
        l.h.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
    }
    _terminate() {
        l.h.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, i.A)({
            title: r.intl.string(r.t.wDQgnX),
            subtitle: r.intl.string(r.t.OJklbS)
        })
    }
}
let o = new s