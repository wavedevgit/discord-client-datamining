/** Chunk was on 83006 **/
/** chunk id: 567951, original params: e,t,r (module,exports,require) **/
r.d(t, {
    y: () => d
});
var n = r(627968);
r(64700);
var a = r(158954),
    l = r(457417),
    o = r(199029),
    s = r(254608),
    i = r(137508),
    c = r(520650),
    u = r(985018);
let d = e => {
    let {
        transitionState: t,
        onClose: r
    } = e, {
        send: d,
        sending: f,
        canSend: p
    } = (0, l.Vw)();
    return (0, n.jsx)(a.Modal, {
        title: u.intl.string(c.default.zgFs8C),
        actions: [{
            variant: "primary",
            text: u.intl.string(u.t.TXNS7S),
            onClick: d,
            loading: f,
            disabled: !p()
        }],
        transitionState: t,
        onClose: r,
        input: (0, n.jsx)(s.l, {}),
        actionBarInput: (0, n.jsx)(i.t, {}),
        children: (0, n.jsx)(o.o, {})
    })
}