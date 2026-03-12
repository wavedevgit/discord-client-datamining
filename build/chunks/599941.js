/** chunk id: 599941 params = (module,exports,require) **/
a.d(t, {
    KE: () => R,
    Tq: () => E,
    XE: () => D,
    Yc: () => T,
    cY: () => p,
    dB: () => A,
    dL: () => f,
    eb: () => g,
    et: () => I,
    hc: () => C,
    uP: () => h,
    uk: () => m
}), a(321073);
var n = a(64700),
    r = a(311907),
    l = a(724442),
    i = a(608461),
    s = a(142120);
a(403362);
var c = a(300233),
    o = a(579908),
    u = a(636194),
    _ = a(624456);
let d = [],
    S = function(e) {
        let {
            refetchOnMount: t = !1,
            includeSoftDeleted: a = !0,
            countryCode: i,
            dontFetchWhileTrue: c
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _ = (0, r.bG)([s.A], () => s.A.isConnected()), d = (0, r.bG)([u.A], () => null != e ? u.A.getSubscriptionGroupListingsForGuildFetchState(e) : u.e.FETCHED), S = n.useRef(t);
        n.useEffect(() => {
            if (null == e || !_ || !0 === c) return;
            let n = u.A.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || n === u.e.NOT_FETCHED) && (S.current = !1, o.WA(e, {
                includeSoftDeleted: a,
                countryCode: i
            }))
        }, [_, e, a, t, i, c]);
        let p = (0, l.A)(S);
        return {
            listingsLoaded: d === u.e.FETCHED && !0 !== p
        }
    },
    p = function(e) {
        let {
            includeSoftDeleted: t = !1,
            includeUnpublished: a = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.yK)([u.A], () => {
            if (null == e) return [];
            let n = u.A.getSubscriptionGroupListing(e);
            if (null == n) return [];
            let r = [];
            for (let e of n.subscription_listings_ids) {
                let n = u.A.getSubscriptionListing(e);
                null != n && (!n.soft_deleted || t) && (n.published || a) && r.push(n)
            }
            return r
        }, [e, t, a])
    },
    A = e => (0, r.bG)([u.A], () => null != e ? u.A.getSubscriptionListing(e) : null),
    m = e => {
        let t = (0, c.X)("useGroupListingsForGuild");
        return (0, r.bG)([u.A], () => null != e && t ? u.A.getSubscriptionGroupListingsForGuild(e) : d)
    },
    h = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            includeSoftDeleted: !1,
            sortDeletedListingsLast: !1
        };
        return S(e), (0, r.yK)([u.A], () => {
            let a = null != e ? u.A.getSubscriptionGroupListingsForGuild(e) : d,
                n = [];
            for (let e of a)
                for (let a of e.subscription_listings_ids) {
                    let e = u.A.getSubscriptionListing(a);
                    null != e && (t.includeSoftDeleted || !e.soft_deleted) && n.push(e)
                }
            return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...n.filter(e => !e.soft_deleted), ...n.filter(e => e.soft_deleted)] : n
        })
    },
    g = e => {
        let [t, a] = n.useState(!1), l = n.useMemo(() => e.map(_.M), [e]), i = (0, r.yK)([u.A], () => l.filter(e => !u.A.getDidFetchListingForSubscriptionPlanId(e)), [l]);
        return n.useEffect(() => {
            !t && i.length > 0 && (a(!0), Promise.all(i.map(e => o._R(e))).catch(() => {}).then(() => {
                a(!1)
            }))
        }, [t, i]), {
            loading: t
        }
    },
    I = () => {
        let [e, t] = n.useState(!1), [a, r] = n.useState(null);
        return {
            error: a,
            submitting: e,
            deleteSubscriptionListing: async (e, a, n) => {
                try {
                    return t(!0), r(null), await o.H7(e, a, n), !0
                } catch (e) {
                    r(e)
                } finally {
                    t(!1)
                }
            }
        }
    },
    C = () => {
        let [e, t] = (0, i.A)(o.mK), {
            loading: a,
            error: n
        } = t;
        return {
            error: n,
            submitting: a,
            archiveSubscriptionListing: e
        }
    },
    T = () => {
        let [e, t] = n.useState(!1), [a, r] = n.useState(null);
        return {
            error: a,
            submitting: e,
            publishSubscriptionListing: async e => {
                let {
                    guildId: a,
                    groupListingId: n,
                    listingId: l
                } = e;
                try {
                    return t(!0), r(null), await o.vW({
                        guildId: a,
                        groupListingId: n,
                        listingId: l,
                        data: {
                            published: !0
                        }
                    }), !0
                } catch (e) {
                    r(e)
                } finally {
                    t(!1)
                }
            },
            clearError: () => r(null)
        }
    },
    E = e => (0, r.bG)([u.A], () => null != e ? u.A.getSubscriptionSettings(e) : void 0),
    R = () => {
        let [e, t] = n.useState(!1), [a, r] = n.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: n.useCallback(async (e, a) => {
                t(!0), r(null);
                try {
                    await o.DO(e, a)
                } catch (e) {
                    r(e)
                } finally {
                    t(!1)
                }
            }, []),
            error: a
        }
    },
    D = () => {
        let [e, t] = n.useState(!1), [a, r] = n.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: n.useCallback(async e => {
                t(!0), r(null);
                try {
                    await o.W5(e)
                } catch (e) {
                    r(e)
                } finally {
                    t(!1)
                }
            }, []),
            error: a
        }
    },
    f = e => (0, r.bG)([u.A], () => null != e ? u.A.getSubscriptionTrial(e) : null)