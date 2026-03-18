/** chunk id: 659533 params = (module,exports,require) **/
n.d(t, {
    A: () => y
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(311907),
    o = n(435371),
    d = n(421380),
    c = n(397927),
    u = n(793574),
    _ = n(688810),
    m = n(854627),
    g = n(427157),
    A = n(954571),
    x = n(975571),
    h = n(326084),
    p = n(851746),
    T = n(664654),
    E = n(344904),
    S = n(221688),
    f = n(652215),
    C = n(985018),
    b = n(509117),
    N = n(6336);
let I = e => {
        let {
            userRecord: t,
            placement: n
        } = e, {
            avatarSrc: s,
            eventHandlers: l
        } = (0, m.A)({
            userId: t?.id,
            size: c._3J.SIZE_32,
            animateOnHover: !0
        }), a = null != t, r = a ? (0, i.jsx)(c.euF, {
            src: s,
            "aria-label": t.username,
            size: c._3J.SIZE_32,
            ...l
        }) : (0, i.jsx)(c.Heading, {
            variant: "heading-md/semibold",
            className: b.n5,
            children: n
        });
        return (0, i.jsx)(o.m_, {
            text: C.intl.string(C.t.UnKHdo),
            shouldShow: !a,
            children: (0, i.jsx)("div", {
                className: b.Lg,
                children: r
            })
        })
    },
    v = e => {
        let {
            numSentReferrals: t,
            placement: n
        } = e;
        return (0, i.jsxs)("div", {
            className: b.Ip,
            children: [(0, i.jsx)("div", {
                className: b.Ej
            }), (0, i.jsx)("div", {
                className: a()({
                    [b.ch]: t > n,
                    [b.q_]: t === n
                })
            })]
        })
    },
    j = e => {
        let {
            userRecords: t
        } = e, n = t.length, s = n < 1 ? null : t[0], l = n < 2 ? null : t[1], a = n < 3 ? null : t[2];
        return (0, i.jsxs)("div", {
            className: b.ZM,
            children: [(0, i.jsx)(I, {
                userRecord: s,
                placement: 1
            }), (0, i.jsx)(v, {
                numSentReferrals: n,
                placement: 1
            }), (0, i.jsx)(I, {
                userRecord: l,
                placement: 2
            }), (0, i.jsx)(v, {
                numSentReferrals: n,
                placement: 2
            }), (0, i.jsx)(I, {
                userRecord: a,
                placement: 3
            })]
        })
    },
    y = e => {
        let {
            isInSettings: t = !1
        } = e, l = (0, r.bG)([p.A], () => p.A.getRecipientStatus()), {
            referralSentUsers: o
        } = (0, T.J)(), m = s.useMemo(() => o.map(e => new g.A(e)), [o]), I = {
            redeemed: 0,
            converted: 0,
            sent: l.size
        };
        l.forEach(e => {
            e === h.aK.REDEEMED && I.redeemed++, e === h.aK.CONVERTED && (I.redeemed++, I.converted++)
        });
        let v = I.sent === T.Z,
            y = x.A.getArticleURL(f.MVz.REFERRAL_PROGRAM),
            {
                analyticsLocations: R
            } = (0, _.Ay)(u.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            O = s.useRef(null),
            D = I.sent / T.Z * 100,
            L = (0, i.jsxs)("div", {
                className: b.hE,
                children: [(0, i.jsx)(E.Ay, {
                    percentage: D,
                    progressCircleVariation: E.BN.NITRO_LOGO,
                    iconClassName: a()({
                        [b.VC]: !t,
                        [b.ER]: t
                    })
                }), (0, i.jsxs)("div", {
                    className: b.Ns,
                    children: [(0, i.jsx)(c.Heading, {
                        variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
                        className: b.R0,
                        children: (0, S.X8)({
                            hasSentAll: v
                        })
                    }), (0, i.jsx)(j, {
                        userRecords: m
                    }), (0, i.jsx)(c.Text, {
                        variant: t ? "text-sm/normal" : "text-lg/medium",
                        children: (0, S.dB)({
                            helpdeskArticle: y,
                            referralsStatuses: I
                        })
                    }), (0, i.jsx)("div", {
                        className: a()(b.Fb, {
                            [b.jv]: !t
                        }),
                        children: (0, i.jsx)(c.wLn, {
                            "data-migration-pending": !0,
                            className: b.r$,
                            color: d.XD.CUSTOM,
                            onClick: () => (e => {
                                let {
                                    analyticsLocations: t
                                } = e;
                                A.default.track(f.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                                    location_stack: t
                                }), (0, c.mMO)(async () => {
                                    let {
                                        default: e
                                    } = await n.e("26489").then(n.bind(n, 477088));
                                    return n => (0, i.jsx)(e, {
                                        ...n,
                                        sourceAnalyticsLocations: t
                                    })
                                })
                            })({
                                analyticsLocations: R
                            }),
                            onlyShineOnHover: !0,
                            children: (0, i.jsxs)("div", {
                                className: b.Zn,
                                children: [(0, i.jsx)("img", {
                                    src: N,
                                    alt: "",
                                    className: b.QH
                                }), v ? C.intl.string(C.t.SY9tyI) : C.intl.string(C.t.Lm2nFc)]
                            })
                        })
                    })]
                })]
            }),
            P = I.redeemed === T.Z;
        return (0, i.jsx)(_.f5, {
            value: R,
            children: (0, i.jsx)("div", {
                className: a()({
                    [b.f5]: P,
                    [b.JY]: !P,
                    [b.VX]: !t,
                    [b.m$]: P && t
                }),
                children: (0, i.jsx)("div", {
                    ref: O,
                    className: a()({
                        [b.dn]: !t,
                        [b.d_]: t,
                        [b.kS]: P
                    }),
                    children: L
                })
            })
        })
    }