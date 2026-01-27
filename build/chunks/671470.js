/** Chunk was on 57287 **/
/** chunk id: 671470, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
}), n(321073), n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(422258),
    c = n(93055),
    o = n(616075),
    a = n(985018);

function s(e) {
    let t = (0, c.Fe)(),
        n = (0, c.Af)(e.id),
        s = (0, c.Rm)(),
        {
            isFavoritesPerk: u
        } = (0, o.l)("useChannelMoveToCategory");
    if (__OVERLAY__ || !t || null == n || !u) return null;
    let [d, p] = function(e) {
        let t = [],
            n = null;
        for (let r of e) null == r.id ? n = r : t.push(r);
        return [n, t]
    }(s.filter(e => e.id !== (null == n ? void 0 : n.parentId)));

    function b(e) {
        null != n && (0, l.JD)(n.id, e)
    }
    return null == d && 0 === p.length ? null : (0, r.jsxs)(i.Drp, {
        id: "move-to-category",
        label: a.intl.string(a.t.FAplms),
        children: [null != d && (0, r.jsx)(i.rXV, {
            children: (0, r.jsx)(i.Drp, {
                id: "favorite-uncategorized",
                label: d.name,
                action: () => b(d.id)
            })
        }), p.length > 0 && (0, r.jsx)(i.rXV, {
            children: p.map(e => {
                let {
                    id: t,
                    name: n
                } = e;
                return (0, r.jsx)(i.Drp, {
                    id: "favorite-".concat(t),
                    label: n,
                    action: () => b(t)
                }, t)
            })
        })]
    })
}