/** chunk id: 918022 params = (module,exports,require) **/
l.d(t, {
    Y: () => i
});
var a = l(64700),
    n = l(202613),
    r = l(459357);

function i(e) {
    let {
        checkoutPaymentSources: t,
        setPaymentSourceId: l,
        location: i,
        isReady: o = !0,
        subscriptionPaymentSourceId: s
    } = e, {
        enabled: d
    } = (0, r.c)({
        location: i
    }), {
        dropdownPaymentSources: u,
        giftCardWallet: c
    } = a.useMemo(() => d ? {
        dropdownPaymentSources: t.filter(e => !(e.source instanceof n.LQ)),
        giftCardWallet: t.find(e => e.source instanceof n.LQ) ?? null
    } : {
        dropdownPaymentSources: t,
        giftCardWallet: null
    }, [t, d]), [p, m] = a.useState(void 0), [h, x] = a.useState(void 0), b = a.useMemo(() => void 0 !== p ? p : null != c && (null == s || s === c.id), [p, s, c]), y = a.useMemo(() => {
        if (void 0 !== h) return h;
        if (0 === u.length) return null;
        let e = u.find(e => e.enabled)?.id ?? null;
        if (null != s) {
            let e = u.find(e => e.id === s);
            if (null != e && e.enabled) return s
        }
        return e
    }, [h, u, s]), f = a.useMemo(() => null != c && b ? c.id : y ?? null, [c, b, y]);
    return a.useEffect(() => {
        o && 0 !== t.length && l(f)
    }, [o, t, l, f]), {
        giftCardsEnabled: d,
        dropdownPaymentSources: u,
        dropdownPaymentSourceId: y,
        giftCardWallet: c,
        isGiftCardCreditsChecked: b,
        handleGiftCardCreditsToggle: a.useCallback(e => {
            m(e)
        }, []),
        handleDropdownPaymentSourceChange: a.useCallback(e => {
            x(null != e ? e.id : null)
        }, [])
    }
}