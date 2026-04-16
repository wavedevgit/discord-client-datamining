/** chunk id: 828822 params = (module,exports,require) **/
l.d(n, {
    A: () => p
});
var t = l(627968);
l(64700);
var i = l(503698),
    s = l.n(i),
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
    } = (0, o.V)(e), i = () => {};
    return (0, t.jsxs)("div", {
        onClick: i,
        className: s()(c.my, c.vk, u.kL),
        ...l,
        children: [(0, t.jsx)(m, {
            ...n,
            imageClassName: s()(c.Lw, u.HU)
        }), (0, t.jsx)("div", {
            className: u.r9,
            children: (0, t.jsx)(a.K0, {
                variant: "overlay-secondary",
                size: "sm",
                icon: a.R2l,
                "aria-label": d.intl.string(d.t["Z19/zE"]),
                onClick: e => {
                    e.stopPropagation(), i()
                }
            })
        })]
    })
}