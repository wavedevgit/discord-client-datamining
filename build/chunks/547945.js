/** chunk id: 547945 params = (module,exports,require) **/
n.d(t, {
    w: () => O
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(989349),
    o = n.n(r),
    d = n(837381),
    c = n(158954),
    u = n(311907),
    h = n(397927),
    A = n(928039),
    _ = n(636922),
    m = n(976860),
    p = n(151282),
    g = n(199160),
    f = n(551640),
    x = n(970244),
    E = n(253932),
    I = n(383233),
    C = n(734057),
    N = n(287809),
    T = n(403362),
    S = n(572448),
    b = n(963702),
    v = n(652215),
    y = n(985018),
    j = n(677510);
let R = {
    offset: {
        left: 4,
        right: -12
    }
};

function O() {
    return l.useEffect(() => {
        (0, p.sy)()
    }, []), (0, i.jsx)(L, {})
}

function L() {
    let e = (0, u.bG)([g.A], () => g.A.getScheduledMessagesForInbox(), []),
        t = l.useMemo(() => Object.values(e).sort((e, t) => new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1), [e]),
        n = (0, u.bG)([g.A], () => g.A.loading, []),
        s = l.useRef(null),
        a = (0, A.A)("scheduled-messages", s);
    return n ? (0, i.jsx)(h.y$y, {
        className: j.k$
    }) : 0 === t.length ? (0, i.jsx)(b.A, {
        Icon: h.O4,
        header: y.intl.string(y.t.aJQZfZ),
        tip: y.intl.string(y.t.rCN4pN)
    }) : (0, i.jsx)(d.hD, {
        navigator: a,
        children: (0, i.jsx)(d.PR, {
            children: e => {
                let {
                    ref: n,
                    ...l
                } = e;
                return (0, i.jsx)(h.T7Y, {
                    ref: e => {
                        s.current = e, n.current = e?.getScrollerNode() ?? null
                    },
                    ...l,
                    children: (0, i.jsx)(M, {
                        scheduledMessages: t
                    })
                })
            }
        })
    })
}

function M(e) {
    let {
        scheduledMessages: t
    } = e, n = l.useMemo(() => t.reduce((e, t) => {
        let n = C.A.getChannel(t.scheduledMessage.channelId);
        return null == n || (e[n.id] = {
            channel: n,
            scheduledMessages: [...e[n.id]?.scheduledMessages ?? [], t]
        }), e
    }, {}), [t]), s = (0, u.bG)([g.A], () => g.A.getMessagesPendingDeletion(), []);
    return (0, i.jsx)(i.Fragment, {
        children: Object.entries(n).map(e => {
            let [t, {
                channel: n,
                scheduledMessages: l
            }] = e;
            return (0, i.jsxs)("div", {
                className: j.WG,
                children: [(0, i.jsx)(S.A, {
                    channel: n,
                    gotoChannel: () => (0, m.pX)(v.BVt.CHANNEL(n.getGuildId(), n.id)),
                    children: null
                }), l.map(e => {
                    let t = s.has(e.scheduledMessageId);
                    return (0, i.jsx)(D, {
                        scheduledMessage: e,
                        channel: n,
                        isPendingDeletion: t
                    }, e.scheduledMessageId)
                })]
            }, t)
        })
    })
}
let D = l.memo(function(e) {
    let {
        scheduledMessage: t,
        channel: n,
        isPendingDeletion: s
    } = e, r = new I.Ay({
        id: t.scheduledMessageId,
        content: t.scheduledMessage.content,
        author: N.default.getUser(t.userId),
        timestamp: o()(t.sendAtTimestamp).toDate(),
        channel_id: t.scheduledMessage.channelId
    }), {
        isError: d,
        stateMessage: u
    } = function(e) {
        switch (e) {
            case f.A.SCHEDULED:
                return {
                    isError: !1, stateMessage: y.intl.string(y.t.Fn6Odn)
                };
            case f.A.ERROR_CHANNEL_NOT_FOUND:
                return {
                    isError: !0, stateMessage: y.intl.string(y.t.v5O2dK)
                };
            case f.A.ERROR_USER_NOT_FOUND:
                return {
                    isError: !0, stateMessage: y.intl.string(y.t.j8uIfG)
                };
            case f.A.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                return {
                    isError: !0, stateMessage: y.intl.string(y.t["w6zHX/"])
                };
            case f.A.ERROR_SEND_FAILED:
                return {
                    isError: !0, stateMessage: y.intl.string(y.t.pflV7z)
                };
            case f.A.ERROR_SCHEDULED_MESSAGES_DISABLED:
                return {
                    isError: !0, stateMessage: y.intl.string(y.t.j8uIfG)
                };
            default:
                (0, T.xb)(e)
        }
    }(t.state), A = l.useCallback(() => {
        (0, p.mk)(t.scheduledMessageId).then(() => {
            (0, x.Re)()
        }).catch(e => {
            (0, x.kM)(e.message)
        })
    }, [t.scheduledMessageId]), m = l.useCallback(() => {
        (0, x.CI)({
            scheduledMessage: t
        })
    }, [t]);
    return (0, i.jsx)("div", {
        className: a()(j.zC, {
            [j._4]: d,
            [j.j3]: !d
        }),
        children: s ? (0, i.jsx)(h.y$y, {
            className: j.$5
        }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(h.Text, {
                variant: "text-xs/semibold",
                color: d ? "text-feedback-critical" : "text-feedback-positive",
                className: j.Rq,
                children: u
            }), (0, i.jsxs)("div", {
                className: j.Pd,
                children: [(0, i.jsx)(_.A, {
                    message: r,
                    channel: n,
                    className: j.iU,
                    compact: E.hH.getSetting(),
                    animateAvatar: !1,
                    focusProps: R
                }, r.id), (0, i.jsxs)(c.e2v, {
                    size: "sm",
                    children: [(0, i.jsx)(c.K0, {
                        icon: h.O4,
                        onClick: m,
                        variant: "icon-only",
                        "aria-label": y.intl.string(y.t.SBcdAN)
                    }), (0, i.jsx)(c.K0, {
                        icon: h.aXh,
                        onClick: A,
                        "aria-label": y.intl.string(y.t.O3sL8F),
                        variant: "icon-only"
                    })]
                })]
            })]
        })
    }, r.id)
})