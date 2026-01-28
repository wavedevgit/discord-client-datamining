/** Chunk was on 60449 **/
/** chunk id: 88690, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(990078),
    r = n(397927),
    a = n(964486),
    o = n(745317),
    c = n(430452),
    d = n(948641),
    u = n(985018),
    g = n(613844);

function h() {
    let e = c.A.getCameraComponent(),
        t = (0, s.bG)([c.A], () => c.A.getVideoDeviceId()),
        n = d.A.useField("previewEnabled"),
        h = (0, s.bG)([c.A], () => c.A.isVideoAvailable());
    return ((0, a.l0)(() => {
        d.A.setState({
            previewEnabled: !1
        })
    }), n) ? (0, i.jsx)("div", {
        className: g.T,
        children: (0, i.jsxs)("div", {
            className: g.U,
            children: [(0, i.jsx)(e, {
                deviceId: t,
                width: 387,
                height: 218,
                disabled: !n
            }), (0, i.jsx)(o.k, {})]
        })
    }) : (0, i.jsx)("div", {
        className: g.T,
        children: (0, i.jsx)(l.m, {
            text: h ? null : u.intl.string(u.t["8jSzSe"]),
            children: (0, i.jsx)(r.Button, {
                variant: "primary",
                text: u.intl.string(u.t.JIf4v7),
                onClick: () => d.A.setState({
                    previewEnabled: !0
                }),
                disabled: !h
            })
        })
    })
}