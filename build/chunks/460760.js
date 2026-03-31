/** chunk id: 460760 params = (module,exports,require) **/
i.d(t, {
    GX: () => u,
    MA: () => _,
    Mu: () => d,
    Oh: () => A,
    Ok: () => g,
    Tz: () => E,
    ZH: () => m,
    ax: () => c,
    mo: () => o,
    nA: () => j,
    r8: () => x,
    uh: () => p,
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
async function o(e) {
    try {
        let {
            primary_category_id: t,
            category_ids: i,
            keywords: a,
            emoji_discoverability_enabled: s,
            partner_actioned_timestamp: d,
            partner_application_timestamp: o,
            is_published: c,
            reasons_to_join: u,
            social_links: m,
            about: x
        } = (await l.Bo.get({
            url: r.Rsh.GUILD_DISCOVERY_METADATA(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })).body, g = {
            primaryCategoryId: t,
            secondaryCategoryIds: i,
            keywords: a,
            emojiDiscoverabilityEnabled: s,
            partnerActionedTimestamp: d,
            partnerApplicationTimestamp: o,
            isPublished: c,
            reasonsToJoin: u,
            socialLinks: m,
            about: x
        };
        return n.h.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: e,
            metadata: g
        }), g
    } catch (e) {
        n.h.dispatch({
            type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
        })
    }
}
async function c(e) {
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

function g(e, t) {
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

function _(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        reasonsToJoin: t
    })
}

function p(e, t) {
    n.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        socialLinks: t
    })
}
async function A(e) {
    let {
        guildId: t,
        primaryCategoryId: i,
        keywords: a,
        emojiDiscoverabilityEnabled: s,
        partnerActionedTimestamp: d,
        partnerApplicationTimestamp: o,
        isPublished: c,
        reasonsToJoin: u,
        socialLinks: m,
        about: x
    } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: g,
            keywords: h,
            emoji_discoverability_enabled: _,
            partner_actioned_timestamp: p,
            partner_application_timestamp: A,
            is_published: j,
            reasons_to_join: E,
            social_links: v,
            about: I
        } = (await l.Bo.patch({
            url: r.Rsh.GUILD_DISCOVERY_METADATA(t),
            body: {
                primary_category_id: i,
                emoji_discoverability_enabled: s,
                partner_actioned_timestamp: d,
                partner_application_timestamp: o,
                keywords: a,
                is_published: c,
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
                secondaryCategoryIds: g,
                keywords: h,
                emojiDiscoverabilityEnabled: _,
                partnerActionedTimestamp: p,
                partnerApplicationTimestamp: A,
                isPublished: j,
                reasonsToJoin: E,
                socialLinks: v,
                about: I
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

function j(e, t) {
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

function E(e, t) {
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