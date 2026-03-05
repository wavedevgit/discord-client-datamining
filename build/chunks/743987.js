/** chunk id: 743987, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => x
});
var l = s(627968);
s(64700);
var n = s(417597),
    a = s(990078),
    i = s(397927),
    r = s(370480),
    o = s(263063),
    u = s(773669),
    c = s(696451),
    d = s(71393),
    m = s(661191),
    A = s(985018),
    p = s(403229);

function x(e) {
    let {
        userId: t,
        guildId: s,
        textClassName: x,
        tooltipDelay: h
    } = e, E = (0, n.bG)([u.default], () => u.default.locale), f = (0, n.bG)([d.A], () => null != s ? d.A.getGuild(s) : null), N = (0, n.bG)([c.Ay], () => null != s ? c.Ay.getMember(s, t) : null), S = (0, r.An)(m.default.extractTimestamp(t), E), v = (0, r.An)(N?.joinedAt, E);
    return null == f || null == N ? (0, l.jsx)(i.Text, {
        variant: "text-sm/normal",
        className: x,
        children: S
    }) : (0, l.jsxs)("div", {
        className: p.y9,
        children: [(0, l.jsxs)("div", {
            className: p.R1,
            children: [(0, l.jsx)(a.m, {
                text: A.intl.string(A.t.uvGmCx),
                delay: h,
                children: (0, l.jsx)(i.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: p.Mg
                })
            }), (0, l.jsx)(i.Text, {
                variant: "text-sm/normal",
                className: x,
                children: S
            })]
        }), (0, l.jsx)("div", {
            className: p.yF
        }), (0, l.jsxs)("div", {
            className: p.R1,
            children: [(0, l.jsx)(a.m, {
                text: f.name,
                delay: h,
                children: (0, l.jsx)(o.Ay, {
                    guild: f,
                    size: o.Ay.Sizes.SMOL,
                    className: p.$f
                })
            }), (0, l.jsx)(i.Text, {
                variant: "text-sm/normal",
                className: x,
                children: v
            })]
        })]
    })
}