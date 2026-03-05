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
    f = n(652215),
    h = n(746080),
    g = n(985018),
    E = n(751922);

function p(e) {
    let {
        username: t
    } = e;
    return (0, i.jsx)("div", {
        className: E._X,
        children: (0, i.jsx)(a.Text, {
            tag: "p",
            className: E._X,
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: g.intl.format(g.t.MLKSln, {
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
        className: E.pG,
        role: "img",
        "aria-label": g.intl.formatToPlainString(g.t["utf8+W"], {
            username: l
        }),
        children: [(0, i.jsx)(A.A, {
            guildId: t,
            user: n,
            className: E.sz
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
    } = e, g = (0, o.Ay)(a), E = function(e) {
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
            (0, u.pX)(f.BVt.CHANNEL(a, h.VV.ROLE_SUBSCRIPTIONS), {
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
        author: g
    }), p = a.roleSubscriptionData?.total_months_subscribed != null && a.roleSubscriptionData?.total_months_subscribed <= 1;
    return null == E ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.A, {
            icon: n(617184),
            timestamp: a.timestamp,
            compact: A,
            children: E
        }), p && (0, i.jsx)(x, {
            guildId: t.guild_id,
            user: a.author,
            username: g.nick
        }), (0, i.jsx)(_.A, {
            channel: t,
            message: a
        })]
    })
}