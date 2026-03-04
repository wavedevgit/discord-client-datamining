/** chunk id: 743987, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(990078),
    r = n(397927),
    a = n(370480),
    d = n(263063),
    o = n(773669),
    c = n(696451),
    u = n(71393),
    A = n(661191),
    x = n(985018),
    _ = n(713531);

function m(e) {
    let {
        userId: t,
        guildId: n,
        textClassName: m,
        tooltipDelay: p
    } = e, f = (0, s.bG)([o.default], () => o.default.locale), h = (0, s.bG)([u.A], () => null != n ? u.A.getGuild(n) : null), I = (0, s.bG)([c.Ay], () => null != n ? c.Ay.getMember(n, t) : null), g = (0, a.An)(A.default.extractTimestamp(t), f), j = (0, a.An)(I?.joinedAt, f);
    return null == h || null == I ? (0, i.jsx)(r.Text, {
        variant: "text-sm/normal",
        className: m,
        children: g
    }) : (0, i.jsxs)("div", {
        className: _.y9,
        children: [(0, i.jsxs)("div", {
            className: _.R1,
            children: [(0, i.jsx)(l.m, {
                text: x.intl.string(x.t.uvGmCx),
                delay: p,
                children: (0, i.jsx)(r.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: _.Mg
                })
            }), (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                className: m,
                children: g
            })]
        }), (0, i.jsx)("div", {
            className: _.yF
        }), (0, i.jsxs)("div", {
            className: _.R1,
            children: [(0, i.jsx)(l.m, {
                text: h.name,
                delay: p,
                children: (0, i.jsx)(d.Ay, {
                    guild: h,
                    size: d.Ay.Sizes.SMOL,
                    className: _.$f
                })
            }), (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                className: m,
                children: j
            })]
        })]
    })
}