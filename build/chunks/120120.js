/** chunk id: 120120 params = (module,exports,require) **/
n.d(t, {
    A: () => I
});
var i = n(627968);
n(64700);
var a = n(417597),
    l = n(397927),
    r = n(775602),
    s = n(763754),
    o = n(447215),
    c = n(888675),
    d = n(976860),
    u = n(141593),
    _ = n(652215),
    m = n(985018),
    A = n(723788);

function E(e) {
    let {
        guildId: t,
        user: n,
        username: s
    } = e, o = (0, a.bG)([r.A], () => !r.A.useReducedMotion), c = n.getAvatarURL(t, 56, o), d = (0, i.jsx)("img", {
        src: c,
        className: A.dj,
        alt: ""
    });
    return (0, i.jsxs)("div", {
        className: A.uE,
        role: "img",
        "aria-label": m.intl.formatToPlainString(m.t["utf8+W"], {
            username: s
        }),
        children: [(0, i.jsx)(u.A, {
            avatar: d
        }), (0, i.jsx)(l.Text, {
            className: A.Bi,
            tag: "p",
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: m.intl.format(m.t["52BAtC"], {
                username: s,
                usernameHook: (e, t) => (0, i.jsx)(l.Text, {
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

function I(e) {
    let {
        channel: t,
        message: a,
        compact: l
    } = e, r = (0, s.Ay)(a), u = (0, o.P)({
        user: a.author,
        channelId: t.id,
        guildId: t.guild_id,
        messageId: a.id
    })(r), A = m.intl.format(m.t.TQs67g, {
        username: r.nick,
        usernameHook: u,
        productName: a.purchaseNotification?.guild_product_purchase?.product_name ?? "",
        handleProductListingClick: () => {
            (0, d.pX)(_.BVt.GUILD_PRODUCT(t.guild_id, a.purchaseNotification?.guild_product_purchase?.listing_id ?? ""))
        }
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.A, {
            icon: n(617184),
            timestamp: a.timestamp,
            compact: l,
            children: A
        }), (0, i.jsx)(E, {
            username: r.nick,
            guildId: t.guild_id,
            user: a.author
        })]
    })
}