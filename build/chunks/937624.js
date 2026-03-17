/** chunk id: 937624 params = (module,exports,require) **/
t.d(e, {
    P: () => s
});
var i = t(311907),
    r = t(287809),
    l = t(349435),
    a = t(617641),
    d = t(452082);
let s = n => {
    let e = (0, a.Lc)({
            location: "context-menu-item"
        }),
        t = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
        s = (0, d.j)(n.id, "context-menu-item");
    return t?.isStaff() === !0 && e && n.isDM() ? {
        isTier1: s?.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1,
        isTier2: s?.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_2
    } : null
}