/** chunk id: 582223, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var l = n(311907),
    r = n(961350),
    i = n(741961),
    a = n(3137),
    s = n(559908),
    o = n(208343),
    c = n(31408);

function u(e) {
    let t = (0, o.A)(c.uD.CHAT_INPUT),
        n = (0, l.bG)([a.A], () => a.A.isEnabled({
            shakeLocation: c.uD.CHAT_INPUT
        }));
    return (0, l.bG)([i.A, s.Ay, r.default], () => n && i.A.isTyping(e, r.default.getId()) ? s.Ay.getUserComboShakeIntensity(r.default.getId(), e, t) : 0)
}