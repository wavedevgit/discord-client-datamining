/** chunk id: 714308 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(327479),
    r = n(985018),
    a = n(519983),
    o = n(193921);

function d(e) {
    let {
        onClickManageSubscription: t,
        count: n
    } = e;
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(s.Heading, {
            variant: "heading-md/bold",
            children: r.intl.string(r.t["48ywCu"])
        }), (0, i.jsx)(s.hKd, {
            size: 4
        }), (0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            className: a.yV,
            children: r.intl.string(r.t.VWxmSo)
        }), (0, i.jsx)(s.hKd, {
            size: 24
        }), (0, i.jsxs)("div", {
            className: a.Nr,
            children: [(0, i.jsx)("img", {
                src: o,
                alt: "",
                className: a._e
            }), (0, i.jsxs)("div", {
                className: a.FS,
                children: [(0, i.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    className: a.wx,
                    children: r.intl.string(r.t["48ywCu"])
                }), (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: a.h_,
                    children: r.intl.format(r.t["/esXLj"], {
                        numSubscriptions: n
                    })
                })]
            }), (0, i.jsx)(l.A, {
                onClick: t,
                text: r.intl.string(r.t["z5YcJ+"])
            })]
        })]
    })
}