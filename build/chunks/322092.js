/** chunk id: 322092 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(268353);

function o(e) {
    let {
        message: t,
        error: n,
        onClick: s,
        submitting: o,
        className: d,
        ctaMessage: c
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(a.kL, d),
        children: [(0, i.jsxs)("div", {
            className: a.FS,
            children: [(0, i.jsx)(r.EpV, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: a.QW
            }), (0, i.jsx)(r.hKd, {
                size: 10,
                horizontal: !0
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(r.hKd, {
                    size: 1
                }), (0, i.jsx)(r.Text, {
                    className: a.pq,
                    variant: "text-sm/normal",
                    children: t
                }), null != n && (0, i.jsx)(r.Text, {
                    className: l()(a.pq, a.z3),
                    variant: "text-sm/normal",
                    children: n
                })]
            })]
        }), (0, i.jsx)(r.hKd, {
            size: 16,
            horizontal: !0
        }), (0, i.jsx)(r.Button, {
            variant: "critical-secondary",
            size: "sm",
            onClick: s,
            text: c,
            loading: o
        })]
    })
}