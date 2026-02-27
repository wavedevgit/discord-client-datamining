/** chunk id: 283900, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _,
    H: () => u
});
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(854627),
    l = n(837921),
    r = n(842130),
    o = n(985018),
    c = n(241938);
let d = l.Ay.getEnableHardwareAcceleration() ? s.JsQ : s.euF,
    u = e => {
        let {
            user: t,
            avatarSize: n = s._3J.SIZE_48
        } = e, {
            avatarSrc: l,
            avatarDecorationSrc: c,
            eventHandlers: u
        } = (0, a.A)({
            userId: t?.id,
            size: n
        });
        return (0, i.jsx)("div", {
            ...u,
            children: (0, i.jsx)(d, {
                src: l,
                avatarDecoration: c,
                size: n,
                "aria-label": o.intl.formatToPlainString(r.default.kFj4h1, {
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
            className: c.b,
            children: (0, i.jsxs)("div", {
                className: c.M,
                children: [(0, i.jsx)(u, {
                    user: t
                }), s, (0, i.jsx)(u, {
                    user: n
                })]
            })
        })
    }