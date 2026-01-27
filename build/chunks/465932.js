/** Chunk was on web.js **/
/** chunk id: 465932, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    MH: () => f,
    YG: () => _,
    nq: () => p
});
var r = n(64700),
    i = n(311907),
    a = n(163126),
    o = n(579908),
    s = n(636194),
    l = n(71393),
    c = n(836039),
    u = n(652215);
let d = e => {
        let t = (0, a.A)();
        r.useEffect(() => {
            null != e && e.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED) && s.A.getMonetizationRestrictionsFetchState(e.id) === s.e.NOT_FETCHED && o.LJ(e.id, {
                signal: t
            })
        }, [e, t]);
        let n = null == e ? void 0 : e.id;
        return {
            restrictions: (0, i.yK)([s.A], () => {
                var e;
                return null != (e = s.A.getMonetizationRestrictions(null != n ? n : u.dJq)) ? e : []
            }),
            restrictionsLoading: (0, i.bG)([s.A], () => s.A.getMonetizationRestrictionsFetchState(null != n ? n : u.dJq) === s.e.FETCHING)
        }
    },
    f = e => {
        var t;
        let n = (0, i.bG)([l.A], () => l.A.getGuild(e), [e]),
            {
                restrictions: r,
                restrictionsLoading: a
            } = d(n);
        return {
            shouldHideGuildPurchaseEntryPoints: !((null == n ? void 0 : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? void 0 : n.features.has(u.GuildFeatures.SOCIAL_LAYER_STOREFRONT))) || (a ? null == (t = null == n ? void 0 : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || t : (0, c.Y5)(r)),
            restrictionsLoading: a
        }
    },
    p = e => {
        var t;
        let n = (0, i.bG)([l.A], () => l.A.getGuild(e), [e]),
            {
                restrictions: r,
                restrictionsLoading: a
            } = d(n),
            o = a ? null == (t = null == n ? void 0 : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) || t : (0, c.a1)(r),
            s = !!(null == n ? void 0 : n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING));
        return {
            shouldRestrictUpdatingCreatorMonetizationSettings: o || s,
            allowSelfRemoveMonetization: !o,
            restrictionsLoading: a
        }
    },
    _ = e => {
        let {
            restrictions: t,
            restrictionsLoading: n
        } = d((0, i.bG)([l.A], () => l.A.getGuild(e), [e]));
        return {
            isMonetizationReapplicationDisabled: (0, c.EM)(t),
            restrictionsLoading: n
        }
    }