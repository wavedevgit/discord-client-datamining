/** chunk id: 937624 params = (module,exports,require) **/
i.d(e, {
    P: () => s
});
var t = i(311907),
    r = i(287809),
    l = i(349435),
    a = i(617641),
    d = i(452082);
let s = n => {
    let e = (0, a.Lc)({
            location: "context-menu-item"
        }),
        i = (0, t.bG)([r.default], () => r.default.getCurrentUser()),
        s = (0, d.j)(n.id, "context-menu-item");
    return i?.isStaff() === !0 && e && n.isDM() ? {
        isTier1: s?.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1,
        isTier2: s?.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_2
    } : null
}