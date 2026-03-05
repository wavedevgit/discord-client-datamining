/** chunk id: 462226, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => d
});
var n = i(627968);
i(64700);
var l = i(397927),
    r = i(626584),
    s = i(833349),
    a = i(652215),
    o = i(985018);

function d(t) {
    let {
        activity: e,
        user: i,
        variant: d = "secondary",
        onAction: u,
        ...c
    } = t;
    return (0, s.A)(e, a.jUm.INSTANCE) ? (0, n.jsx)(l.Button, {
        text: o.intl.string(o.t.vwl1PK),
        variant: d,
        size: "sm",
        onClick: () => {
            u?.(), new r.A("UserActivityActions").log("notify", i.id, e)
        },
        fullWidth: !0,
        ...c
    }) : null
}