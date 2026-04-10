/** chunk id: 506999 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(985018),
    a = n(872146);
let s = e => {
    let {
        hasHub: t
    } = e;
    return (0, i.jsxs)("div", {
        className: a.kL,
        children: [(0, i.jsx)("div", {
            className: a.zc,
            children: (0, i.jsx)(l.Pfh, {
                size: "md",
                color: l.LU0.colors.WHITE.css
            })
        }), (0, i.jsx)(l.Text, {
            color: "text-strong",
            variant: "text-lg/semibold",
            className: a.wx,
            children: t ? r.intl.string(r.t.hsSHh8) : r.intl.string(r.t.Wf6iij)
        }), (0, i.jsx)(l.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            className: a.__invalid_description,
            children: t ? r.intl.string(r.t.FZ2J3Y) : r.intl.string(r.t.TvHcv6)
        }), (0, i.jsx)("div", {
            className: a.rQ
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
            text: t ? r.intl.string(r.t.IyjHD9) : r.intl.string(r.t["KU/aN4"])
        })]
    })
}