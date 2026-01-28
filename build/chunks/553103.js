/** Chunk was on 78528 **/
/** chunk id: 553103, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(512750),
    l = n(311907),
    i = n(71393),
    s = n(645619),
    a = n(840120),
    o = n(162362),
    c = n(998418),
    u = n(568065),
    d = n(652215),
    p = n(333354),
    h = n(985018);

function f(e, t) {
    var n;
    let f = (0, l.bG)([i.A], () => {
            var t;
            return null == (t = i.A.getGuild(e)) ? void 0 : t.features
        }),
        g = (0, l.bG)([s.A], () => s.A.getStateForGuild(e)),
        m = null == g ? void 0 : g.allPowerups[r.FB],
        b = (0, c.Ay)(e, m),
        A = (0, a.j$)(e, t),
        y = null == m ? void 0 : m.storeRemovalDate,
        _ = null != (n = null == f ? void 0 : f.has(d.GuildFeatures.PARTNERED)) && n,
        O = A && null != y && !_ && b.type === u.b_.POWERUP_ACTIVATED,
        j = O ? {
            title: h.intl.formatToPlainString(p.default.mgoPkU, {
                perkName: null == m ? void 0 : m.title
            }),
            description: h.intl.formatToPlainString(p.default.UT9pkI, {
                dateString: (0, o.A)(y)
            })
        } : null;
    return {
        shouldShow: O,
        notificationConfig: j
    }
}