/** chunk id: 242273 params = (module,exports,require) **/
a.d(e, {
    A: () => c
});
var n = a(627968),
    i = a(64700),
    r = a(158954),
    l = a(397927),
    o = a(985018),
    s = a(33855);

function c(t) {
    let {
        errorText: e,
        title: a,
        description: c,
        transitionState: d,
        onCancel: u,
        onConfirm: _,
        children: b
    } = t, [p, C] = i.useState(!1), g = i.useCallback(async () => {
        C(!0);
        try {
            await _()
        } catch (t) {
            throw t
        } finally {
            C(!1)
        }
    }, [_]);
    return (0, n.jsxs)(r.Modal, {
        transitionState: d,
        onClose: u,
        title: a,
        subtitle: c,
        actions: [{
            text: o.intl.string(o.t["ETE/oC"]),
            variant: "secondary",
            onClick: u
        }, {
            text: o.intl.string(o.t["R3BPH+"]),
            onClick: g,
            variant: "primary",
            loading: p
        }],
        children: [b, null != e && "" !== e ? (0, n.jsx)(l.Text, {
            className: s.kc,
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            children: e
        }) : null]
    })
}