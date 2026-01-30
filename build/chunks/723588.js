/** chunk id: 723588, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
}), n(228524);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(732955),
    a = n(397927),
    o = n(985018),
    c = n(109878),
    d = n(595654),
    u = n(713052);

function _(e) {
    let {
        onClickManageSubscription: t,
        count: n
    } = e;
    return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(a.Heading, {
            variant: "heading-md/bold",
            children: o.intl.string(o.t["KzCF/6"])
        }), (0, r.jsx)(a.hKd, {
            size: 4
        }), (0, r.jsx)(a.Text, {
            variant: "text-md/normal",
            className: c.yV,
            children: o.intl.string(o.t["3D7qCu"])
        }), (0, r.jsx)(a.hKd, {
            size: 24
        }), (0, r.jsxs)("div", {
            className: l()(d.Qn, c.Nr),
            children: [(0, r.jsx)("img", {
                src: u,
                alt: "",
                className: c.RI
            }), (0, r.jsxs)("div", {
                className: c.FS,
                children: [(0, r.jsx)(a.Heading, {
                    variant: "heading-xl/semibold",
                    className: c.wx,
                    children: o.intl.string(o.t["KzCF/6"])
                }), (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: c.h_,
                    children: o.intl.format(o.t["m+pcOO"], {
                        numSubscriptions: n
                    })
                })]
            }), (0, r.jsx)(s.$nd, {
                size: "sm",
                variant: "overlay-primary",
                text: o.intl.string(o.t["3a8Xxj"]),
                onClick: t
            })]
        })]
    })
}