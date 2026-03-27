/** chunk id: 523084 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968),
    s = n(64700),
    i = n(106778),
    r = n(311907),
    l = n(397927),
    d = n(775602),
    c = n(524246),
    o = n(14368),
    u = n(944053);

function m(e) {
    let {
        title: t,
        description: n,
        image: m,
        button: _,
        ...f
    } = e, p = (0, r.bG)([d.A], () => d.A.useReducedMotion), x = s.useRef(null), g = s.useRef(new i.OH), [h, b] = s.useState(null);
    return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(i.Fk, {
            ref: b,
            className: u.Lb,
            environment: g.current
        }), (0, a.jsxs)(l.EOs, {
            "data-migration-pending": !0,
            className: u.yl,
            size: l.rIJ.DYNAMIC,
            ...f,
            parentComponent: "GuildPowerupActivateModal",
            children: [(0, a.jsx)(l.$mQ, {
                "data-migration-pending": !0,
                className: u._F,
                scrollbarType: "none",
                children: (0, a.jsxs)("div", {
                    className: u.kL,
                    ref: x,
                    children: [m, (0, a.jsxs)("div", {
                        className: u.hQ,
                        children: [(0, a.jsx)(l.Heading, {
                            variant: "heading-xl/extrabold",
                            children: t
                        }), (0, a.jsx)(l.Text, {
                            tag: "span",
                            className: u.h_,
                            variant: "text-sm/normal",
                            children: n
                        }), _]
                    })]
                })
            }), (0, a.jsx)(l.s_y, {
                "data-migration-pending": !0,
                className: u.VN,
                onClick: f.onClose
            }), !p && (0, a.jsx)(c.A, {
                confettiTarget: x.current,
                confettiCanvas: h,
                sprites: (0, o.rA)()
            })]
        })]
    })
}