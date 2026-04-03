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
    _ = n(942075),
    A = n(292548),
    m = n(817533),
    E = n(652215),
    T = n(746080),
    I = n(985018),
    g = n(871029);

function N(e) {
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
            children: I.intl.format(I.t.MLKSln, {
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

function f(e) {
    let {
        guildId: t,
        user: n,
        username: l
    } = e;
    return (0, i.jsxs)("div", {
        className: g.pG,
        role: "img",
        "aria-label": I.intl.formatToPlainString(I.t["utf8+W"], {
            username: l
        }),
        children: [(0, i.jsx)(m.A, {
            guildId: t,
            user: n,
            className: g.sz
        }), (0, i.jsx)(N, {
            username: l
        })]
    })
}

function C(e) {
    let {
        channel: t,
        message: a,
        compact: m
    } = e, I = (0, o.Ay)(a), g = function(e) {
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
            (0, u.pX)(E.BVt.CHANNEL(a, T.VV.ROLE_SUBSCRIPTIONS), {
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
        author: I
    }), N = a.roleSubscriptionData?.total_months_subscribed != null && a.roleSubscriptionData?.total_months_subscribed <= 1;
    return null == g ? null : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.A, {
            icon: n(617184),
            timestamp: a.timestamp,
            compact: m,
            children: g
        }), N && (0, i.jsx)(f, {
            guildId: t.guild_id,
            user: a.author,
            username: I.nick
        }), (0, i.jsx)(A.A, {
            channel: t,
            message: a
        })]
    })
}