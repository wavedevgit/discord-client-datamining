/** Chunk was on 41727 **/
/** chunk id: 547945, original params: e,t,n (module,exports,require) **/
n.d(t, {
    w: () => P
}), n(638769), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(989349),
    o = n.n(a),
    c = n(837381),
    u = n(158954),
    d = n(311907),
    p = n(397927),
    h = n(928039),
    f = n(636922),
    g = n(976860),
    m = n(151282),
    b = n(199160),
    A = n(551640),
    y = n(970244),
    _ = n(253932),
    O = n(383233),
    j = n(734057),
    v = n(287809),
    x = n(403362),
    E = n(572448),
    C = n(963702),
    S = n(652215),
    I = n(985018),
    N = n(693853);
let T = {
    offset: {
        left: 4,
        right: -12
    }
};

function P() {
    return l.useEffect(() => {
        (0, m.sy)()
    }, []), (0, r.jsx)(w, {})
}

function w() {
    let e = (0, d.bG)([b.A], () => b.A.getScheduledMessagesForInbox(), []),
        t = l.useMemo(() => Object.values(e).sort((e, t) => new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1), [e]),
        n = (0, d.bG)([b.A], () => b.A.loading, []),
        i = l.useRef(null),
        s = (0, h.A)("scheduled-messages", i);
    return n ? (0, r.jsx)(p.y$y, {
        className: N.k$
    }) : 0 === t.length ? (0, r.jsx)(C.A, {
        Icon: p.O4,
        header: I.intl.string(I.t.aJQZfZ),
        tip: I.intl.string(I.t.rCN4pN)
    }) : (0, r.jsx)(c.hD, {
        navigator: s,
        children: (0, r.jsx)(c.PR, {
            children: e => {
                var n, l;
                let {
                    ref: s
                } = e, a = function(e, t) {
                    if (null == e) return {};
                    var n, r, l, i = {};
                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                        return i
                    }
                    if (i = function(e, t) {
                            if (null == e) return {};
                            var n, r, l = {},
                                i = Object.getOwnPropertyNames(e);
                            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                            return l
                        }(e, t), Object.getOwnPropertySymbols)
                        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                    return i
                }(e, ["ref"]);
                return (0, r.jsx)(p.T7Y, (n = function(e) {
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
                }({
                    ref: e => {
                        var t;
                        i.current = e, s.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null
                    }
                }, a), l = l = {
                    children: (0, r.jsx)(R, {
                        scheduledMessages: t
                    })
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(l)).forEach(function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
                }), n))
            }
        })
    })
}

function R(e) {
    let {
        scheduledMessages: t
    } = e, n = l.useMemo(() => t.reduce((e, t) => {
        var n, r;
        let l = j.A.getChannel(t.scheduledMessage.channelId);
        return null == l || (e[l.id] = {
            channel: l,
            scheduledMessages: [...null != (n = null == (r = e[l.id]) ? void 0 : r.scheduledMessages) ? n : [], t]
        }), e
    }, {}), [t]), i = (0, d.bG)([b.A], () => b.A.getMessagesPendingDeletion(), []);
    return (0, r.jsx)(r.Fragment, {
        children: Object.entries(n).map(e => {
            let [t, {
                channel: n,
                scheduledMessages: l
            }] = e;
            return (0, r.jsxs)("div", {
                className: N.WG,
                children: [(0, r.jsx)(E.A, {
                    channel: n,
                    gotoChannel: () => (0, g.pX)(S.BVt.CHANNEL(n.getGuildId(), n.id)),
                    children: null
                }), l.map(e => {
                    let t = i.has(e.scheduledMessageId);
                    return (0, r.jsx)(D, {
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
        isPendingDeletion: i
    } = e, a = new O.Ay({
        id: t.scheduledMessageId,
        content: t.scheduledMessage.content,
        author: v.default.getUser(t.userId),
        timestamp: o()(t.sendAtTimestamp).toDate(),
        channel_id: t.scheduledMessage.channelId
    }), {
        isError: c,
        stateMessage: d
    } = function(e) {
        switch (e) {
            case A.A.SCHEDULED:
                return {
                    isError: !1, stateMessage: I.intl.string(I.t.Fn6Odn)
                };
            case A.A.ERROR_CHANNEL_NOT_FOUND:
                return {
                    isError: !0, stateMessage: I.intl.string(I.t.v5O2dK)
                };
            case A.A.ERROR_USER_NOT_FOUND:
                return {
                    isError: !0, stateMessage: I.intl.string(I.t.j8uIfG)
                };
            case A.A.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                return {
                    isError: !0, stateMessage: I.intl.string(I.t["w6zHX/"])
                };
            case A.A.ERROR_SEND_FAILED:
                return {
                    isError: !0, stateMessage: I.intl.string(I.t.pflV7z)
                };
            case A.A.ERROR_SCHEDULED_MESSAGES_DISABLED:
                return {
                    isError: !0, stateMessage: I.intl.string(I.t.j8uIfG)
                };
            default:
                (0, x.xb)(e)
        }
    }(t.state), h = l.useCallback(() => {
        (0, m.mk)(t.scheduledMessageId).then(() => {
            (0, y.Re)()
        }).catch(e => {
            (0, y.kM)(e.message)
        })
    }, [t.scheduledMessageId]), g = l.useCallback(() => {
        (0, y.CI)({
            scheduledMessage: t
        })
    }, [t]);
    return (0, r.jsx)("div", {
        className: s()(N.zC, {
            [N._4]: c,
            [N.j3]: !c
        }),
        children: i ? (0, r.jsx)(p.y$y, {
            className: N.$5
        }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(p.Text, {
                variant: "text-xs/semibold",
                color: c ? "text-feedback-critical" : "text-feedback-positive",
                className: N.Rq,
                children: d
            }), (0, r.jsxs)("div", {
                className: N.Pd,
                children: [(0, r.jsx)(f.A, {
                    message: a,
                    channel: n,
                    className: N.iU,
                    compact: _.hH.getSetting(),
                    animateAvatar: !1,
                    focusProps: T
                }, a.id), (0, r.jsxs)(u.e2v, {
                    size: "sm",
                    children: [(0, r.jsx)(u.K0, {
                        icon: p.O4,
                        onClick: g,
                        variant: "icon-only",
                        "aria-label": I.intl.string(I.t.SBcdAN)
                    }), (0, r.jsx)(u.K0, {
                        icon: p.aXh,
                        onClick: h,
                        "aria-label": I.intl.string(I.t.O3sL8F),
                        variant: "icon-only"
                    })]
                })]
            })]
        })
    }, a.id)
})