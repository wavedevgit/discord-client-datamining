/** chunk id: 671470 params = (module,exports,require) **/
i.d(t, {
    A: () => c
}), i(321073);
var e = i(627968);
i(64700);
var l = i(397927),
    r = i(422258),
    a = i(93055),
    d = i(985018);

function c(n) {
    let t = (0, a.Fe)(),
        i = (0, a.Af)(n.id),
        c = (0, a.Rm)();
    if (__OVERLAY__ || !t || null == i) return null;
    let [s, o] = function(n) {
        let t = [],
            i = null;
        for (let e of n) null == e.id ? i = e : t.push(e);
        return [i, t]
    }(c.filter(n => n.id !== i?.parentId));

    function u(n) {
        null != i && (0, r.JD)(i.id, n)
    }
    if (null == s && 0 === o.length) return null;
    let A = s?.id ?? null,
        _ = s?.name ?? d.intl.string(d.t.GSfOoo);
    return (0, e.jsxs)(l.Drp, {
        id: "move-to-category",
        label: d.intl.string(d.t.FAplms),
        children: [null != s && (0, e.jsx)(l.rXV, {
            children: (0, e.jsx)(l.Drp, {
                id: "favorite-uncategorized",
                label: _,
                action: () => u(A)
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
                    action: () => u(t)
                }, t)
            })
        })]
    })
}