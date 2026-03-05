/** chunk id: 31051, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
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
    m = n(166403),
    _ = n(954571),
    A = n(203982),
    f = n(728458),
    h = n(427262),
    g = n(573359),
    E = n(59784),
    p = n(612669),
    x = n(88001),
    C = n(652215),
    I = n(518582),
    T = n(985018),
    N = n(498581),
    S = n(421438);
let R = e => {
        let {
            disabled: t,
            invite: r,
            isExistingSub: o
        } = e;
        return (0, i.jsx)(s.Button, {
            variant: "expressive",
            size: "md",
            text: T.intl.string(I.default.rjuKse),
            icon: a.tvc,
            onClick: () => {
                if (null == r) return;
                let e = r.subscription,
                    t = r.id,
                    a = u.default.getUser(r.primary_user);
                if (null == a) return;
                let c = (0, h.$3)(a);
                _.default.track(C.HAw.PREMIUM_GROUP_INVITE_EMBED_ACCEPT_CLICKED, {
                    invite_id: t,
                    subscription_id: e
                });
                let m = (0, l.uniqueId)("premium-group-accept-invite-modal"),
                    f = !1;
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
                            f || (f = !0, A._.dispatch(C.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated ? setTimeout(() => {
                                n.onClose()
                            }, d.K) : await n.onClose())
                        }
                    })
                }, {
                    onCloseRequest: () => {
                        f || (f = !0, A._.dispatch(C.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED), g.A.isDisplayingWowMomentConfirmation && g.A.isAnimated ? setTimeout(() => {
                            (0, s.OoC)(m)
                        }, d.K) : (0, s.OoC)(m))
                    },
                    modalKey: m
                })
            },
            disabled: t
        })
    },
    v = e => {
        let {
            disabled: t,
            invite: l,
            channel: a
        } = e;
        return (0, i.jsx)(s.Button, {
            variant: "secondary",
            size: "md",
            text: T.intl.string(I.default["eYHh+z"]),
            onClick: () => {
                if (null == l || !a.isDM()) return void f.A.captureMessage("CancelInviteButton onClick: unexpected state", {
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
                null != t && (_.default.track(C.HAw.PREMIUM_GROUP_INVITE_EMBED_CANCEL_CLICKED, {
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
            className: N.og,
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
                className: N.x,
                children: [(0, i.jsx)("img", {
                    src: S,
                    alt: "",
                    className: N.Sl
                }), (0, i.jsxs)("div", {
                    className: N.Qs,
                    children: [(0, i.jsx)(s.Exy, {
                        type: "beta",
                        variant: "expressive"
                    }), (0, i.jsx)("h2", {
                        className: N.DD,
                        children: n
                    }), (0, i.jsx)(s.Text, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: l
                    }), null != o && (0, i.jsx)("div", {
                        className: N.UD,
                        children: o
                    })]
                })]
            })]
        })
    },
    j = e => {
        let {
            message: t,
            channel: n,
            compact: l
        } = e, a = t.premiumGroupInviteId, {
            inviteState: s,
            isFetching: c,
            invite: d,
            currentUser: _,
            premiumSubscription: A
        } = (0, r.cf)([E.A, u.default, m.A], () => ({
            inviteState: null != a ? E.A.getInviteState(a) : x.xI.NOT_FOUND,
            isFetching: null != a && E.A.isFetching(a),
            invite: null != a ? E.A.getInvite(a)?.invite : null,
            currentUser: u.default.getCurrentUser(),
            premiumSubscription: m.A.getPremiumSubscription()
        }), [a]);
        if (null == _) return null;
        let f = t.author,
            h = _.id === f.id;
        if (c || s === x.xI.FETCHING || s === x.xI.UNKNOWN) return (0, i.jsx)(o.Wb, {
            isHorizontal: !0
        });
        let g = (0, p.o1)({
            sender: f,
            channel: n,
            isSender: h,
            inviteState: s
        });
        if (null == g) return null;
        let C = s === x.xI.PENDING,
            I = null;
        return I = h ? C ? (0, i.jsx)(v, {
            disabled: !1,
            invite: d,
            channel: n
        }) : s === x.xI.REMOVED ? (0, i.jsx)(v, {
            disabled: !0,
            invite: d,
            channel: n
        }) : null : (0, i.jsx)(R, {
            disabled: !C,
            invite: d,
            isExistingSub: null != A
        }), (0, i.jsx)(M, {
            message: g.message,
            header: g.header,
            body: g.body,
            compact: l,
            actionButton: I
        })
    }