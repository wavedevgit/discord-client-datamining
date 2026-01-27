/** Chunk was on 98797 **/
/** chunk id: 942075, original params: t,e,n (module,exports,require) **/
n.d(e, {
    WC: () => c,
    eb: () => T,
    g6: () => E,
    gw: () => d,
    xH: () => _,
    y4: () => g
});
var r = n(58149),
    i = n(936555),
    l = n(71393),
    a = n(287809);
n(661191), n(226139);
var o = n(652215),
    u = n(985018);

function s(t) {
    return t
}

function d(t) {
    let {
        username: e,
        usernameOnClickHandler: n,
        roleSubscriptionOnClickHandler: r,
        guildId: i,
        roleSubscriptionData: l
    } = t, {
        content: a,
        formatParams: o
    } = A({
        username: e,
        usernameOnClickHandler: n,
        roleSubscriptionOnClickHandler: r,
        guildId: i,
        roleSubscriptionData: l
    });
    return u.intl.format(a, o)
}

function c(t) {
    let {
        username: e,
        usernameOnClickHandler: n,
        roleSubscriptionOnClickHandler: r,
        guildId: i,
        roleSubscriptionData: l
    } = t, {
        content: a,
        formatParams: o
    } = A({
        username: e,
        usernameOnClickHandler: n,
        roleSubscriptionOnClickHandler: r,
        guildId: i,
        roleSubscriptionData: l
    });
    return u.intl.formatToParts(a, o)
}

function m(t, e) {
    var n, r;
    let i = l.A.getGuild(t),
        a = null != (n = null == e ? void 0 : e.total_months_subscribed) ? n : 0;
    return {
        guild: i,
        totalMonthsSubscribed: a,
        showWithDuration: a > 0,
        isRenewal: null != (r = null == e ? void 0 : e.is_renewal) && r
    }
}

function A(t) {
    let {
        username: e,
        usernameOnClickHandler: n = s,
        roleSubscriptionOnClickHandler: r = o.tEg,
        guildId: i,
        roleSubscriptionData: l
    } = t, {
        guild: a,
        totalMonthsSubscribed: d,
        showWithDuration: c,
        isRenewal: A
    } = m(i, l);
    return {
        content: c ? A ? u.t.Iy66M7 : u.t.eCgb2W : A ? u.t.mPTTdv : u.t.mYjFFx,
        formatParams: {
            username: e,
            usernameHook: n,
            guildName: null == a ? void 0 : a.name,
            handleGuildNameClick: r,
            tierName: null == l ? void 0 : l.tier_name,
            months: d
        }
    }
}

function T(t) {
    let e, {
            username: n,
            usernameOnClickHandler: r = s,
            roleSubscriptionOnClickHandler: i = o.tEg,
            guildId: l,
            roleSubscriptionData: a
        } = t,
        {
            guild: d,
            totalMonthsSubscribed: c,
            showWithDuration: A,
            isRenewal: T
        } = m(l, a);
    return e = A ? T ? u.t.OQ0OUy : u.t["+N9bxq"] : T ? u.t.OxP1NC : u.t["6Z1E+7"], u.intl.formatToParts(e, {
        guildName: null == d ? void 0 : d.name,
        tierName: null == a ? void 0 : a.tier_name,
        username: n,
        usernameOnClick: r,
        roleSubscriptionOnClick: i,
        months: c
    })
}

function E(t) {
    return (0, i.w)(t)
}

function _(t, e, n, i) {
    var l;
    r.Ay.trackWithMetadata(o.HAw.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
        guild_id: t,
        user_id: null == (l = a.default.getCurrentUser()) ? void 0 : l.id,
        channel_id: e,
        message_id: n,
        role_subscription_listing_id: i
    })
}

function g(t, e) {
    var n;
    return {
        guild_id: t.guild_id,
        sender: null == (n = a.default.getCurrentUser()) ? void 0 : n.id,
        target_user: e.author.id,
        channel_id: t.id,
        message_id: e.id
    }
}