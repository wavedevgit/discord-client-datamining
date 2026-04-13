/** chunk id: 12424 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(975571),
    r = n(927578),
    a = n(580630),
    o = n(780964),
    d = n(858897),
    c = n(652215),
    u = n(788868),
    m = n(985018),
    g = n(196709);
let _ = function(e) {
    let {
        hasAppliedGuildBoosts: t,
        hasBoostPerk: n,
        hasGuildAffinitiesOrInGuild: _,
        subscriptionIsPausedOrPausePending: x
    } = e, {
        subtitle: A,
        flavor: h
    } = function(e) {
        let {
            hasAppliedGuildBoosts: t,
            hasBoostPerk: n,
            hasGuildAffinitiesOrInGuild: i,
            subscriptionIsPausedOrPausePending: s
        } = e;
        if (s) return {
            flavor: m.intl.format(m.t.doslJu, {
                onClick: () => (0, d.openUserSettings)(o.X.SUBSCRIPTIONS_PANEL)
            })
        };
        if (!i) return {
            subtitle: m.intl.string(m.t.oiWYAc)
        };
        if (t) return {
            subtitle: m.intl.string(m.t.W5rDjW),
            flavor: m.intl.format(m.t.cUHcaQ, {
                helpdeskArticle: l.A.getArticleURL(c.MVz.GUILD_SUBSCRIPTIONS)
            })
        };
        let g = u.hd[u.gD.PREMIUM_MONTH_GUILD],
            _ = r.Ay.getDefaultPrice(g.id, n),
            x = (0, a.CE)((0, a.$g)(_.amount, _.currency), g.interval, g.intervalCount);
        return {
            subtitle: n ? m.intl.string(m.t.bhPzXR) : m.intl.string(m.t.Zs9h9Z),
            flavor: m.intl.formatToPlainString(m.t.PGgTdA, {
                monthlyGuildBoostPrice: x
            })
        }
    }({
        hasAppliedGuildBoosts: t,
        hasBoostPerk: n,
        hasGuildAffinitiesOrInGuild: _,
        subscriptionIsPausedOrPausePending: x
    });
    return (0, i.jsxs)("div", {
        className: g.i,
        children: [(0, i.jsx)(s.Heading, {
            variant: "heading-lg/bold",
            className: g.V,
            children: A
        }), null != h && (0, i.jsx)(s.Text, {
            variant: "text-sm/normal",
            children: h
        })]
    })
}