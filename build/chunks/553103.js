/** chunk id: 553103, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var i = n(512750),
    s = n(311907),
    l = n(71393),
    a = n(645619),
    r = n(840120),
    o = n(162362),
    c = n(998418),
    d = n(568065),
    u = n(652215),
    h = n(333354),
    A = n(985018);

function p(e, t) {
    let n = (0, s.bG)([l.A], () => l.A.getGuild(e)?.features),
        p = (0, s.bG)([a.A], () => a.A.getStateForGuild(e)),
        m = p?.allPowerups[i.FB],
        g = (0, c.Ay)(e, m),
        _ = (0, r.j$)(e, t),
        f = m?.storeRemovalDate,
        x = n?.has(u.GuildFeatures.PARTNERED) ?? !1,
        C = _ && null != f && !x && g.type === d.b_.POWERUP_ACTIVATED,
        E = C ? {
            title: A.intl.formatToPlainString(h.default.mgoPkU, {
                perkName: m?.title
            }),
            description: A.intl.formatToPlainString(h.default.UT9pkI, {
                dateString: (0, o.A)(f)
            })
        } : null;
    return {
        shouldShow: C,
        notificationConfig: E
    }
}