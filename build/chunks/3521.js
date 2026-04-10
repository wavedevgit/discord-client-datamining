/** chunk id: 3521 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(990078),
    r = n(397927),
    a = n(964486),
    o = n(745317),
    d = n(430452),
    c = n(248864),
    u = n(985018),
    m = n(528612);

function g() {
    let e = d.Ay.getCameraComponent(),
        t = (0, s.bG)([d.Ay], () => d.Ay.getVideoDeviceId()),
        n = c.A.useField("previewEnabled"),
        g = (0, s.bG)([d.Ay], () => d.Ay.isVideoAvailable());
    return ((0, a.l0)(() => {
        c.A.setState({
            previewEnabled: !1
        })
    }), n) ? (0, i.jsx)("div", {
        className: m.T,
        children: (0, i.jsxs)("div", {
            className: m.U,
            children: [(0, i.jsx)(e, {
                deviceId: t,
                width: 387,
                height: 218,
                disabled: !n
            }), (0, i.jsx)(o.k, {})]
        })
    }) : (0, i.jsx)("div", {
        className: m.T,
        children: (0, i.jsx)(l.m, {
            text: g ? null : u.intl.string(u.t["8jSzSe"]),
            children: (0, i.jsx)(r.Button, {
                variant: "primary",
                text: u.intl.string(u.t.JIf4v7),
                onClick: () => c.A.setState({
                    previewEnabled: !0
                }),
                disabled: !g
            })
        })
    })
}