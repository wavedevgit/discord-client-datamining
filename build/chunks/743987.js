/** chunk id: 743987 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(417597),
    r = n(990078),
    l = n(397927),
    a = n(370480),
    o = n(263063),
    d = n(773669),
    c = n(696451),
    u = n(71393),
    m = n(661191),
    A = n(985018),
    x = n(403229);

function _(e) {
    let {
        userId: t,
        guildId: n,
        textClassName: _,
        tooltipDelay: p
    } = e, f = (0, s.bG)([d.default], () => d.default.locale), h = (0, s.bG)([u.A], () => null != n ? u.A.getGuild(n) : null), g = (0, s.bG)([c.Ay], () => null != n ? c.Ay.getMember(n, t) : null), I = (0, a.An)(m.default.extractTimestamp(t), f), j = (0, a.An)(g?.joinedAt, f);
    return null == h || null == g ? (0, i.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: _,
        children: I
    }) : (0, i.jsxs)("div", {
        className: x.y9,
        children: [(0, i.jsxs)("div", {
            className: x.R1,
            children: [(0, i.jsx)(r.m, {
                text: A.intl.string(A.t.uvGmCx),
                delay: p,
                children: (0, i.jsx)(l.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: x.Mg
                })
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                className: _,
                children: I
            })]
        }), (0, i.jsx)("div", {
            className: x.yF
        }), (0, i.jsxs)("div", {
            className: x.R1,
            children: [(0, i.jsx)(r.m, {
                text: h.name,
                delay: p,
                children: (0, i.jsx)(o.Ay, {
                    guild: h,
                    size: o.Ay.Sizes.SMOL,
                    className: x.$f
                })
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                className: _,
                children: j
            })]
        })]
    })
}