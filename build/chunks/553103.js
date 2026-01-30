/** Chunk was on 1113 **/
/** chunk id: 553103, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
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
    h = n(333354),
    p = n(985018);

function g(e, t) {
    var n;
    let g = (0, l.bG)([i.A], () => {
            var t;
            return null == (t = i.A.getGuild(e)) ? void 0 : t.features
        }),
        f = (0, l.bG)([s.A], () => s.A.getStateForGuild(e)),
        m = null == f ? void 0 : f.allPowerups[r.FB],
        b = (0, c.Ay)(e, m),
        A = (0, a.j$)(e, t),
        y = null == m ? void 0 : m.storeRemovalDate,
        O = null != (n = null == g ? void 0 : g.has(d.GuildFeatures.PARTNERED)) && n,
        _ = A && null != y && !O && b.type === u.b_.POWERUP_ACTIVATED,
        j = _ ? {
            title: p.intl.formatToPlainString(h.default.mgoPkU, {
                perkName: null == m ? void 0 : m.title
            }),
            description: p.intl.formatToPlainString(h.default.UT9pkI, {
                dateString: (0, o.A)(y)
            })
        } : null;
    return {
        shouldShow: _,
        notificationConfig: j
    }
}