/** chunk id: 671470 params = (module,exports,require) **/
e.d(t, {
    A: () => s
});
var i = e(627968),
    l = e(397927),
    r = e(422258),
    a = e(93055),
    d = e(985018);

function s(n) {
    let t = (0, a.DZ)(),
        e = (0, a.Af)(n.id),
        s = (0, a.Rm)();
    if (__OVERLAY__ || !t || null == e) return null;
    let u = s.filter(n => null != n.id && n.id !== e.parentId),
        c = null != e.parentId;
    if (!c && 0 === u.length) return null;

    function o(n) {
        null != e && (0, r.JD)(e.id, n)
    }
    return (0, i.jsxs)(l.Drp, {
        id: "move-to-category",
        label: d.intl.string(d.t.FAplms),
        children: [c && (0, i.jsx)(l.rXV, {
            children: (0, i.jsx)(l.Drp, {
                id: "favorite-uncategorized",
                label: d.intl.string(d.t.GSfOoo),
                action: () => o(null)
            })
        }), u.length > 0 && (0, i.jsx)(l.rXV, {
            children: u.map(n => {
                let {
                    id: t,
                    name: e
                } = n;
                return (0, i.jsx)(l.Drp, {
                    id: `favorite-${t}`,
                    label: e,
                    action: () => o(t)
                }, t)
            })
        })]
    })
}