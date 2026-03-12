/** chunk id: 283900 params = (module,exports,require) **/
n.d(t, {
    A: () => _,
    H: () => u
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(854627),
    r = n(837921),
    a = n(870236),
    o = n(985018),
    d = n(639224);
let c = r.Ay.getEnableHardwareAcceleration() ? s.JsQ : s.euF,
    u = e => {
        let {
            user: t,
            avatarSize: n = s._3J.SIZE_48
        } = e, {
            avatarSrc: r,
            avatarDecorationSrc: d,
            eventHandlers: u
        } = (0, l.A)({
            userId: t?.id,
            size: n
        });
        return (0, i.jsx)("div", {
            ...u,
            children: (0, i.jsx)(c, {
                src: r,
                avatarDecoration: d,
                size: n,
                "aria-label": o.intl.formatToPlainString(a.default.kFj4h1, {
                    name: t.username
                })
            })
        })
    },
    _ = e => {
        let {
            currentUser: t,
            otherUser: n,
            children: s
        } = e;
        return (0, i.jsx)("div", {
            className: d.b,
            children: (0, i.jsxs)("div", {
                className: d.M,
                children: [(0, i.jsx)(u, {
                    user: t
                }), s, (0, i.jsx)(u, {
                    user: n
                })]
            })
        })
    }