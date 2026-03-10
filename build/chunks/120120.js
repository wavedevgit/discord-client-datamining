/** chunk id: 120120 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var l = n(417597),
    a = n(397927),
    r = n(775602),
    s = n(763754),
    o = n(447215),
    c = n(888675),
    d = n(976860),
    u = n(141593),
    m = n(652215),
    _ = n(985018),
    A = n(221110);

function E(e) {
    let {
        guildId: t,
        user: n,
        username: s
    } = e, o = (0, l.bG)([r.A], () => !r.A.useReducedMotion), c = n.getAvatarURL(t, 56, o), d = (0, i.jsx)("img", {
        src: c,
        className: A.dj,
        alt: ""
    });
    return (0, i.jsxs)("div", {
        className: A.uE,
        role: "img",
        "aria-label": _.intl.formatToPlainString(_.t["utf8+W"], {
            username: s
        }),
        children: [(0, i.jsx)(u.A, {
            avatar: d
        }), (0, i.jsx)(a.Text, {
            className: A.Bi,
            tag: "p",
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: _.intl.format(_.t["52BAtC"], {
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

function f(e) {
    let {
        channel: t,
        message: l,
        compact: a
    } = e, r = (0, s.Ay)(l), u = (0, o.P)({
        user: l.author,
        channelId: t.id,
        guildId: t.guild_id,
        messageId: l.id
    })(r), A = _.intl.format(_.t.TQs67g, {
        username: r.nick,
        usernameHook: u,
        productName: l.purchaseNotification?.guild_product_purchase?.product_name ?? "",
        handleProductListingClick: () => {
            (0, d.pX)(m.BVt.GUILD_PRODUCT(t.guild_id, l.purchaseNotification?.guild_product_purchase?.listing_id ?? ""))
        }
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.A, {
            icon: n(394803),
            timestamp: l.timestamp,
            compact: a,
            children: A
        }), (0, i.jsx)(E, {
            username: r.nick,
            guildId: t.guild_id,
            user: l.author
        })]
    })
}