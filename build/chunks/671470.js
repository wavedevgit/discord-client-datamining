/** chunk id: 671470 params = (module,exports,require) **/
i.d(t, {
    A: () => s
}), i(321073);
var e = i(627968);
i(64700);
var l = i(397927),
    r = i(422258),
    a = i(93055),
    d = i(985018);

function s(n) {
    let t = (0, a.Fe)(),
        i = (0, a.Af)(n.id),
        s = (0, a.Rm)();
    if (__OVERLAY__ || !t || null == i) return null;
    let [u, o] = function(n) {
        let t = [],
            i = null;
        for (let e of n) null == e.id ? i = e : t.push(e);
        return [i, t]
    }(s.filter(n => n.id !== i?.parentId));

    function c(n) {
        null != i && (0, r.JD)(i.id, n)
    }
    if (null == u && 0 === o.length) return null;
    let h = u?.id ?? null,
        A = u?.name ?? d.intl.string(d.t.GSfOoo);
    return (0, e.jsxs)(l.Drp, {
        id: "move-to-category",
        label: d.intl.string(d.t.FAplms),
        children: [null != u && (0, e.jsx)(l.rXV, {
            children: (0, e.jsx)(l.Drp, {
                id: "favorite-uncategorized",
                label: A,
                action: () => c(h)
            })
        }), o.length > 0 && (0, e.jsx)(l.rXV, {
            children: o.map(n => {
                let {
                    id: t,
                    name: i
                } = n;
                return (0, e.jsx)(l.Drp, {
                    id: `favorite-${t}`,
                    label: i,
                    action: () => c(t)
                }, t)
            })
        })]
    })
}