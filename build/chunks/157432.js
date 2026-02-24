/** chunk id: 157432, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(989985),
    r = n(226698),
    o = n(641131),
    c = n(985018),
    d = n(272806);
let u = e => {
    let {
        channelId: t
    } = e, n = l.useCallback(() => {
        r.A.reopenModReport(t)
    }, [t]);
    return (0, i.jsx)(a._, {
        bannerHeader: (0, i.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            children: c.intl.string(o.default["0eUUeF"])
        }),
        headerStyles: d.U,
        containerStyles: d.c,
        children: (0, i.jsx)(s.Button, {
            variant: "secondary",
            size: "sm",
            text: c.intl.string(o.default["6quCi9"]),
            onClick: n
        })
    })
}