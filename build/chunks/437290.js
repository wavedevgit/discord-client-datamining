/** chunk id: 437290, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => u
});
var a = s(627968),
    i = s(64700),
    l = s(503698),
    r = s.n(l),
    n = s(990078),
    c = s(397927),
    d = s(854627),
    o = s(675552);

function u(e) {
    let {
        user: t,
        checked: s,
        onChange: l,
        disabled: u,
        tooltipConfig: m
    } = e, x = i.useRef(null), {
        avatarSrc: _,
        eventHandlers: f
    } = (0, d.A)({
        userId: t?.id,
        size: c._3J.SIZE_32
    }), h = t.globalName ?? t.username;
    return (0, a.jsx)(n.m, {
        text: m?.isActive(t, u) ? m.text(t) : null,
        position: "top",
        anchorRef: x,
        asContainer: !0,
        children: (0, a.jsxs)(c.DUT, {
            className: r()(o.kL, {
                [o.vk]: !u
            }),
            onClick: () => {
                u || l(t, !s)
            },
            children: [(0, a.jsx)("div", {
                className: o.dj,
                children: (0, a.jsx)(c.euF, {
                    className: r()({
                        [o.SU]: u
                    }),
                    src: _,
                    "aria-label": h,
                    size: c._3J.SIZE_32,
                    ...f
                })
            }), (0, a.jsxs)("div", {
                className: o.QV,
                children: [(0, a.jsx)(c.Text, {
                    className: o.nT,
                    color: u ? "text-muted" : "text-default",
                    variant: "text-md/semibold",
                    children: h
                }), (0, a.jsx)(c.Text, {
                    className: o.nT,
                    color: u ? "text-muted" : "text-subtle",
                    variant: "text-xs/normal",
                    children: t.username
                })]
            }), (0, a.jsx)("div", {
                ref: x,
                className: o.kv,
                children: (0, a.jsx)(c.Checkbox, {
                    disabled: u,
                    checked: s,
                    label: ""
                })
            })]
        })
    })
}