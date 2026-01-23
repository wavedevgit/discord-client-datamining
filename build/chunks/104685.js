/** Chunk was on 47841 **/
/** chunk id: 104685, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(417597),
    s = n(397927),
    a = n(965033),
    o = n(576705),
    c = n(652215),
    d = n(985018),
    u = n(993013);

function g(e) {
    let {
        guild: t
    } = e, n = (0, l.bG)([o.A], () => null != t && o.A.can(c.xBc.MANAGE_GUILD, t), [t]), g = t.features.has(c.GuildFeatures.COMMUNITY), [m, p] = i.useState(t.features.has(c.GuildFeatures.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), f = i.useCallback(async e => {
        p(e), await (0, a.qH)(t, e)
    }, [t]);
    return g ? null : (0, r.jsx)("div", {
        className: u.k,
        children: (0, r.jsx)(s.dOG, {
            label: d.intl.string(d.t.jDarmy),
            description: d.intl.string(d.t["/ee7yK"]),
            checked: m,
            onChange: f,
            disabled: !n
        })
    })
}