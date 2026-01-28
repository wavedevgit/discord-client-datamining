/** Chunk was on 5606 **/
/** chunk id: 322092, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(164974);

function o(e) {
    let {
        message: t,
        error: n,
        onClick: i,
        submitting: o,
        className: c,
        ctaMessage: d
    } = e;
    return (0, r.jsxs)("div", {
        className: l()(a.kL, c),
        children: [(0, r.jsxs)("div", {
            className: a.FS,
            children: [(0, r.jsx)(s.EpV, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: a.QW
            }), (0, r.jsx)(s.hKd, {
                size: 10,
                horizontal: !0
            }), (0, r.jsxs)("div", {
                children: [(0, r.jsx)(s.hKd, {
                    size: 1
                }), (0, r.jsx)(s.Text, {
                    className: a.pq,
                    variant: "text-sm/normal",
                    children: t
                }), null != n && (0, r.jsx)(s.Text, {
                    className: l()(a.pq, a.z3),
                    variant: "text-sm/normal",
                    children: n
                })]
            })]
        }), (0, r.jsx)(s.hKd, {
            size: 16,
            horizontal: !0
        }), (0, r.jsx)(s.Button, {
            variant: "critical-secondary",
            size: "sm",
            onClick: i,
            text: d,
            loading: o
        })]
    })
}