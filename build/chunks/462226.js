/** chunk id: 462226 params = (module,exports,require) **/
n.d(e, {
    A: () => u
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(626584),
    s = n(833349),
    a = n(652215),
    o = n(985018);

function u(t) {
    let {
        activity: e,
        user: n,
        variant: u = "secondary",
        onAction: d,
        ...c
    } = t;
    return (0, s.A)(e, a.jUm.INSTANCE) ? (0, i.jsx)(l.Button, {
        text: o.intl.string(o.t.vwl1PK),
        variant: u,
        size: "sm",
        onClick: () => {
            d?.(), new r.A("UserActivityActions").log("notify", n.id, e)
        },
        fullWidth: !0,
        ...c
    }) : null
}