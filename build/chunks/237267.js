/** Chunk was on 5606 **/
/** chunk id: 237267, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(975571),
    s = n(927578),
    a = n(580630),
    o = n(780964),
    c = n(840065),
    d = n(652215),
    u = n(788868),
    p = n(985018),
    _ = n(689507);
let m = function(e) {
    let {
        hasAppliedGuildBoosts: t,
        hasBoostPerk: n,
        hasGuildAffinitiesOrInGuild: m,
        subscriptionIsPausedOrPausePending: g
    } = e, {
        subtitle: f,
        flavor: b
    } = function(e) {
        let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: r,
            subscriptionIsPausedOrPausePending: i
        } = e;
        if (i) return {
            flavor: p.intl.format(p.t.doslJu, {
                onClick: () => (0, c.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL, {
                    section: d.nc_.SUBSCRIPTIONS
                })
            })
        };
        if (!r) return {
            subtitle: p.intl.string(p.t.oiWYAc)
        };
        if (t) return {
            subtitle: p.intl.string(p.t.W5rDjW),
            flavor: p.intl.format(p.t.cUHcaQ, {
                helpdeskArticle: l.A.getArticleURL(d.MVz.GUILD_SUBSCRIPTIONS)
            })
        };
        let _ = u.hd[u.gD.PREMIUM_MONTH_GUILD],
            m = s.Ay.getDefaultPrice(_.id, n),
            g = (0, a.CE)((0, a.$g)(m.amount, m.currency), _.interval, _.intervalCount);
        return {
            subtitle: n ? p.intl.string(p.t.bhPzXR) : p.intl.string(p.t.Zs9h9Z),
            flavor: p.intl.formatToPlainString(p.t.PGgTdA, {
                monthlyGuildBoostPrice: g
            })
        }
    }({
        hasAppliedGuildBoosts: t,
        hasBoostPerk: n,
        hasGuildAffinitiesOrInGuild: m,
        subscriptionIsPausedOrPausePending: g
    });
    return (0, r.jsxs)("div", {
        className: _.i,
        children: [(0, r.jsx)(i.Heading, {
            variant: "heading-lg/bold",
            className: _.V,
            children: f
        }), null != b && (0, r.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: b
        })]
    })
}