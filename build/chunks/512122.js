/** Chunk was on 47841 **/
/** chunk id: 512122, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    p: () => f
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(56595),
    o = n(576705),
    c = n(997509),
    d = n(652215),
    u = n(985018),
    g = n(641131),
    m = n(841541);
async function p(e, t) {
    return await c.A.saveGuild(e.id, {
        moderatorReportingEnabled: t
    })
}

function f(e) {
    let {
        guild: t
    } = e, n = (0, l.bG)([o.A], () => null != t && o.A.can(d.xBc.MANAGE_GUILD, t), [t]), c = t.features.has(d.GuildFeatures.REPORT_TO_MOD_PILOT), [f, b] = i.useState((0, a.A)(t) && c), h = i.useCallback(async e => {
        b(e), await p(t, e)
    }, [t]);
    return c && n ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: m.hu,
            children: (0, r.jsx)(s.dOG, {
                label: u.intl.string(g.default["/xIz7G"]),
                description: u.intl.string(g.default.uUMXyu),
                badge: "beta",
                checked: f,
                onChange: h,
                disabled: !n
            })
        }), (0, r.jsx)(s.cGx, {
            className: m.yF
        })]
    }) : null
}