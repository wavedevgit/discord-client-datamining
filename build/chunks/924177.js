/** chunk id: 924177, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var l = n(311907),
    r = n(961350),
    i = n(3137),
    a = n(559908);

function s(e, t) {
    return e === t || (null == e ? void 0 : e.channelId) === (null == t ? void 0 : t.channelId) && (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) && (null == e ? void 0 : e.multiplier) === (null == t ? void 0 : t.multiplier)
}

function o(e) {
    let t = (0, l.bG)([i.A], () => !!i.A.isEnabled() && i.A.combosEnabled);
    return (0, l.bG)([a.Ay, r.default], () => t ? a.Ay.getUserCombo(r.default.getId(), e) : void 0, [e, t], s)
}