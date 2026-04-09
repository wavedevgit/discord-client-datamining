/** chunk id: 643374 params = (module,exports,require) **/
i.d(t, {
    A: () => d
});
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(397927),
    o = i(817363),
    u = i(386014);

function d(e) {
    let {
        filename: t,
        className: i,
        filters: a,
        buttonText: d,
        placeholder: m,
        onFileSelect: c
    } = e, g = n.useRef(null), f = n.useRef(null);
    return (0, l.jsx)(r.vN3, {
        ringTarget: g,
        within: !0,
        children: (0, l.jsxs)(r.FON, {
            ref: g,
            className: s()(i, u.U),
            children: [(0, l.jsx)(r.JMY, {
                size: "sm"
            }), (0, l.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "" !== t ? "text-default" : "text-muted",
                lineClamp: 1,
                children: "" !== t ? t : m
            }), (0, l.jsx)(r.Button, {
                "aria-hidden": !0,
                variant: "secondary",
                size: "sm",
                text: d,
                tabIndex: -1
            }), (0, l.jsx)(o.A, {
                ref: f,
                onChange: e => {
                    c(e.currentTarget.files?.[0])
                },
                multiple: !1,
                filters: a
            })]
        })
    })
}