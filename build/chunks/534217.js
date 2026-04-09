/** chunk id: 534217 params = (module,exports,require) **/
n.d(t, {
    S: () => I
}), n(321073);
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(311907),
    l = n(397927),
    c = n(854627),
    o = n(954571),
    d = n(975571),
    u = n(427262),
    _ = n(326084),
    m = n(851746),
    p = n(617461),
    A = n(664654),
    g = n(303682),
    x = n(652215),
    h = n(985018),
    f = n(989348),
    b = n(544879);
let N = e => {
        let {
            user: t
        } = e, {
            avatarSrc: n,
            eventHandlers: r
        } = (0, c.A)({
            userId: t.id,
            size: l._3J.SIZE_24
        });
        return (0, i.jsx)(l.euF, {
            className: f.bj,
            src: n,
            "aria-label": (0, u.mG)(t),
            size: l._3J.SIZE_24,
            ...r
        }, t.id)
    },
    R = e => {
        let {
            slotIndex: t
        } = e;
        return (0, i.jsx)("div", {
            className: f.p,
            children: t
        })
    },
    C = e => {
        let {
            referralSentUsers: t
        } = e;
        return (0, i.jsx)("div", {
            className: f.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < A.Z; n++)
                    if (t?.[n] !== void 0) {
                        let r = (0, i.jsx)(N, {
                            user: t[n]
                        }, t[n].id);
                        e.push(r)
                    } else {
                        let t = (0, i.jsx)(R, {
                            slotIndex: n + 1
                        }, n);
                        e.push(t)
                    } return e
            })()
        })
    },
    v = e => {
        let {
            nReferralsSent: t
        } = e;
        return (0, i.jsx)(l.a3E, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: f.cq,
            strokeSize: .8,
            ringColorOverrideClassName: f.e0,
            overlayClassName: t === A.Z ? f.ys : void 0,
            children: (0, i.jsx)(l._V3, {
                src: b.A,
                height: 93,
                width: 93,
                zoomable: !1
            })
        })
    },
    I = e => {
        let {
            className: t
        } = e, {
            referralSentUsers: r
        } = (0, A.J)(), c = (0, s.bG)([m.A], () => m.A.getRecipientStatus()), u = (0, s.bG)([m.A], () => m.A.getHasEligibleFriends()), b = c.size === A.Z && [...c.values()].every(e => e === _.aK.REDEEMED), N = c.size === A.Z;
        return (0, i.jsxs)("div", {
            className: a()(f.kL, t),
            children: [(0, i.jsx)("div", {
                className: f.G3,
                children: (0, i.jsx)(v, {
                    nReferralsSent: c.size
                })
            }), (0, i.jsxs)("div", {
                className: f.IH,
                children: [(0, i.jsx)(C, {
                    referralSentUsers: r
                }), (0, i.jsxs)("div", {
                    className: f.n4,
                    children: [(0, i.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: h.intl.string(h.t.USo4s7)
                    }), (0, i.jsx)(l.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: !1 === u ? h.intl.format(h.t["zWhX/Q"], {
                            helpdeskArticle: d.A.getArticleURL(x.MVz.REFERRAL_PROGRAM)
                        }) : r.length === A.Z ? !0 === b ? h.intl.format(h.t["1aEjsH"], {
                            helpdeskArticle: d.A.getArticleURL(x.MVz.REFERRAL_PROGRAM)
                        }) : h.intl.format(h.t["+u3AOO"], {
                            helpdeskArticle: d.A.getArticleURL(x.MVz.REFERRAL_PROGRAM)
                        }) : h.intl.format(h.t["omMr+V"], {
                            helpdeskArticle: d.A.getArticleURL(x.MVz.REFERRAL_PROGRAM)
                        })
                    })]
                }), (0, i.jsx)(l.Button, {
                    variant: "primary",
                    disabled: !1 === u || !0 === N,
                    text: (() => {
                        switch (p.$.getConfig({
                                location: "ReferralBanner"
                            }).variation) {
                            case p.e.CONTROL:
                                return h.intl.string(h.t.Lm2nFc);
                            case p.e.VARIANT_1:
                                return h.intl.string(h.t["8wL38m"]);
                            case p.e.VARIANT_2:
                                return h.intl.string(h.t["Pr/W5F"]);
                            case p.e.VARIANT_3:
                                return h.intl.string(h.t.ojpNKb);
                            case p.e.VARIANT_4:
                                return h.intl.string(h.t["YL8/wJ"]);
                            case p.e.VARIANT_5:
                                return h.intl.string(h.t.C7iByj)
                        }
                    })(),
                    onClick: () => (e => {
                        let {
                            startingScreen: t,
                            analyticsLocations: r
                        } = e;
                        o.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                            location_stack: r
                        }), (0, l.mMO)(async () => {
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