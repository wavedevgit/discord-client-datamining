/** chunk id: 523084 params = (module,exports,require) **/
a.d(t, {
    A: () => m
});
var n = a(627968),
    r = a(64700),
    i = a(106778),
    s = a(311907),
    l = a(397927),
    c = a(775602),
    o = a(524246),
    d = a(14368),
    u = a(372165);

function m(e) {
    let {
        title: t,
        description: a,
        image: m,
        button: f,
        ...p
    } = e, x = (0, s.bG)([c.A], () => c.A.useReducedMotion), _ = r.useRef(null), g = r.useRef(new i.OH), [v, h] = r.useState(null);
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(i.Fk, {
            ref: h,
            className: u.Lb,
            environment: g.current
        }), (0, n.jsxs)(l.EOs, {
            "data-migration-pending": !0,
            className: u.yl,
            size: l.rIJ.DYNAMIC,
            ...p,
            parentComponent: "GuildPowerupActivateModal",
            children: [(0, n.jsx)(l.$mQ, {
                "data-migration-pending": !0,
                className: u._F,
                scrollbarType: "none",
                children: (0, n.jsxs)("div", {
                    className: u.kL,
                    ref: _,
                    children: [m, (0, n.jsxs)("div", {
                        className: u.hQ,
                        children: [(0, n.jsx)(l.Heading, {
                            variant: "heading-xl/extrabold",
                            children: t
                        }), null != a && (0, n.jsx)(l.Text, {
                            tag: "span",
                            className: u.h_,
                            variant: "text-sm/normal",
                            children: a
                        }), f]
                    })]
                })
            }), (0, n.jsx)(l.s_y, {
                "data-migration-pending": !0,
                className: u.VN,
                onClick: p.onClose
            }), !x && (0, n.jsx)(o.A, {
                confettiTarget: _.current,
                confettiCanvas: v,
                sprites: (0, d.rA)()
            })]
        })]
    })
}