/** Chunk was on 39048 **/
/** chunk id: 371701, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(417597),
    l = n(397927),
    s = n(209812),
    a = n(242564),
    o = n(906779),
    c = n(586621),
    d = n(522663),
    u = n(857802),
    g = n(595303),
    m = n(781289),
    p = n(555337),
    f = n(250627),
    h = n(839837),
    b = n(89791),
    x = n(985018);

function j(e) {
    let {
        listingId: t
    } = e, n = (0, f.az)(t);
    return null == n ? null : (0, r.jsx)(a.fh, {
        children: n.name
    })
}

function _(e) {
    var t, n, a;
    let {
        guildId: f
    } = e, _ = (0, h.A)(f), O = (0, s.GK)(), v = (0, i.bG)([p.A], () => p.A.getGuild());
    return _.loading || null == v ? (0, r.jsx)(l.y$y, {}) : null == _.application ? (0, r.jsx)(u.A, {
        guild: v
    }) : (0, r.jsxs)(d.A, {
        children: [(0, r.jsx)(c.A, {
            revenue: _.metrics.revenue,
            revenueTrend: _.metrics.revenuePctChange,
            summaryMetricLabel: x.intl.string(x.t.R3PCmW),
            summaryMetricValue: null != (t = _.metrics.paymentsCount) ? t : "-",
            summaryMetricTrend: null != (n = _.metrics.paymentsCountChange) ? n : 0,
            summaryMetricTrendIsPercent: !1,
            children: (0, r.jsx)(b.A, {
                guildId: f,
                earningsData: _
            })
        }), (0, r.jsx)(l.D0$, {
            label: x.intl.string(x.t["+5Rmhl"]),
            children: (0, r.jsx)(o.A, {
                ListingIdLabel: j,
                payoutsByPeriod: _.payoutsByPeriod,
                team: null == (a = _.application) ? void 0 : a.team
            })
        }), (0, r.jsx)(l.D0$, {
            label: x.intl.string(x.t.O8cDAJ),
            disabled: O,
            children: (0, r.jsx)(g.A, {
                guildId: f,
                application: _.application
            })
        }), (0, r.jsx)(l.D0$, {
            label: x.intl.string(x.t["0n7R2X"]),
            children: (0, r.jsx)(m.A, {
                guildId: f,
                allPeriods: _.payoutsByPeriod
            })
        })]
    })
}