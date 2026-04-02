/** chunk id: 394727 params = (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(323874), n(14289), n(35956);
var i = n(64700),
    l = n(311907),
    a = n(157559),
    r = n(308528),
    s = n(793574),
    o = n(688810),
    d = n(429913),
    c = n(976860),
    u = n(287809),
    A = n(956549),
    h = n(257269),
    _ = n(985018);

function m(e) {
    let {
        match: t
    } = e, n = (0, c.UC)() ?? [], {
        analyticsLocations: m
    } = (0, o.Ay)([...n, s.A.ACTIVITY_DETAIL_PAGE]), {
        applicationId: p
    } = t.params, [g] = (0, d.A)([p]), E = g?.bot?.id, I = (0, l.bG)([u.default], () => u.default.getCurrentUser());
    return i.useEffect(() => {
        null != E && null != I && (async () => {
            try {
                let e = new URL(location.href),
                    t = await r.A.openPrivateChannel({
                        recipientIds: E
                    }),
                    n = e.searchParams.get("referrer_id") ?? void 0,
                    {
                        customId: i
                    } = await (0, h.d9)(p, e.searchParams.get("link_id"), e.searchParams.get("custom_id"));
                await (0, A.A)({
                    targetApplicationId: p,
                    channelId: t,
                    analyticsLocations: m,
                    customId: i,
                    referrerId: n
                })
            } catch (e) {}
        })()
    }, [m, p, E, I]), i.useEffect(() => {
        let e = setTimeout(() => {
            null == E && a.A.show({
                title: _.intl.string(_.t.PtobXW),
                body: _.intl.string(_.t["IOy+I5"])
            })
        }, 5e3);
        return () => {
            clearTimeout(e)
        }
    }, [E]), null
}