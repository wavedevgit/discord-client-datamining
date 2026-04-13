/** chunk id: 998548 params = (module,exports,require) **/
n.d(t, {
    Xj: () => S,
    aK: () => p,
    m3: () => T
});
var i = n(627968),
    s = n(64700),
    l = n(687123),
    r = n(397927),
    a = n(935649),
    o = n(847599),
    d = n(36149),
    c = n(444802),
    u = n(207560),
    m = n(558001);
n(866945);
var g = n(840387),
    _ = n(933297),
    x = n(975571),
    h = n(835002),
    A = n(985018);

function p() {
    let e = (0, g.Z)(),
        t = (0, c.WX)(),
        n = s.useCallback(() => {
            window.open(x.A.getArticleURL(t), "_blank"), (0, m.N)(h.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, h.YX.LEARN_MORE)
        }, [t]),
        l = s.useCallback(() => {
            (0, m.N)(h.YA.SENSITIVE_CONTENT_FILTER_TEEN_NOTICE, h.YX.VIEWED)
        }, []);
    return s.useMemo(() => {
        if (e) return {
            type: _.lT.INLINE_NOTICE,
            noticeType: "info",
            trackView: l,
            useText: () => A.intl.format(A.t.EUo0yj, {
                hook: (e, t) => (0, i.jsx)(r.MzZ, {
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
            a.A.showAgeVerificationGetStartedModal({
                entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE
            }), (0, m.N)(h.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, h.YX.LEARN_MORE)
        }, []),
        c = s.useCallback(() => {
            (0, m.N)(h.YA.SENSITIVE_CONTENT_FILTER_AGE_VERIFICATION_NOTICE, h.YX.VIEWED)
        }, []);
    return s.useMemo(() => {
        if (n) return {
            type: _.lT.INLINE_NOTICE,
            noticeType: "info",
            trackView: c,
            useText: () => A.intl.format(A.t.OX4ybh, {
                hook: (e, t) => (0, i.jsx)(r.MzZ, {
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
        (0, m.N)(h.YA.AGE_CONFIRMATION_NOTICE, h.YX.VIEWED)
    }, []);
    let t = s.useCallback(() => {
            window.open(x.A.getArticleURL(e), "_blank"), (0, m.N)(h.YA.AGE_CONFIRMATION_NOTICE, h.YX.LEARN_MORE)
        }, [e]),
        n = s.useCallback(() => {
            a.A.showAgeVerificationGetStartedModal({
                entryPoint: o.q1.CONTENT_AND_SOCIAL_NOTICE
            }), (0, m.N)(h.YA.AGE_CONFIRMATION_NOTICE, h.YX.CONFIRM_AGE)
        }, []);
    return (0, i.jsx)(r.po8, {
        messageType: r.YCn.INFO,
        action: (0, i.jsx)(r.QWc, {
            variant: "secondary",
            size: "sm",
            textVariant: "text-sm/medium",
            text: A.intl.string(A.t.FDSSia),
            onClick: n
        }),
        children: A.intl.format(A.t.mFgsfg, {
            hook: (e, n) => (0, i.jsx)(r.MzZ, {
                onClick: t,
                children: e
            }, n)
        })
    })
}

function S() {
    let e = (0, u.aX)(l.t.REACTIVE_CHECK),
        t = (0, d.b8)();
    return s.useMemo(() => {
        if (e && !t) return {
            type: _.lT.STRONGLY_DISCOURAGED_CUSTOM,
            notice: f
        }
    }, [e, t])
}