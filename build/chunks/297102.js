/** chunk id: 297102, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => O
}), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(835245),
    o = n(158954),
    s = n(397927),
    a = n(632738),
    c = n(975571),
    d = n(935649),
    u = n(847599),
    g = n(870383),
    p = n(81091),
    m = n(36149),
    f = n(737567),
    _ = n(652215),
    b = n(239093),
    E = n(985018),
    R = n(935568),
    x = n(700129);
let O = function(t) {
    let {
        transitionState: e,
        entryPoint: n,
        onClose: O
    } = t, {
        loading: T,
        initiateAgeVerification: h
    } = (0, m.nn)({
        onComplete: O,
        entryPoint: u.q1.RETRY_MODAL,
        isRetry: !0
    }), A = r.useMemo(() => (0, l.A)(), []), v = (0, f.I)("age_verification_retry_modal"), y = (0, p.t)("age_verification_retry_modal"), k = (0, g.W)(E.intl.string(E.t["5l3R/m"]), E.intl.string(E.t.JSdbBe)), L = (0, g.W)(E.intl.string(E.t.O7SO0D), E.intl.string(E.t.JNK1ue)), j = (0, g.W)(E.intl.string(E.t.RtOE1v), E.intl.string(E.t.mFvt9M));
    r.useEffect(() => {
        (0, u.Bs)(A, u.WU.RETRY, n)
    }, [A, n]);
    let M = r.useMemo(() => {
        let t = [{
            title: E.intl.string(E.t.FYkioq),
            description: y ? null : E.intl.string(E.t.xMfbRz),
            buttonText: j,
            buttonLoading: T,
            onButtonPress: () => {
                h(), (0, u.St)(A, u.WU.RETRY, u._7.GET_STARTED)
            }
        }];
        return v || t.push({
            title: E.intl.string(E.t["LZO+Hd"]),
            description: E.intl.string(E.t.N2mHaK),
            buttonText: E.intl.string(E.t["LZO+Hd"]),
            buttonLoading: T,
            onButtonPress: () => {
                d.A.openUrl(b.d$.APPEALS_LINK), (0, u.St)(A, u.WU.RETRY, u._7.MANUAL_REVIEW_REQUEST)
            }
        }), t
    }, [h, A, T, v, y, j]);
    return (0, i.jsx)(o.ExpressiveModal, {
        transitionState: e,
        onClose: O,
        gradientColor: "blue",
        graphic: {
            src: x.A,
            type: "image"
        },
        title: k,
        subtitle: L,
        children: (0, i.jsxs)(s.BJc, {
            direction: "vertical",
            gap: 16,
            children: [(0, i.jsx)(s.po8, {
                messageType: s.YCn.INFO,
                className: R.e,
                textColor: "text-feedback-info",
                textVariant: "text-sm/medium",
                children: E.intl.string(E.t.El4aXl)
            }), M.map((t, e) => (0, i.jsx)(a.PQ, function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), i.forEach(function(e) {
                        var i;
                        i = n[e], e in t ? Object.defineProperty(t, e, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = i
                    })
                }
                return t
            }({
                variant: "clickable"
            }, t), e)), (0, i.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "text-muted",
                className: R.Z,
                children: E.intl.format(E.t["L+FgkZ"], {
                    handleOnHelpUrlHook: () => {
                        d.A.openUrl(c.A.getArticleURL(_.MVz.TIGGER_PAWTECT_LEARN_MORE)), (0, u.St)(A, u.WU.RETRY, u._7.LEARN_MORE)
                    }
                })
            })]
        })
    })
}