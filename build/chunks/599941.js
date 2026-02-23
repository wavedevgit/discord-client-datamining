/** chunk id: 599941, original params: e,t,l (module,exports,require) **/
l.d(t, {
    KE: () => m,
    Tq: () => f,
    XE: () => D,
    Yc: () => g,
    cY: () => A,
    dB: () => p,
    dL: () => C,
    eb: () => E,
    et: () => R,
    hc: () => T,
    uP: () => h,
    uk: () => I
}), l(321073);
var i = l(64700),
    n = l(311907),
    r = l(724442),
    s = l(608461),
    u = l(142120);
l(403362);
var a = l(300233),
    o = l(579908),
    d = l(636194),
    c = l(624456);
let S = [],
    _ = function(e) {
        let {
            refetchOnMount: t = !1,
            includeSoftDeleted: l = !0,
            countryCode: s,
            dontFetchWhileTrue: a
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = (0, n.bG)([u.A], () => u.A.isConnected()), S = (0, n.bG)([d.A], () => null != e ? d.A.getSubscriptionGroupListingsForGuildFetchState(e) : d.e.FETCHED), _ = i.useRef(t);
        i.useEffect(() => {
            if (null == e || !c || !0 === a) return;
            let i = d.A.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || i === d.e.NOT_FETCHED) && (_.current = !1, o.WA(e, {
                includeSoftDeleted: l,
                countryCode: s
            }))
        }, [c, e, l, t, s, a]);
        let A = (0, r.A)(_);
        return {
            listingsLoaded: S === d.e.FETCHED && !0 !== A
        }
    },
    A = function(e) {
        let {
            includeSoftDeleted: t = !1,
            includeUnpublished: l = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, n.yK)([d.A], () => {
            if (null == e) return [];
            let i = d.A.getSubscriptionGroupListing(e);
            if (null == i) return [];
            let n = [];
            for (let e of i.subscription_listings_ids) {
                let i = d.A.getSubscriptionListing(e);
                null != i && (!i.soft_deleted || t) && (i.published || l) && n.push(i)
            }
            return n
        }, [e, t, l])
    },
    p = e => (0, n.bG)([d.A], () => null != e ? d.A.getSubscriptionListing(e) : null),
    I = e => {
        let t = (0, a.X)("useGroupListingsForGuild");
        return (0, n.bG)([d.A], () => null != e && t ? d.A.getSubscriptionGroupListingsForGuild(e) : S)
    },
    h = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            includeSoftDeleted: !1,
            sortDeletedListingsLast: !1
        };
        return _(e), (0, n.yK)([d.A], () => {
            let l = null != e ? d.A.getSubscriptionGroupListingsForGuild(e) : S,
                i = [];
            for (let e of l)
                for (let l of e.subscription_listings_ids) {
                    let e = d.A.getSubscriptionListing(l);
                    null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e)
                }
            return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...i.filter(e => !e.soft_deleted), ...i.filter(e => e.soft_deleted)] : i
        })
    },
    E = e => {
        let [t, l] = i.useState(!1), r = i.useMemo(() => e.map(c.M), [e]), s = (0, n.yK)([d.A], () => r.filter(e => !d.A.getDidFetchListingForSubscriptionPlanId(e)), [r]);
        return i.useEffect(() => {
            !t && s.length > 0 && (l(!0), Promise.all(s.map(e => o._R(e))).catch(() => {}).then(() => {
                l(!1)
            }))
        }, [t, s]), {
            loading: t
        }
    },
    R = () => {
        let [e, t] = i.useState(!1), [l, n] = i.useState(null);
        return {
            error: l,
            submitting: e,
            deleteSubscriptionListing: async (e, l, i) => {
                try {
                    return t(!0), n(null), await o.H7(e, l, i), !0
                } catch (e) {
                    n(e)
                } finally {
                    t(!1)
                }
            }
        }
    },
    T = () => {
        let [e, t] = (0, s.A)(o.mK), {
            loading: l,
            error: i
        } = t;
        return {
            error: i,
            submitting: l,
            archiveSubscriptionListing: e
        }
    },
    g = () => {
        let [e, t] = i.useState(!1), [l, n] = i.useState(null);
        return {
            error: l,
            submitting: e,
            publishSubscriptionListing: async e => {
                let {
                    guildId: l,
                    groupListingId: i,
                    listingId: r
                } = e;
                try {
                    return t(!0), n(null), await o.vW({
                        guildId: l,
                        groupListingId: i,
                        listingId: r,
                        data: {
                            published: !0
                        }
                    }), !0
                } catch (e) {
                    n(e)
                } finally {
                    t(!1)
                }
            },
            clearError: () => n(null)
        }
    },
    f = e => (0, n.bG)([d.A], () => null != e ? d.A.getSubscriptionSettings(e) : void 0),
    m = () => {
        let [e, t] = i.useState(!1), [l, n] = i.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, l) => {
                t(!0), n(null);
                try {
                    await o.DO(e, l)
                } catch (e) {
                    n(e)
                } finally {
                    t(!1)
                }
            }, []),
            error: l
        }
    },
    D = () => {
        let [e, t] = i.useState(!1), [l, n] = i.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async e => {
                t(!0), n(null);
                try {
                    await o.W5(e)
                } catch (e) {
                    n(e)
                } finally {
                    t(!1)
                }
            }, []),
            error: l
        }
    },
    C = e => (0, n.bG)([d.A], () => null != e ? d.A.getSubscriptionTrial(e) : null)