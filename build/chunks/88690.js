/** chunk id: 88690, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => S
});
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(990078),
    a = i(397927),
    r = i(964486),
    u = i(745317),
    o = i(430452),
    d = i(948641),
    A = i(985018),
    T = i(613844);

function S() {
    let t = o.Ay.getCameraComponent(),
        e = (0, l.bG)([o.Ay], () => o.Ay.getVideoDeviceId()),
        i = d.A.useField("previewEnabled"),
        S = (0, l.bG)([o.Ay], () => o.Ay.isVideoAvailable());
    return ((0, r.l0)(() => {
        d.A.setState({
            previewEnabled: !1
        })
    }), i) ? (0, n.jsx)("div", {
        className: T.T,
        children: (0, n.jsxs)("div", {
            className: T.U,
            children: [(0, n.jsx)(t, {
                deviceId: e,
                width: 387,
                height: 218,
                disabled: !i
            }), (0, n.jsx)(u.k, {})]
        })
    }) : (0, n.jsx)("div", {
        className: T.T,
        children: (0, n.jsx)(s.m, {
            text: S ? null : A.intl.string(A.t["8jSzSe"]),
            children: (0, n.jsx)(a.Button, {
                variant: "primary",
                text: A.intl.string(A.t.JIf4v7),
                onClick: () => d.A.setState({
                    previewEnabled: !0
                }),
                disabled: !S
            })
        })
    })
}