/** chunk id: 157432, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(989985),
    s = n(226698),
    o = n(641131),
    c = n(985018),
    u = n(272806);
let d = e => {
    let {
        channelId: t
    } = e, n = r.useCallback(() => {
        s.A.reopenModReport(t)
    }, [t]);
    return (0, l.jsx)(a._, {
        bannerHeader: (0, l.jsx)(i.Text, {
            variant: "text-md/medium",
            color: "text-muted",
            children: c.intl.string(o.default["0eUUeF"])
        }),
        headerStyles: u.U,
        containerStyles: u.c,
        children: (0, l.jsx)(i.Button, {
            variant: "secondary",
            size: "sm",
            text: c.intl.string(o.default["6quCi9"]),
            onClick: n
        })
    })
}