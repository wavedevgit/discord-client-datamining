/** chunk id: 998548 params = (module,exports,require) **/
n.d(t, {
    Xj: () => E,
    aK: () => p,
    m3: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(687123),
    a = n(397927),
    r = n(935649),
    o = n(847599),
    d = n(36149),
    c = n(444802),
    u = n(207560),
    m = n(558001);
n(866945);
var g = n(840387),
    _ = n(933297),
    A = n(975571),
    x = n(835002),
    h = n(985018);

function p() {
    let e = (0, g.Z)(),
        t = (0, c.WX)(),
        n = s.useCallback(() => {
            window.open(A.A.getArticleURL(t), "_blank"), (0, m.N)(x.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, x.YX.LEARN_MORE)
        }, [t]),
        l = s.useCallback(() => {
            (0, m.N)(x.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, x.YX.VIEWED)
        }, []);
    return s.useMemo(() => {
        if (e) return {
            type: _.lT.INLINE_NOTICE,
            noticeType: "info",
            trackView: l,
            useText: () => h.intl.format(h.t.EUo0yj, {
                hook: (e, t) => (0, i.jsx)(a.MzZ, {
                    onClick: n,
                    children: e
                }, t)
            })
        }
    }, [n, e, l])
}

function T() {
    let e = (0, u.SJ)(),
        t = (0, d.b8)(),
        n = e && !t,
        l = s.useCallback(() => {
            r.A.showAgeVerificationGetStartedModal({
                entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE
            }), (0, m.N)(x.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, x.YX.LEARN_MORE)
        }, []),
        c = s.useCallback(() => {
            (0, m.N)(x.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, x.YX.VIEWED)
        }, []);
    return s.useMemo(() => {
        if (n) return {
            type: _.lT.INLINE_NOTICE,
            noticeType: "info",
            trackView: c,
            useText: () => h.intl.format(h.t.OX4ybh, {
                hook: (e, t) => (0, i.jsx)(a.MzZ, {
                    onClick: l,
                    children: e
                }, t)
            })
        }
    }, [l, n, c])
}

function f() {
    let e = (0, c.WX)();
    s.useEffect(() => {
        (0, m.N)(x.YA.AGE_CONFIRMATION_NOTICE, x.YX.VIEWED)
    }, []);
    let t = s.useCallback(() => {
            window.open(A.A.getArticleURL(e), "_blank"), (0, m.N)(x.YA.AGE_CONFIRMATION_NOTICE, x.YX.LEARN_MORE)
        }, [e]),
        n = s.useCallback(() => {
            r.A.showAgeVerificationGetStartedModal({
                entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE
            }), (0, m.N)(x.YA.AGE_CONFIRMATION_NOTICE, x.YX.CONFIRM_AGE)
        }, []);
    return (0, i.jsx)(a.po8, {
        messageType: a.YCn.INFO,
        action: (0, i.jsx)(a.QWc, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: h.intl.string(h.t.FDSSia),
            onClick: n
        }),
        children: h.intl.format(h.t.mFgsfg, {
            hook: (e, n) => (0, i.jsx)(a.MzZ, {
                onClick: t,
                children: e
            }, n)
        })
    })
}

function E() {
    let e = (0, u.aX)(l.t.REACTIVE_CHECK),
        t = (0, d.b8)();
    return s.useMemo(() => {
        if (e && !t) return {
            type: _.lT.STRONGLY_DISCOURAGED_CUSTOM,
            notice: f
        }
    }, [e, t])
}