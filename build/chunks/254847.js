/** Chunk was on 5606 **/
/** chunk id: 254847, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A,
    Y: () => b
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(417597),
    o = n(397927),
    c = n(714991),
    d = n(695515),
    u = n(397808),
    p = n(652215),
    _ = n(842130),
    m = n(985018),
    g = n(957415);
let f = [18, 18, 16, 16, 14, 12, 10];

function b(e) {
    var t;
    return null != (t = f[e.length - 1]) ? t : f[f.length - 1]
}
let h = i.memo(e => {
    let {
        guildId: t,
        className: n,
        customSubtext: i
    } = e, l = (0, a.bG)([d.A], () => d.A.getGuild(t));
    if (void 0 === l) return null;
    let f = l.features.has(p.GuildFeatures.VERIFIED) || l.features.has(p.GuildFeatures.PARTNERED),
        {
            name: b
        } = l;
    return (0, r.jsxs)("div", {
        className: s()(g.kL, n),
        children: [(0, r.jsx)(u.A, {
            guildId: t
        }), (0, r.jsxs)("div", {
            className: g.$z,
            children: [(0, r.jsxs)("div", {
                className: g.wx,
                children: [f ? (0, r.jsx)(c.A, {
                    guild: l,
                    tooltipPosition: "bottom",
                    tooltipColor: o.STz.Colors.PRIMARY,
                    className: g.n2
                }) : null, (0, r.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    children: b
                })]
            }), (0, r.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: null != i ? i : void 0 !== l.approximateMemberCount ? m.intl.format(_.default["5JmNgg"], {
                    members: l.approximateMemberCount
                }) : null
            })]
        })]
    })
});
h.displayName = "FamilyCenterActivityGuildRow";
let A = h