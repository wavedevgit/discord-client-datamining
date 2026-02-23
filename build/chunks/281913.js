/** chunk id: 281913, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(139033),
    r = n(73153),
    l = n(272355),
    a = n(985018);
class s extends l.A {
    _initialize() {
        r.h.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
    }
    _terminate() {
        r.h.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled)
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, i.A)({
            title: a.intl.string(a.t.wDQgnX),
            subtitle: a.intl.string(a.t.OJklbS)
        })
    }
}
let o = new s