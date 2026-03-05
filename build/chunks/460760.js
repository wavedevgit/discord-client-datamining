/** chunk id: 460760 params = (module,exports,require) **/
i.d(t, {
    GX: () => u,
    MA: () => g,
    Mu: () => d,
    Oh: () => E,
    Ok: () => _,
    Tz: () => j,
    ZH: () => m,
    ax: () => o,
    mo: () => c,
    nA: () => p,
    r8: () => x,
    uh: () => A,
    xN: () => h
});
var l = i(562465),
    n = i(73153),
    a = i(773669),
    s = i(997590),
    r = i(652215);
async function d() {
    let e = a.default.locale;
    if (e === s.A.getFetchedLocale()) return;
    let t = await l.Bo.get({
        url: r.Rsh.GUILD_DISCOVERY_CATEGORIES,
        query: {
            locale: e,
            primary_only: !1
        },
        oldFormErrors: !0,
        rejectWithError: !1
    });
    n.h.dispatch({
        type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
        categories: t.body,
        locale: e
    })
}
async function c(e) {
    try {
        let {
            primary_category_id: t,
            category_ids: i,
            keywords: a,
            emoji_discoverability_enabled: s,
            partner_actioned_timestamp: d,
            partner_application_timestamp: c,
            is_published: o,
            reasons_to_join: u,
            social_links: m,
            about: x
        } = (await l.Bo.get({
            url: r.Rsh.GUILD_DISCOVERY_METADATA(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })).body, _ = {
            primaryCategoryId: t,
            secondaryCategoryIds: i,
            keywords: a,
            emojiDiscoverabilityEnabled: s,
            partnerActionedTimestamp: d,
            partnerApplicationTimestamp: c,
            isPublished: o,
            reasonsToJoin: u,
            socialLinks: m,
            about: x
        };
        return n.h.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: e,
            metadata: _
        }), _
    } catch (e) {
        n.h.dispatch({
            type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
        })
    }
}
async function o(e) {
    try {
        let t = (await l.Bo.get({
            url: r.Rsh.GUILD_DISCOVERY_SLUG(e),
            rejectWithError: !0
        })).body.slug;
        n.h.dispatch({
            type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS",
            slug: t
        })
    } catch {
        n.h.dispatch({
            type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL",
            guildId: e
        })
    }
}

function u(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        primaryCategoryId: t
    })
}

function m(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        keywords: t
    })
}

function x(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        emojiDiscoverabilityEnabled: t
    })
}

function _(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        isPublished: t
    })
}

function h(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        about: t
    })
}

function g(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        reasonsToJoin: t
    })
}

function A(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        socialLinks: t
    })
}
async function E(e) {
    let {
        guildId: t,
        primaryCategoryId: i,
        keywords: a,
        emojiDiscoverabilityEnabled: s,
        partnerActionedTimestamp: d,
        partnerApplicationTimestamp: c,
        isPublished: o,
        reasonsToJoin: u,
        socialLinks: m,
        about: x
    } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: _,
            keywords: h,
            emoji_discoverability_enabled: g,
            partner_actioned_timestamp: A,
            partner_application_timestamp: E,
            is_published: p,
            reasons_to_join: j,
            social_links: I,
            about: v
        } = (await l.Bo.patch({
            url: r.Rsh.GUILD_DISCOVERY_METADATA(t),
            body: {
                primary_category_id: i,
                emoji_discoverability_enabled: s,
                partner_actioned_timestamp: d,
                partner_application_timestamp: c,
                keywords: a,
                is_published: o,
                reasons_to_join: u,
                social_links: m,
                about: x
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })).body;
        n.h.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: t,
            metadata: {
                primaryCategoryId: e,
                secondaryCategoryIds: _,
                keywords: h,
                emojiDiscoverabilityEnabled: g,
                partnerActionedTimestamp: A,
                partnerApplicationTimestamp: E,
                isPublished: p,
                reasonsToJoin: j,
                socialLinks: I,
                about: v
            }
        })
    } catch (e) {
        throw n.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
            guildId: t,
            errors: e.body
        }), e
    }
}

function p(e, t) {
    l.Bo.put({
        url: r.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        n.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_ADD",
            guildId: e,
            categoryId: t
        })
    }).catch(t => {
        n.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
            guildId: e,
            errors: t.body
        })
    })
}

function j(e, t) {
    l.Bo.del({
        url: r.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        n.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_DELETE",
            guildId: e,
            categoryId: t
        })
    }).catch(t => {
        n.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
            guildId: e,
            errors: t.body
        })
    })
}