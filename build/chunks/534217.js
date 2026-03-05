/** chunk id: 534217, original params: e,t,n (module,exports,require) **/
n.d(t, {
    S: () => b
}), n(321073);
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(397927),
    o = n(854627),
    d = n(954571),
    c = n(975571),
    u = n(427262),
    _ = n(326084),
    g = n(851746),
    m = n(617461),
    A = n(664654),
    h = n(303682),
    p = n(652215),
    x = n(985018),
    E = n(463271),
    T = n(544879);
let S = e => {
        let {
            user: t
        } = e, {
            avatarSrc: n,
            eventHandlers: s
        } = (0, o.A)({
            userId: t.id,
            size: r._3J.SIZE_24
        });
        return (0, i.jsx)(r.euF, {
            className: E.bj,
            src: n,
            "aria-label": (0, u.mG)(t),
            size: r._3J.SIZE_24,
            ...s
        }, t.id)
    },
    C = e => {
        let {
            slotIndex: t
        } = e;
        return (0, i.jsx)("div", {
            className: E.p,
            children: t
        })
    },
    f = e => {
        let {
            referralSentUsers: t
        } = e;
        return (0, i.jsx)("div", {
            className: E.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < A.Z; n++)
                    if (t?.[n] !== void 0) {
                        let s = (0, i.jsx)(S, {
                            user: t[n]
                        }, t[n].id);
                        e.push(s)
                    } else {
                        let t = (0, i.jsx)(C, {
                            slotIndex: n + 1
                        }, n);
                        e.push(t)
                    } return e
            })()
        })
    },
    I = e => {
        let {
            nReferralsSent: t
        } = e;
        return (0, i.jsx)(r.a3E, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: E.cq,
            strokeSize: .8,
            ringColorOverrideClassName: E.e0,
            overlayClassName: t === A.Z ? E.ys : void 0,
            children: (0, i.jsx)(r._V3, {
                src: T.A,
                height: 93,
                width: 93,
                zoomable: !1
            })
        })
    },
    b = e => {
        let {
            className: t
        } = e, {
            referralSentUsers: s
        } = (0, A.J)(), o = (0, a.bG)([g.A], () => g.A.getRecipientStatus()), u = (0, a.bG)([g.A], () => g.A.getHasEligibleFriends()), T = o.size === A.Z && [...o.values()].every(e => e === _.aK.REDEEMED), S = o.size === A.Z;
        return (0, i.jsxs)("div", {
            className: l()(E.kL, t),
            children: [(0, i.jsx)("div", {
                className: E.G3,
                children: (0, i.jsx)(I, {
                    nReferralsSent: o.size
                })
            }), (0, i.jsxs)("div", {
                className: E.IH,
                children: [(0, i.jsx)(f, {
                    referralSentUsers: s
                }), (0, i.jsxs)("div", {
                    className: E.n4,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: x.intl.string(x.t.USo4s7)
                    }), (0, i.jsx)(r.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: !1 === u ? x.intl.format(x.t["zWhX/Q"], {
                            helpdeskArticle: c.A.getArticleURL(p.MVz.REFERRAL_PROGRAM)
                        }) : s.length === A.Z ? !0 === T ? x.intl.format(x.t["1aEjsH"], {
                            helpdeskArticle: c.A.getArticleURL(p.MVz.REFERRAL_PROGRAM)
                        }) : x.intl.format(x.t["+u3AOO"], {
                            helpdeskArticle: c.A.getArticleURL(p.MVz.REFERRAL_PROGRAM)
                        }) : x.intl.format(x.t["omMr+V"], {
                            helpdeskArticle: c.A.getArticleURL(p.MVz.REFERRAL_PROGRAM)
                        })
                    })]
                }), (0, i.jsx)(r.Button, {
                    variant: "primary",
                    disabled: !1 === u || !0 === S,
                    text: (() => {
                        switch (m.$.getConfig({
                                location: "ReferralBanner"
                            }).variation) {
                            case m.e.CONTROL:
                                return x.intl.string(x.t.Lm2nFc);
                            case m.e.VARIANT_1:
                                return x.intl.string(x.t["8wL38m"]);
                            case m.e.VARIANT_2:
                                return x.intl.string(x.t["Pr/W5F"]);
                            case m.e.VARIANT_3:
                                return x.intl.string(x.t.ojpNKb);
                            case m.e.VARIANT_4:
                                return x.intl.string(x.t["YL8/wJ"]);
                            case m.e.VARIANT_5:
                                return x.intl.string(x.t.C7iByj)
                        }
                    })(),
                    onClick: () => (e => {
                        let {
                            startingScreen: t,
                            analyticsLocations: s
                        } = e;
                        d.default.track(p.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                            location_stack: s
                        }), (0, r.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.resolve().then(n.bind(n, 303682));
                            return n => (0, i.jsx)(e, {
                                ...n,
                                startingScreen: t
                            })
                        })
                    })({
                        startingScreen: h.SelectFriendsModalScreens.SELECT_FRIENDS,
                        analyticsLocations: []
                    })
                })]
            })]
        })
    }