/** chunk id: 460760 params = (module,exports,require) **/
t.d(i, {
    GX: () => u,
    MA: () => g,
    Mu: () => o,
    Oh: () => A,
    Ok: () => x,
    Tz: () => j,
    ZH: () => m,
    ax: () => c,
    mo: () => d,
    nA: () => E,
    r8: () => _,
    uh: () => p,
    xN: () => h
});
var l = t(562465),
    s = t(73153),
    a = t(773669),
    n = t(997590),
    r = t(652215);
async function o() {
    let e = a.default.locale;
    if (e === n.A.getFetchedLocale()) return;
    let i = await l.Bo.get({
        url: r.Rsh.GUILD_DISCOVERY_CATEGORIES,
        query: {
            locale: e,
            primary_only: !1
        },
        oldFormErrors: !0,
        rejectWithError: !1
    });
    s.h.dispatch({
        type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
        categories: i.body,
        locale: e
    })
}
async function d(e) {
    try {
        let {
            primary_category_id: i,
            category_ids: t,
            keywords: a,
            emoji_discoverability_enabled: n,
            partner_actioned_timestamp: o,
            partner_application_timestamp: d,
            is_published: c,
            reasons_to_join: u,
            social_links: m,
            about: _
        } = (await l.Bo.get({
            url: r.Rsh.GUILD_DISCOVERY_METADATA(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })).body, x = {
            primaryCategoryId: i,
            secondaryCategoryIds: t,
            keywords: a,
            emojiDiscoverabilityEnabled: n,
            partnerActionedTimestamp: o,
            partnerApplicationTimestamp: d,
            isPublished: c,
            reasonsToJoin: u,
            socialLinks: m,
            about: _
        };
        return s.h.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: e,
            metadata: x
        }), x
    } catch (e) {
        s.h.dispatch({
            type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
        })
    }
}
async function c(e) {
    try {
        let i = (await l.Bo.get({
            url: r.Rsh.GUILD_DISCOVERY_SLUG(e),
            rejectWithError: !0
        })).body.slug;
        s.h.dispatch({
            type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS",
            slug: i
        })
    } catch {
        s.h.dispatch({
            type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL",
            guildId: e
        })
    }
}

function u(e, i) {
    s.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        primaryCategoryId: i
    })
}

function m(e, i) {
    s.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        keywords: i
    })
}

function _(e, i) {
    s.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        emojiDiscoverabilityEnabled: i
    })
}

function x(e, i) {
    s.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        isPublished: i
    })
}

function h(e, i) {
    s.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        about: i
    })
}

function g(e, i) {
    s.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        reasonsToJoin: i
    })
}

function p(e, i) {
    s.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        socialLinks: i
    })
}
async function A(e) {
    let {
        guildId: i,
        primaryCategoryId: t,
        keywords: a,
        emojiDiscoverabilityEnabled: n,
        partnerActionedTimestamp: o,
        partnerApplicationTimestamp: d,
        isPublished: c,
        reasonsToJoin: u,
        socialLinks: m,
        about: _
    } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: x,
            keywords: h,
            emoji_discoverability_enabled: g,
            partner_actioned_timestamp: p,
            partner_application_timestamp: A,
            is_published: E,
            reasons_to_join: j,
            social_links: v,
            about: I
        } = (await l.Bo.patch({
            url: r.Rsh.GUILD_DISCOVERY_METADATA(i),
            body: {
                primary_category_id: t,
                emoji_discoverability_enabled: n,
                partner_actioned_timestamp: o,
                partner_application_timestamp: d,
                keywords: a,
                is_published: c,
                reasons_to_join: u,
                social_links: m,
                about: _
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })).body;
        s.h.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: i,
            metadata: {
                primaryCategoryId: e,
                secondaryCategoryIds: x,
                keywords: h,
                emojiDiscoverabilityEnabled: g,
                partnerActionedTimestamp: p,
                partnerApplicationTimestamp: A,
                isPublished: E,
                reasonsToJoin: j,
                socialLinks: v,
                about: I
            }
        })
    } catch (e) {
        throw s.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
            guildId: i,
            errors: e.body
        }), e
    }
}

function E(e, i) {
    l.Bo.put({
        url: r.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(e, i),
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        s.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_ADD",
            guildId: e,
            categoryId: i
        })
    }).catch(i => {
        s.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
            guildId: e,
            errors: i.body
        })
    })
}

function j(e, i) {
    l.Bo.del({
        url: r.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(e, i),
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        s.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_DELETE",
            guildId: e,
            categoryId: i
        })
    }).catch(i => {
        s.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
            guildId: e,
            errors: i.body
        })
    })
}