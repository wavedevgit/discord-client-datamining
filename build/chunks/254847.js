/** chunk id: 254847, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h,
    Y: () => f
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
    _ = n(652215),
    p = n(842130),
    m = n(985018),
    g = n(957415);
let A = [18, 18, 16, 16, 14, 12, 10];

function f(e) {
    var t;
    return null != (t = A[e.length - 1]) ? t : A[A.length - 1]
}
let b = i.memo(e => {
    let {
        guildId: t,
        className: n,
        customSubtext: i
    } = e, l = (0, a.bG)([d.A], () => d.A.getGuild(t));
    if (void 0 === l) return null;
    let A = l.features.has(_.GuildFeatures.VERIFIED) || l.features.has(_.GuildFeatures.PARTNERED),
        {
            name: f
        } = l;
    return (0, r.jsxs)("div", {
        className: s()(g.kL, n),
        children: [(0, r.jsx)(u.A, {
            guildId: t
        }), (0, r.jsxs)("div", {
            className: g.$z,
            children: [(0, r.jsxs)("div", {
                className: g.wx,
                children: [A ? (0, r.jsx)(c.A, {
                    guild: l,
                    tooltipPosition: "bottom",
                    tooltipColor: o.STz.Colors.PRIMARY,
                    className: g.n2
                }) : null, (0, r.jsx)(o.Text, {
                    variant: "text-md/semibold",
                    children: f
                })]
            }), (0, r.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: null != i ? i : void 0 !== l.approximateMemberCount ? m.intl.format(p.default["5JmNgg"], {
                    members: l.approximateMemberCount
                }) : null
            })]
        })]
    })
});
b.displayName = "FamilyCenterActivityGuildRow";
let h = b