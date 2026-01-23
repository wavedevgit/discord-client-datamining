/** Chunk was on web.js **/
/** chunk id: 598733, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(421380),
    c = n(397927),
    u = n(686956),
    d = n(976860),
    f = n(71393),
    p = n(967198),
    _ = n(449054),
    h = n(652215),
    m = n(985018),
    g = n(163677),
    E = n(1624);
let y = () => {
    let e = (0, o.bG)([p.A], () => p.A.getGuildId(), []),
        t = (0, o.bG)([f.A], () => f.A.getGuild(e), [e]),
        [n, a] = i.useState(!1);
    if (null == t) return null;
    let y = () => {
            (0, d.JK)().goBack()
        },
        b = async () => {
            a(!0);
            try {
                _.cf(t.id), await u.A.joinGuild(t.id, {
                    source: h.Q4z.NOTICE_BAR
                })
            } catch (e) {
                a(!1)
            }
        };
    return (0, r.jsxs)("div", {
        className: s()(g.lm, E.lm),
        children: [(0, r.jsxs)(l.$n, {
            look: l.$n.Looks.OUTLINED,
            color: l.$n.Colors.WHITE,
            size: l.$n.Sizes.NONE,
            className: s()(g.x6, g.aX),
            innerClassName: g.gb,
            onClick: y,
            children: [(0, r.jsx)(c.rJJ, {
                size: "xs",
                color: "currentColor",
                className: g.UE
            }), m.intl.string(m.t["13/7kX"])]
        }), (0, r.jsx)(c.Text, {
            className: g.wx,
            variant: "text-sm/normal",
            children: m.intl.string(m.t["N/y2WE"])
        }), (0, r.jsx)(l.$n, {
            className: g.x6,
            look: l.$n.Looks.OUTLINED,
            color: l.$n.Colors.WHITE,
            size: l.$n.Sizes.NONE,
            submitting: n,
            onClick: b,
            children: m.intl.format(m.t.uHN7ny, {
                guild: t.name
            })
        })]
    })
}