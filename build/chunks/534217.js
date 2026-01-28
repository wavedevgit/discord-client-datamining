/** Chunk was on 5606 **/
/** chunk id: 534217, original params: e,t,n (module,exports,require) **/
n.d(t, {
    S: () => j
}), n(321073), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(311907),
    a = n(397927),
    o = n(854627),
    c = n(954571),
    d = n(975571),
    u = n(427262),
    p = n(326084),
    _ = n(851746),
    m = n(664654),
    g = n(303682),
    f = n(652215),
    b = n(985018),
    h = n(146449),
    A = n(544879);

function E(e) {
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
let x = e => {
        let {
            user: t
        } = e, {
            avatarSrc: n,
            eventHandlers: i
        } = (0, o.A)({
            userId: t.id,
            size: a._3J.SIZE_24
        });
        return (0, r.jsx)(a.euF, E({
            className: h.bj,
            src: n,
            "aria-label": (0, u.mG)(t),
            size: a._3J.SIZE_24
        }, i), t.id)
    },
    O = e => {
        let {
            slotIndex: t
        } = e;
        return (0, r.jsx)("div", {
            className: h.p,
            children: t
        })
    },
    C = e => {
        let {
            referralSentUsers: t
        } = e;
        return (0, r.jsx)("div", {
            className: h.L$,
            children: (() => {
                let e = [];
                for (let n = 0; n < m.Z; n++)
                    if ((null == t ? void 0 : t[n]) !== void 0) {
                        let i = (0, r.jsx)(x, {
                            user: t[n]
                        }, t[n].id);
                        e.push(i)
                    } else {
                        let t = (0, r.jsx)(O, {
                            slotIndex: n + 1
                        }, n);
                        e.push(t)
                    } return e
            })()
        })
    },
    y = e => {
        let {
            nReferralsSent: t
        } = e;
        return (0, r.jsx)(a.a3E, {
            percent: 33.3 * t,
            colorOverride: "#53ac66",
            background: h.cq,
            strokeSize: .8,
            ringColorOverrideClassName: h.e0,
            overlayClassName: t === m.Z ? h.ys : void 0,
            children: (0, r.jsx)(a._V3, {
                src: A.A,
                height: 93,
                width: 93,
                zoomable: !1
            })
        })
    },
    j = e => {
        let {
            className: t
        } = e, {
            referralSentUsers: i
        } = (0, m.J)(), o = (0, s.bG)([_.A], () => _.A.getRecipientStatus()), u = (0, s.bG)([_.A], () => _.A.getHasEligibleFriends()), A = o.size === m.Z && [...o.values()].every(e => e === p.aK.REDEEMED), x = o.size === m.Z;
        return (0, r.jsxs)("div", {
            className: l()(h.kL, t),
            children: [(0, r.jsx)("div", {
                className: h.G3,
                children: (0, r.jsx)(y, {
                    nReferralsSent: o.size
                })
            }), (0, r.jsxs)("div", {
                className: h.IH,
                children: [(0, r.jsx)(C, {
                    referralSentUsers: i
                }), (0, r.jsxs)("div", {
                    className: h.n4,
                    children: [(0, r.jsx)(a.Heading, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: b.intl.string(b.t.USo4s7)
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: !1 === u ? b.intl.format(b.t["zWhX/Q"], {
                            helpdeskArticle: d.A.getArticleURL(f.MVz.REFERRAL_PROGRAM)
                        }) : i.length === m.Z ? !0 === A ? b.intl.format(b.t["1aEjsH"], {
                            helpdeskArticle: d.A.getArticleURL(f.MVz.REFERRAL_PROGRAM)
                        }) : b.intl.format(b.t["+u3AOO"], {
                            helpdeskArticle: d.A.getArticleURL(f.MVz.REFERRAL_PROGRAM)
                        }) : b.intl.format(b.t["omMr+V"], {
                            helpdeskArticle: d.A.getArticleURL(f.MVz.REFERRAL_PROGRAM)
                        })
                    })]
                }), (0, r.jsx)(a.Button, {
                    variant: "primary",
                    disabled: !1 === u || !0 === x,
                    text: b.intl.string(b.t.Lm2nFc),
                    onClick: () => (e => {
                        let {
                            startingScreen: t,
                            analyticsLocations: i
                        } = e;
                        c.default.track(f.HAw.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
                            location_stack: i
                        }), (0, a.mMO)(async () => {
                            let {
                                default: e
                            } = await Promise.resolve().then(n.bind(n, 303682));
                            return n => {
                                var i, l;
                                return (0, r.jsx)(e, (i = E({}, n), l = l = {
                                    startingScreen: t
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
                        startingScreen: g.SelectFriendsModalScreens.SELECT_FRIENDS,
                        analyticsLocations: []
                    })
                })]
            })]
        })
    }