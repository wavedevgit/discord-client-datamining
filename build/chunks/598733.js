/** chunk id: 598733 params = (module,exports,require) **/
n.d(e, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(421380),
    c = n(397927),
    d = n(686956),
    u = n(976860),
    E = n(71393),
    _ = n(967198),
    T = n(449054),
    A = n(652215),
    I = n(985018),
    N = n(236458),
    R = n(215433);
let p = 21552 == n.j ? () => {
    let t = (0, a.bG)([_.A], () => _.A.getGuildId(), []),
        e = (0, a.bG)([E.A], () => E.A.getGuild(t), [t]),
        [n, r] = l.useState(!1);
    if (null == e) return null;
    let p = async () => {
        r(!0);
        try {
            T.cf(e.id), await d.A.joinGuild(e.id, {
                source: A.Q4z.NOTICE_BAR
            })
        } catch {
            r(!1)
        }
    };
    return (0, i.jsxs)("div", {
        className: s()(N.lm, R.lm),
        children: [(0, i.jsxs)(o.$n, {
            look: o.$n.Looks.OUTLINED,
            color: o.$n.Colors.WHITE,
            size: o.$n.Sizes.NONE,
            className: s()(N.x6, N.aX),
            innerClassName: N.gb,
            onClick: () => {
                (0, u.JK)().goBack()
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
            onClick: p,
            children: I.intl.format(I.t.uHN7ny, {
                guild: e.name
            })
        })]
    })
} : null