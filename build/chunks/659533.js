/** Chunk was on 5606 **/
/** chunk id: 659533, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(435371),
    c = n(421380),
    d = n(397927),
    u = n(793574),
    p = n(688810),
    _ = n(854627),
    m = n(427157),
    g = n(954571),
    f = n(975571),
    b = n(326084),
    h = n(851746),
    A = n(664654),
    E = n(344904),
    x = n(221688),
    O = n(652215),
    C = n(985018),
    y = n(509117),
    j = n(6336);

function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}
let v = e => {
        let {
            userRecord: t,
            placement: n
        } = e, {
            avatarSrc: i,
            eventHandlers: l
        } = (0, _.A)({
            userId: null == t ? void 0 : t.id,
            size: d._3J.SIZE_32,
            animateOnHover: !0
        }), s = null != t, a = s ? (0, r.jsx)(d.euF, T({
            src: i,
            "aria-label": t.username,
            size: d._3J.SIZE_32
        }, l)) : (0, r.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            className: y.n5,
            children: n
        });
        return (0, r.jsx)(o.m_, {
            text: C.intl.string(C.t.UnKHdo),
            shouldShow: !s,
            children: (0, r.jsx)("div", {
                className: y.Lg,
                children: a
            })
        })
    },
    S = e => {
        let {
            numSentReferrals: t,
            placement: n
        } = e;
        return (0, r.jsxs)("div", {
            className: y.Ip,
            children: [(0, r.jsx)("div", {
                className: y.Ej
            }), (0, r.jsx)("div", {
                className: s()({
                    [y.ch]: t > n,
                    [y.q_]: t === n
                })
            })]
        })
    },
    I = e => {
        let {
            userRecords: t
        } = e, n = t.length, i = n < 1 ? null : t[0], l = n < 2 ? null : t[1], s = n < 3 ? null : t[2];
        return (0, r.jsxs)("div", {
            className: y.ZM,
            children: [(0, r.jsx)(v, {
                userRecord: i,
                placement: 1
            }), (0, r.jsx)(S, {
                numSentReferrals: n,
                placement: 1
            }), (0, r.jsx)(v, {
                userRecord: l,
                placement: 2
            }), (0, r.jsx)(S, {
                numSentReferrals: n,
                placement: 2
            }), (0, r.jsx)(v, {
                userRecord: s,
                placement: 3
            })]
        })
    },
    N = e => {
        let {
            isInSettings: t = !1
        } = e, l = (0, a.bG)([h.A], () => h.A.getRecipientStatus()), {
            referralSentUsers: o
        } = (0, A.J)(), _ = i.useMemo(() => o.map(e => new m.A(e)), [o]), v = {
            redeemed: 0,
            converted: 0,
            sent: l.size
        };
        l.forEach(e => {
            e === b.aK.REDEEMED && v.redeemed++, e === b.aK.CONVERTED && (v.redeemed++, v.converted++)
        });
        let S = v.sent === A.Z,
            N = f.A.getArticleURL(O.MVz.REFERRAL_PROGRAM),
            {
                analyticsLocations: P
            } = (0, p.Ay)(u.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            R = i.useRef(null),
            D = v.sent / A.Z * 100,
            w = (0, r.jsxs)("div", {
                className: y.hE,
                children: [(0, r.jsx)(E.Ay, {
                    percentage: D,
                    progressCircleVariation: E.BN.NITRO_LOGO,
                    iconClassName: s()({
                        [y.VC]: !t,
                        [y.ER]: t
                    })
                }), (0, r.jsxs)("div", {
                    className: y.Ns,
                    children: [(0, r.jsx)(d.Heading, {
                        variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
                        className: y.R0,
                        children: (0, x.X8)({
                            hasSentAll: S
                        })
                    }), (0, r.jsx)(I, {
                        userRecords: _
                    }), (0, r.jsx)(d.Text, {
                        variant: t ? "text-sm/normal" : "text-lg/medium",
                        children: (0, x.dB)({
                            helpdeskArticle: N,
                            referralsStatuses: v
                        })
                    }), (0, r.jsx)("div", {
                        className: s()(y.Fb, {
                            [y.jv]: !t
                        }),
                        children: (0, r.jsx)(d.wLn, {
                            "data-migration-pending": !0,
                            className: y.r$,
                            color: c.XD.CUSTOM,
                            onClick: () => (e => {
                                let {
                                    analyticsLocations: t
                                } = e;
                                g.default.track(O.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                    location_stack: t
                                }), (0, d.mMO)(async () => {
                                    let {
                                        default: e
                                    } = await n.e("26489").then(n.bind(n, 477088));
                                    return n => {
                                        var i, l;
                                        return (0, r.jsx)(e, (i = T({}, n), l = l = {
                                            sourceAnalyticsLocations: t
                                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var r = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, r)
                                            }
                                            return n
                                        })(Object(l)).forEach(function(e) {
                                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
                                        }), i))
                                    }
                                })
                            })({
                                analyticsLocations: P
                            }),
                            onlyShineOnHover: !0,
                            children: (0, r.jsxs)("div", {
                                className: y.Zn,
                                children: [(0, r.jsx)("img", {
                                    src: j,
                                    alt: "",
                                    className: y.QH
                                }), S ? C.intl.string(C.t.SY9tyI) : C.intl.string(C.t.Lm2nFc)]
                            })
                        })
                    })]
                })]
            }),
            L = v.redeemed === A.Z;
        return (0, r.jsx)(p.f5, {
            value: P,
            children: (0, r.jsx)("div", {
                className: s()({
                    [y.f5]: L,
                    [y.JY]: !L,
                    [y.VX]: !t,
                    [y.m$]: L && t
                }),
                children: (0, r.jsx)("div", {
                    ref: R,
                    className: s()({
                        [y.dn]: !t,
                        [y.d_]: t,
                        [y.kS]: L
                    }),
                    children: w
                })
            })
        })
    }