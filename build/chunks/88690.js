/** chunk id: 88690 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(990078),
    a = n(397927),
    r = n(964486),
    o = n(745317),
    d = n(430452),
    c = n(948641),
    u = n(985018),
    _ = n(233274);

function m() {
    let e = d.Ay.getCameraComponent(),
        t = (0, s.bG)([d.Ay], () => d.Ay.getVideoDeviceId()),
        n = c.A.useField("previewEnabled"),
        m = (0, s.bG)([d.Ay], () => d.Ay.isVideoAvailable());
    return ((0, r.l0)(() => {
        c.A.setState({
            previewEnabled: !1
        })
    }), n) ? (0, i.jsx)("div", {
        className: _.T,
        children: (0, i.jsxs)("div", {
            className: _.U,
            children: [(0, i.jsx)(e, {
                deviceId: t,
                width: 387,
                height: 218,
                disabled: !n
            }), (0, i.jsx)(o.k, {})]
        })
    }) : (0, i.jsx)("div", {
        className: _.T,
        children: (0, i.jsx)(l.m, {
            text: m ? null : u.intl.string(u.t["8jSzSe"]),
            children: (0, i.jsx)(a.Button, {
                variant: "primary",
                text: u.intl.string(u.t.JIf4v7),
                onClick: () => c.A.setState({
                    previewEnabled: !0
                }),
                disabled: !m
            })
        })
    })
}