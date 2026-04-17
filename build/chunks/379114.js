/** chunk id: 379114 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C
});
var i = n(627968),
    r = n(64700),
    l = n(397927),
    s = n(793574),
    a = n(688810),
    o = n(763754),
    c = n(447215),
    u = n(888675),
    d = n(976860),
    _ = n(942075),
    A = n(292548),
    E = n(817533),
    m = n(652215),
    I = n(746080),
    T = n(985018),
    g = n(88069);

function N(e) {
    let {
        username: t
    } = e;
    return (0, i.jsx)("div", {
        className: g._X,
        children: (0, i.jsx)(l.Text, {
            tag: "p",
            className: g._X,
            color: "status-positive-text",
            variant: "heading-xl/medium",
            children: T.intl.format(T.t.MLKSln, {
                username: t,
                usernameHook: (e, t) => (0, i.jsx)(l.Text, {
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

function f(e) {
    let {
        guildId: t,
        user: n,
        username: r
    } = e;
    return (0, i.jsxs)("div", {
        className: g.pG,
        role: "img",
        "aria-label": T.intl.formatToPlainString(T.t["utf8+W"], {
            username: r
        }),
        children: [(0, i.jsx)(E.A, {
            guildId: t,
            user: n,
            className: g.sz
        }), (0, i.jsx)(N, {
            username: r
        })]
    })
}

function C(e) {
    let {
        channel: t,
        message: l,
        compact: E
    } = e, T = (0, o.Ay)(l), g = function(e) {
        let {
            author: t,
            channel: n,
            message: i
        } = e, l = n.guild_id, o = (0, c.P)({
            user: i.author,
            channelId: n.id,
            guildId: l,
            messageId: i.id
        })(t), {
            analyticsLocations: u
        } = (0, a.Ay)(s.A.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), A = i.roleSubscriptionData, E = r.useCallback(() => {
            (0, d.pX)(m.BVt.CHANNEL(l, I.VV.ROLE_SUBSCRIPTIONS), {
                sourceLocationStack: u
            }), A?.role_subscription_listing_id != null && (0, _.xH)(l, n.id, i.id, A.role_subscription_listing_id)
        }, [l, n, i, A, u]);
        return null == A ? null : (0, _.gw)({
            username: t.nick,
            usernameOnClickHandler: o,
            roleSubscriptionOnClickHandler: E,
            guildId: l,
            roleSubscriptionData: i.roleSubscriptionData
        })
    }({
        channel: t,
        message: l,
        author: T
    }), N = l.roleSubscriptionData?.total_months_subscribed != null && l.roleSubscriptionData?.total_months_subscribed <= 1;
    return null == g ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.A, {
            icon: n(617184),
            timestamp: l.timestamp,
            compact: E,
            children: g
        }), N && (0, i.jsx)(f, {
            guildId: t.guild_id,
            user: l.author,
            username: T.nick
        }), (0, i.jsx)(A.A, {
            channel: t,
            message: l
        })]
    })
}