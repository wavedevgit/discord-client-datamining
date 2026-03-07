/** chunk id: 743987 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968);
n(64700);
var s = n(417597),
    a = n(990078),
    i = n(397927),
    r = n(370480),
    o = n(263063),
    u = n(773669),
    c = n(696451),
    d = n(71393),
    m = n(661191),
    A = n(985018),
    p = n(403229);

function h(e) {
    let {
        userId: t,
        guildId: n,
        textClassName: h,
        tooltipDelay: x
    } = e, E = (0, s.bG)([u.default], () => u.default.locale), f = (0, s.bG)([d.A], () => null != n ? d.A.getGuild(n) : null), N = (0, s.bG)([c.Ay], () => null != n ? c.Ay.getMember(n, t) : null), g = (0, r.An)(m.default.extractTimestamp(t), E), S = (0, r.An)(N?.joinedAt, E);
    return null == f || null == N ? (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        className: h,
        children: g
    }) : (0, l.jsxs)("div", {
        className: p.y9,
        children: [(0, l.jsxs)("div", {
            className: p.R1,
            children: [(0, l.jsx)(a.m, {
                text: A.intl.string(A.t.uvGmCx),
                delay: x,
                children: (0, l.jsx)(i.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: p.Mg
                })
            }), (0, l.jsx)(i.Text, {
                variant: "text-sm/normal",
                className: h,
                children: g
            })]
        }), (0, l.jsx)("div", {
            className: p.yF
        }), (0, l.jsxs)("div", {
            className: p.R1,
            children: [(0, l.jsx)(a.m, {
                text: f.name,
                delay: x,
                children: (0, l.jsx)(o.Ay, {
                    guild: f,
                    size: o.Ay.Sizes.SMOL,
                    className: p.$f
                })
            }), (0, l.jsx)(i.Text, {
                variant: "text-sm/normal",
                className: h,
                children: S
            })]
        })]
    })
}