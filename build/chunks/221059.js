/** chunk id: 221059 params = (module,exports,require) **/
n.d(t, {
    e: () => x
});
var i = n(627968),
    l = n(64700),
    s = n(731738),
    a = n(311907),
    r = n(397927),
    o = n(49229),
    c = n(831062),
    d = n(754302),
    u = n(632738),
    h = n(994500),
    m = n(544231),
    A = n(349435),
    g = n(665909),
    p = n(576045),
    f = n(327337),
    _ = n(652215),
    E = n(985018);

function C(e) {
    let {
        senderId: t,
        channelId: n,
        warningId: s
    } = e, {
        isIgnored: r
    } = (0, a.cf)([h.A], () => ({
        isIgnored: h.A.isIgnored(t)
    }), [t]), c = l.useCallback(() => {
        (0, g._$)({
            channelId: n,
            warningId: s,
            senderId: t,
            warningType: A._j.STRANGER_DANGER,
            cta: g.Wm.USER_MODAL_IGNORE
        }), o.A.ignoreUser(t, "web_stranger_danger_more", n)
    }, [n, s, t]), d = l.useCallback(() => {
        (0, g._$)({
            channelId: n,
            warningId: s,
            senderId: t,
            warningType: A._j.STRANGER_DANGER,
            cta: g.Wm.USER_MODAL_UNIGNORE
        }), o.A.unignoreUser(t, "web_stranger_danger_more", n)
    }, [n, s, t]);
    return (0, i.jsx)(u.PQ, {
        title: E.intl.string(E.t.avyV7P),
        description: E.intl.string(E.t.naWE6W),
        buttonText: r ? E.intl.string(E.t["3SrzRT"]) : E.intl.string(E.t.avyV7P),
        onButtonPress: r ? d : c
    })
}

function x(e) {
    let {
        channelId: t,
        warningId: x,
        senderId: S
    } = e, {
        isBlocked: I
    } = (0, a.cf)([h.A], () => ({
        isBlocked: h.A.isBlocked(S)
    }), [S]), T = l.useCallback(() => {
        (0, m.xi)(t, [x])
    }, [t, x]), N = (0, f.eT)(), b = l.useCallback(e => () => {
        o.A.blockUser(S, {
            location: f.Rx
        }).then(() => {
            T()
        }), (0, g._$)({
            channelId: t,
            warningId: x,
            senderId: S,
            warningType: A._j.STRANGER_DANGER,
            cta: e
        })
    }, [T, t, x, S]);
    l.useEffect(() => {
        (0, g.mO)(_.HAw.SAFETY_WARNING_VIEWED, {
            channelId: t,
            warningId: x,
            senderId: S,
            warningType: A._j.STRANGER_DANGER
        }), c.A.increment({
            name: s.K.SAFETY_WARNING_VIEW
        })
    }, [t, x, S]);
    let y = () => {
            (0, r.mMO)(async () => {
                let {
                    default: e
                } = await n.e("8546").then(n.bind(n, 63865));
                return n => {
                    let {
                        transitionState: l,
                        onClose: s
                    } = n;
                    return (0, i.jsx)(e, {
                        transitionState: l,
                        onClose: s,
                        channelId: t,
                        warningId: x,
                        senderId: S,
                        description: E.intl.string(E.t.DJMZX6),
                        safetyTipRows: N.map((e, t) => (0, i.jsx)(d.B, {
                            index: t,
                            listType: "numbered",
                            title: e
                        }, t)),
                        actionRows: (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(C, {
                                senderId: S,
                                channelId: t,
                                warningId: x
                            }, "more-tips-button"), (0, i.jsx)(u.PQ, {
                                title: E.intl.string(E.t["5QYPO2"]),
                                description: E.intl.string(E.t.G08MKu),
                                buttonText: E.intl.string(E.t["5QYPO2"]),
                                buttonVariant: "critical-primary",
                                onButtonPress: () => {
                                    s(), v(g.Wm.USER_MODAL_BLOCK_CONFIRM, g.Wm.USER_MODAL_BLOCK_CANCEL, y)
                                }
                            }, "block-button")]
                        })
                    })
                }
            })
        },
        v = (e, l, s) => {
            (0, r.mMO)(async () => {
                let {
                    default: a
                } = await n.e("67554").then(n.bind(n, 219801));
                return n => (0, i.jsx)(a, {
                    ...n,
                    userId: S,
                    confirmBlock: b(e),
                    onCancel: () => {
                        s?.(), (0, g._$)({
                            channelId: t,
                            warningId: x,
                            senderId: S,
                            warningType: A._j.STRANGER_DANGER,
                            cta: l
                        })
                    }
                })
            })
        };
    return (0, i.jsx)(p.N, {
        channelId: t,
        warningId: x,
        senderId: S,
        warningType: A._j.STRANGER_DANGER,
        header: E.intl.string(E.t.iOkDpM),
        description: E.intl.string(E.t.ISUbcM),
        onDismiss: T,
        buttons: [{
            text: E.intl.string(E.t["Qk/c48"]),
            variant: "primary",
            onClick: () => {
                y(), (0, g._$)({
                    channelId: t,
                    warningId: x,
                    senderId: S,
                    warningType: A._j.STRANGER_DANGER,
                    cta: g.Wm.OPEN_MORE_TIPS
                })
            }
        }, ...I ? [] : [{
            text: E.intl.string(E.t.ie0QdN),
            variant: "critical-primary",
            onClick: () => v(g.Wm.USER_BANNER_BLOCK_CONFIRM, g.Wm.USER_BANNER_BLOCK_CANCEL)
        }]]
    })
}