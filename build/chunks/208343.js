/** chunk id: 208343, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
});
var r = n(311907),
    l = n(531685),
    i = n(3137);

function a(e) {
    let t = (0, r.bG)([l.A], () => l.A.isFocused());
    return (0, r.bG)([i.A], () => i.A.isEnabled({
        shakeLocation: e
    }) && t ? i.A.shakeIntensity : 0)
}