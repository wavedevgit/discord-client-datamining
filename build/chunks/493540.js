/** chunk id: 493540 params = (module,exports,require) **/
i.d(r, {
    Bo: () => R,
    DP: () => T,
    KW: () => u,
    P: () => l,
    Y7: () => _,
    gO: () => c,
    im: () => O,
    jh: () => s,
    ms: () => I
});
var n = i(562465),
    a = i(73153),
    e = i(627363),
    o = i(652215),
    E = i(705751);
async function c(t) {
    await n.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ENABLE_REQUESTS(t),
        rejectWithError: !1
    })
}
async function s(t) {
    return (await n.Bo.get({
        url: o.Rsh.CREATOR_MONETIZATION_ELIGIBILITY(t),
        rejectWithError: !1
    })).body
}
async function T(t, r) {
    await n.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS(t, r),
        rejectWithError: !1
    })
}
async function R(t) {
    await n.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_TERMS_V2(t),
        rejectWithError: !1
    })
}
async function l(t) {
    return (await n.Bo.get({
        url: o.Rsh.CREATOR_MONETIZATION_MARKETING_ONBOARDING(t),
        rejectWithError: !1
    })).body
}
async function O(t, r) {
    let i = (await n.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD(t),
        body: {
            team_id: r
        },
        rejectWithError: !1
    })).body;
    return null != i.application && a.h.dispatch({
        type: "APPLICATION_FETCH_SUCCESS",
        application: i.application
    }), i
}

function u(t) {
    return n.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS(t),
        rejectWithError: !1
    })
}

function _(t) {
    return n.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED(t),
        rejectWithError: !1
    })
}
async function A(t) {
    await n.Bo.post({
        url: o.Rsh.CREATOR_MONETIZATION_REMOVE_MONETIZATION(t),
        body: {},
        rejectWithError: !1
    })
}
async function I(t) {
    return await A(t), await e.Ay.getApplicationsForGuild(t, {
        type: E.S7.GUILD_ROLE_SUBSCRIPTIONS,
        includeTeam: !0
    })
}