/** chunk id: 120120 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968);
n(64700);
var l = n(417597),
    a = n(397927),
    r = n(775602),
    s = n(763754),
    o = n(447215),
    c = n(888675),
    u = n(976860),
    d = n(141593),
    _ = n(652215),
    A = n(985018),
    m = n(367537);

function E(e) {
    let {
        guildId: t,
        user: n,
        username: s
    } = e, o = (0, l.bG)([r.A], () => !r.A.useReducedMotion), c = n.getAvatarURL(t, 56, o), u = (0, i.jsx)("img", {
        src: c,
        className: m.dj,
        alt: ""
    });
    return (0, i.jsxs)("div", {
        className: m.uE,
        role: "img",
        "aria-label": A.intl.formatToPlainString(A.t["utf8+W"], {
            username: s
        }),
        children: [(0, i.jsx)(d.A, {
            avatar: u
        }), (0, i.jsx)(a.Text, {
            className: m.Bi,
            tag: "p",
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: A.intl.format(A.t["52BAtC"], {
                username: s,
                usernameHook: (e, t) => (0, i.jsx)(a.Text, {
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

function T(e) {
    let {
        channel: t,
        message: l,
        compact: a
    } = e, r = (0, s.Ay)(l), d = (0, o.P)({
        user: l.author,
        channelId: t.id,
        guildId: t.guild_id,
        messageId: l.id
    })(r), m = A.intl.format(A.t.TQs67g, {
        username: r.nick,
        usernameHook: d,
        productName: l.purchaseNotification?.guild_product_purchase?.product_name ?? "",
        handleProductListingClick: () => {
            (0, u.pX)(_.BVt.GUILD_PRODUCT(t.guild_id, l.purchaseNotification?.guild_product_purchase?.listing_id ?? ""))
        }
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.A, {
            icon: n(617184),
            timestamp: l.timestamp,
            compact: a,
            children: m
        }), (0, i.jsx)(E, {
            username: r.nick,
            guildId: t.guild_id,
            user: l.author
        })]
    })
}