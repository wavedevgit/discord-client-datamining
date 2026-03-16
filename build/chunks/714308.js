/** chunk id: 714308 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(327479),
    a = n(985018),
    r = n(869678),
    o = n(193921);

function d(e) {
    let {
        onClickManageSubscription: t,
        count: n
    } = e;
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)(s.Heading, {
            variant: "heading-md/bold",
            children: a.intl.string(a.t["48ywCu"])
        }), (0, i.jsx)(s.hKd, {
            size: 4
        }), (0, i.jsx)(s.Text, {
            variant: "text-md/normal",
            className: r.yV,
            children: a.intl.string(a.t.VWxmSo)
        }), (0, i.jsx)(s.hKd, {
            size: 24
        }), (0, i.jsxs)("div", {
            className: r.Nr,
            children: [(0, i.jsx)("img", {
                src: o,
                alt: "",
                className: r._e
            }), (0, i.jsxs)("div", {
                className: r.FS,
                children: [(0, i.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    className: r.wx,
                    children: a.intl.string(a.t["48ywCu"])
                }), (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    className: r.h_,
                    children: a.intl.format(a.t["/esXLj"], {
                        numSubscriptions: n
                    })
                })]
            }), (0, i.jsx)(l.A, {
                onClick: t,
                text: a.intl.string(a.t["z5YcJ+"])
            })]
        })]
    })
}