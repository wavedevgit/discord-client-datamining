/** Chunk was on 2347 **/
/** chunk id: 259142, original params: t,e,r (module,exports,require) **/
r.d(e, {
    default: () => m
});
var n = r(627968);
r(64700);
var o = r(284009),
    a = r.n(o),
    l = r(158954),
    c = r(311907),
    i = r(397927),
    s = r(871109),
    u = r(59375),
    d = r(94733),
    f = r(985018),
    p = r(14036);

function b(t) {
    let {
        attachment: e,
        guildId: r,
        productId: o
    } = t;
    return (0, n.jsxs)("li", {
        className: p.k,
        children: [(0, n.jsx)(u.A, {
            attachment: e
        }), (0, n.jsx)(d.A, {
            className: p.i,
            icon: i.s3U,
            text: void 0,
            guildId: r,
            productId: o,
            attachmentId: e.id
        })]
    })
}

function m(t) {
    var e;
    let {
        guildId: r,
        productId: o,
        onClose: i,
        transitionState: u
    } = t, d = (0, c.bG)([s.A], () => s.A.getGuildProduct(o));
    a()(null != d, "guildProductListing cannot be null");
    let p = null != (e = d.attachments) ? e : [];
    return (0, n.jsx)(l.Modal, {
        size: "md",
        transitionState: u,
        "aria-label": f.intl.string(f.t["3jaCac"]),
        title: d.name,
        subtitle: f.intl.format(f.t["6dOuaP"], {
            count: d.attachments_count
        }),
        actions: [],
        onClose: i,
        children: (0, n.jsx)("ul", {
            children: p.map(t => (0, n.jsx)(b, {
                guildId: r,
                productId: d.id,
                attachment: t
            }, t.id))
        })
    })
}