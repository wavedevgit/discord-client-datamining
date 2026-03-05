/** chunk id: 237267, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(975571),
    a = n(927578),
    r = n(580630),
    o = n(780964),
    d = n(840065),
    c = n(652215),
    u = n(788868),
    _ = n(985018),
    g = n(448285);
let m = function(e) {
    let {
        hasAppliedGuildBoosts: t,
        hasBoostPerk: n,
        hasGuildAffinitiesOrInGuild: m,
        subscriptionIsPausedOrPausePending: A
    } = e, {
        subtitle: h,
        flavor: p
    } = function(e) {
        let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: i,
            subscriptionIsPausedOrPausePending: s
        } = e;
        if (s) return {
            flavor: _.intl.format(_.t.doslJu, {
                onClick: () => (0, d.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL, {
                    section: c.nc_.SUBSCRIPTIONS
                })
            })
        };
        if (!i) return {
            subtitle: _.intl.string(_.t.oiWYAc)
        };
        if (t) return {
            subtitle: _.intl.string(_.t.W5rDjW),
            flavor: _.intl.format(_.t.cUHcaQ, {
                helpdeskArticle: l.A.getArticleURL(c.MVz.GUILD_SUBSCRIPTIONS)
            })
        };
        let g = u.hd[u.gD.PREMIUM_MONTH_GUILD],
            m = a.Ay.getDefaultPrice(g.id, n),
            A = (0, r.CE)((0, r.$g)(m.amount, m.currency), g.interval, g.intervalCount);
        return {
            subtitle: n ? _.intl.string(_.t.bhPzXR) : _.intl.string(_.t.Zs9h9Z),
            flavor: _.intl.formatToPlainString(_.t.PGgTdA, {
                monthlyGuildBoostPrice: A
            })
        }
    }({
        hasAppliedGuildBoosts: t,
        hasBoostPerk: n,
        hasGuildAffinitiesOrInGuild: m,
        subscriptionIsPausedOrPausePending: A
    });
    return (0, i.jsxs)("div", {
        className: g.i,
        children: [(0, i.jsx)(s.Heading, {
            variant: "heading-lg/bold",
            className: g.V,
            children: h
        }), null != p && (0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: p
        })]
    })
}