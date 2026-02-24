/** chunk id: 534217, original params: e,t,n (module,exports,require) **/
n.d(t, {
    S: () => f
}), n(321073);
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(311907),
    r = n(397927),
    o = n(854627),
    c = n(954571),
    d = n(975571),
    u = n(427262),
    _ = n(326084),
    m = n(851746),
    A = n(664654),
    g = n(303682),
    h = n(652215),
    x = n(985018),
    p = n(146449),
    E = n(544879);
let C = e => {
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
            className: p.bj,
            src: n,
            "aria-label": (0, u.mG)(t),
            size: r._3J.SIZE_24,
            ...s
        }, t.id)
    },
    T = e => {
        let {
            slotIndex: t
        } = e;
        return (0, i.jsx)("div", {
            className: p.p,
            children: t
        })
    },
    S = e => {
        let {
            referralSentUsers: t
        } = e;
        return (0, i.jsx)("div", {
            className: p.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < A.Z; n++)
                    if (t?.[n] !== void 0) {
                        let s = (0, i.jsx)(C, {
                            user: t[n]
                        }, t[n].id);
                        e.push(s)
                    } else {
                        let t = (0, i.jsx)(T, {
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
            background: p.cq,
            strokeSize: .8,
            ringColorOverrideClassName: p.e0,
            overlayClassName: t === A.Z ? p.ys : void 0,
            children: (0, i.jsx)(r._V3, {
                src: E.A,
                height: 93,
                width: 93,
                zoomable: !1
            })
        })
    },
    f = e => {
        let {
            className: t
        } = e, {
            referralSentUsers: s
        } = (0, A.J)(), o = (0, l.bG)([m.A], () => m.A.getRecipientStatus()), u = (0, l.bG)([m.A], () => m.A.getHasEligibleFriends()), E = o.size === A.Z && [...o.values()].every(e => e === _.aK.REDEEMED), C = o.size === A.Z;
        return (0, i.jsxs)("div", {
            className: a()(p.kL, t),
            children: [(0, i.jsx)("div", {
                className: p.G3,
                children: (0, i.jsx)(I, {
                    nReferralsSent: o.size
                })
            }), (0, i.jsxs)("div", {
                className: p.IH,
                children: [(0, i.jsx)(S, {
                    referralSentUsers: s
                }), (0, i.jsxs)("div", {
                    className: p.n4,
                    children: [(0, i.jsx)(r.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: x.intl.string(x.t.USo4s7)
                    }), (0, i.jsx)(r.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: !1 === u ? x.intl.format(x.t["zWhX/Q"], {
                            helpdeskArticle: d.A.getArticleURL(h.MVz.REFERRAL_PROGRAM)
                        }) : s.length === A.Z ? !0 === E ? x.intl.format(x.t["1aEjsH"], {
                            helpdeskArticle: d.A.getArticleURL(h.MVz.REFERRAL_PROGRAM)
                        }) : x.intl.format(x.t["+u3AOO"], {
                            helpdeskArticle: d.A.getArticleURL(h.MVz.REFERRAL_PROGRAM)
                        }) : x.intl.format(x.t["omMr+V"], {
                            helpdeskArticle: d.A.getArticleURL(h.MVz.REFERRAL_PROGRAM)
                        })
                    })]
                }), (0, i.jsx)(r.Button, {
                    variant: "primary",
                    disabled: !1 === u || !0 === C,
                    text: x.intl.string(x.t.Lm2nFc),
                    onClick: () => (e => {
                        let {
                            startingScreen: t,
                            analyticsLocations: s
                        } = e;
                        c.default.track(h.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
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
                        startingScreen: g.SelectFriendsModalScreens.SELECT_FRIENDS,
                        analyticsLocations: []
                    })
                })]
            })]
        })
    }