/** chunk id: 686533 params = (module,exports,require) **/
n.d(t, {
    $: () => o,
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(502040);
let o = e => {
    e.preventDefault(), e.stopPropagation()
};

function d(e) {
    let {
        header: t,
        icon: n,
        title: s,
        description: o,
        action: d,
        hint: c,
        warning: u,
        onClick: m,
        "aria-label": g,
        className: _
    } = e;
    return (0, i.jsxs)("div", {
        className: l()(a.HS, _),
        children: [(0, i.jsxs)(r.sqX, {
            "aria-label": g,
            onClick: m,
            children: [null != t && (0, i.jsx)("div", {
                className: a.x_,
                children: t
            }), (0, i.jsxs)("div", {
                className: a.rN,
                children: [null != n && (0, i.jsx)("div", {
                    className: a.$t,
                    children: n
                }), (0, i.jsxs)("div", {
                    className: a.c8,
                    children: [(0, i.jsx)(r.Text, {
                        variant: "text-md/medium",
                        color: "text-strong",
                        className: a.SZ,
                        children: s
                    }), null != o && (0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: o
                    }), null != c && (0, i.jsx)(r.Text, {
                        variant: "text-xxs/medium",
                        color: "text-muted",
                        children: c
                    })]
                }), (0, i.jsx)("div", {
                    className: a.a$,
                    children: d
                })]
            })]
        }), (0, i.jsx)("div", {
            className: a.Om,
            children: u
        })]
    })
}