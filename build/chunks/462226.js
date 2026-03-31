/** chunk id: 462226 params = (module,exports,require) **/
i.d(t, {
    A: () => c
});
var n = i(627968);
i(64700);
var a = i(397927),
    l = i(626584),
    s = i(833349),
    r = i(652215),
    o = i(985018);

function c(e) {
    let {
        activity: t,
        user: i,
        variant: c = "secondary",
        onAction: d,
        ...u
    } = e;
    return (0, s.A)(t, r.jUm.INSTANCE) ? (0, n.jsx)(a.Button, {
        text: o.intl.string(o.t.vwl1PK),
        variant: c,
        size: "sm",
        onClick: () => {
            d?.(), new l.A("UserActivityActions").log("notify", i.id, t)
        },
        fullWidth: !0,
        ...u
    }) : null
}