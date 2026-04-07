/** chunk id: 33852 params = (module,exports,require) **/
n.d(e, {
    A: () => u
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    s = n(882997),
    a = n(962173),
    o = n(985018);

function u(t) {
    let {
        platform: e,
        variant: n = "secondary",
        size: u = "sm",
        onAction: d,
        icon: c,
        ...h
    } = t;
    return (0, l.bG)([a.A], () => a.A.getAccounts().some(t => t.type === e.type)) ? null : (0, i.jsx)(r.Button, {
        onClick: () => {
            d?.(), (0, s.A)({
                platformType: e.type,
                location: "Activity Action"
            })
        },
        variant: n,
        size: u,
        icon: c,
        text: o.intl.format(o.t.XWSHTb, {
            platform: e.name
        }),
        fullWidth: !0,
        ...h
    })
}