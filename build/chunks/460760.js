/** chunk id: 460760, original params: e,t,r (module,exports,require) **/
r.d(t, {
    GX: () => d,
    MA: () => u,
    Mu: () => l,
    Oh: () => p,
    Ok: () => A,
    Tz: () => S,
    ZH: () => E,
    ax: () => _,
    mo: () => c,
    nA: () => D,
    r8: () => h,
    uh: () => T,
    xN: () => I
});
var i = r(562465),
    a = r(73153),
    s = r(773669),
    n = r(997590),
    o = r(652215);
async function l() {
    let e = s.default.locale;
    if (e === n.A.getFetchedLocale()) return;
    let t = await i.Bo.get({
        url: o.Rsh.GUILD_DISCOVERY_CATEGORIES,
        query: {
            locale: e,
            primary_only: !1
        },
        oldFormErrors: !0,
        rejectWithError: !1
    });
    a.h.dispatch({
        type: "GUILD_DISCOVERY_CATEGORY_FETCH_SUCCESS",
        categories: t.body,
        locale: e
    })
}
async function c(e) {
    try {
        let {
            primary_category_id: t,
            category_ids: r,
            keywords: s,
            emoji_discoverability_enabled: n,
            partner_actioned_timestamp: l,
            partner_application_timestamp: c,
            is_published: _,
            reasons_to_join: d,
            social_links: E,
            about: h
        } = (await i.Bo.get({
            url: o.Rsh.GUILD_DISCOVERY_METADATA(e),
            oldFormErrors: !0,
            rejectWithError: !0
        })).body, A = {
            primaryCategoryId: t,
            secondaryCategoryIds: r,
            keywords: s,
            emojiDiscoverabilityEnabled: n,
            partnerActionedTimestamp: l,
            partnerApplicationTimestamp: c,
            isPublished: _,
            reasonsToJoin: d,
            socialLinks: E,
            about: h
        };
        return a.h.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: e,
            metadata: A
        }), A
    } catch (e) {
        a.h.dispatch({
            type: "GUILD_DISCOVERY_METADATA_FETCH_FAIL"
        })
    }
}
async function _(e) {
    try {
        let t = (await i.Bo.get({
            url: o.Rsh.GUILD_DISCOVERY_SLUG(e),
            rejectWithError: !0
        })).body.slug;
        a.h.dispatch({
            type: "GUILD_DISCOVERY_SLUG_FETCH_SUCCESS",
            slug: t
        })
    } catch {
        a.h.dispatch({
            type: "GUILD_DISCOVERY_SLUG_FETCH_FAIL",
            guildId: e
        })
    }
}

function d(e, t) {
    a.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        primaryCategoryId: t
    })
}

function E(e, t) {
    a.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        keywords: t
    })
}

function h(e, t) {
    a.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        emojiDiscoverabilityEnabled: t
    })
}

function A(e, t) {
    a.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        isPublished: t
    })
}

function I(e, t) {
    a.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        about: t
    })
}

function u(e, t) {
    a.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        reasonsToJoin: t
    })
}

function T(e, t) {
    a.h.dispatch({
        type: "GUILD_UPDATE_DISCOVERY_METADATA",
        guildId: e,
        socialLinks: t
    })
}
async function p(e) {
    let {
        guildId: t,
        primaryCategoryId: r,
        keywords: s,
        emojiDiscoverabilityEnabled: n,
        partnerActionedTimestamp: l,
        partnerApplicationTimestamp: c,
        isPublished: _,
        reasonsToJoin: d,
        socialLinks: E,
        about: h
    } = e;
    try {
        let {
            primary_category_id: e,
            category_ids: A,
            keywords: I,
            emoji_discoverability_enabled: u,
            partner_actioned_timestamp: T,
            partner_application_timestamp: p,
            is_published: D,
            reasons_to_join: S,
            social_links: O,
            about: C
        } = (await i.Bo.patch({
            url: o.Rsh.GUILD_DISCOVERY_METADATA(t),
            body: {
                primary_category_id: r,
                emoji_discoverability_enabled: n,
                partner_actioned_timestamp: l,
                partner_application_timestamp: c,
                keywords: s,
                is_published: _,
                reasons_to_join: d,
                social_links: E,
                about: h
            },
            oldFormErrors: !0,
            rejectWithError: !1
        })).body;
        a.h.dispatch({
            type: "GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER",
            guildId: t,
            metadata: {
                primaryCategoryId: e,
                secondaryCategoryIds: A,
                keywords: I,
                emojiDiscoverabilityEnabled: u,
                partnerActionedTimestamp: T,
                partnerApplicationTimestamp: p,
                isPublished: D,
                reasonsToJoin: S,
                socialLinks: O,
                about: C
            }
        })
    } catch (e) {
        throw a.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
            guildId: t,
            errors: e.body
        }), e
    }
}

function D(e, t) {
    i.Bo.put({
        url: o.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        a.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_ADD",
            guildId: e,
            categoryId: t
        })
    }).catch(t => {
        a.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
            guildId: e,
            errors: t.body
        })
    })
}

function S(e, t) {
    i.Bo.del({
        url: o.Rsh.GUILD_DISCOVERY_UPDATE_CATEGORY(e, t),
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(() => {
        a.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_DELETE",
            guildId: e,
            categoryId: t
        })
    }).catch(t => {
        a.h.dispatch({
            type: "GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL",
            guildId: e,
            errors: t.body
        })
    })
}