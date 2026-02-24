/** chunk id: 322092, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(397927),
    r = n(164974);

function o(e) {
    let {
        message: t,
        error: n,
        onClick: s,
        submitting: o,
        className: c,
        ctaMessage: d
    } = e;
    return (0, i.jsxs)("div", {
        className: a()(r.kL, c),
        children: [(0, i.jsxs)("div", {
            className: r.FS,
            children: [(0, i.jsx)(l.EpV, {
                size: "custom",
                width: 20,
                height: 20,
                color: "currentColor",
                className: r.QW
            }), (0, i.jsx)(l.hKd, {
                size: 10,
                horizontal: !0
            }), (0, i.jsxs)("div", {
                children: [(0, i.jsx)(l.hKd, {
                    size: 1
                }), (0, i.jsx)(l.Text, {
                    className: r.pq,
                    variant: "text-sm/normal",
                    children: t
                }), null != n && (0, i.jsx)(l.Text, {
                    className: a()(r.pq, r.z3),
                    variant: "text-sm/normal",
                    children: n
                })]
            })]
        }), (0, i.jsx)(l.hKd, {
            size: 16,
            horizontal: !0
        }), (0, i.jsx)(l.Button, {
            variant: "critical-secondary",
            size: "sm",
            onClick: s,
            text: d,
            loading: o
        })]
    })
}