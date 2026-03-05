/** chunk id: 717187, original params: n,t,e (module,exports,require) **/
e.d(t, {
    y: () => o
});
var i = e(627968);
e(64700);
var r = e(397927),
    l = e(349435),
    a = e(178186),
    d = e(617641),
    s = e(937624),
    u = e(985018);

function o(n) {
    let t = (0, s.P)(n),
        e = (0, d.Lc)({
            location: "inappropriate_conversation_context_menu"
        });
    if (null === t || !e) return null;
    let {
        isTier1: o,
        isTier2: c
    } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [!o && (0, i.jsx)(r.Drp, {
            id: "mark-as-tier-1-inappro",
            label: u.intl.string(u.t.EuzCET),
            action: () => (0, a.Rw)(n.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_1)
        }), !c && (0, i.jsx)(r.Drp, {
            id: "mark-as-tier-2-inappro",
            label: u.intl.string(u.t["tBw/1i"]),
            action: () => (0, a.Rw)(n.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_2)
        })]
    })
}