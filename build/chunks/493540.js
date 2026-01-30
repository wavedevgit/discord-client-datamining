/** chunk id: 493540, original params: t,r,i (module,exports,require) **/
i.d(r, {
    Bo: () => l,
    DP: () => s,
    KW: () => u,
    P: () => R,
    Y7: () => A,
    _8: () => _,
    gO: () => T,
    im: () => O,
    jh: () => c,
    ms: () => C
});
var e = i(562465),
    n = i(73153),
    a = i(627363),
    o = i(652215),
    E = i(705751);
async function T(t) {
    await e.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ENABLE_REQUESTS(t),
        rejectWithError: !1
    })
}
async function c(t) {
    return (await e.Bo.get({
        url: o.Rsh.CREATOR_MONETIZATION_ELIGIBILITY(t),
        rejectWithError: !1
    })).body
}
async function s(t, r) {
    await e.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS(t, r),
        rejectWithError: !1
    })
}
async function l(t) {
    await e.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t),
        rejectWithError: !1
    })
}
async function R(t) {
    return (await e.Bo.get({
        url: o.Rsh.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t),
        rejectWithError: !1
    })).body
}
async function _(t) {
    try {
        let r = await e.Bo.get({
            url: o.Rsh.CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY,
            query: {
                nag_guild_ids: t
            },
            rejectWithError: !0
        });
        n.h.dispatch({
            type: "CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS",
            eligibleGuilds: r.body.eligible_guilds
        })
    } catch (t) {}
}
async function O(t, r) {
    let i = (await e.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
        body: {
            team_id: r
        },
        rejectWithError: !1
    })).body;
    return null != i.application && n.h.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: i.application
    }), i
}

function u(t) {
    return e.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t),
        rejectWithError: !1
    })
}

function A(t) {
    return e.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t),
        rejectWithError: !1
    })
}
async function I(t) {
    await e.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
        body: {},
        rejectWithError: !1
    })
}
async function C(t) {
    return await I(t), await a.Ay.getApplicationsForGuild(t, {
        type: E.S7.GUILD_ROLE_SUBSCRIPTIONS,
        includeTeam: !0
    })
}