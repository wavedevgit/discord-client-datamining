/** chunk id: 937624, original params: e,t,n (module,exports,require) **/
n.d(t, {
    P: () => o
});
var i = n(311907),
    r = n(287809),
    l = n(349435),
    a = n(617641),
    s = n(452082);
let o = e => {
    let t = (0, a.Lc)({
            location: "context-menu-item"
        }),
        n = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
        o = (0, s.j)(e.id, "context-menu-item");
    return (null == n ? void 0 : n.isStaff()) === !0 && t && e.isDM() ? {
        isTier1: (null == o ? void 0 : o.type) === l._j.INAPPROPRIATE_CONVERSATION_TIER_1,
        isTier2: (null == o ? void 0 : o.type) === l._j.INAPPROPRIATE_CONVERSATION_TIER_2
    } : null
}