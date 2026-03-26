/** chunk id: 33852 params = (module,exports,require) **/
i.d(t, {
    A: () => d
});
var n = i(627968);
i(64700);
var l = i(311907),
    r = i(397927),
    s = i(882997),
    a = i(962173),
    o = i(985018);

function d(e) {
    let {
        platform: t,
        variant: i = "secondary",
        size: d = "sm",
        onAction: u,
        icon: c,
        ...A
    } = e;
    return (0, l.bG)([a.A], () => a.A.getAccounts().some(e => e.type === t.type)) ? null : (0, n.jsx)(r.Button, {
        onClick: () => {
            u?.(), (0, s.A)({
                platformType: t.type,
                location: "Activity Action"
            })
        },
        variant: i,
        size: d,
        icon: c,
        text: o.intl.format(o.t.XWSHTb, {
            platform: t.name
        }),
        fullWidth: !0,
        ...A
    })
}