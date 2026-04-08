/** chunk id: 567951 params = (module,exports,require) **/
a.d(t, {
    y: () => d
});
var n = a(627968);
a(64700);
var r = a(158954),
    l = a(457417),
    s = a(199029),
    o = a(254608),
    i = a(137508),
    c = a(674547),
    u = a(985018);
let d = e => {
    let {
        transitionState: t,
        onClose: a
    } = e, {
        send: d,
        sending: _,
        canSend: h
    } = (0, l.Vw)();
    return (0, n.jsx)(r.Modal, {
        title: u.intl.string(c.default.zgFs8C),
        actions: [{
            variant: "primary",
            text: u.intl.string(u.t.TXNS7S),
            onClick: d,
            loading: _,
            disabled: !h()
        }],
        transitionState: t,
        onClose: a,
        input: (0, n.jsx)(o.l, {}),
        actionBarInput: (0, n.jsx)(i.t, {}),
        children: (0, n.jsx)(s.o, {})
    })
}