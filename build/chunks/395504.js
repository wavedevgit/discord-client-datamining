/** Chunk was on web.js **/
/** chunk id: 395504, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    WW: () => u,
    Xn: () => d,
    jN: () => c
});
var r = n(311907),
    i = n(71393),
    a = n(576705),
    o = n(543465),
    s = n(287809),
    l = n(652215);

function c(e) {
    return (0, r.bG)([o.Ay, i.A, s.default], () => {
        var t, n, r, a;
        let c = o.Ay.isOptInEnabled(e),
            u = null != (t = null == (r = i.A.getGuild(e)) ? void 0 : r.features.has(l.GuildFeatures.COMMUNITY)) && t,
            d = null != (n = null == (a = s.default.getCurrentUser()) ? void 0 : a.isStaff()) && n;
        return c && (u || d)
    })
}

function u(e) {
    let t = i.A.getGuild(e),
        n = s.default.getCurrentUser();
    return null != e && null != t && null != n && (t.features.has(l.GuildFeatures.COMMUNITY) || n.isStaff()) && o.Ay.isOptInEnabled(e)
}

function d(e) {
    return (0, r.bG)([i.A, a.A], () => {
        var t;
        let n = i.A.getGuild(e),
            r = a.A.can(l.xBc.MANAGE_GUILD, n),
            o = a.A.can(l.xBc.MANAGE_ROLES, n),
            s = null != (t = null == n ? void 0 : n.features.has(l.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)) && t;
        return null != n && r && o && !s
    })
}