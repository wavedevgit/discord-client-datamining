/** chunk id: 33852 params = (module,exports,require) **/
i.d(t, {
    A: () => c
});
var n = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(882997),
    r = i(962173),
    o = i(985018);

function c(e) {
    let {
        platform: t,
        variant: i = "secondary",
        size: c = "sm",
        onAction: d,
        icon: u,
        ...m
    } = e;
    return (0, a.bG)([r.A], () => r.A.getAccounts().some(e => e.type === t.type)) ? null : (0, n.jsx)(l.Button, {
        onClick: () => {
            d?.(), (0, s.A)({
                platformType: t.type,
                location: "Activity Action"
            })
        },
        variant: i,
        size: c,
        icon: u,
        text: o.intl.format(o.t.XWSHTb, {
            platform: t.name
        }),
        fullWidth: !0,
        ...m
    })
}