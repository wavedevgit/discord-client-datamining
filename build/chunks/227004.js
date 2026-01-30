/** chunk id: 227004, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(533550),
    c = n(624458),
    u = n(844944),
    d = n(513461),
    h = n(663997),
    p = n(652793),
    g = n(576705),
    f = n(221950),
    m = n(652215),
    b = n(985018);

function A(e) {
    let {
        guild: t,
        selected: n
    } = e, A = (0, i.bG)([g.A], () => g.A.can(m.xBc.KICK_MEMBERS, t)), y = (0, i.bG)([u.A], () => u.A.getSubmittedGuildJoinRequestTotal(t.id)), O = A && null != y ? y : 0;
    l.useEffect(() => {
        A && t.features.has(m.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED) && t.features.has(m.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL) && c.A.fetchGuildJoinRequests({
            guildId: t.id,
            status: d.B5.SUBMITTED,
            limit: h.L
        })
    }, [A, t]);
    let _ = l.useCallback(() => {
            (0, f.aZ)(t.id)
        }, [t.id]),
        j = (0, o.q8)(t.id, s.M.MEMBERS_LAUNCH_UPSELL);
    return (0, r.jsx)("div", {
        ref: j,
        children: (0, r.jsx)(p.G, {
            id: "members-".concat(t.id),
            renderIcon: e => (0, r.jsx)(a.nFg, {
                size: "md",
                color: "currentColor",
                className: e
            }),
            text: b.intl.string(b.t.oclz3Z),
            selected: n,
            onClick: _,
            trailing: O > 0 ? (0, r.jsx)(a.hVq, {
                count: O
            }) : null
        })
    })
}