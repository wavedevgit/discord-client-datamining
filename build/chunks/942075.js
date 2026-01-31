/** chunk id: 942075, original params: t,e,n (module,exports,require) **/
n.d(e, {
    WC: () => m,
    eb: () => f,
    g6: () => E,
    gw: () => c,
    xH: () => _,
    y4: () => T
});
var r = n(58149),
    l = n(936555),
    a = n(71393),
    i = n(287809);
n(661191), n(226139);
var u = n(652215),
    o = n(985018);

function s(t) {
    return t
}

function c(t) {
    let {
        username: e,
        usernameOnClickHandler: n,
        roleSubscriptionOnClickHandler: r,
        guildId: l,
        roleSubscriptionData: a
    } = t, {
        content: i,
        formatParams: u
    } = d({
        username: e,
        usernameOnClickHandler: n,
        roleSubscriptionOnClickHandler: r,
        guildId: l,
        roleSubscriptionData: a
    });
    return o.intl.format(i, u)
}

function m(t) {
    let {
        username: e,
        usernameOnClickHandler: n,
        roleSubscriptionOnClickHandler: r,
        guildId: l,
        roleSubscriptionData: a
    } = t, {
        content: i,
        formatParams: u
    } = d({
        username: e,
        usernameOnClickHandler: n,
        roleSubscriptionOnClickHandler: r,
        guildId: l,
        roleSubscriptionData: a
    });
    return o.intl.formatToParts(i, u)
}

function A(t, e) {
    var n, r;
    let l = a.A.getGuild(t),
        i = null != (n = null == e ? void 0 : e.total_months_subscribed) ? n : 0;
    return {
        guild: l,
        totalMonthsSubscribed: i,
        showWithDuration: i > 0,
        isRenewal: null != (r = null == e ? void 0 : e.is_renewal) && r
    }
}

function d(t) {
    let {
        username: e,
        usernameOnClickHandler: n = s,
        roleSubscriptionOnClickHandler: r = u.tEg,
        guildId: l,
        roleSubscriptionData: a
    } = t, {
        guild: i,
        totalMonthsSubscribed: c,
        showWithDuration: m,
        isRenewal: d
    } = A(l, a);
    return {
        content: m ? d ? o.t.Iy66M7 : o.t.eCgb2W : d ? o.t.mPTTdv : o.t.mYjFFx,
        formatParams: {
            username: e,
            usernameHook: n,
            guildName: null == i ? void 0 : i.name,
            handleGuildNameClick: r,
            tierName: null == a ? void 0 : a.tier_name,
            months: c
        }
    }
}

function f(t) {
    let e, {
            username: n,
            usernameOnClickHandler: r = s,
            roleSubscriptionOnClickHandler: l = u.tEg,
            guildId: a,
            roleSubscriptionData: i
        } = t,
        {
            guild: c,
            totalMonthsSubscribed: m,
            showWithDuration: d,
            isRenewal: f
        } = A(a, i);
    return e = d ? f ? o.t.OQ0OUy : o.t["+N9bxq"] : f ? o.t.OxP1NC : o.t["6Z1E+7"], o.intl.formatToParts(e, {
        guildName: null == c ? void 0 : c.name,
        tierName: null == i ? void 0 : i.tier_name,
        username: n,
        usernameOnClick: r,
        roleSubscriptionOnClick: l,
        months: m
    })
}

function E(t) {
    return (0, l.w)(t)
}

function _(t, e, n, l) {
    var a;
    r.Ay.trackWithMetadata(u.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: t,
        user_id: null == (a = i.default.getCurrentUser()) ? void 0 : a.id,
        channel_id: e,
        message_id: n,
        role_subscription_listing_id: l
    })
}

function T(t, e) {
    var n;
    return {
        guild_id: t.guild_id,
        sender: null == (n = i.default.getCurrentUser()) ? void 0 : n.id,
        target_user: e.author.id,
        channel_id: t.id,
        message_id: e.id
    }
}