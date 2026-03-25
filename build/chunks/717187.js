/** chunk id: 717187 params = (module,exports,require) **/
t.d(n, {
    y: () => c
});
var i = t(627968);
t(64700);
var r = t(397927),
    l = t(349435),
    d = t(178186),
    a = t(617641),
    s = t(937624),
    u = t(985018);

function c(e) {
    let n = (0, s.P)(e),
        t = (0, a.Lc)({
            location: "inappropriate_conversation_context_menu"
        });
    if (null === n || !t) return null;
    let {
        isTier1: c,
        isTier2: o
    } = n;
    return (0, i.jsxs)(i.Fragment, {
        children: [!c && (0, i.jsx)(r.Drp, {
            id: "mark-as-tier-1-inappro",
            label: u.intl.string(u.t.EuzCET),
            action: () => (0, d.Rw)(e.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_1)
        }), !o && (0, i.jsx)(r.Drp, {
            id: "mark-as-tier-2-inappro",
            label: u.intl.string(u.t["tBw/1i"]),
            action: () => (0, d.Rw)(e.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_2)
        })]
    })
}