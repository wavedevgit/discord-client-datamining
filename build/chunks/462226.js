/** chunk id: 462226 params = (module,exports,require) **/
i.d(t, {
    A: () => d
});
var n = i(627968);
i(64700);
var l = i(397927),
    r = i(626584),
    s = i(833349),
    a = i(652215),
    o = i(985018);

function d(e) {
    let {
        activity: t,
        user: i,
        variant: d = "secondary",
        onAction: u,
        ...c
    } = e;
    return (0, s.A)(t, a.jUm.INSTANCE) ? (0, n.jsx)(l.Button, {
        text: o.intl.string(o.t.vwl1PK),
        variant: d,
        size: "sm",
        onClick: () => {
            u?.(), new r.A("UserActivityActions").log("notify", i.id, t)
        },
        fullWidth: !0,
        ...c
    }) : null
}