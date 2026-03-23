/** chunk id: 254847 params = (module,exports,require) **/
n.d(t, {
    A: () => T,
    Y: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(417597),
    o = n(397927),
    d = n(714991),
    c = n(695515),
    u = n(397808),
    m = n(652215),
    _ = n(842130),
    g = n(985018),
    A = n(957415);
let x = [18, 18, 16, 16, 14, 12, 10];

function p(e) {
    return x[e.length - 1] ?? x[x.length - 1]
}
let h = s.memo(e => {
    let {
        guildId: t,
        className: n,
        customSubtext: s
    } = e, l = (0, r.bG)([c.A], () => c.A.getGuild(t));
    if (void 0 === l) return null;
    let x = l.features.has(m.GuildFeatures.VERIFIED) || l.features.has(m.GuildFeatures.PARTNERED),
        {
            name: p
        } = l;
    return (0, i.jsxs)("div", {
        className: a()(A.kL, n),
        children: [(0, i.jsx)(u.A, {
            guildId: t
        }), (0, i.jsxs)("div", {
            className: A.$z,
            children: [(0, i.jsxs)("div", {
                className: A.wx,
                children: [x ? (0, i.jsx)(d.A, {
                    guild: l,
                    tooltipPosition: "bottom",
                    tooltipColor: o.STz.Colors.PRIMARY,
                    className: A.n2
                }) : null, (0, i.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    children: p
                })]
            }), (0, i.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: null != s ? s : void 0 !== l.approximateMemberCount ? g.intl.format(_.default["5JmNgg"], {
                    members: l.approximateMemberCount
                }) : null
            })]
        })]
    })
});
h.displayName = "FamilyCenterActivityGuildRow";
let T = h