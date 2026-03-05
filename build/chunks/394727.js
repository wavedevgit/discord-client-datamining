/** chunk id: 394727, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(323874), n(14289), n(35956);
var i = n(64700),
    r = n(311907),
    l = n(157559),
    a = n(308528),
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
        applicationId: g
    } = t.params, [p] = (0, d.A)([g]), E = p?.bot?.id, I = (0, r.bG)([u.default], () => u.default.getCurrentUser());
    return i.useEffect(() => {
        null != E && null != I && (async () => {
            try {
                let e = new URL(location.href),
                    t = await a.A.openPrivateChannel({
                        recipientIds: E
                    }),
                    n = e.searchParams.get("referrer_id") ?? void 0,
                    {
                        customId: i
                    } = await (0, h.d9)(g, e.searchParams.get("link_id"), e.searchParams.get("custom_id"));
                await (0, A.A)({
                    targetApplicationId: g,
                    channelId: t,
                    analyticsLocations: m,
                    customId: i,
                    referrerId: n
                })
            } catch (e) {}
        })()
    }, [m, g, E, I]), i.useEffect(() => {
        let e = setTimeout(() => {
            null == E && l.A.show({
                title: _.intl.string(_.t.PtobXW),
                body: _.intl.string(_.t["IOy+I5"])
            })
        }, 5e3);
        return () => {
            clearTimeout(e)
        }
    }, [E]), null
}