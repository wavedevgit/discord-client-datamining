/** chunk id: 506999 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(985018),
    r = n(333241);
let s = e => {
    let {
        hasHub: t
    } = e;
    return (0, i.jsxs)("div", {
        className: r.kL,
        children: [(0, i.jsx)("div", {
            className: r.zc,
            children: (0, i.jsx)(l.Pfh, {
                size: "md",
                color: l.LU0.colors.WHITE.css
            })
        }), (0, i.jsx)(l.Text, {
            color: "text-strong",
            variant: "text-lg/semibold",
            className: r.wx,
            children: t ? a.intl.string(a.t.hsSHh8) : a.intl.string(a.t.Wf6iij)
        }), (0, i.jsx)(l.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            className: r.__invalid_description,
            children: t ? a.intl.string(a.t.FZ2J3Y) : a.intl.string(a.t.TvHcv6)
        }), (0, i.jsx)("div", {
            className: r.rQ
        }), (0, i.jsx)(l.Button, {
            fullWidth: !0,
            variant: t ? "secondary" : "active",
            onClick: () => (0, l.mMO)(async () => {
                let {
                    default: e
                } = await n.e("98363").then(n.bind(n, 780086));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            }),
            text: t ? a.intl.string(a.t.IyjHD9) : a.intl.string(a.t["KU/aN4"])
        })]
    })
}