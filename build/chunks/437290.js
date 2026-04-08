/** chunk id: 437290 params = (module,exports,require) **/
s.d(t, {
    A: () => o
});
var a = s(627968),
    i = s(64700),
    l = s(503698),
    r = s.n(l),
    n = s(990078),
    d = s(397927),
    c = s(854627),
    u = s(205744);

function o(e) {
    let {
        user: t,
        checked: s,
        onChange: l,
        disabled: o,
        tooltipConfig: m
    } = e, x = i.useRef(null), {
        avatarSrc: f,
        eventHandlers: _
    } = (0, c.A)({
        userId: t?.id,
        size: d._3J.SIZE_32
    }), h = t.globalName ?? t.username;
    return (0, a.jsx)(n.m, {
        text: m?.isActive(t, o) ? m.text(t) : null,
        position: "top",
        anchorRef: x,
        asContainer: !0,
        children: (0, a.jsxs)(d.DUT, {
            className: r()(u.kL, {
                [u.vk]: !o
            }),
            onClick: () => {
                o || l(t, !s)
            },
            children: [(0, a.jsx)("div", {
                className: u.dj,
                children: (0, a.jsx)(d.euF, {
                    className: r()({
                        [u.SU]: o
                    }),
                    src: f,
                    "aria-label": h,
                    size: d._3J.SIZE_32,
                    ..._
                })
            }), (0, a.jsxs)("div", {
                className: u.QV,
                children: [(0, a.jsx)(d.Text, {
                    className: u.nT,
                    color: o ? "text-muted" : "text-default",
                    variant: "text-md/semibold",
                    children: h
                }), (0, a.jsx)(d.Text, {
                    className: u.nT,
                    color: o ? "text-muted" : "text-subtle",
                    variant: "text-xs/normal",
                    children: t.username
                })]
            }), (0, a.jsx)("div", {
                ref: x,
                className: u.kv,
                children: (0, a.jsx)(d.P7L, {
                    checked: s,
                    disabled: o
                })
            })]
        })
    })
}