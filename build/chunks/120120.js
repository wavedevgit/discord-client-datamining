/** chunk id: 120120 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
});
var i = n(627968);
n(64700);
var r = n(417597),
    s = n(397927),
    a = n(775602),
    l = n(763754),
    o = n(447215),
    c = n(888675),
    u = n(976860),
    d = n(141593),
    _ = n(652215),
    E = n(985018),
    A = n(367537);

function m(e) {
    let {
        guildId: t,
        user: n,
        username: l
    } = e, o = (0, r.bG)([a.A], () => !a.A.useReducedMotion), c = n.getAvatarURL(t, 56, o), u = (0, i.jsx)("img", {
        src: c,
        className: A.dj,
        alt: ""
    });
    return (0, i.jsxs)("div", {
        className: A.uE,
        role: "img",
        "aria-label": E.intl.formatToPlainString(E.t["utf8+W"], {
            username: l
        }),
        children: [(0, i.jsx)(d.A, {
            avatar: u
        }), (0, i.jsx)(s.Text, {
            className: A.Bi,
            tag: "p",
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: E.intl.format(E.t["52BAtC"], {
                username: l,
                usernameHook: (e, t) => (0, i.jsx)(s.Text, {
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
        message: r,
        compact: s
    } = e, a = (0, l.Ay)(r), d = (0, o.P)({
        user: r.author,
        channelId: t.id,
        guildId: t.guild_id,
        messageId: r.id
    })(a), A = E.intl.format(E.t.TQs67g, {
        username: a.nick,
        usernameHook: d,
        productName: r.purchaseNotification?.guild_product_purchase?.product_name ?? "",
        handleProductListingClick: () => {
            (0, u.pX)(_.BVt.GUILD_PRODUCT(t.guild_id, r.purchaseNotification?.guild_product_purchase?.listing_id ?? ""))
        }
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.A, {
            icon: n(617184),
            timestamp: r.timestamp,
            compact: s,
            children: A
        }), (0, i.jsx)(m, {
            username: a.nick,
            guildId: t.guild_id,
            user: r.author
        })]
    })
}