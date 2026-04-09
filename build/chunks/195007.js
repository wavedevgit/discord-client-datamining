/** chunk id: 195007 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(588224),
    r = n(607567),
    o = n(985018),
    d = n(910338);

function c(e) {
    let {
        channel: t
    } = e, n = (0, l.bG)([r.Ay], () => r.Ay.getVoiceStatesForChannel(t));
    return (0, i.jsxs)("div", {
        className: d.zr,
        children: [(0, i.jsx)(s.Text, {
            variant: "text-xs/bold",
            className: d.wx,
            children: o.intl.format(o.t.e95u3C, {
                count: n.length
            })
        }), (0, i.jsx)(s.HOs, {
            className: d.XG,
            children: (0, i.jsx)(a.A, {
                allowDragging: !1,
                allowPreviews: !1,
                className: d.Xk,
                channel: t,
                voiceStates: n,
                collapsed: !1
            })
        })]
    })
}