/** chunk id: 937624 params = (module,exports,require) **/
t.d(n, {
    P: () => s
});
var r = t(311907),
    i = t(287809),
    l = t(349435),
    a = t(617641),
    d = t(452082);
let s = e => {
    let n = (0, a.Lc)({
            location: "context-menu-item"
        }),
        t = (0, r.bG)([i.default], () => i.default.getCurrentUser()),
        s = (0, d.j)(e.id, "context-menu-item");
    return t?.isStaff() === !0 && n && e.isDM() ? {
        isTier1: s?.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1,
        isTier2: s?.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_2
    } : null
}