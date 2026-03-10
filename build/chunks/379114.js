/** chunk id: 379114 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(793574),
    s = n(688810),
    o = n(763754),
    c = n(447215),
    d = n(888675),
    u = n(976860),
    m = n(942075),
    _ = n(292548),
    A = n(817533),
    E = n(652215),
    f = n(746080),
    h = n(985018),
    g = n(424288);

function p(e) {
    let {
        username: t
    } = e;
    return (0, i.jsx)("div", {
        className: g._X,
        children: (0, i.jsx)(a.Text, {
            tag: "p",
            className: g._X,
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: h.intl.format(h.t.MLKSln, {
                username: t,
                usernameHook: (e, t) => (0, i.jsx)(a.Text, {
                    tag: "span",
                    color: "status-positive-text",
                    variant: "heading-xxl/extrabold",
                    lineClamp: 3,
                    children: e
                }, t)
            })
        })
    })
}

function x(e) {
    let {
        guildId: t,
        user: n,
        username: l
    } = e;
    return (0, i.jsxs)("div", {
        className: g.pG,
        role: "img",
        "aria-label": h.intl.formatToPlainString(h.t["utf8+W"], {
            username: l
        }),
        children: [(0, i.jsx)(A.A, {
            guildId: t,
            user: n,
            className: g.sz
        }), (0, i.jsx)(p, {
            username: l
        })]
    })
}

function C(e) {
    let {
        channel: t,
        message: a,
        compact: A
    } = e, h = (0, o.Ay)(a), g = function(e) {
        let {
            author: t,
            channel: n,
            message: i
        } = e, a = n.guild_id, o = (0, c.P)({
            user: i.author,
            channelId: n.id,
            guildId: a,
            messageId: i.id
        })(t), {
            analyticsLocations: d
        } = (0, s.Ay)(r.A.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), _ = i.roleSubscriptionData, A = l.useCallback(() => {
            (0, u.pX)(E.BVt.CHANNEL(a, f.VV.ROLE_SUBSCRIPTIONS), {
                sourceLocationStack: d
            }), _?.role_subscription_listing_id != null && (0, m.xH)(a, n.id, i.id, _.role_subscription_listing_id)
        }, [a, n, i, _, d]);
        return null == _ ? null : (0, m.gw)({
            username: t.nick,
            usernameOnClickHandler: o,
            roleSubscriptionOnClickHandler: A,
            guildId: a,
            roleSubscriptionData: i.roleSubscriptionData
        })
    }({
        channel: t,
        message: a,
        author: h
    }), p = a.roleSubscriptionData?.total_months_subscribed != null && a.roleSubscriptionData?.total_months_subscribed <= 1;
    return null == g ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.A, {
            icon: n(394803),
            timestamp: a.timestamp,
            compact: A,
            children: g
        }), p && (0, i.jsx)(x, {
            guildId: t.guild_id,
            user: a.author,
            username: h.nick
        }), (0, i.jsx)(_.A, {
            channel: t,
            message: a
        })]
    })
}