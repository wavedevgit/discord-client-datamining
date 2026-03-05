/** chunk id: 33852 params = (module,exports,require) **/
i.d(e, {
    A: () => d
});
var n = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    s = i(882997),
    a = i(962173),
    o = i(985018);

function d(t) {
    let {
        platform: e,
        variant: i = "secondary",
        size: d = "sm",
        onAction: u,
        icon: c,
        ...m
    } = t;
    return (0, l.bG)([a.A], () => a.A.getAccounts().some(t => t.type === e.type)) ? null : (0, n.jsx)(r.Button, {
        onClick: () => {
            u?.(), (0, s.A)({
                platformType: e.type,
                location: "Activity Action"
            })
        },
        variant: i,
        size: d,
        icon: c,
        text: o.intl.format(o.t.XWSHTb, {
            platform: e.name
        }),
        fullWidth: !0,
        ...m
    })
}