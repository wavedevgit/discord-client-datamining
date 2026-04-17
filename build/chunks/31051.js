/** chunk id: 31051 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => U
});
var i = n(627968),
    r = n(735438),
    l = n(158954),
    s = n(311907),
    a = n(827734),
    o = n(397927),
    c = n(863574),
    u = n(888675),
    d = n(639289),
    _ = n(287809),
    A = n(166403),
    E = n(954571),
    m = n(203982),
    I = n(728458),
    T = n(427262),
    g = n(573359),
    N = n(59784),
    f = n(612669),
    C = n(88001),
    p = n(652215),
    h = n(466919),
    S = n(985018),
    R = n(539550),
    x = n(421438);
let O = e => {
        let {
            disabled: t,
            invite: s,
            isExistingSub: a
        } = e;
        return (0, i.jsx)(o.Button, {
            variant: "expressive",
            size: "md",
            text: S.intl.string(h.default.rjuKse),
            icon: l.tvc,
            onClick: () => {
                if (null == s) return;
                let e = s.subscription,
                    t = s.id,
                    l = _.default.getUser(s.primary_user);
                if (null == l) return;
                let c = (0, T.$3)(l);
                E.default.track(p.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, {
                    invite_id: t,
                    subscription_id: e
                });
                let u = (0, r.uniqueId)("premium-group-accept-invite-modal"),
                    A = !1;
                (0, o.mMO)(async () => {
                    let {
                        default: r
                    } = await n.e("60072").then(n.bind(n, 159707));
                    return n => (0, i.jsx)(r, {
                        ...n,
                        premiumGroupSubscriptionId: e,
                        premiumGroupInviteId: t,
                        premiumGroupPrimaryName: c,
                        isExistingSub: a,
                        onClose: async () => {
                            A || (A = !0, m._.dispatch(p.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated ? setTimeout(() => {
                                n.onClose()
                            }, d.K) : await n.onClose())
                        }
                    })
                }, {
                    onCloseRequest: () => {
                        A || (A = !0, m._.dispatch(p.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated ? setTimeout(() => {
                            (0, o.OoC)(u)
                        }, d.K) : (0, o.OoC)(u))
                    },
                    modalKey: u
                })
            },
            disabled: t
        })
    },
    M = e => {
        let {
            disabled: t,
            invite: r,
            channel: l
        } = e;
        return (0, i.jsx)(o.Button, {
            variant: "secondary",
            size: "md",
            text: S.intl.string(h.default["eYHh+z"]),
            onClick: () => {
                if (null == r || !l.isDM()) return void I.A.captureMessage("CancelInviteButton onClick: unexpected state", {
                    extra: {
                        inviteIsNull: null == r,
                        channelIsDM: l.isDM(),
                        channelId: l.id,
                        subscriptionGroupMemberId: r?.id,
                        subscriptionId: r?.subscription,
                        primaryUserId: r?.primary_user
                    }
                });
                let e = l.getRecipientId(),
                    t = _.default.getUser(e);
                null != t && (E.default.track(p.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                    invite_id: r.id,
                    subscription_id: r.subscription,
                    invited_user_id: e
                }), (0, o.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("15554").then(n.bind(n, 115225));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        subscriptionId: r.subscription,
                        invitedUser: t,
                        subscriptionGroupMemberId: r.id
                    })
                }))
            },
            disabled: t
        })
    },
    D = e => {
        let {
            message: t,
            header: n,
            body: r,
            compact: s,
            actionButton: c
        } = e;
        return (0, i.jsxs)(u.A, {
            className: R.og,
            compact: s,
            iconNode: (0, i.jsx)(l.tvc, {
                size: "md",
                color: a.A.colors.ICON_STRONG
            }),
            children: [(0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: t
            }), (0, i.jsxs)(o.BJc, {
                direction: "horizontal",
                className: R.x,
                children: [(0, i.jsx)("img", {
                    src: x,
                    alt: "",
                    className: R.Sl
                }), (0, i.jsxs)("div", {
                    className: R.Qs,
                    children: [(0, i.jsx)(o.Exy, {
                        type: "beta",
                        variant: "expressive"
                    }), (0, i.jsx)("h2", {
                        className: R.DD,
                        children: n
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: r
                    }), null != c && (0, i.jsx)("div", {
                        className: R.UD,
                        children: c
                    })]
                })]
            })]
        })
    },
    U = e => {
        let {
            message: t,
            channel: n,
            compact: r
        } = e, l = t.premiumGroupInviteId, {
            inviteState: a,
            isFetching: o,
            invite: u,
            currentUser: d,
            premiumSubscription: E
        } = (0, s.cf)([N.A, _.default, A.A], () => ({
            inviteState: null != l ? N.A.getInviteState(l) : C.xI.NOT_FOUND,
            isFetching: null != l && N.A.isFetching(l),
            invite: null != l ? N.A.getInvite(l)?.invite : null,
            currentUser: _.default.getCurrentUser(),
            premiumSubscription: A.A.getPremiumSubscription()
        }), [l]);
        if (null == d) return null;
        let m = t.author,
            I = d.id === m.id;
        if (o || a === C.xI.FETCHING || a === C.xI.UNKNOWN) return (0, i.jsx)(c.Wb, {
            isHorizontal: !0
        });
        let T = (0, f.o1)({
            sender: m,
            channel: n,
            isSender: I,
            inviteState: a
        });
        if (null == T) return null;
        let g = a === C.xI.PENDING,
            p = null;
        return p = I ? g ? (0, i.jsx)(M, {
            disabled: !1,
            invite: u,
            channel: n
        }) : a === C.xI.REMOVED ? (0, i.jsx)(M, {
            disabled: !0,
            invite: u,
            channel: n
        }) : null : (0, i.jsx)(O, {
            disabled: !g,
            invite: u,
            isExistingSub: null != E
        }), (0, i.jsx)(D, {
            message: T.message,
            header: T.header,
            body: T.body,
            compact: r,
            actionButton: p
        })
    }