/** chunk id: 659533, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v
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
    _ = n(688810),
    p = n(854627),
    m = n(427157),
    g = n(954571),
    A = n(975571),
    f = n(326084),
    b = n(851746),
    h = n(664654),
    E = n(344904),
    O = n(221688),
    C = n(652215),
    x = n(985018),
    S = n(509117),
    T = n(6336);

function I(e) {
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
let y = e => {
        let {
            userRecord: t,
            placement: n
        } = e, {
            avatarSrc: i,
            eventHandlers: l
        } = (0, p.A)({
            userId: null == t ? void 0 : t.id,
            size: d._3J.SIZE_32,
            animateOnHover: !0
        }), s = null != t, a = s ? (0, r.jsx)(d.euF, I({
            src: i,
            "aria-label": t.username,
            size: d._3J.SIZE_32
        }, l)) : (0, r.jsx)(d.Heading, {
            variant: "heading-md/semibold",
            className: S.n5,
            children: n
        });
        return (0, r.jsx)(o.m_, {
            text: x.intl.string(x.t.UnKHdo),
            shouldShow: !s,
            children: (0, r.jsx)("div", {
                className: S.Lg,
                children: a
            })
        })
    },
    N = e => {
        let {
            numSentReferrals: t,
            placement: n
        } = e;
        return (0, r.jsxs)("div", {
            className: S.Ip,
            children: [(0, r.jsx)("div", {
                className: S.Ej
            }), (0, r.jsx)("div", {
                className: s()({
                    [S.ch]: t > n,
                    [S.q_]: t === n
                })
            })]
        })
    },
    j = e => {
        let {
            userRecords: t
        } = e, n = t.length, i = n < 1 ? null : t[0], l = n < 2 ? null : t[1], s = n < 3 ? null : t[2];
        return (0, r.jsxs)("div", {
            className: S.ZM,
            children: [(0, r.jsx)(y, {
                userRecord: i,
                placement: 1
            }), (0, r.jsx)(N, {
                numSentReferrals: n,
                placement: 1
            }), (0, r.jsx)(y, {
                userRecord: l,
                placement: 2
            }), (0, r.jsx)(N, {
                numSentReferrals: n,
                placement: 2
            }), (0, r.jsx)(y, {
                userRecord: s,
                placement: 3
            })]
        })
    },
    v = e => {
        let {
            isInSettings: t = !1
        } = e, l = (0, a.bG)([b.A], () => b.A.getRecipientStatus()), {
            referralSentUsers: o
        } = (0, h.J)(), p = i.useMemo(() => o.map(e => new m.A(e)), [o]), y = {
            redeemed: 0,
            converted: 0,
            sent: l.size
        };
        l.forEach(e => {
            e === f.aK.REDEEMED && y.redeemed++, e === f.aK.CONVERTED && (y.redeemed++, y.converted++)
        });
        let N = y.sent === h.Z,
            v = A.A.getArticleURL(C.MVz.REFERRAL_PROGRAM),
            {
                analyticsLocations: P
            } = (0, _.Ay)(u.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            R = i.useRef(null),
            D = y.sent / h.Z * 100,
            L = (0, r.jsxs)("div", {
                className: S.hE,
                children: [(0, r.jsx)(E.Ay, {
                    percentage: D,
                    progressCircleVariation: E.BN.NITRO_LOGO,
                    iconClassName: s()({
                        [S.VC]: !t,
                        [S.ER]: t
                    })
                }), (0, r.jsxs)("div", {
                    className: S.Ns,
                    children: [(0, r.jsx)(d.Heading, {
                        variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
                        className: S.R0,
                        children: (0, O.X8)({
                            hasSentAll: N
                        })
                    }), (0, r.jsx)(j, {
                        userRecords: p
                    }), (0, r.jsx)(d.Text, {
                        variant: t ? "text-sm/normal" : "text-lg/medium",
                        children: (0, O.dB)({
                            helpdeskArticle: v,
                            referralsStatuses: y
                        })
                    }), (0, r.jsx)("div", {
                        className: s()(S.Fb, {
                            [S.jv]: !t
                        }),
                        children: (0, r.jsx)(d.wLn, {
                            "data-migration-pending": !0,
                            className: S.r$,
                            color: c.XD.CUSTOM,
                            onClick: () => (e => {
                                let {
                                    analyticsLocations: t
                                } = e;
                                g.default.track(C.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                    location_stack: t
                                }), (0, d.mMO)(async () => {
                                    let {
                                        default: e
                                    } = await n.e("26489").then(n.bind(n, 477088));
                                    return n => {
                                        var i, l;
                                        return (0, r.jsx)(e, (i = I({}, n), l = l = {
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
                                className: S.Zn,
                                children: [(0, r.jsx)("img", {
                                    src: T,
                                    alt: "",
                                    className: S.QH
                                }), N ? x.intl.string(x.t.SY9tyI) : x.intl.string(x.t.Lm2nFc)]
                            })
                        })
                    })]
                })]
            }),
            w = y.redeemed === h.Z;
        return (0, r.jsx)(_.f5, {
            value: P,
            children: (0, r.jsx)("div", {
                className: s()({
                    [S.f5]: w,
                    [S.JY]: !w,
                    [S.VX]: !t,
                    [S.m$]: w && t
                }),
                children: (0, r.jsx)("div", {
                    ref: R,
                    className: s()({
                        [S.dn]: !t,
                        [S.d_]: t,
                        [S.kS]: w
                    }),
                    children: L
                })
            })
        })
    }