/** chunk id: 534217 params = (module,exports,require) **/
n.d(t, {
    S: () => v
}), n(321073);
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(311907),
    l = n(397927),
    o = n(854627),
    c = n(954571),
    d = n(975571),
    u = n(427262),
    _ = n(326084),
    m = n(851746),
    p = n(664654),
    g = n(303682),
    A = n(652215),
    f = n(985018),
    h = n(989348),
    b = n(544879);
let x = e => {
        let {
            user: t
        } = e, {
            avatarSrc: n,
            eventHandlers: r
        } = (0, o.A)({
            userId: t.id,
            size: l._3J.SIZE_24
        });
        return (0, i.jsx)(l.euF, {
            className: h.bj,
            src: n,
            "aria-label": (0, u.mG)(t),
            size: l._3J.SIZE_24,
            ...r
        }, t.id)
    },
    C = e => {
        let {
            slotIndex: t
        } = e;
        return (0, i.jsx)("div", {
            className: h.p,
            children: t
        })
    },
    N = e => {
        let {
            referralSentUsers: t
        } = e;
        return (0, i.jsx)("div", {
            className: h.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < p.Z; n++)
                    if (t?.[n] !== void 0) {
                        let r = (0, i.jsx)(x, {
                            user: t[n]
                        }, t[n].id);
                        e.push(r)
                    } else {
                        let t = (0, i.jsx)(C, {
                            slotIndex: n + 1
                        }, n);
                        e.push(t)
                    } return e
            })()
        })
    },
    R = e => {
        let {
            nReferralsSent: t
        } = e;
        return (0, i.jsx)(l.a3E, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: h.cq,
            strokeSize: .8,
            ringColorOverrideClassName: h.e0,
            overlayClassName: t === p.Z ? h.ys : void 0,
            children: (0, i.jsx)(l._V3, {
                src: b.A,
                height: 93,
                width: 93,
                zoomable: !1
            })
        })
    },
    v = e => {
        let {
            className: t
        } = e, {
            referralSentUsers: r
        } = (0, p.J)(), o = (0, s.bG)([m.A], () => m.A.getRecipientStatus()), u = (0, s.bG)([m.A], () => m.A.getHasEligibleFriends()), b = o.size === p.Z && [...o.values()].every(e => e === _.aK.REDEEMED), x = o.size === p.Z;
        return (0, i.jsxs)("div", {
            className: a()(h.kL, t),
            children: [(0, i.jsx)("div", {
                className: h.G3,
                children: (0, i.jsx)(R, {
                    nReferralsSent: o.size
                })
            }), (0, i.jsxs)("div", {
                className: h.IH,
                children: [(0, i.jsx)(N, {
                    referralSentUsers: r
                }), (0, i.jsxs)("div", {
                    className: h.n4,
                    children: [(0, i.jsx)(l.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: f.intl.string(f.t.USo4s7)
                    }), (0, i.jsx)(l.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: !1 === u ? f.intl.format(f.t["zWhX/Q"], {
                            helpdeskArticle: d.A.getArticleURL(A.MVz.REFERRAL_PROGRAM)
                        }) : r.length === p.Z ? !0 === b ? f.intl.format(f.t["1aEjsH"], {
                            helpdeskArticle: d.A.getArticleURL(A.MVz.REFERRAL_PROGRAM)
                        }) : f.intl.format(f.t["+u3AOO"], {
                            helpdeskArticle: d.A.getArticleURL(A.MVz.REFERRAL_PROGRAM)
                        }) : f.intl.format(f.t["omMr+V"], {
                            helpdeskArticle: d.A.getArticleURL(A.MVz.REFERRAL_PROGRAM)
                        })
                    })]
                }), (0, i.jsx)(l.Button, {
                    variant: "primary",
                    disabled: !1 === u || !0 === x,
                    text: f.intl.string(f.t.Lm2nFc),
                    onClick: () => (e => {
                        let {
                            startingScreen: t,
                            analyticsLocations: r
                        } = e;
                        c.default.track(A.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
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