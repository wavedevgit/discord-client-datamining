/** Chunk was on 70232 **/
/** chunk id: 242273, original params: t,e,r (module,exports,require) **/
r.d(e, {
    A: () => s
}), r(228524), r(896048);
var n = r(627968),
    a = r(64700),
    i = r(158954),
    o = r(397927),
    c = r(985018),
    l = r(285553);

function s(t) {
    let {
        errorText: e,
        title: r,
        description: s,
        transitionState: u,
        onCancel: b,
        onConfirm: d,
        children: p
    } = t, [y, f] = a.useState(!1), _ = a.useCallback(async () => {
        f(!0);
        try {
            await d()
        } catch (t) {
            throw t
        } finally {
            f(!1)
        }
    }, [d]);
    return (0, n.jsxs)(i.Modal, {
        transitionState: u,
        onClose: b,
        title: r,
        subtitle: s,
        actions: [{
            text: c.intl.string(c.t["ETE/oC"]),
            variant: "secondary",
            onClick: b
        }, {
            text: c.intl.string(c.t["R3BPH+"]),
            onClick: _,
            variant: "primary",
            loading: y
        }],
        children: [p, null != e && "" !== e ? (0, n.jsx)(o.Text, {
            className: l.kc,
            variant: "text-xs/normal",
            color: "text-feedback-critical",
            children: e
        }) : null]
    })
}