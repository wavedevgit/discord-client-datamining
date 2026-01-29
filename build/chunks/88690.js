/** Chunk was on 4670 **/
/** chunk id: 88690, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => A
});
var n = i(627968);
i(64700);
var l = i(311907),
    s = i(990078),
    r = i(397927),
    a = i(964486),
    u = i(745317),
    o = i(430452),
    d = i(948641),
    T = i(985018),
    c = i(613844);

function A() {
    let e = o.A.getCameraComponent(),
        t = (0, l.bG)([o.A], () => o.A.getVideoDeviceId()),
        i = d.A.useField("previewEnabled"),
        A = (0, l.bG)([o.A], () => o.A.isVideoAvailable());
    return ((0, a.l0)(() => {
        d.A.setState({
            previewEnabled: !1
        })
    }), i) ? (0, n.jsx)("div", {
        className: c.T,
        children: (0, n.jsxs)("div", {
            className: c.U,
            children: [(0, n.jsx)(e, {
                deviceId: t,
                width: 387,
                height: 218,
                disabled: !i
            }), (0, n.jsx)(u.k, {})]
        })
    }) : (0, n.jsx)("div", {
        className: c.T,
        children: (0, n.jsx)(s.m, {
            text: A ? null : T.intl.string(T.t["8jSzSe"]),
            children: (0, n.jsx)(r.Button, {
                variant: "primary",
                text: T.intl.string(T.t.JIf4v7),
                onClick: () => d.A.setState({
                    previewEnabled: !0
                }),
                disabled: !A
            })
        })
    })
}