/** chunk id: 743987 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(417597),
    a = n(990078),
    l = n(397927),
    r = n(370480),
    o = n(263063),
    d = n(773669),
    c = n(696451),
    u = n(71393),
    h = n(661191),
    p = n(985018),
    f = n(508298);

function A(e) {
    let {
        userId: t,
        guildId: n,
        textClassName: A,
        tooltipDelay: _
    } = e, g = (0, s.bG)([d.default], () => d.default.locale), m = (0, s.bG)([u.A], () => null != n ? u.A.getGuild(n) : null), x = (0, s.bG)([c.Ay], () => null != n ? c.Ay.getMember(n, t) : null), E = (0, r.An)(h.default.extractTimestamp(t), g), y = (0, r.An)(x?.joinedAt, g);
    return null == m || null == x ? (0, i.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: A,
        children: E
    }) : (0, i.jsxs)("div", {
        className: f.y9,
        children: [(0, i.jsxs)("div", {
            className: f.R1,
            children: [(0, i.jsx)(a.m, {
                text: p.intl.string(p.t.uvGmCx),
                delay: _,
                children: (0, i.jsx)(l.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: f.Mg
                })
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                className: A,
                children: E
            })]
        }), (0, i.jsx)("div", {
            className: f.yF
        }), (0, i.jsxs)("div", {
            className: f.R1,
            children: [(0, i.jsx)(a.m, {
                text: m.name,
                delay: _,
                children: (0, i.jsx)(o.Ay, {
                    guild: m,
                    size: o.Ay.Sizes.SMOL,
                    className: f.$f
                })
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/normal",
                className: A,
                children: y
            })]
        })]
    })
}