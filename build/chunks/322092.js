/** chunk id: 322092 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(164974);

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
        className: l()(r.kL, d),
        children: [(0, i.jsxs)("div", {
            className: r.FS,
            children: [(0, i.jsx)(a.EpV, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: r.QW
            }), (0, i.jsx)(a.hKd, {
                size: 10,
                horizontal: !0
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(a.hKd, {
                    size: 1
                }), (0, i.jsx)(a.Text, {
                    className: r.pq,
                    variant: "text-sm/normal",
                    children: t
                }), null != n && (0, i.jsx)(a.Text, {
                    className: l()(r.pq, r.z3),
                    variant: "text-sm/normal",
                    children: n
                })]
            })]
        }), (0, i.jsx)(a.hKd, {
            size: 16,
            horizontal: !0
        }), (0, i.jsx)(a.Button, {
            variant: "critical-secondary",
            size: "sm",
            onClick: s,
            text: c,
            loading: o
        })]
    })
}