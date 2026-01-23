/** Chunk was on 97492 **/
/** chunk id: 195007, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(588224),
    a = n(607567),
    o = n(652215),
    c = n(985018),
    u = n(911855);

function d(e) {
    let {
        channel: t
    } = e, n = (0, l.bG)([a.Ay], () => a.Ay.getVoiceStatesForChannel(t));
    return (0, r.jsxs)("div", {
        className: u.zr,
        children: [(0, r.jsx)(i.Text, {
            variant: "text-xs/bold",
            className: u.wx,
            children: c.intl.format(c.t.e95u3C, {
                count: n.length
            })
        }), (0, r.jsx)(i.HOs, {
            className: u.XG,
            children: (0, r.jsx)(s.A, {
                allowDragging: !1,
                allowPreviews: !1,
                className: u.Xk,
                channel: t,
                voiceStates: n,
                collapsed: !1,
                location: o.ThZ.CHANNEL_CALL
            })
        })]
    })
}