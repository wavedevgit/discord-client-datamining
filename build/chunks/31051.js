/** chunk id: 31051 params = (module,exports,require) **/
n.d(t, {
    A: () => D
});
var i = n(627968),
    l = n(735438),
    a = n(158954),
    r = n(311907),
    s = n(397927),
    o = n(863574),
    c = n(888675),
    d = n(639289),
    u = n(287809),
    _ = n(166403),
    A = n(954571),
    m = n(203982),
    E = n(728458),
    I = n(427262),
    T = n(573359),
    f = n(59784),
    N = n(612669),
    C = n(88001),
    g = n(652215),
    h = n(519412),
    p = n(985018),
    S = n(260171),
    R = n(421438);
let x = e => {
        let {
            disabled: t,
            invite: r,
            isExistingSub: o
        } = e;
        return (0, i.jsx)(s.Button, {
            variant: "expressive",
            size: "md",
            text: p.intl.string(h.default.rjuKse),
            icon: a.tvc,
            onClick: () => {
                if (null == r) return;
                let e = r.subscription,
                    t = r.id,
                    a = u.default.getUser(r.primary_user);
                if (null == a) return;
                let c = (0, I.$3)(a);
                A.default.track(g.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, {
                    invite_id: t,
                    subscription_id: e
                });
                let _ = (0, l.uniqueId)("premium-group-accept-invite-modal"),
                    E = !1;
                (0, s.mMO)(async () => {
                    let {
                        default: l
                    } = await n.e("60072").then(n.bind(n, 159707));
                    return n => (0, i.jsx)(l, {
                        ...n,
                        premiumGroupSubscriptionId: e,
                        premiumGroupInviteId: t,
                        premiumGroupPrimaryName: c,
                        isExistingSub: o,
                        onClose: async () => {
                            E || (E = !0, m._.dispatch(g.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), T.A.isDisplayingWowMomentConfirmation && T.A.isAnimated ? setTimeout(() => {
                                n.onClose()
                            }, d.K) : await n.onClose())
                        }
                    })
                }, {
                    onCloseRequest: () => {
                        E || (E = !0, m._.dispatch(g.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), T.A.isDisplayingWowMomentConfirmation && T.A.isAnimated ? setTimeout(() => {
                            (0, s.OoC)(_)
                        }, d.K) : (0, s.OoC)(_))
                    },
                    modalKey: _
                })
            },
            disabled: t
        })
    },
    O = e => {
        let {
            disabled: t,
            invite: l,
            channel: a
        } = e;
        return (0, i.jsx)(s.Button, {
            variant: "secondary",
            size: "md",
            text: p.intl.string(h.default["eYHh+z"]),
            onClick: () => {
                if (null == l || !a.isDM()) return void E.A.captureMessage("CancelInviteButton onClick: unexpected state", {
                    extra: {
                        inviteIsNull: null == l,
                        channelIsDM: a.isDM(),
                        channelId: a.id,
                        subscriptionGroupMemberId: l?.id,
                        subscriptionId: l?.subscription,
                        primaryUserId: l?.primary_user
                    }
                });
                let e = a.getRecipientId(),
                    t = u.default.getUser(e);
                null != t && (A.default.track(g.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                    invite_id: l.id,
                    subscription_id: l.subscription,
                    invited_user_id: e
                }), (0, s.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("15554").then(n.bind(n, 115225));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        subscriptionId: l.subscription,
                        invitedUser: t,
                        subscriptionGroupMemberId: l.id
                    })
                }))
            },
            disabled: t
        })
    },
    M = e => {
        let {
            message: t,
            header: n,
            body: l,
            compact: r,
            actionButton: o
        } = e;
        return (0, i.jsxs)(c.A, {
            className: S.og,
            compact: r,
            iconNode: (0, i.jsx)(a.tvc, {
                size: "md",
                color: "currentColor"
            }),
            children: [(0, i.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: t
            }), (0, i.jsxs)(s.BJc, {
                direction: "horizontal",
                className: S.x,
                children: [(0, i.jsx)("img", {
                    src: R,
                    alt: "",
                    className: S.Sl
                }), (0, i.jsxs)("div", {
                    className: S.Qs,
                    children: [(0, i.jsx)(s.Exy, {
                        type: "beta",
                        variant: "expressive"
                    }), (0, i.jsx)("h2", {
                        className: S.DD,
                        children: n
                    }), (0, i.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: l
                    }), null != o && (0, i.jsx)("div", {
                        className: S.UD,
                        children: o
                    })]
                })]
            })]
        })
    },
    D = e => {
        let {
            message: t,
            channel: n,
            compact: l
        } = e, a = t.premiumGroupInviteId, {
            inviteState: s,
            isFetching: c,
            invite: d,
            currentUser: A,
            premiumSubscription: m
        } = (0, r.cf)([f.A, u.default, _.A], () => ({
            inviteState: null != a ? f.A.getInviteState(a) : C.xI.NOT_FOUND,
            isFetching: null != a && f.A.isFetching(a),
            invite: null != a ? f.A.getInvite(a)?.invite : null,
            currentUser: u.default.getCurrentUser(),
            premiumSubscription: _.A.getPremiumSubscription()
        }), [a]);
        if (null == A) return null;
        let E = t.author,
            I = A.id === E.id;
        if (c || s === C.xI.FETCHING || s === C.xI.UNKNOWN) return (0, i.jsx)(o.Wb, {
            isHorizontal: !0
        });
        let T = (0, N.o1)({
            sender: E,
            channel: n,
            isSender: I,
            inviteState: s
        });
        if (null == T) return null;
        let g = s === C.xI.PENDING,
            h = null;
        return h = I ? g ? (0, i.jsx)(O, {
            disabled: !1,
            invite: d,
            channel: n
        }) : s === C.xI.REMOVED ? (0, i.jsx)(O, {
            disabled: !0,
            invite: d,
            channel: n
        }) : null : (0, i.jsx)(x, {
            disabled: !g,
            invite: d,
            isExistingSub: null != m
        }), (0, i.jsx)(M, {
            message: T.message,
            header: T.header,
            body: T.body,
            compact: l,
            actionButton: h
        })
    }