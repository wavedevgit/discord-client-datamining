/** chunk id: 31051 params = (module,exports,require) **/
n.d(t, {
    A: () => P
});
var i = n(627968),
    l = n(735438),
    a = n(158954),
    r = n(311907),
    s = n(827734),
    o = n(397927),
    c = n(863574),
    d = n(888675),
    u = n(639289),
    _ = n(287809),
    m = n(166403),
    A = n(954571),
    E = n(203982),
    I = n(728458),
    T = n(427262),
    f = n(573359),
    N = n(59784),
    g = n(612669),
    C = n(88001),
    h = n(652215),
    p = n(519412),
    x = n(985018),
    R = n(313902),
    S = n(421438);
let O = e => {
        let {
            disabled: t,
            invite: r,
            isExistingSub: s
        } = e;
        return (0, i.jsx)(o.Button, {
            variant: "expressive",
            size: "md",
            text: x.intl.string(p.default.rjuKse),
            icon: a.tvc,
            onClick: () => {
                if (null == r) return;
                let e = r.subscription,
                    t = r.id,
                    a = _.default.getUser(r.primary_user);
                if (null == a) return;
                let c = (0, T.$3)(a);
                A.default.track(h.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, {
                    invite_id: t,
                    subscription_id: e
                });
                let d = (0, l.uniqueId)("premium-group-accept-invite-modal"),
                    m = !1;
                (0, o.mMO)(async () => {
                    let {
                        default: l
                    } = await n.e("60072").then(n.bind(n, 159707));
                    return n => (0, i.jsx)(l, {
                        ...n,
                        premiumGroupSubscriptionId: e,
                        premiumGroupInviteId: t,
                        premiumGroupPrimaryName: c,
                        isExistingSub: s,
                        onClose: async () => {
                            m || (m = !0, E._.dispatch(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated ? setTimeout(() => {
                                n.onClose()
                            }, u.K) : await n.onClose())
                        }
                    })
                }, {
                    onCloseRequest: () => {
                        m || (m = !0, E._.dispatch(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), f.A.isDisplayingWowMomentConfirmation && f.A.isAnimated ? setTimeout(() => {
                            (0, o.OoC)(d)
                        }, u.K) : (0, o.OoC)(d))
                    },
                    modalKey: d
                })
            },
            disabled: t
        })
    },
    M = e => {
        let {
            disabled: t,
            invite: l,
            channel: a
        } = e;
        return (0, i.jsx)(o.Button, {
            variant: "secondary",
            size: "md",
            text: x.intl.string(p.default["eYHh+z"]),
            onClick: () => {
                if (null == l || !a.isDM()) return void I.A.captureMessage("CancelInviteButton onClick: unexpected state", {
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
                    t = _.default.getUser(e);
                null != t && (A.default.track(h.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
                    invite_id: l.id,
                    subscription_id: l.subscription,
                    invited_user_id: e
                }), (0, o.mMO)(async () => {
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
    D = e => {
        let {
            message: t,
            header: n,
            body: l,
            compact: r,
            actionButton: c
        } = e;
        return (0, i.jsxs)(d.A, {
            className: R.og,
            compact: r,
            iconNode: (0, i.jsx)(a.tvc, {
                size: "md",
                color: s.A.colors.ICON_STRONG
            }),
            children: [(0, i.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: t
            }), (0, i.jsxs)(o.BJc, {
                direction: "horizontal",
                className: R.x,
                children: [(0, i.jsx)("img", {
                    src: S,
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
                        children: l
                    }), null != c && (0, i.jsx)("div", {
                        className: R.UD,
                        children: c
                    })]
                })]
            })]
        })
    },
    P = e => {
        let {
            message: t,
            channel: n,
            compact: l
        } = e, a = t.premiumGroupInviteId, {
            inviteState: s,
            isFetching: o,
            invite: d,
            currentUser: u,
            premiumSubscription: A
        } = (0, r.cf)([N.A, _.default, m.A], () => ({
            inviteState: null != a ? N.A.getInviteState(a) : C.xI.NOT_FOUND,
            isFetching: null != a && N.A.isFetching(a),
            invite: null != a ? N.A.getInvite(a)?.invite : null,
            currentUser: _.default.getCurrentUser(),
            premiumSubscription: m.A.getPremiumSubscription()
        }), [a]);
        if (null == u) return null;
        let E = t.author,
            I = u.id === E.id;
        if (o || s === C.xI.FETCHING || s === C.xI.UNKNOWN) return (0, i.jsx)(c.Wb, {
            isHorizontal: !0
        });
        let T = (0, g.o1)({
            sender: E,
            channel: n,
            isSender: I,
            inviteState: s
        });
        if (null == T) return null;
        let f = s === C.xI.PENDING,
            h = null;
        return h = I ? f ? (0, i.jsx)(M, {
            disabled: !1,
            invite: d,
            channel: n
        }) : s === C.xI.REMOVED ? (0, i.jsx)(M, {
            disabled: !0,
            invite: d,
            channel: n
        }) : null : (0, i.jsx)(O, {
            disabled: !f,
            invite: d,
            isExistingSub: null != A
        }), (0, i.jsx)(D, {
            message: T.message,
            header: T.header,
            body: T.body,
            compact: l,
            actionButton: h
        })
    }