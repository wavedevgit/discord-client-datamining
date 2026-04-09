/** chunk id: 31051 params = (module,exports,require) **/
n.d(t, {
    A: () => L
});
var i = n(627968),
    l = n(735438),
    a = n(158954),
    r = n(311907),
    s = n(827734),
    o = n(397927),
    c = n(863574),
    u = n(888675),
    d = n(639289),
    _ = n(287809),
    A = n(166403),
    m = n(954571),
    E = n(203982),
    T = n(728458),
    I = n(427262),
    N = n(573359),
    g = n(59784),
    f = n(612669),
    C = n(88001),
    h = n(652215),
    p = n(518582),
    S = n(985018),
    x = n(600997),
    R = n(421438);
let O = e => {
        let {
            disabled: t,
            invite: r,
            isExistingSub: s
        } = e;
        return (0, i.jsx)(o.Button, {
            variant: "expressive",
            size: "md",
            text: S.intl.string(p.default.rjuKse),
            icon: a.tvc,
            onClick: () => {
                if (null == r) return;
                let e = r.subscription,
                    t = r.id,
                    a = _.default.getUser(r.primary_user);
                if (null == a) return;
                let c = (0, I.$3)(a);
                m.default.track(h.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, {
                    invite_id: t,
                    subscription_id: e
                });
                let u = (0, l.uniqueId)("premium-group-accept-invite-modal"),
                    A = !1;
                (0, o.mMO)(async () => {
                    let {
                        default: l
                    } = await n.e("60072").then(n.bind(n, 382088));
                    return n => (0, i.jsx)(l, {
                        ...n,
                        premiumGroupSubscriptionId: e,
                        premiumGroupInviteId: t,
                        premiumGroupPrimaryName: c,
                        isExistingSub: s,
                        onClose: async () => {
                            A || (A = !0, E._.dispatch(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), N.A.isDisplayingWowMomentConfirmation && N.A.isAnimated ? setTimeout(() => {
                                n.onClose()
                            }, d.K) : await n.onClose())
                        }
                    })
                }, {
                    onCloseRequest: () => {
                        A || (A = !0, E._.dispatch(h.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), N.A.isDisplayingWowMomentConfirmation && N.A.isAnimated ? setTimeout(() => {
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
            invite: l,
            channel: a
        } = e;
        return (0, i.jsx)(o.Button, {
            variant: "secondary",
            size: "md",
            text: S.intl.string(p.default["eYHh+z"]),
            onClick: () => {
                if (null == l || !a.isDM()) return void T.A.captureMessage("CancelInviteButton onClick: unexpected state", {
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
                null != t && (m.default.track(h.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
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
        return (0, i.jsxs)(u.A, {
            className: x.og,
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
                className: x.x,
                children: [(0, i.jsx)("img", {
                    src: R,
                    alt: "",
                    className: x.Sl
                }), (0, i.jsxs)("div", {
                    className: x.Qs,
                    children: [(0, i.jsx)(o.Exy, {
                        type: "beta",
                        variant: "expressive"
                    }), (0, i.jsx)("h2", {
                        className: x.DD,
                        children: n
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: l
                    }), null != c && (0, i.jsx)("div", {
                        className: x.UD,
                        children: c
                    })]
                })]
            })]
        })
    },
    L = e => {
        let {
            message: t,
            channel: n,
            compact: l
        } = e, a = t.premiumGroupInviteId, {
            inviteState: s,
            isFetching: o,
            invite: u,
            currentUser: d,
            premiumSubscription: m
        } = (0, r.cf)([g.A, _.default, A.A], () => ({
            inviteState: null != a ? g.A.getInviteState(a) : C.xI.NOT_FOUND,
            isFetching: null != a && g.A.isFetching(a),
            invite: null != a ? g.A.getInvite(a)?.invite : null,
            currentUser: _.default.getCurrentUser(),
            premiumSubscription: A.A.getPremiumSubscription()
        }), [a]);
        if (null == d) return null;
        let E = t.author,
            T = d.id === E.id;
        if (o || s === C.xI.FETCHING || s === C.xI.UNKNOWN) return (0, i.jsx)(c.Wb, {
            isHorizontal: !0
        });
        let I = (0, f.o1)({
            sender: E,
            channel: n,
            isSender: T,
            inviteState: s
        });
        if (null == I) return null;
        let N = s === C.xI.PENDING,
            h = null;
        return h = T ? N ? (0, i.jsx)(M, {
            disabled: !1,
            invite: u,
            channel: n
        }) : s === C.xI.REMOVED ? (0, i.jsx)(M, {
            disabled: !0,
            invite: u,
            channel: n
        }) : null : (0, i.jsx)(O, {
            disabled: !N,
            invite: u,
            isExistingSub: null != m
        }), (0, i.jsx)(D, {
            message: I.message,
            header: I.header,
            body: I.body,
            compact: l,
            actionButton: h
        })
    }