/** chunk id: 717187 params = (module,exports,require) **/
t.d(n, {
    y: () => o
});
var r = t(627968);
t(64700);
var i = t(397927),
    l = t(349435),
    a = t(178186),
    d = t(617641),
    s = t(937624),
    u = t(985018);

function o(e) {
    let n = (0, s.P)(e),
        t = (0, d.Lc)({
            location: "inappropriate_conversation_context_menu"
        });
    if (null === n || !t) return null;
    let {
        isTier1: o,
        isTier2: c
    } = n;
    return (0, r.jsxs)(r.Fragment, {
        children: [!o && (0, r.jsx)(i.Drp, {
            id: "mark-as-tier-1-inappro",
            label: u.intl.string(u.t.EuzCET),
            action: () => (0, a.Rw)(e.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_1)
        }), !c && (0, r.jsx)(i.Drp, {
            id: "mark-as-tier-2-inappro",
            label: u.intl.string(u.t["tBw/1i"]),
            action: () => (0, a.Rw)(e.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_2)
        })]
    })
}