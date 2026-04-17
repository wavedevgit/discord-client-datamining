/** chunk id: 659203 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
});
var i = n(627968),
    r = n(64700),
    l = n(989349),
    s = n.n(l),
    a = n(607399),
    o = n(311907),
    c = n(827734),
    u = n(397927),
    d = n(863574),
    _ = n(793574),
    A = n(688810),
    E = n(888675),
    m = n(532794),
    I = n(287809),
    T = n(166403),
    g = n(954571),
    N = n(405269),
    f = n(975571),
    C = n(927578),
    p = n(851746),
    h = n(727949),
    S = n(664654),
    R = n(303682),
    x = n(465794),
    O = n(378135),
    M = n(788868),
    D = n(652215),
    U = n(985018),
    P = n(613444),
    L = n(954457);
class v extends r.Component {
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
        super(e), this.trialOffer = e.trialOffer, this.referralsSent = e.referralsSent, this.currentUser = e.currentUser, this.recipientHasNitro = e.recipientHasNitro, this.trialEndsAt = e.trialEndsAt, this.analyticsLocations = e.analyticsLocations, this.compact = !0 === e.compact, this.offerExpired = (0, O.P)(this.trialOffer), this.isSender = this.currentUser.id === this.trialOffer.referrer_id
    }
    getSystemMessageHeader() {
        let e = I.default.getUser(this.trialOffer.user_id);
        if (this.isSender) return U.intl.format(U.t["4/EMxl"], {
            receiver: e?.username
        });
        let t = I.default.getUser(this.trialOffer.referrer_id),
            n = t?.username !== void 0 ? t.username : "";
        return U.intl.format(U.t.yisueA, {
            sender: n,
            helpdeskArticle: f.A.getArticleURL(D.MVz.REFERRAL_PROGRAM)
        })
    }
    getTitleText() {
        let e = I.default.getUser(this.trialOffer.user_id),
            t = null != e ? e.username : "???",
            n = I.default.getUser(this.trialOffer.referrer_id),
            i = null != n ? n.username : "???";
        return this.recipientHasNitro && void 0 === this.trialOffer.redeemed_at ? U.intl.formatToPlainString(U.t["Mptau/"], {
            username: t
        }) : this.offerExpired ? this.isSender ? U.intl.string(U.t["9SNdf4"]) : U.intl.formatToPlainString(U.t["H0+MxK"], {
            userName: i
        }) : U.intl.formatToPlainString(U.t.IiWKwg, {
            senderUserName: i,
            recipientUserName: t
        })
    }
    getBodyText() {
        return this.recipientHasNitro && !this.isSender && void 0 === this.trialOffer.redeemed_at ? U.intl.format(U.t.LwCwT9, {
            helpdeskArticle: f.A.getArticleURL(D.MVz.REFERRAL_PROGRAM)
        }) : this.offerExpired ? null : U.intl.string(U.t.lQLlOb)
    }
    renderActions() {
        let e = this.currentUser.id !== this.trialOffer.user_id || (0, C.TW)(this.currentUser) || !this.currentUser.verified || (0, O.P)(this.trialOffer),
            t = this.renderExpirationDate();
        return (0, i.jsxs)("div", {
            className: P.UD,
            children: [(0, i.jsx)("div", {
                children: (0, i.jsx)(u.Button, {
                    variant: "primary",
                    disabled: e,
                    size: "sm",
                    text: U.intl.string(U.t.O0etsF),
                    onClick: () => {
                        (0, m.A)({
                            initialPlanId: null,
                            subscriptionTier: M.pe.TIER_2,
                            analyticsLocations: this.analyticsLocations,
                            trialId: this.trialOffer.trial_id,
                            referralTrialOfferId: this.trialOffer.id
                        })
                    }
                })
            }), (0, i.jsx)("div", {
                className: P.yu,
                children: t
            })]
        })
    }
    renderExpirationDate() {
        let {
            trialOffer: e,
            trialEndsAt: t
        } = this.props;
        if (void 0 !== e.redeemed_at && !this.isSender && null !== t) return U.intl.formatToPlainString(U.t.nP0ivR, {
            date: (0, N.i$)(s()(t), "LL")
        });
        if (this.recipientHasNitro || void 0 === e.expires_at) return null;
        let n = s()(e.expires_at);
        return this.offerExpired ? U.intl.formatToPlainString(U.t.PuSHfU, {
            date: (0, N.i$)(s()(n), "LL")
        }) : (0, h.GQ)(n.valueOf())
    }
    renderMedia() {
        return (0, i.jsx)("div", {
            className: P.Qj
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
                        headerText: U.intl.formatToPlainString(U.t.qABVhL, {
                            recipient: t
                        }),
                        bodyText: U.intl.formatToPlainString(U.t.u7hyDx, {
                            helpdeskArticle: f.A.getArticleURL(D.MVz.REFERRAL_PROGRAM)
                        })
                    };
                    else return {
                        headerText: U.intl.string(U.t.LAGZfq),
                        bodyText: U.intl.formatToPlainString(U.t["0gnFLC"], {
                            recipient: t
                        })
                    };
                return this.offerExpired ? {
                    headerText: U.intl.string(U.t.nYvpUl),
                    bodyText: U.intl.formatToPlainString(U.t.wJdBEZ, {
                        sender: i
                    })
                } : {
                    headerText: U.intl.string(U.t.HtTvXA),
                    bodyText: U.intl.formatToPlainString(U.t.wOQByA, {
                        sender: i
                    })
                }
            },
            t = (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(x.A, {
                    subscriptionTier: M.pe.TIER_2,
                    buttonTextOverride: U.intl.string(U.t.O0etsF),
                    size: "md",
                    variantOverride: "expressive"
                }), (0, i.jsx)(u.Text, {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    children: this.renderExpirationDate()
                })]
            }),
            r = (0, i.jsx)(u.Button, {
                variant: "primary",
                disabled: !1,
                size: "md",
                onClick: () => (e => {
                    let {
                        analyticsLocations: t,
                        startingScreen: r
                    } = e;
                    g.default.track(D.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                        location_stack: t
                    }), (0, u.mMO)(async () => {
                        let {
                            default: e
                        } = await Promise.resolve().then(n.bind(n, 303682));
                        return t => (0, i.jsx)(e, {
                            ...t,
                            startingScreen: r
                        })
                    })
                })({
                    analyticsLocations: [],
                    startingScreen: this.referralsSent.size === S.Z ? R.SelectFriendsModalScreens.REMINDER : R.SelectFriendsModalScreens.SELECT_FRIENDS
                }),
                text: U.intl.string(U.t.Lm2nFc)
            }),
            l = this.isSender ? r : t,
            s = (0, i.jsx)(u._V3, {
                src: L.A,
                height: 84,
                width: 144,
                className: P.ms
            }),
            {
                headerText: a,
                bodyText: o
            } = e();
        return (0, i.jsxs)(E.A, {
            className: P.SB,
            iconNode: (0, i.jsx)(u.tvc, {
                size: "md",
                color: c.A.colors.ICON_STRONG
            }),
            iconContainerClassName: P.J5,
            compact: this.compact,
            children: [(0, i.jsx)(u.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: this.getSystemMessageHeader()
            }), (0, i.jsxs)("div", {
                className: P.i2,
                children: [s, (0, i.jsxs)("div", {
                    className: P.KX,
                    children: [(0, i.jsxs)("div", {
                        className: P.xJ,
                        children: [(0, i.jsx)(u.Heading, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: a
                        }), (0, i.jsx)(u.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: o
                        })]
                    }), (0, i.jsx)("div", {
                        className: P.ox,
                        children: l
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
        compact: r
    } = e, {
        trialOffer: l,
        isResolving: s,
        referralsSent: c
    } = (0, o.cf)([p.A], () => ({
        trialOffer: n ? p.A.getRelevantUserTrialOffer(t) : null,
        isResolving: !!n && p.A.isResolving(t),
        referralsSent: p.A.getRecipientStatus()
    }), [n, t]), u = I.default.getCurrentUser(), E = (0, o.bG)([I.default], () => null != l && (0, C.TW)(void 0 !== u && l.user_id === u.id ? u : I.default.getUser(l.user_id))), m = (0, o.bG)([T.A], () => E ? T.A.getPremiumTypeSubscription()?.trialEndsAt : null), {
        analyticsLocations: g
    } = (0, A.Ay)(_.A.SHARE_NITRO_EMBED);
    return s ? (0, i.jsx)(d.Wb, {
        isHorizontal: !a.Fr
    }) : n && null != l && void 0 !== u ? (0, i.jsx)(v, {
        trialOffer: l,
        referralsSent: c,
        currentUser: u,
        recipientHasNitro: E,
        trialEndsAt: m,
        analyticsLocations: g,
        compact: r
    }) : (0, i.jsx)("div", {
        className: P.TU,
        children: (0, i.jsx)("div", {
            className: P.Gq
        })
    })
}