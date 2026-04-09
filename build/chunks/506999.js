/** chunk id: 506999 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var a = n(397927),
    r = n(985018),
    l = n(872146);
let s = e => {
    let {
        hasHub: t
    } = e;
    return (0, i.jsxs)("div", {
        className: l.kL,
        children: [(0, i.jsx)("div", {
            className: l.zc,
            children: (0, i.jsx)(a.Pfh, {
                size: "md",
                color: a.LU0.colors.WHITE.css
            })
        }), (0, i.jsx)(a.Text, {
            color: "text-strong",
            variant: "text-lg/semibold",
            className: l.wx,
            children: t ? r.intl.string(r.t.hsSHh8) : r.intl.string(r.t.Wf6iij)
        }), (0, i.jsx)(a.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            className: l.__invalid_description,
            children: t ? r.intl.string(r.t.FZ2J3Y) : r.intl.string(r.t.TvHcv6)
        }), (0, i.jsx)("div", {
            className: l.rQ
        }), (0, i.jsx)(a.Button, {
            fullWidth: !0,
            variant: t ? "secondary" : "active",
            onClick: () => (0, a.mMO)(async () => {
                let {
                    default: e
                } = await n.e("98363").then(n.bind(n, 780086));
                return t => (0, i.jsx)(e, {
                    ...t
                })
            }),
            text: t ? r.intl.string(r.t.IyjHD9) : r.intl.string(r.t["KU/aN4"])
        })]
    })
}