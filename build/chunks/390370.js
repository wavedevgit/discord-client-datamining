/** chunk id: 390370 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(854627),
    r = n(837921),
    a = n(834981),
    o = n(475833),
    d = n(553946);
let c = r.Ay.getEnableHardwareAcceleration() ? s.JsQ : s.euF;

function u(e) {
    let {
        otherUser: t,
        status: n
    } = e, r = (0, a.XC)(t.id, n), {
        avatarSrc: u,
        avatarDecorationSrc: _,
        eventHandlers: m
    } = (0, l.A)({
        userId: t.id,
        size: s._3J.SIZE_40,
        animateOnHover: !0
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
            ...m,
            children: (0, i.jsx)(c, {
                className: d.my,
                src: u,
                avatarDecoration: _,
                size: s._3J.SIZE_40,
                "aria-label": t.username
            })
        }), (0, i.jsxs)("div", {
            className: d.yt,
            children: [(0, i.jsx)("div", {
                className: d.Vx,
                children: (0, i.jsx)(o.A, {
                    user: t
                })
            }), (0, i.jsx)(s.Text, {
                color: "text-muted",
                variant: "text-xs/normal",
                children: r
            })]
        })]
    })
}