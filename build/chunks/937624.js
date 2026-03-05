/** chunk id: 937624 params = (module,exports,require) **/
e.d(t, {
    P: () => s
});
var i = e(311907),
    r = e(287809),
    l = e(349435),
    a = e(617641),
    d = e(452082);
let s = n => {
    let t = (0, a.Lc)({
            location: "context-menu-item"
        }),
        e = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
        s = (0, d.j)(n.id, "context-menu-item");
    return e?.isStaff() === !0 && t && n.isDM() ? {
        isTier1: s?.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1,
        isTier2: s?.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_2
    } : null
}