/** chunk id: 717187, original params: e,t,n (module,exports,require) **/
n.d(t, {
    y: () => u
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(349435),
    a = n(178186),
    s = n(617641),
    o = n(937624),
    d = n(985018);

function u(e) {
    let t = (0, o.P)(e),
        n = (0, s.Lc)({
            location: "inappropriate_conversation_context_menu"
        });
    if (null === t || !n) return null;
    let {
        isTier1: u,
        isTier2: c
    } = t;
    return (0, i.jsxs)(i.Fragment, {
        children: [!u && (0, i.jsx)(r.Drp, {
            id: "mark-as-tier-1-inappro",
            label: d.intl.string(d.t.EuzCET),
            action: () => (0, a.Rw)(e.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_1)
        }), !c && (0, i.jsx)(r.Drp, {
            id: "mark-as-tier-2-inappro",
            label: d.intl.string(d.t["tBw/1i"]),
            action: () => (0, a.Rw)(e.id, l._j.INAPPROPRIATE_CONVERSATION_TIER_2)
        })]
    })
}