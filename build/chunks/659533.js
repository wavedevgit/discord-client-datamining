/** chunk id: 659533 params = (module,exports,require) **/
n.d(t, {
    A: () => O
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
    g = n(854627),
    m = n(427157),
    A = n(954571),
    h = n(975571),
    p = n(326084),
    x = n(851746),
    E = n(664654),
    T = n(344904),
    S = n(221688),
    C = n(652215),
    f = n(985018),
    I = n(509117),
    b = n(6336);
let N = e => {
        let {
            userRecord: t,
            placement: n
        } = e, {
            avatarSrc: s,
            eventHandlers: l
        } = (0, g.A)({
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
            className: I.n5,
            children: n
        });
        return (0, i.jsx)(o.m_, {
            text: f.intl.string(f.t.UnKHdo),
            shouldShow: !a,
            children: (0, i.jsx)("div", {
                className: I.Lg,
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
            className: I.Ip,
            children: [(0, i.jsx)("div", {
                className: I.Ej
            }), (0, i.jsx)("div", {
                className: a()({
                    [I.ch]: t > n,
                    [I.q_]: t === n
                })
            })]
        })
    },
    j = e => {
        let {
            userRecords: t
        } = e, n = t.length, s = n < 1 ? null : t[0], l = n < 2 ? null : t[1], a = n < 3 ? null : t[2];
        return (0, i.jsxs)("div", {
            className: I.ZM,
            children: [(0, i.jsx)(N, {
                userRecord: s,
                placement: 1
            }), (0, i.jsx)(v, {
                numSentReferrals: n,
                placement: 1
            }), (0, i.jsx)(N, {
                userRecord: l,
                placement: 2
            }), (0, i.jsx)(v, {
                numSentReferrals: n,
                placement: 2
            }), (0, i.jsx)(N, {
                userRecord: a,
                placement: 3
            })]
        })
    },
    O = e => {
        let {
            isInSettings: t = !1
        } = e, l = (0, r.bG)([x.A], () => x.A.getRecipientStatus()), {
            referralSentUsers: o
        } = (0, E.J)(), g = s.useMemo(() => o.map(e => new m.A(e)), [o]), N = {
            redeemed: 0,
            converted: 0,
            sent: l.size
        };
        l.forEach(e => {
            e === p.aK.REDEEMED && N.redeemed++, e === p.aK.CONVERTED && (N.redeemed++, N.converted++)
        });
        let v = N.sent === E.Z,
            O = h.A.getArticleURL(C.MVz.REFERRAL_PROGRAM),
            {
                analyticsLocations: R
            } = (0, _.Ay)(u.A.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
            y = s.useRef(null),
            P = N.sent / E.Z * 100,
            L = (0, i.jsxs)("div", {
                className: I.hE,
                children: [(0, i.jsx)(T.Ay, {
                    percentage: P,
                    progressCircleVariation: T.BN.NITRO_LOGO,
                    iconClassName: a()({
                        [I.VC]: !t,
                        [I.ER]: t
                    })
                }), (0, i.jsxs)("div", {
                    className: I.Ns,
                    children: [(0, i.jsx)(c.Heading, {
                        variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
                        className: I.R0,
                        children: (0, S.X8)({
                            hasSentAll: v
                        })
                    }), (0, i.jsx)(j, {
                        userRecords: g
                    }), (0, i.jsx)(c.Text, {
                        variant: t ? "text-sm/normal" : "text-lg/medium",
                        children: (0, S.dB)({
                            helpdeskArticle: O,
                            referralsStatuses: N
                        })
                    }), (0, i.jsx)("div", {
                        className: a()(I.Fb, {
                            [I.jv]: !t
                        }),
                        children: (0, i.jsx)(c.wLn, {
                            "data-migration-pending": !0,
                            className: I.r$,
                            color: d.XD.CUSTOM,
                            onClick: () => (e => {
                                let {
                                    analyticsLocations: t
                                } = e;
                                A.default.track(C.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
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
                                className: I.Zn,
                                children: [(0, i.jsx)("img", {
                                    src: b,
                                    alt: "",
                                    className: I.QH
                                }), v ? f.intl.string(f.t.SY9tyI) : f.intl.string(f.t.Lm2nFc)]
                            })
                        })
                    })]
                })]
            }),
            D = N.redeemed === E.Z;
        return (0, i.jsx)(_.f5, {
            value: R,
            children: (0, i.jsx)("div", {
                className: a()({
                    [I.f5]: D,
                    [I.JY]: !D,
                    [I.VX]: !t,
                    [I.m$]: D && t
                }),
                children: (0, i.jsx)("div", {
                    ref: y,
                    className: a()({
                        [I.dn]: !t,
                        [I.d_]: t,
                        [I.kS]: D
                    }),
                    children: L
                })
            })
        })
    }