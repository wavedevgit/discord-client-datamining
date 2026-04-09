/** chunk id: 599941 params = (module,exports,require) **/
l.d(t, {
    KE: () => D,
    Tq: () => g,
    XE: () => m,
    Yc: () => f,
    cY: () => A,
    dB: () => I,
    dL: () => C,
    eb: () => E,
    et: () => R,
    hc: () => T,
    uP: () => h,
    uk: () => p
}), l(321073);
var n = l(64700),
    i = l(311907),
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
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = (0, i.bG)([u.A], () => u.A.isConnected()), S = (0, i.bG)([d.A], () => null != e ? d.A.getSubscriptionGroupListingsForGuildFetchState(e) : d.e.FETCHED), _ = n.useRef(t);
        n.useEffect(() => {
            if (null == e || !c || !0 === a) return;
            let n = d.A.getSubscriptionGroupListingsForGuildFetchState(e);
            (t || n === d.e.NOT_FETCHED) && (_.current = !1, o.WA(e, {
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
        return (0, i.yK)([d.A], () => {
            if (null == e) return [];
            let n = d.A.getSubscriptionGroupListing(e);
            if (null == n) return [];
            let i = [];
            for (let e of n.subscription_listings_ids) {
                let n = d.A.getSubscriptionListing(e);
                null != n && (!n.soft_deleted || t) && (n.published || l) && i.push(n)
            }
            return i
        }, [e, t, l])
    },
    I = e => (0, i.bG)([d.A], () => null != e ? d.A.getSubscriptionListing(e) : null),
    p = e => {
        let t = (0, a.X)("useGroupListingsForGuild");
        return (0, i.bG)([d.A], () => null != e && t ? d.A.getSubscriptionGroupListingsForGuild(e) : S)
    },
    h = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            includeSoftDeleted: !1,
            sortDeletedListingsLast: !1
        };
        return _(e), (0, i.yK)([d.A], () => {
            let l = null != e ? d.A.getSubscriptionGroupListingsForGuild(e) : S,
                n = [];
            for (let e of l)
                for (let l of e.subscription_listings_ids) {
                    let e = d.A.getSubscriptionListing(l);
                    null != e && (t.includeSoftDeleted || !e.soft_deleted) && n.push(e)
                }
            return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...n.filter(e => !e.soft_deleted), ...n.filter(e => e.soft_deleted)] : n
        })
    },
    E = e => {
        let [t, l] = n.useState(!1), r = n.useMemo(() => e.map(c.M), [e]), s = (0, i.yK)([d.A], () => r.filter(e => !d.A.getDidFetchListingForSubscriptionPlanId(e)), [r]);
        return n.useEffect(() => {
            !t && s.length > 0 && (l(!0), Promise.all(s.map(e => o._R(e))).catch(() => {}).then(() => {
                l(!1)
            }))
        }, [t, s]), {
            loading: t
        }
    },
    R = () => {
        let [e, t] = n.useState(!1), [l, i] = n.useState(null);
        return {
            error: l,
            submitting: e,
            deleteSubscriptionListing: async (e, l, n) => {
                try {
                    return t(!0), i(null), await o.H7(e, l, n), !0
                } catch (e) {
                    i(e)
                } finally {
                    t(!1)
                }
            }
        }
    },
    T = () => {
        let [e, t] = (0, s.A)(o.mK), {
            loading: l,
            error: n
        } = t;
        return {
            error: n,
            submitting: l,
            archiveSubscriptionListing: e
        }
    },
    f = () => {
        let [e, t] = n.useState(!1), [l, i] = n.useState(null);
        return {
            error: l,
            submitting: e,
            publishSubscriptionListing: async e => {
                let {
                    guildId: l,
                    groupListingId: n,
                    listingId: r
                } = e;
                try {
                    return t(!0), i(null), await o.vW({
                        guildId: l,
                        groupListingId: n,
                        listingId: r,
                        data: {
                            published: !0
                        }
                    }), !0
                } catch (e) {
                    i(e)
                } finally {
                    t(!1)
                }
            },
            clearError: () => i(null)
        }
    },
    g = e => (0, i.bG)([d.A], () => null != e ? d.A.getSubscriptionSettings(e) : void 0),
    D = () => {
        let [e, t] = n.useState(!1), [l, i] = n.useState(null);
        return {
            loading: e,
            updateSubscriptionsSettings: n.useCallback(async (e, l) => {
                t(!0), i(null);
                try {
                    await o.DO(e, l)
                } catch (e) {
                    i(e)
                } finally {
                    t(!1)
                }
            }, []),
            error: l
        }
    },
    m = () => {
        let [e, t] = n.useState(!1), [l, i] = n.useState(null);
        return {
            loading: e,
            fetchSubscriptionsSettings: n.useCallback(async e => {
                t(!0), i(null);
                try {
                    await o.W5(e)
                } catch (e) {
                    i(e)
                } finally {
                    t(!1)
                }
            }, []),
            error: l
        }
    },
    C = e => (0, i.bG)([d.A], () => null != e ? d.A.getSubscriptionTrial(e) : null)