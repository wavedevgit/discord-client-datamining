/** chunk id: 390897, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => d,
    f: () => u
}), n(896048);
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(506774),
    o = n(397927),
    r = n(641131),
    c = n(985018);
let u = "report_to_mod_dont_show_resolve_confirm";

function d(t) {
    let {
        transitionState: e,
        onClose: n,
        handleResolveFlag: d
    } = t, [p, h] = i.useState(!1);
    return (0, a.jsx)(s.Modal, {
        transitionState: e,
        onClose: n,
        title: c.intl.string(r.default["8R4euh"]),
        subtitle: c.intl.string(r.default.xgOraS),
        actions: [{
            text: c.intl.string(r.default.ctefO2),
            onClick: () => {
                p && l.w.set(u, !0), n(), d()
            }
        }],
        actionBarInput: (0, a.jsx)(o.Checkbox, {
            checked: p,
            onChange: t => h(t),
            label: c.intl.string(r.default["3puq5c"]),
            labelType: "secondary"
        })
    })
}