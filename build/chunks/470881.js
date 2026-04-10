/** chunk id: 470881 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var l = n(681154),
    r = n(311907),
    a = n(397927),
    s = n(429913),
    o = n(287809),
    d = n(985018),
    c = n(922123);

function u(e) {
    let {
        item: t
    } = e, n = "contentInventory" === t.data.kind ? t.data.content : null, u = n?.extra, A = n?.author_id, h = n?.content_type, _ = u?.type === "played_game_extra" || u?.type === "launched_activity_extra" ? u.application_id : void 0, m = (0, s.h)(_), g = (0, r.bG)([o.default], () => null != A ? o.default.getUser(A) : null, [A]), p = h === l.ContentInventoryEntryType.TOP_GAME, E = m?.getIconURL(240);
    return u?.type !== "played_game_extra" || "contentInventory" !== t.data.kind || null == m || null == g || null == E ? null : (0, i.jsx)("div", {
        className: c.kL,
        children: (0, i.jsxs)("div", {
            className: c.Nr,
            children: [(0, i.jsx)("img", {
                src: E,
                alt: m.name,
                className: c.Gt
            }), (0, i.jsxs)("div", {
                className: c.Vx,
                children: [(0, i.jsx)(a.Text, {
                    variant: "text-md/semibold",
                    color: "text-strong",
                    children: m.name
                }), p && (0, i.jsx)("div", {
                    className: c.qS,
                    children: (0, i.jsx)(a.Text, {
                        variant: "text-xs/semibold",
                        color: "text-brand",
                        children: d.intl.string(d.t["/50eHi"])
                    })
                })]
            })]
        })
    })
}