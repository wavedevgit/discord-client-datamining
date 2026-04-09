/** chunk id: 659203 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    l = n(64700),
    a = n(989349),
    r = n.n(a),
    s = n(607399),
    o = n(465323),
    c = n(311907),
    u = n(827734),
    d = n(397927),
    _ = n(863574),
    A = n(793574),
    m = n(688810),
    E = n(888675),
    T = n(532794),
    I = n(287809),
    N = n(166403),
    g = n(954571),
    f = n(405269),
    C = n(975571),
    h = n(927578),
    p = n(580630),
    S = n(851746),
    x = n(259297),
    R = n(727949),
    O = n(664654),
    M = n(303682),
    D = n(465794),
    L = n(378135),
    U = n(788868),
    P = n(652215),
    v = n(985018),
    y = n(739636),
    j = n(954457);
class k extends l.Component {
    trialOffer;
    referralsSent;
    currentUser;
    recipientHasNitro;
    trialEndsAt;
    analyticsLocations;
    offerExpired;
    isSender;
    compact;
    constructor(e) {
        super(e), this.trialOffer = e.trialOffer, this.referralsSent = e.referralsSent, this.currentUser = e.currentUser, this.recipientHasNitro = e.recipientHasNitro, this.trialEndsAt = e.trialEndsAt, this.analyticsLocations = e.analyticsLocations, this.compact = !0 === e.compact, this.offerExpired = (0, L.P)(this.trialOffer), this.isSender = this.currentUser.id === this.trialOffer.referrer_id
    }
    getSystemMessageHeader() {
        let e = I.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return v.intl.format(v.t["4/EMxl"], {
            receiver: e?.username
        });
        let t = I.default.getUser(this.trialOffer.referrer_id),
            n = t?.username !== void 0 ? t.username : "";
        return v.intl.format(v.t.yisueA, {
            sender: n,
            helpdeskArticle: C.A.getArticleURL(P.MVz.REFERRAL_PROGRAM)
        })
    }
    getTitleText() {
        let e = I.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : "???",
            n = I.default.getUser(this.trialOffer.referrer_id),
            i = null != n ? n.username : "???";
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at ? v.intl.formatToPlainString(v.t["Mptau/"], {
            username: t
        }) : this.offerExpired ? this.isSender ? v.intl.string(v.t["9SNdf4"]) : v.intl.formatToPlainString(v.t["H0+MxK"], {
            userName: i
        }) : v.intl.formatToPlainString(v.t.IiWKwg, {
            senderUserName: i,
            recipientUserName: t
        })
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at ? v.intl.format(v.t.LwCwT9, {
            helpdeskArticle: C.A.getArticleURL(P.MVz.REFERRAL_PROGRAM)
        }) : this.offerExpired ? null : v.intl.string(v.t.lQLlOb)
    }
    renderActions() {
        let e = this.currentUser.id !== this.trialOffer.user_id || (0, h.TW)(this.currentUser) || !this.currentUser.verified || (0, L.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, i.jsxs)("div", {
            className: y.UD,
            children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(d.Button, {
                    variant: "primary",
                    disabled: e,
                    size: "sm",
                    text: v.intl.string(v.t.O0etsF),
                    onClick: () => {
                        (0, T.A)({
                            initialPlanId: null,
                            subscriptionTier: U.pe.TIER_2,
                            analyticsLocations: this.analyticsLocations,
                            trialId: this.trialOffer.trial_id,
                            referralTrialOfferId: this.trialOffer.id
                        })
                    }
                })
            }), (0, i.jsx)("div", {
                className: y.yu,
                children: t
            })]
        })
    }
    renderExpirationDate() {
        let {
            trialOffer: e,
            trialEndsAt: t
        } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t) return v.intl.formatToPlainString(v.t.nP0ivR, {
            date: (0, f.i$)(r()(t), "LL")
        });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = r()(e.expires_at);
        return this.offerExpired ? v.intl.formatToPlainString(v.t.PuSHfU, {
            date: (0, f.i$)(r()(n), "LL")
        }) : (0, R.GQ)(n.valueOf())
    }
    renderMedia() {
        return (0, i.jsx)("div", {
            className: y.Qj
        })
    }
    render() {
        let e = () => {
                let e = I.default.getUser(this.trialOffer.user_id),
                    t = null != e ? e.username : "???",
                    n = I.default.getUser(this.trialOffer.referrer_id),
                    i = null != n ? n.username : "???";
                if (this.isSender)
                    if (this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at) return {
                        headerText: v.intl.formatToPlainString(v.t.qABVhL, {
                            recipient: t
                        }),
                        bodyText: v.intl.formatToPlainString(v.t.u7hyDx, {
                            helpdeskArticle: C.A.getArticleURL(P.MVz.REFERRAL_PROGRAM)
                        })
                    };
                    else return {
                        headerText: v.intl.string(v.t.LAGZfq),
                        bodyText: v.intl.formatToPlainString(v.t["0gnFLC"], {
                            recipient: t
                        })
                    };
                return this.offerExpired ? {
                    headerText: v.intl.string(v.t.nYvpUl),
                    bodyText: v.intl.formatToPlainString(v.t.wJdBEZ, {
                        sender: i
                    })
                } : {
                    headerText: v.intl.string(v.t.HtTvXA),
                    bodyText: v.intl.formatToPlainString(v.t.wOQByA, {
                        sender: i
                    })
                }
            },
            t = (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(D.A, {
                    subscriptionTier: U.pe.TIER_2,
                    buttonTextOverride: (() => {
                        switch (x.$.getConfig({
                                location: "ReferralTrialEmbed"
                            }).variation) {
                            case x.Y.CONTROL:
                                return v.intl.string(v.t.O0etsF);
                            case x.Y.VARIANT_1:
                                return v.intl.string(v.t.m7EEMb);
                            case x.Y.VARIANT_2: {
                                let e = (0, o.TW)(v.intl.currentLocale);
                                return v.intl.format(v.t["+KbxV6"], {
                                    fixedTrialCost: (0, p.$g)(0, e)
                                })
                            }
                            case x.Y.VARIANT_3:
                                return v.intl.string(v.t["6TzrER"]);
                            case x.Y.VARIANT_4:
                                return v.intl.string(v.t.UZe3YC);
                            case x.Y.VARIANT_5:
                                return v.intl.string(v.t.cLVMi9);
                            case x.Y.VARIANT_6:
                                return v.intl.string(v.t.ACQTfp);
                            case x.Y.VARIANT_7:
                                return v.intl.string(v.t["2P1J0w"]);
                            case x.Y.VARIANT_8:
                                return v.intl.string(v.t.dRoPcT)
                        }
                    })(),
                    size: "md",
                    variantOverride: "expressive"
                }), (0, i.jsx)(d.Text, {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    children: this.renderExpirationDate()
                })]
            }),
            l = (0, i.jsx)(d.Button, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () => (e => {
                    let {
                        analyticsLocations: t,
                        startingScreen: l
                    } = e;
                    g.default.track(P.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                        location_stack: t
                    }), (0, d.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.resolve().then(n.bind(n, 303682));
                        return t => (0, i.jsx)(e, {
                            ...t,
                            startingScreen: l
                        })
                    })
                })({
                    analyticsLocations: [],
                    startingScreen: this.referralsSent.size === O.Z ? M.SelectFriendsModalScreens.REMINDER : M.SelectFriendsModalScreens.SELECT_FRIENDS
                }),
                text: v.intl.string(v.t.Lm2nFc)
            }),
            a = this.isSender ? l : t,
            r = (0, i.jsx)(d._V3, {
                src: j.A,
                height: 84,
                width: 144,
                className: y.ms
            }),
            {
                headerText: s,
                bodyText: c
            } = e();
        return (0, i.jsxs)(E.A, {
            className: y.SB,
            iconNode: (0, i.jsx)(d.tvc, {
                size: "md",
                color: u.A.colors.ICON_STRONG
            }),
            iconContainerClassName: y.J5,
            compact: this.compact,
            children: [(0, i.jsx)(d.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: this.getSystemMessageHeader()
            }), (0, i.jsxs)("div", {
                className: y.i2,
                children: [r, (0, i.jsxs)("div", {
                    className: y.KX,
                    children: [(0, i.jsxs)("div", {
                        className: y.xJ,
                        children: [(0, i.jsx)(d.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: s
                        }), (0, i.jsx)(d.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: c
                        })]
                    }), (0, i.jsx)("div", {
                        className: y.ox,
                        children: a
                    })]
                })]
            })]
        })
    }
}

function b(e) {
    let {
        userTrialOfferId: t,
        canRenderReferralEmbed: n,
        compact: l
    } = e, {
        trialOffer: a,
        isResolving: r,
        referralsSent: o
    } = (0, c.cf)([S.A], () => ({
        trialOffer: n ? S.A.getRelevantUserTrialOffer(t) : null,
        isResolving: !!n && S.A.isResolving(t),
        referralsSent: S.A.getRecipientStatus()
    }), [n, t]), u = I.default.getCurrentUser(), d = (0, c.bG)([I.default], () => null != a && (0, h.TW)(void 0 !== u && a.user_id === u.id ? u : I.default.getUser(a.user_id))), E = (0, c.bG)([N.A], () => d ? N.A.getPremiumTypeSubscription()?.trialEndsAt : null), {
        analyticsLocations: T
    } = (0, m.Ay)(A.A.SHARE_NITRO_EMBED);
    return r ? (0, i.jsx)(_.Wb, {
        isHorizontal: !s.Fr
    }) : n && null != a && void 0 !== u ? (0, i.jsx)(k, {
        trialOffer: a,
        referralsSent: o,
        currentUser: u,
        recipientHasNitro: d,
        trialEndsAt: E,
        analyticsLocations: T,
        compact: l
    }) : (0, i.jsx)("div", {
        className: y.TU,
        children: (0, i.jsx)("div", {
            className: y.Gq
        })
    })
}