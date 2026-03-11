/** chunk id: 717187 params = (module,exports,require) **/
i.d(e, {
    y: () => c
});
var t = i(627968);
i(64700);
var r = i(397927),
    l = i(349435),
    a = i(178186),
    d = i(617641),
    s = i(937624),
    u = i(985018);

function c(n) {
    let e = (0, s.P)(n),
        i = (0, d.Lc)({
            location: "inappropriate_conversation_context_menu"
        });
    if (null === e || !i) return null;
    let {
        isTier1: c,
        isTier2: o
    } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [!c && (0, t.jsx)(r.Drp, {
            id: "mark-as-tier-1-inappro",
            label: u.intl.string(u.t.EuzCET),
            action: () => (0, a.Rw)(n.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_1)
        }), !o && (0, t.jsx)(r.Drp, {
            id: "mark-as-tier-2-inappro",
            label: u.intl.string(u.t["tBw/1i"]),
            action: () => (0, a.Rw)(n.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_2)
        })]
    })
}