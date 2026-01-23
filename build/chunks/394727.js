/** Chunk was on 21738 **/
/** chunk id: 394727, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(747238), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956);
var r = n(64700),
    i = n(311907),
    l = n(157559),
    a = n(308528),
    s = n(793574),
    o = n(688810),
    c = n(429913),
    u = n(976860),
    d = n(287809),
    p = n(956549),
    h = n(257269),
    g = n(985018);

function f(e) {
    var t, n;
    let {
        match: f
    } = e, m = null != (t = (0, u.UC)()) ? t : [], {
        analyticsLocations: A
    } = (0, o.Ay)([...m, s.A.ACTIVITY_DETAIL_PAGE]), {
        applicationId: _
    } = f.params, [b] = (0, c.A)([_]), E = null == b || null == (n = b.bot) ? void 0 : n.id, O = (0, i.bG)([d.default], () => d.default.getCurrentUser());
    return r.useEffect(() => {
        null != E && null != O && (async () => {
            try {
                var e;
                let t = new URL(location.href),
                    n = await a.A.openPrivateChannel({
                        recipientIds: E
                    }),
                    r = null != (e = t.searchParams.get("referrer_id")) ? e : void 0,
                    {
                        customId: i
                    } = await (0, h.d9)(_, t.searchParams.get("link_id"), t.searchParams.get("custom_id"));
                await (0, p.A)({
                    targetApplicationId: _,
                    channelId: n,
                    analyticsLocations: A,
                    customId: i,
                    referrerId: r
                })
            } catch (e) {}
        })()
    }, [A, _, E, O]), r.useEffect(() => {
        let e = setTimeout(() => {
            null == E && l.A.show({
                title: g.intl.string(g.t.PtobXW),
                body: g.intl.string(g.t["IOy+I5"])
            })
        }, 5e3);
        return () => {
            clearTimeout(e)
        }
    }, [E]), null
}