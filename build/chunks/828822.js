/** chunk id: 828822 params = (module,exports,require) **/
l.d(n, {
    A: () => p
});
var i = l(627968);
l(64700);
var t = l(503698),
    s = l.n(t),
    a = l(397927),
    r = l(837921),
    o = l(718019),
    d = l(985018),
    c = l(321386),
    u = l(968965);
let m = r.Ay.getEnableHardwareAcceleration() ? a.JsQ : a.euF;

function p(e) {
    let {
        avatarProps: n,
        eventHandlers: l
    } = (0, o.V)(e), t = () => {};
    return (0, i.jsxs)("div", {
        onClick: t,
        className: s()(c.my, c.vk, u.kL),
        ...l,
        children: [(0, i.jsx)(m, {
            ...n,
            imageClassName: s()(c.Lw, u.HU)
        }), (0, i.jsx)("div", {
            className: u.r9,
            children: (0, i.jsx)(a.K0, {
                variant: "overlay-secondary",
                size: "sm",
                icon: a.R2l,
                "aria-label": d.intl.string(d.t["Z19/zE"]),
                onClick: e => {
                    e.stopPropagation(), t()
                }
            })
        })]
    })
}