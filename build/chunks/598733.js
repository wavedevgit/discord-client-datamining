/** chunk id: 598733 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => R
});
var i = n(627968),
    r = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(311907),
    o = n(421380),
    c = n(397927),
    u = n(686956),
    d = n(976860),
    E = n(71393),
    _ = n(967198),
    T = n(449054),
    A = n(652215),
    I = n(985018),
    N = n(163677),
    p = n(1624);
let R = 21552 == n.j ? () => {
    let t = (0, a.bG)([_.A], () => _.A.getGuildId(), []),
        e = (0, a.bG)([E.A], () => E.A.getGuild(t), [t]),
        [n, s] = r.useState(!1);
    if (null == e) return null;
    let R = async () => {
        s(!0);
        try {
            T.cf(e.id), await u.A.joinGuild(e.id, {
                source: A.Q4z.NOTICE_BAR
            })
        } catch {
            s(!1)
        }
    };
    return (0, i.jsxs)("div", {
        className: l()(N.lm, p.lm),
        children: [(0, i.jsxs)(o.$n, {
            look: o.$n.Looks.OUTLINED,
            color: o.$n.Colors.WHITE,
            size: o.$n.Sizes.NONE,
            className: l()(N.x6, N.aX),
            innerClassName: N.gb,
            onClick: () => {
                (0, d.JK)().goBack()
            },
            children: [(0, i.jsx)(c.rJJ, {
                size: "xs",
                color: "currentColor",
                className: N.UE
            }), I.intl.string(I.t["13/7kX"])]
        }), (0, i.jsx)(c.Text, {
            className: N.wx,
            variant: "text-sm/normal",
            children: I.intl.string(I.t["N/y2WE"])
        }), (0, i.jsx)(o.$n, {
            className: N.x6,
            look: o.$n.Looks.OUTLINED,
            color: o.$n.Colors.WHITE,
            size: o.$n.Sizes.NONE,
            submitting: n,
            onClick: R,
            children: I.intl.format(I.t.uHN7ny, {
                guild: e.name
            })
        })]
    })
} : null