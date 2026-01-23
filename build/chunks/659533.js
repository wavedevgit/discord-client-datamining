/** Chunk was on web.js **/
/** chunk id: 659533, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => L
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(435371),
    c = n(421380),
    u = n(397927),
    d = n(793574),
    f = n(688810),
    p = n(854627),
    _ = n(427157),
    h = n(954571),
    m = n(975571),
    g = n(326084),
    E = n(851746),
    y = n(664654),
    b = n(344904),
    O = n(221688),
    v = n(652215),
    A = n(985018),
    I = n(509117),
    S = n(6336);

function T(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            T(e, t, n[t])
        })
    }
    return e
}

function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function w(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : N(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let R = e => {
        let {
            userRecord: t,
            placement: n
        } = e, {
            avatarSrc: i,
            eventHandlers: a
        } = (0, p.A)({
            userId: null == t ? void 0 : t.id,
            size: u._3J.SIZE_32,
            animateOnHover: !0
        }), s = null != t, o = s ? (0, r.jsx)(u.euF, C({
            src: i,
            "aria-label": t.username,
            size: u._3J.SIZE_32
        }, a)) : (0, r.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            className: I.n5,
            children: n
        });
        return (0, r.jsx)(l.m_, {
            text: A.intl.string(A.t.UnKHdo),
            shouldShow: !s,
            children: (0, r.jsx)("div", {
                className: I.Lg,
                children: o
            })
        })
    },
    P = e => {
        let {
            numSentReferrals: t,
            placement: n
        } = e;
        return (0, r.jsxs)("div", {
            className: I.Ip,
            children: [(0, r.jsx)("div", {
                className: I.Ej
            }), (0, r.jsx)("div", {
                className: s()({
                    [I.ch]: t > n,
                    [I.q_]: t === n
                })
            })]
        })
    },
    D = e => {
        let {
            userRecords: t
        } = e, n = t.length, i = n < 1 ? null : t[0], a = n < 2 ? null : t[1], s = n < 3 ? null : t[2];
        return (0, r.jsxs)("div", {
            className: I.ZM,
            children: [(0, r.jsx)(R, {
                userRecord: i,
                placement: 1
            }), (0, r.jsx)(P, {
                numSentReferrals: n,
                placement: 1
            }), (0, r.jsx)(R, {
                userRecord: a,
                placement: 2
            }), (0, r.jsx)(P, {
                numSentReferrals: n,
                placement: 2
            }), (0, r.jsx)(R, {
                userRecord: s,
                placement: 3
            })]
        })
    },
    x = e => {
        let {
            analyticsLocations: t
        } = e;
        h.default.track(v.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
            location_stack: t
        }), (0, u.mMO)(async () => {
            let {
                default: e
            } = await n.e("26489").then(n.bind(n, 477088));
            return n => (0, r.jsx)(e, w(C({}, n), {
                sourceAnalyticsLocations: t
            }))
        })
    },
    L = e => {
        let {
            isInSettings: t = !1
        } = e, n = (0, o.bG)([E.A], () => E.A.getRecipientStatus()), {
            referralSentUsers: a
        } = (0, y.J)(), l = i.useMemo(() => a.map(e => new _.A(e)), [a]), p = {
            redeemed: 0,
            converted: 0,
            sent: n.size
        };
        n.forEach(e => {
            e === g.aK.REDEEMED && p.redeemed++, e === g.aK.CONVERTED && (p.redeemed++, p.converted++)
        });
        let h = p.sent === y.Z,
            T = m.A.getArticleURL(v.MVz.REFERRAL_PROGRAM),
            {
                analyticsLocations: C
            } = (0, f.Ay)(d.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            N = i.useRef(null),
            w = p.sent / y.Z * 100,
            R = (0, r.jsxs)("div", {
                className: I.hE,
                children: [(0, r.jsx)(b.Ay, {
                    percentage: w,
                    progressCircleVariation: b.BN.NITRO_LOGO,
                    iconClassName: s()({
                        [I.VC]: !t,
                        [I.ER]: t
                    })
                }), (0, r.jsxs)("div", {
                    className: I.Ns,
                    children: [(0, r.jsx)(u.Heading, {
                        variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
                        className: I.R0,
                        children: (0, O.X8)({
                            hasSentAll: h
                        })
                    }), (0, r.jsx)(D, {
                        userRecords: l
                    }), (0, r.jsx)(u.Text, {
                        variant: t ? "text-sm/normal" : "text-lg/medium",
                        children: (0, O.dB)({
                            helpdeskArticle: T,
                            referralsStatuses: p
                        })
                    }), (0, r.jsx)("div", {
                        className: s()(I.Fb, {
                            [I.jv]: !t
                        }),
                        children: (0, r.jsx)(u.wLn, {
                            "data-migration-pending": !0,
                            className: I.r$,
                            color: c.XD.CUSTOM,
                            onClick: () => x({
                                analyticsLocations: C
                            }),
                            onlyShineOnHover: !0,
                            children: (0, r.jsxs)("div", {
                                className: I.Zn,
                                children: [(0, r.jsx)("img", {
                                    src: S,
                                    alt: "",
                                    className: I.QH
                                }), h ? A.intl.string(A.t.SY9tyI) : A.intl.string(A.t.Lm2nFc)]
                            })
                        })
                    })]
                })]
            }),
            P = p.redeemed === y.Z;
        return (0, r.jsx)(f.f5, {
            value: C,
            children: (0, r.jsx)("div", {
                className: s()({
                    [I.f5]: P,
                    [I.JY]: !P,
                    [I.VX]: !t,
                    [I.m$]: P && t
                }),
                children: (0, r.jsx)("div", {
                    ref: N,
                    className: s()({
                        [I.dn]: !t,
                        [I.d_]: t,
                        [I.kS]: P
                    }),
                    children: R
                })
            })
        })
    }