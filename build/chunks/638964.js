/** chunk id: 638964, original params: e,t,r (module,exports,require) **/
r.d(t, {
    h: () => O
});
var n = r(627968),
    i = r(64700),
    o = r(503698),
    l = r.n(o),
    s = r(735438),
    c = r.n(s),
    a = r(397927),
    d = r(793574),
    u = r(250627),
    p = r(284605),
    f = r(558060),
    C = r(284683),
    j = r(985018),
    b = r(77142);

function O(e) {
    let {
        guildId: t,
        productId: r
    } = e, {
        listingsLoaded: o
    } = (0, u.bb)(t), s = (0, u.fZ)(t), O = i.useRef(null), {
        sortOption: g
    } = (0, f.R)(), h = i.useMemo(() => (function(e, t) {
        let r, n;
        switch (t) {
            case C.p$.NAME:
                r = e => e.name.toLowerCase(), n = "asc";
                break;
            case C.p$.PRICE_ASC:
                r = "price_tier", n = "asc";
                break;
            case C.p$.PRICE_DESC:
                r = "price_tier", n = "desc";
                break;
            case C.p$.NEWEST_ARRIVALS:
                r = "published_at", n = "desc";
                break;
            default:
                return e
        }
        return c().orderBy(e, [r], [n])
    })(s, g), [s, g]);
    return o ? (0, n.jsx)("ul", {
        className: b.Ui,
        "aria-label": j.intl.string(j.t.qe4kTa),
        children: h.map(e => (0, n.jsx)("li", {
            className: b.Nr,
            children: (0, n.jsx)("div", {
                className: l()(b.Ux, {
                    [b.Oj]: e.id === r
                }),
                ref: e.id === r ? O : void 0,
                onLoad: () => {
                    let t = O.current;
                    null != t && e.id === r && (t.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    }), setTimeout(() => {
                        t.classList.remove(b.Oj)
                    }, 2e3))
                },
                children: (0, n.jsx)(p.i, {
                    guildProductListing: e,
                    guildId: t,
                    location: d.A.GUILD_SHOP_PAGE,
                    shouldShowFullDescriptionButton: !1,
                    hideRoleTag: !0,
                    lineClamp: 2,
                    cardWidth: 332,
                    cardHeight: 347,
                    thumbnailHeight: 187,
                    descriptionTextVariant: "text-xs/normal",
                    showOpaqueBackground: !0
                }, e.id)
            }, e.id)
        }, e.id))
    }) : (0, n.jsx)(a.y$y, {})
}