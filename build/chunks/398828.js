/** Chunk was on 78870 **/
/** chunk id: 398828, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => h
});
var n = r(627968);
r(64700);
var i = r(417597),
    o = r(397927),
    l = r(775602),
    s = r(289397),
    c = r(500770),
    a = r(253932),
    d = r(580630),
    u = r(218394),
    p = r(319664),
    f = r(634654),
    C = r(652215),
    j = r(985018),
    b = r(721746);

function O() {
    let e = a.kt.useSetting(),
        t = (0, u.j)(),
        r = (0, i.bG)([l.A], () => l.A.useReducedMotion),
        o = t && e && !r ? (0, s.n)("server_products/storefront/question-mark.gif") : (0, s.n)("server_products/storefront/question-mark.png");
    return (0, n.jsxs)("div", {
        className: b.Xq,
        children: [(0, n.jsx)(c.A, {
            role: void 0,
            ctaComponent: null,
            imageUrl: (0, s.n)("server_products/storefront/preview-thumbnail.png"),
            name: j.intl.string(j.t.U2hvDo),
            description: j.intl.string(j.t["w/TNGT"]),
            formattedPrice: (0, d.$g)(0, C.Yri.USD, {
                localeMatcher: "best fit",
                style: "currency",
                maximumSignificantDigits: 1
            }),
            shouldShowFullDescriptionButton: !1,
            productType: j.intl.string(j.t.ih4QMU),
            onTapCard: () => null,
            hideRoleTag: !0,
            lineClamp: 3,
            thumbnailHeight: 197,
            cardWidth: 332,
            descriptionTextVariant: "text-xs/normal"
        }), (0, n.jsx)("img", {
            className: b.kz,
            alt: "",
            src: o
        })]
    })
}

function g() {
    return (0, n.jsxs)("div", {
        className: b.od,
        children: [(0, n.jsx)(o.mir, {
            size: "md",
            color: "currentColor",
            className: b.ZC
        }), (0, n.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: j.intl.format(j.t.umfZ8q, {
                learnMoreLink: f.rv
            })
        })]
    })
}

function h(e) {
    let {
        guildId: t
    } = e;
    return (0, n.jsxs)("div", {
        className: b.Bh,
        children: [(0, n.jsxs)("div", {
            className: b.gp,
            children: [(0, n.jsx)(O, {}), (0, n.jsx)(p.A, {
                guildId: t,
                showCTA: !0
            })]
        }), (0, n.jsx)(g, {})]
    })
}