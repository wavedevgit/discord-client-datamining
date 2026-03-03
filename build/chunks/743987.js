/** chunk id: 743987, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(990078),
    a = n(397927),
    r = n(370480),
    d = n(263063),
    o = n(773669),
    c = n(696451),
    u = n(71393),
    A = n(661191),
    _ = n(985018),
    x = n(713531);

function p(e) {
    let {
        userId: t,
        guildId: n,
        textClassName: p,
        tooltipDelay: m
    } = e, f = (0, s.bG)([o.default], () => o.default.locale), h = (0, s.bG)([u.A], () => null != n ? u.A.getGuild(n) : null), I = (0, s.bG)([c.Ay], () => null != n ? c.Ay.getMember(n, t) : null), g = (0, r.An)(A.default.extractTimestamp(t), f), j = (0, r.An)(I?.joinedAt, f);
    return null == h || null == I ? (0, i.jsx)(a.Text, {
        variant: "text-sm/normal",
        className: p,
        children: g
    }) : (0, i.jsxs)("div", {
        className: x.y9,
        children: [(0, i.jsxs)("div", {
            className: x.R1,
            children: [(0, i.jsx)(l.m, {
                text: _.intl.string(_.t.uvGmCx),
                delay: m,
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
                delay: m,
                children: (0, i.jsx)(d.Ay, {
                    guild: h,
                    size: d.Ay.Sizes.SMOL,
                    className: x.$f
                })
            }), (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                className: p,
                children: j
            })]
        })]
    })
}