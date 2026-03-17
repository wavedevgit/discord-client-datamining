/** chunk id: 671470 params = (module,exports,require) **/
e.d(t, {
    A: () => s
}), e(321073);
var i = e(627968);
e(64700);
var l = e(397927),
    r = e(422258),
    a = e(93055),
    d = e(985018);

function s(n) {
    let t = (0, a.DZ)(),
        e = (0, a.Af)(n.id),
        s = (0, a.Rm)();
    if (__OVERLAY__ || !t || null == e) return null;
    let [u, c] = function(n) {
        let t = [],
            e = null;
        for (let i of n) null == i.id ? e = i : t.push(i);
        return [e, t]
    }(s.filter(n => n.id !== e?.parentId));

    function o(n) {
        null != e && (0, r.JD)(e.id, n)
    }
    if (null == u && 0 === c.length) return null;
    let h = u?.id ?? null,
        A = u?.name ?? d.intl.string(d.t.GSfOoo);
    return (0, i.jsxs)(l.Drp, {
        id: "move-to-category",
        label: d.intl.string(d.t.FAplms),
        children: [null != u && (0, i.jsx)(l.rXV, {
            children: (0, i.jsx)(l.Drp, {
                id: "favorite-uncategorized",
                label: A,
                action: () => o(h)
            })
        }), c.length > 0 && (0, i.jsx)(l.rXV, {
            children: c.map(n => {
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