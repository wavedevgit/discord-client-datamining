/** chunk id: 281913 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(139033),
    a = n(73153),
    l = n(272355),
    r = n(985018);
class s extends l.A {
    _initialize() {
        a.h.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
    }
    _terminate() {
        a.h.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, i.A)({
            title: r.intl.string(r.t.wDQgnX),
            subtitle: r.intl.string(r.t.OJklbS)
        })
    }
}
let o = new s