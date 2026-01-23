/** Chunk was on 45199 **/
/** chunk id: 310482, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => u
}), n(896048);
var a = n(627968),
    i = n(64700),
    r = n(732955),
    l = n(397927),
    o = n(985018),
    s = n(945280);

function u(t) {
    let {
        onConfirm: e,
        onClose: n,
        guildName: u,
        transitionState: c
    } = t, [m, p] = i.useState(""), [d, x] = i.useState(null), f = i.useMemo(() => [{
        text: o.intl.string(o.t["ETE/oC"]),
        onClick: n,
        variant: "secondary"
    }, {
        text: o.intl.string(o.t.l3hWP6),
        variant: "critical-primary",
        type: "submit"
    }], [n]);
    return (0, a.jsx)("form", {
        onSubmit: function(t) {
            (t.preventDefault(), m.toLowerCase() !== u.toLowerCase()) ? x(o.intl.string(o.t["c2/DS/"])): (null == e || e(), n())
        },
        children: (0, a.jsxs)(r.aFV, {
            title: o.intl.formatToPlainString(o.t.us7mC1, {
                name: u
            }),
            subtitle: o.intl.format(o.t["Zuo+Vd"], {
                name: u
            }),
            actions: f,
            onClose: n,
            transitionState: c,
            children: [(0, a.jsx)(l.ksK, {
                id: "text-entry-confirm",
                type: "text",
                label: o.intl.string(o.t.abprOC),
                value: m,
                autoComplete: "off",
                onChange: p,
                autoFocus: !0
            }), null != d && "" !== d ? (0, a.jsx)(l.Text, {
                color: "text-feedback-critical",
                variant: "text-xs/normal",
                className: s.z,
                children: d
            }) : null]
        })
    })
}