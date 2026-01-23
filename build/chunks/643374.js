/** Chunk was on 40556 **/
/** chunk id: 643374, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(397927),
    u = n(817363),
    o = n(93064);

function c(e) {
    let {
        filename: t,
        className: n,
        filters: a,
        buttonText: c,
        placeholder: d,
        onFileSelect: f
    } = e, m = i.useRef(null), g = i.useRef(null);
    return (0, l.jsx)(s.vN3, {
        ringTarget: m,
        within: !0,
        children: (0, l.jsxs)(s.FON, {
            ref: m,
            className: r()(n, o.U),
            children: [(0, l.jsx)(s.JMY, {
                size: "sm"
            }), (0, l.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "" !== t ? "text-default" : "text-muted",
                lineClamp: 1,
                children: "" !== t ? t : d
            }), (0, l.jsx)(s.Button, {
                "aria-hidden": !0,
                variant: "secondary",
                size: "sm",
                text: c,
                tabIndex: -1
            }), (0, l.jsx)(u.A, {
                ref: g,
                onChange: e => {
                    var t;
                    f(null == (t = e.currentTarget.files) ? void 0 : t[0])
                },
                multiple: !1,
                filters: a
            })]
        })
    })
}