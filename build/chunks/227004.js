/** chunk id: 227004 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(554146),
    a = n(397927),
    o = n(533550),
    c = n(624458),
    d = n(844944),
    u = n(513461),
    h = n(663997),
    A = n(652793),
    m = n(576705),
    _ = n(221950),
    p = n(652215),
    g = n(985018);

function f(e) {
    let {
        guild: t,
        selected: n
    } = e, f = (0, l.bG)([m.A], () => m.A.can(p.xBc.KICK_MEMBERS, t)), x = (0, l.bG)([d.A], () => d.A.getSubmittedGuildJoinRequestTotal(t.id)), C = f ? x ?? 0 : 0;
    s.useEffect(() => {
        f && t.features.has(p.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && t.features.has(p.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && c.A.fetchGuildJoinRequests({
            guildId: t.id,
            status: u.B5.SUBMITTED,
            limit: h.L
        })
    }, [f, t]);
    let E = s.useCallback(() => {
            (0, _.aZ)(t.id)
        }, [t.id]),
        I = (0, o.q8)(t.id, r.M.MEMBERS_LAUNCH_UPSELL);
    return (0, i.jsx)("div", {
        ref: I,
        children: (0, i.jsx)(A.G, {
            id: `members-${t.id}`,
            renderIcon: e => (0, i.jsx)(a.nFg, {
                size: "md",
                color: "currentColor",
                className: e
            }),
            text: g.intl.string(g.t.oclz3Z),
            selected: n,
            onClick: E,
            trailing: C > 0 ? (0, i.jsx)(a.hVq, {
                count: C
            }) : null
        })
    })
}