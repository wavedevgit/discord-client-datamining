/** chunk id: 599941 params = (module,exports,require) **/
n.d(t, {
    KE: () => R,
    Tq: () => C,
    XE: () => g,
    Yc: () => S,
    cY: () => A,
    dB: () => T,
    dL: () => O,
    eb: () => p,
    et: () => h,
    hc: () => m,
    uP: () => N,
    uk: () => I
}), n(321073);
var i = n(64700),
    l = n(311907),
    r = n(724442),
    s = n(608461),
    a = n(142120);
n(403362);
var o = n(300233),
    c = n(579908),
    u = n(636194),
    d = n(624456);
let _ = [],
    E = function(e) {
        let {
            refetchOnMount: t = !1,
            includeSoftDeleted: n = !0,
            countryCode: s,
            dontFetchWhileTrue: o
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, d = (0, l.bG)([a.A], () => a.A.isConnected()), _ = (0, l.bG)([u.A], () => null != e ? u.A.getSubscriptionGroupListingsForGuildFetchState(e) : u.e.FETCHED), E = i.useRef(t);
        i.useEffect(() => {
            if (null == e || !d || !0 === o) return;
            let i = u.A.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || i === u.e.NOT_FETCHED) && (E.current = !1, c.WA(e, {
                includeSoftDeleted: n,
                countryCode: s
            }))
        }, [d, e, n, t, s, o]);
        let A = (0, r.A)(E);
        return {
            listingsLoaded: _ === u.e.FETCHED && !0 !== A
        }
    },
    A = function(e) {
        let {
            includeSoftDeleted: t = !1,
            includeUnpublished: n = !0
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, l.yK)([u.A], () => {
            if (null == e) return [];
            let i = u.A.getSubscriptionGroupListing(e);
            if (null == i) return [];
            let l = [];
            for (let e of i.subscription_listings_ids) {
                let i = u.A.getSubscriptionListing(e);
                null != i && (!i.soft_deleted || t) && (i.published || n) && l.push(i)
            }
            return l
        }, [e, t, n])
    },
    T = e => (0, l.bG)([u.A], () => null != e ? u.A.getSubscriptionListing(e) : null),
    I = e => {
        let t = (0, o.X)("useGroupListingsForGuild");
        return (0, l.bG)([u.A], () => null != e && t ? u.A.getSubscriptionGroupListingsForGuild(e) : _)
    },
    N = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            includeSoftDeleted: !1,
            sortDeletedListingsLast: !1
        };
        return E(e), (0, l.yK)([u.A], () => {
            let n = null != e ? u.A.getSubscriptionGroupListingsForGuild(e) : _,
                i = [];
            for (let e of n)
                for (let n of e.subscription_listings_ids) {
                    let e = u.A.getSubscriptionListing(n);
                    null != e && (t.includeSoftDeleted || !e.soft_deleted) && i.push(e)
                }
            return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...i.filter(e => !e.soft_deleted), ...i.filter(e => e.soft_deleted)] : i
        })
    },
    p = e => {
        let [t, n] = i.useState(!1), r = i.useMemo(() => e.map(d.M), [e]), s = (0, l.yK)([u.A], () => r.filter(e => !u.A.getDidFetchListingForSubscriptionPlanId(e)), [r]);
        return i.useEffect(() => {
            !t && s.length > 0 && (n(!0), Promise.all(s.map(e => c._R(e))).catch(() => {}).then(() => {
                n(!1)
            }))
        }, [t, s]), {
            loading: t
        }
    },
    h = () => {
        let [e, t] = i.useState(!1), [n, l] = i.useState(null);
        return {
            error: n,
            submitting: e,
            deleteSubscriptionListing: async (e, n, i) => {
                try {
                    return t(!0), l(null), await c.H7(e, n, i), !0
                } catch (e) {
                    l(e)
                } finally {
                    t(!1)
                }
            }
        }
    },
    m = () => {
        let [e, t] = (0, s.A)(c.mK), {
            loading: n,
            error: i
        } = t;
        return {
            error: i,
            submitting: n,
            archiveSubscriptionListing: e
        }
    },
    S = () => {
        let [e, t] = i.useState(!1), [n, l] = i.useState(null);
        return {
            error: n,
            submitting: e,
            publishSubscriptionListing: async e => {
                let {
                    guildId: n,
                    groupListingId: i,
                    listingId: r
                } = e;
                try {
                    return t(!0), l(null), await c.vW({
                        guildId: n,
                        groupListingId: i,
                        listingId: r,
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
    C = e => (0, l.bG)([u.A], () => null != e ? u.A.getSubscriptionSettings(e) : void 0),
    R = () => {
        let [e, t] = i.useState(!1), [n, l] = i.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: i.useCallback(async (e, n) => {
                t(!0), l(null);
                try {
                    await c.DO(e, n)
                } catch (e) {
                    l(e)
                } finally {
                    t(!1)
                }
            }, []),
            error: n
        }
    },
    g = () => {
        let [e, t] = i.useState(!1), [n, l] = i.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: i.useCallback(async e => {
                t(!0), l(null);
                try {
                    await c.W5(e)
                } catch (e) {
                    l(e)
                } finally {
                    t(!1)
                }
            }, []),
            error: n
        }
    },
    O = e => (0, l.bG)([u.A], () => null != e ? u.A.getSubscriptionTrial(e) : null)