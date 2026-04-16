/** chunk id: 636441 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(627968);
n(64700);
var c = n(397927),
    i = n(985018),
    r = n(561920);

function s(e) {
    let t, {
            transitionState: n,
            guild: s,
            guildBoostQuantity: d,
            isTransfer: l,
            graphic: o,
            onClose: b
        } = e,
        u = s?.name;
    t = l ? null == u ? i.intl.format(i.t.mYRfYx, {}) : i.intl.format(i.t["Ps/5bb"], {
        guildName: u
    }) : null == u ? i.intl.format(i.t["4fw/T2"], {
        guildSubscriptionQuantity: d
    }) : i.intl.format(i.t.IeFTQu, {
        guildName: u,
        guildSubscriptionQuantity: d
    });
    let p = l ? i.intl.string(i.t["5uYZHN"]) : i.intl.string(i.t.mpb7t3),
        f = [{
            variant: "primary",
            text: i.intl.string(i.t["/iTxgz"]),
            onClick: b
        }];
    return (0, a.jsx)(c.kpP, {
        transitionState: n,
        onClose: b,
        graphic: o,
        title: p,
        actions: f,
        children: (0, a.jsx)(c.Text, {
            variant: "text-md/normal",
            className: r.x,
            children: t
        })
    })
}