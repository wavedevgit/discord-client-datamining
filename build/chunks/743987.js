/** chunk id: 743987 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => f
});
var n = i(627968);
i(64700);
var s = i(417597),
    a = i(990078),
    l = i(397927),
    r = i(370480),
    o = i(263063),
    d = i(773669),
    c = i(696451),
    u = i(71393),
    h = i(661191),
    _ = i(985018),
    p = i(508298);

function f(e) {
    let {
        userId: t,
        guildId: i,
        textClassName: f,
        tooltipDelay: m
    } = e, g = (0, s.bG)([d.default], () => d.default.locale), A = (0, s.bG)([u.A], () => null != i ? u.A.getGuild(i) : null), x = (0, s.bG)([c.Ay], () => null != i ? c.Ay.getMember(i, t) : null), v = (0, r.An)(h.default.extractTimestamp(t), g), y = (0, r.An)(x?.joinedAt, g);
    return null == A || null == x ? (0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        className: f,
        children: v
    }) : (0, n.jsxs)("div", {
        className: p.y9,
        children: [(0, n.jsxs)("div", {
            className: p.R1,
            children: [(0, n.jsx)(a.m, {
                text: _.intl.string(_.t.uvGmCx),
                delay: m,
                children: (0, n.jsx)(l.pVd, {
                    size: "custom",
                    width: 28,
                    height: 28,
                    color: "currentColor",
                    className: p.Mg
                })
            }), (0, n.jsx)(l.Text, {
                variant: "text-sm/normal",
                className: f,
                children: v
            })]
        }), (0, n.jsx)("div", {
            className: p.yF
        }), (0, n.jsxs)("div", {
            className: p.R1,
            children: [(0, n.jsx)(a.m, {
                text: A.name,
                delay: m,
                children: (0, n.jsx)(o.Ay, {
                    guild: A,
                    size: o.Ay.Sizes.SMOL,
                    className: p.$f
                })
            }), (0, n.jsx)(l.Text, {
                variant: "text-sm/normal",
                className: f,
                children: y
            })]
        })]
    })
}