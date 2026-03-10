/** chunk id: 379114 params = (module,exports,require) **/
n.d(t, {
    A: () => g
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
    _ = n(942075),
    A = n(292548),
    m = n(817533),
    E = n(652215),
    I = n(746080),
    T = n(985018),
    f = n(424288);

function N(e) {
    let {
        username: t
    } = e;
    return (0, i.jsx)("div", {
        className: f._X,
        children: (0, i.jsx)(a.Text, {
            tag: "p",
            className: f._X,
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: T.intl.format(T.t.MLKSln, {
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

function C(e) {
    let {
        guildId: t,
        user: n,
        username: l
    } = e;
    return (0, i.jsxs)("div", {
        className: f.pG,
        role: "img",
        "aria-label": T.intl.formatToPlainString(T.t["utf8+W"], {
            username: l
        }),
        children: [(0, i.jsx)(m.A, {
            guildId: t,
            user: n,
            className: f.sz
        }), (0, i.jsx)(N, {
            username: l
        })]
    })
}

function g(e) {
    let {
        channel: t,
        message: a,
        compact: m
    } = e, T = (0, o.Ay)(a), f = function(e) {
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
        } = (0, s.Ay)(r.A.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), A = i.roleSubscriptionData, m = l.useCallback(() => {
            (0, u.pX)(E.BVt.CHANNEL(a, I.VV.ROLE_SUBSCRIPTIONS), {
                sourceLocationStack: d
            }), A?.role_subscription_listing_id != null && (0, _.xH)(a, n.id, i.id, A.role_subscription_listing_id)
        }, [a, n, i, A, d]);
        return null == A ? null : (0, _.gw)({
            username: t.nick,
            usernameOnClickHandler: o,
            roleSubscriptionOnClickHandler: m,
            guildId: a,
            roleSubscriptionData: i.roleSubscriptionData
        })
    }({
        channel: t,
        message: a,
        author: T
    }), N = a.roleSubscriptionData?.total_months_subscribed != null && a.roleSubscriptionData?.total_months_subscribed <= 1;
    return null == f ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.A, {
            icon: n(394803),
            timestamp: a.timestamp,
            compact: m,
            children: f
        }), N && (0, i.jsx)(C, {
            guildId: t.guild_id,
            user: a.author,
            username: T.nick
        }), (0, i.jsx)(A.A, {
            channel: t,
            message: a
        })]
    })
}