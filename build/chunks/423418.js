/** Chunk was on 39048 **/
/** chunk id: 423418, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    u: () => j
}), n(228524);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(974544),
    o = n(840120),
    c = n(351906),
    d = n(975571),
    u = n(665346),
    g = n(310527),
    m = n(737331),
    p = n(627011),
    f = n(911144),
    h = n(652215),
    b = n(985018),
    x = n(182452);

function j(e) {
    let {
        guild: t
    } = e, n = i.useRef(null), j = (0, o.M5)(t.id, "GuildSettingsBoostPerks"), _ = (0, l.bG)([c.A], () => c.A.hideInstantInvites);
    (0, u.A)(n, h.nd0.BOOST_PERKS_VANITY_URL);
    let {
        vanityURLCode: O,
        vanityURLUses: v,
        originalVanityURLCode: y,
        errorDetails: A,
        fetched: E
    } = (0, l.cf)([m.A], () => ({
        vanityURLCode: m.A.vanityURLCode,
        vanityURLUses: m.A.vanityURLUses,
        originalVanityURLCode: m.A.originalVanityURLCode,
        errorDetails: m.A.errorDetails,
        fetched: m.A.fetchedVanityURL
    })), N = null == t ? void 0 : t.id;
    return (i.useEffect(() => {
        null == N || E || (0, g.Je)(N)
    }, [E, N]), null == t) ? null : _ ? (0, r.jsx)(a.A, {}) : (0, r.jsxs)("div", {
        ref: n,
        children: [(0, r.jsxs)(s.Heading, {
            variant: "heading-md/medium",
            color: "text-strong",
            className: x.D,
            children: [b.intl.string(b.t["5XZKy/"]), (0, r.jsx)(p.rV, {
                guild: t
            })]
        }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            className: x.h,
            children: j ? b.intl.format(b.t["J/v84B"], {
                helpCenterArticle: d.A.getArticleURL(h.MVz.GUILD_VANITY_URL)
            }) : b.intl.format(b.t.koklFG, {
                helpCenterArticle: d.A.getArticleURL(h.MVz.GUILD_VANITY_URL)
            })
        }), (0, r.jsx)(f.C, {
            guild: t,
            vanityURLCode: O,
            vanityURLUses: v,
            originalVanityURLCode: y,
            errorDetails: A
        })]
    })
}