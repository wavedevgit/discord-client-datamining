/** chunk id: 924177, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    l = n(961350),
    s = n(3137),
    a = n(559908);

function r(e, t) {
    return e === t || e?.channelId === t?.channelId && e?.value === t?.value && e?.multiplier === t?.multiplier
}

function o(e) {
    let t = (0, i.bG)([s.A], () => !!s.A.isEnabled() && s.A.combosEnabled);
    return (0, i.bG)([a.Ay, l.default], () => t ? a.Ay.getUserCombo(l.default.getId(), e) : void 0, [e, t], r)
}