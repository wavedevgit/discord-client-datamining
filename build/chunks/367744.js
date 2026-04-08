/** chunk id: 367744 params = (module,exports,require) **/
n.d(t, {
    o: () => m
});
var a = n(64700),
    i = n(562465),
    l = n(557009),
    s = n(652215),
    r = n(788868);
let o = async () => (await i.Bo.get({
    url: s.Rsh.ENTITLEMENTS_FOR_APPLICATION(r.tv),
    oldFormErrors: !0,
    query: {
        exclude_consumed: !0,
        exclude_ended: !0
    },
    rejectWithError: !0
})).body.map(e => l.A.createFromServer(e)), d = async e => {
    await i.Bo.post({
        url: "/debug/entitlements/fractional-premium",
        body: {
            count: 1,
            sku_id: e
        },
        rejectWithError: !1
    })
}, c = async e => {
    let t = "/debug/entitlements/fractional-premium";
    null != e && (t = `${t}/${e}`), await i.Bo.del({
        url: t,
        rejectWithError: !0
    })
}, u = async () => {
    await i.Bo.post({
        url: "/debug/entitlements/fulfillment",
        rejectWithError: !1
    })
}, m = () => {
    let [e, t] = a.useState([]), [n, i] = a.useState(!1), l = (0, a.useCallback)(async () => {
        try {
            i(!0);
            let e = await o();
            t(e)
        } finally {
            i(!1)
        }
    }, []), s = (0, a.useCallback)(async e => {
        await d(e), await l()
    }, [l]);
    return {
        grantFractionalPremium: s,
        deleteFractionalPremium: (0, a.useCallback)(async e => {
            await c(e), await l()
        }, [l]),
        triggerNextEntitlementFulfillment: (0, a.useCallback)(async () => {
            await u(), await l()
        }, [l]),
        refreshEntitlementList: l,
        entitlements: e,
        loading: n
    }
}