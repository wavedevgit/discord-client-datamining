/** Chunk was on 57287 **/
/** chunk id: 671470, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(321073), n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(422258),
    a = n(93055),
    c = n(616075),
    o = n(985018);

function u(e) {
    let t = (0, a.Fe)(),
        n = (0, a.Af)(e.id),
        u = (0, a.Rm)(),
        {
            isFavoritesPerk: s
        } = (0, c.l)("useChannelMoveToCategory");
    if (__OVERLAY__ || !t || null == n || !s) return null;
    let [d, b] = function(e) {
        let t = [],
            n = null;
        for (let r of e) null == r.id ? n = r : t.push(r);
        return [n, t]
    }(u.filter(e => e.id !== (null == n ? void 0 : n.parentId)));

    function p(e) {
        null != n && (0, l.JD)(n.id, e)
    }
    return null == d && 0 === b.length ? null : (0, r.jsxs)(i.Drp, {
        id: "move-to-category",
        label: o.intl.string(o.t.FAplms),
        children: [null != d && (0, r.jsx)(i.rXV, {
            children: (0, r.jsx)(i.Drp, {
                id: "favorite-uncategorized",
                label: d.name,
                action: () => p(d.id)
            })
        }), b.length > 0 && (0, r.jsx)(i.rXV, {
            children: b.map(e => {
                let {
                    id: t,
                    name: n
                } = e;
                return (0, r.jsx)(i.Drp, {
                    id: "favorite-".concat(t),
                    label: n,
                    action: () => p(t)
                }, t)
            })
        })]
    })
}