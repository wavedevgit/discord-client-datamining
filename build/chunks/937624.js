/** chunk id: 937624 params = (module,exports,require) **/
t.d(n, {
    P: () => s
});
var i = t(311907),
    r = t(287809),
    l = t(349435),
    d = t(617641),
    a = t(452082);
let s = e => {
    let n = (0, d.Lc)({
            location: "context-menu-item"
        }),
        t = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
        s = (0, a.j)(e.id, "context-menu-item");
    return t?.isStaff() === !0 && n && e.isDM() ? {
        isTier1: s?.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_1,
        isTier2: s?.type === l._j.INAPPROPRIATE_CONVERSATION_TIER_2
    } : null
}