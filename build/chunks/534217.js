/** chunk id: 534217 params = (module,exports,require) **/
n.d(t, {
    S: () => b
}), n(321073);
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(397927),
    o = n(854627),
    d = n(954571),
    c = n(975571),
    u = n(427262),
    _ = n(326084),
    m = n(851746),
    g = n(617461),
    A = n(664654),
    h = n(303682),
    x = n(652215),
    p = n(985018),
    T = n(463271),
    E = n(544879);
let C = e => {
        let {
            user: t
        } = e, {
            avatarSrc: n,
            eventHandlers: s
        } = (0, o.A)({
            userId: t.id,
            size: a._3J.SIZE_24
        });
        return (0, i.jsx)(a.euF, {
            className: T.bj,
            src: n,
            "aria-label": (0, u.mG)(t),
            size: a._3J.SIZE_24,
            ...s
        }, t.id)
    },
    S = e => {
        let {
            slotIndex: t
        } = e;
        return (0, i.jsx)("div", {
            className: T.p,
            children: t
        })
    },
    f = e => {
        let {
            referralSentUsers: t
        } = e;
        return (0, i.jsx)("div", {
            className: T.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < A.Z; n++)
                    if (t?.[n] !== void 0) {
                        let s = (0, i.jsx)(C, {
                            user: t[n]
                        }, t[n].id);
                        e.push(s)
                    } else {
                        let t = (0, i.jsx)(S, {
                            slotIndex: n + 1
                        }, n);
                        e.push(t)
                    } return e
            })()
        })
    },
    N = e => {
        let {
            nReferralsSent: t
        } = e;
        return (0, i.jsx)(a.a3E, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: T.cq,
            strokeSize: .8,
            ringColorOverrideClassName: T.e0,
            overlayClassName: t === A.Z ? T.ys : void 0,
            children: (0, i.jsx)(a._V3, {
                src: E.A,
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
        } = (0, A.J)(), o = (0, r.bG)([m.A], () => m.A.getRecipientStatus()), u = (0, r.bG)([m.A], () => m.A.getHasEligibleFriends()), E = o.size === A.Z && [...o.values()].every(e => e === _.aK.REDEEMED), C = o.size === A.Z;
        return (0, i.jsxs)("div", {
            className: l()(T.kL, t),
            children: [(0, i.jsx)("div", {
                className: T.G3,
                children: (0, i.jsx)(N, {
                    nReferralsSent: o.size
                })
            }), (0, i.jsxs)("div", {
                className: T.IH,
                children: [(0, i.jsx)(f, {
                    referralSentUsers: s
                }), (0, i.jsxs)("div", {
                    className: T.n4,
                    children: [(0, i.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: p.intl.string(p.t.USo4s7)
                    }), (0, i.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: !1 === u ? p.intl.format(p.t["zWhX/Q"], {
                            helpdeskArticle: c.A.getArticleURL(x.MVz.REFERRAL_PROGRAM)
                        }) : s.length === A.Z ? !0 === E ? p.intl.format(p.t["1aEjsH"], {
                            helpdeskArticle: c.A.getArticleURL(x.MVz.REFERRAL_PROGRAM)
                        }) : p.intl.format(p.t["+u3AOO"], {
                            helpdeskArticle: c.A.getArticleURL(x.MVz.REFERRAL_PROGRAM)
                        }) : p.intl.format(p.t["omMr+V"], {
                            helpdeskArticle: c.A.getArticleURL(x.MVz.REFERRAL_PROGRAM)
                        })
                    })]
                }), (0, i.jsx)(a.Button, {
                    variant: "primary",
                    disabled: !1 === u || !0 === C,
                    text: (() => {
                        switch (g.$.getConfig({
                                location: "ReferralBanner"
                            }).variation) {
                            case g.e.CONTROL:
                                return p.intl.string(p.t.Lm2nFc);
                            case g.e.VARIANT_1:
                                return p.intl.string(p.t["8wL38m"]);
                            case g.e.VARIANT_2:
                                return p.intl.string(p.t["Pr/W5F"]);
                            case g.e.VARIANT_3:
                                return p.intl.string(p.t.ojpNKb);
                            case g.e.VARIANT_4:
                                return p.intl.string(p.t["YL8/wJ"]);
                            case g.e.VARIANT_5:
                                return p.intl.string(p.t.C7iByj)
                        }
                    })(),
                    onClick: () => (e => {
                        let {
                            startingScreen: t,
                            analyticsLocations: s
                        } = e;
                        d.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                            location_stack: s
                        }), (0, a.mMO)(async () => {
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