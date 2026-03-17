/** chunk id: 743987 params = (module,exports,require) **/
t.d(n, {
    A: () => p
});
var i = t(627968);
t(64700);
var s = t(417597),
    l = t(990078),
    a = t(397927),
    r = t(370480),
    o = t(263063),
    d = t(773669),
    c = t(696451),
    u = t(71393),
    m = t(661191),
    A = t(985018),
    x = t(713531);

function p(e) {
    let {
        userId: n,
        guildId: t,
        textClassName: p,
        tooltipDelay: _
    } = e, f = (0, s.bG)([d.default], () => d.default.locale), h = (0, s.bG)([u.A], () => null != t ? u.A.getGuild(t) : null), j = (0, s.bG)([c.Ay], () => null != t ? c.Ay.getMember(t, n) : null), g = (0, r.An)(m.default.extractTimestamp(n), f), I = (0, r.An)(j?.joinedAt, f);
    return null == h || null == j ? (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: p,
        children: g
    }) : (0, i.jsxs)("div", {
        className: x.y9,
        children: [(0, i.jsxs)("div", {
            className: x.R1,
            children: [(0, i.jsx)(l.m, {
                text: A.intl.string(A.t.uvGmCx),
                delay: _,
                children: (0, i.jsx)(a.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: x.Mg
                })
            }), (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                className: p,
                children: g
            })]
        }), (0, i.jsx)("div", {
            className: x.yF
        }), (0, i.jsxs)("div", {
            className: x.R1,
            children: [(0, i.jsx)(l.m, {
                text: h.name,
                delay: _,
                children: (0, i.jsx)(o.Ay, {
                    guild: h,
                    size: o.Ay.Sizes.SMOL,
                    className: x.$f
                })
            }), (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                className: p,
                children: I
            })]
        })]
    })
}