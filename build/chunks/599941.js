/** chunk id: 599941 params = (module,exports,require) **/
n.d(t, {
    KE: () => N,
    Tq: () => C,
    XE: () => T,
    Yc: () => I,
    cY: () => _,
    dB: () => m,
    dL: () => S,
    eb: () => f,
    et: () => x,
    hc: () => E,
    uP: () => p,
    uk: () => g
}), n(321073);
var i = n(64700),
    l = n(311907),
    s = n(724442),
    a = n(608461),
    r = n(142120);
n(403362);
var o = n(300233),
    d = n(579908),
    c = n(636194),
    u = n(624456);
let h = [],
    A = function(e) {
        let {
            refetchOnMount: t = !1,
            includeSoftDeleted: n = !0,
            countryCode: a,
            dontFetchWhileTrue: o
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u = (0, l.bG)([r.A], () => r.A.isConnected()), h = (0, l.bG)([c.A], () => null != e ? c.A.getSubscriptionGroupListingsForGuildFetchState(e) : c.e.FETCHED), A = i.useRef(t);
        i.useEffect(() => {
            if (null == e || !u || !0 === o) return;
            let i = c.A.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || i === c.e.NOT_FETCHED) && (A.current = !1, d.WA(e, {
                includeSoftDeleted: n,
                countryCode: a
            }))
        }, [u, e, n, t, a, o]);
        let _ = (0, s.A)(A);
        return {
            listingsLoaded: h === c.e.FETCHED && !0 !== _
        }
    },
    _ = function(e) {
        let {
            includeSoftDeleted: t = !1,
            includeUnpublished: n = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, l.yK)([c.A], () => {
            if (null == e) return [];
            let i = c.A.getSubscriptionGroupListing(e);
            if (null == i) return [];
            let l = [];
            for (let e of i.subscription_listings_ids) {
                let i = c.A.getSubscriptionListing(e);
                null != i && (!i.soft_deleted || t) && (i.published || n) && l.push(i)
            }
            return l
        }, [e, t, n])
    },
    m = e => (0, l.bG)([c.A], () => null != e ? c.A.getSubscriptionListing(e) : null),
    g = e => {
        let t = (0, o.X)("useGroupListingsForGuild");
        return (0, l.bG)([c.A], () => null != e && t ? c.A.getSubscriptionGroupListingsForGuild(e) : h)
    },
    p = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            includeSoftDeleted: !1,
            sortDeletedListingsLast: !1
        };
        return A(e), (0, l.yK)([c.A], () => {
            let n = null != e ? c.A.getSubscriptionGroupListingsForGuild(e) : h,
                i = [];
            for (let e of n)
                for (let n of e.subscription_listings_ids) {
                    let e = c.A.getSubscriptionListing(n);
                    null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e)
                }
            return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...i.filter(e => !e.soft_deleted), ...i.filter(e => e.soft_deleted)] : i
        })
    },
    f = e => {
        let [t, n] = i.useState(!1), s = i.useMemo(() => e.map(u.M), [e]), a = (0, l.yK)([c.A], () => s.filter(e => !c.A.getDidFetchListingForSubscriptionPlanId(e)), [s]);
        return i.useEffect(() => {
            !t && a.length > 0 && (n(!0), Promise.all(a.map(e => d._R(e))).catch(() => {}).then(() => {
                n(!1)
            }))
        }, [t, a]), {
            loading: t
        }
    },
    x = () => {
        let [e, t] = i.useState(!1), [n, l] = i.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, i) => {
                try {
                    return t(!0), l(null), await d.H7(e, n, i), !0
                } catch (e) {
                    l(e)
                } finally {
                    t(!1)
                }
            }
        }
    },
    E = () => {
        let [e, t] = (0, a.A)(d.mK), {
            loading: n,
            error: i
        } = t;
        return {
            error: i,
            submitting: n,
            archiveSubscriptionListing: e
        }
    },
    I = () => {
        let [e, t] = i.useState(!1), [n, l] = i.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async e => {
                let {
                    guildId: n,
                    groupListingId: i,
                    listingId: s
                } = e;
                try {
                    return t(!0), l(null), await d.vW({
                        guildId: n,
                        groupListingId: i,
                        listingId: s,
                        data: {
                            published: !0
                        }
                    }), !0
                } catch (e) {
                    l(e)
                } finally {
                    t(!1)
                }
            },
            clearError: () => l(null)
        }
    },
    C = e => (0, l.bG)([c.A], () => null != e ? c.A.getSubscriptionSettings(e) : void 0),
    N = () => {
        let [e, t] = i.useState(!1), [n, l] = i.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, n) => {
                t(!0), l(null);
                try {
                    await d.DO(e, n)
                } catch (e) {
                    l(e)
                } finally {
                    t(!1)
                }
            }, []),
            error: n
        }
    },
    T = () => {
        let [e, t] = i.useState(!1), [n, l] = i.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async e => {
                t(!0), l(null);
                try {
                    await d.W5(e)
                } catch (e) {
                    l(e)
                } finally {
                    t(!1)
                }
            }, []),
            error: n
        }
    },
    S = e => (0, l.bG)([c.A], () => null != e ? c.A.getSubscriptionTrial(e) : null)