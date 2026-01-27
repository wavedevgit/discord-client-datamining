/** Chunk was on 92917 **/
/** chunk id: 120120, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var i = n(417597),
    l = n(397927),
    a = n(775602),
    s = n(763754),
    o = n(447215),
    c = n(888675),
    u = n(976860),
    d = n(141593),
    p = n(652215),
    m = n(985018),
    f = n(221110);

function g(e) {
    let {
        guildId: t,
        user: n,
        username: s
    } = e, o = (0, i.bG)([a.A], () => !a.A.useReducedMotion), c = n.getAvatarURL(t, 56, o), u = (0, r.jsx)("img", {
        src: c,
        className: f.dj,
        alt: ""
    });
    return (0, r.jsxs)("div", {
        className: f.uE,
        role: "img",
        "aria-label": m.intl.formatToPlainString(m.t["utf8+W"], {
            username: s
        }),
        children: [(0, r.jsx)(d.A, {
            avatar: u
        }), (0, r.jsx)(l.Text, {
            className: f.Bi,
            tag: "p",
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: m.intl.format(m.t["52BAtC"], {
                username: s,
                usernameHook: (e, t) => (0, r.jsx)(l.Text, {
                    tag: "span",
                    color: "status-positive-text",
                    variant: "heading-xxl/extrabold",
                    lineClamp: 3,
                    children: e
                }, t)
            })
        })]
    })
}

function h(e) {
    var t, i, l;
    let {
        channel: a,
        message: d,
        compact: f
    } = e, h = (0, s.Ay)(d), _ = (0, o.P)({
        user: d.author,
        channelId: a.id,
        guildId: a.guild_id,
        messageId: d.id
    })(h), b = m.intl.format(m.t.TQs67g, {
        username: h.nick,
        usernameHook: _,
        productName: null != (t = null == (l = d.purchaseNotification) || null == (i = l.guild_product_purchase) ? void 0 : i.product_name) ? t : "",
        handleProductListingClick: () => {
            var e, t, n;
            (0, u.pX)(p.BVt.GUILD_PRODUCT(a.guild_id, null != (e = null == (n = d.purchaseNotification) || null == (t = n.guild_product_purchase) ? void 0 : t.listing_id) ? e : ""))
        }
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(c.A, {
            icon: n(394803),
            timestamp: d.timestamp,
            compact: f,
            children: b
        }), (0, r.jsx)(g, {
            username: h.nick,
            guildId: a.guild_id,
            user: d.author
        })]
    })
}