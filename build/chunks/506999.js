/** chunk id: 506999 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(985018),
    a = n(875515);
let s = e => {
    let {
        hasHub: t
    } = e;
    return (0, i.jsxs)("div", {
        className: a.kL,
        children: [(0, i.jsx)("div", {
            className: a.zc,
            children: (0, i.jsx)(r.Pfh, {
                size: "md",
                color: r.LU0.colors.WHITE.css
            })
        }), (0, i.jsx)(r.Text, {
            color: "text-strong",
            variant: "text-lg/semibold",
            className: a.wx,
            children: t ? l.intl.string(l.t.hsSHh8) : l.intl.string(l.t.Wf6iij)
        }), (0, i.jsx)(r.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            className: a.__invalid_description,
            children: t ? l.intl.string(l.t.FZ2J3Y) : l.intl.string(l.t.TvHcv6)
        }), (0, i.jsx)("div", {
            className: a.rQ
        }), (0, i.jsx)(r.Button, {
            fullWidth: !0,
            variant: t ? "secondary" : "active",
            onClick: () => (0, r.mMO)(async () => {
                let {
                    default: e
                } = await n.e("98363").then(n.bind(n, 780086));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            }),
            text: t ? l.intl.string(l.t.IyjHD9) : l.intl.string(l.t["KU/aN4"])
        })]
    })
}