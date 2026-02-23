/** chunk id: 405311, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968),
    i = n(311907),
    s = n(397927),
    l = n(576470),
    r = n(99753),
    o = n(693879),
    d = n(424994);

function c() {
    let e = (0, i.bG)([r.A], () => r.A.getFeed(d.X1.GLOBAL_FEED)?.refresh_stale_inbox_after_ms != null),
        {
            loading: t,
            nextFetchDate: n
        } = (0, i.cf)([r.A], () => r.A.getFeedState(d.X1.GLOBAL_FEED) ?? {
            loading: !1
        }),
        c = (0, i.bG)([r.A], () => r.A.getLastFeedFetchDate(d.X1.GLOBAL_FEED));
    return (0, a.jsxs)("div", {
        children: [t ? (0, a.jsx)(s.Text, {
            variant: "text-md/normal",
            children: "(fetching)"
        }) : (0, a.jsxs)(s.Text, {
            variant: "text-md/normal",
            children: ["Next fetch: ", null != n ? (0, a.jsx)(l.A, {
                deadline: n
            }) : e ? "(awaiting push)" : "(unscheduled)"]
        }), (0, a.jsxs)(s.Text, {
            variant: "text-md/normal",
            children: ["Last fetch:", " ", null != c ? (0, a.jsx)(o.z, {
                inline: !0,
                entry: {
                    start: c.getTime()
                }
            }) : "(never)"]
        })]
    })
}