/** Chunk was on 1113 **/
/** chunk id: 672341, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => et
}), n(321073), n(896048), n(667532);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(843472),
    o = n(432371),
    c = n(775602),
    u = n(58149),
    d = n(486227),
    h = n(454148),
    p = n(718468),
    g = n(816144),
    f = n(928764),
    m = n(640708),
    b = n(265869),
    A = n(715757),
    y = n(378570),
    O = n(349435),
    _ = n(452082),
    j = n(357179),
    x = n(74114),
    v = n(221059),
    E = n(513272),
    C = n(881020),
    S = n(637384),
    I = n(383233),
    N = n(222823),
    T = n(309010),
    P = n(287809),
    w = n(405269),
    R = n(927813),
    D = n(661191),
    L = n(375901),
    M = n(857069),
    G = n(675171),
    k = n(806621),
    U = n(636922),
    V = n(371741),
    B = n(66149),
    H = n(922529),
    F = n(652176),
    K = n(540385),
    Y = n(613907),
    W = n(829444),
    z = n(626360),
    q = n(381941),
    X = n(652215),
    J = n(327337),
    Q = n(985018);

function Z(e) {
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

function $(e) {
    return null != e && e.type === X.TZK.MESSAGE && e.content.id === e.groupId
}
let ee = l.memo(function(e) {
    let {
        file: t,
        channel: n,
        user: l,
        isGroupStart: i,
        compact: s
    } = e;
    return (0, r.jsx)(U.A, {
        compact: s,
        isGroupStart: i,
        channel: n,
        message: new I.Ay({
            id: t.id,
            key: "pending-upload-".concat(t.id),
            type: X.lAJ.DEFAULT,
            author: l,
            channel_id: n.id,
            customRenderedContent: {
                hasSpoilerEmbeds: !1,
                hasBailedAst: !1,
                content: (0, r.jsx)(p.e, {
                    channelId: n.id,
                    file: t
                })
            }
        })
    })
});

function et(e) {
    var t, n;
    let l, p, {
            channel: U,
            messages: et,
            unreadCount: en,
            showNewMessagesBar: er,
            messageDisplayCompact: el,
            channelStream: ei,
            uploads: es,
            scrollManager: ea,
            specs: eo,
            filterAfterTimestamp: ec,
            showingQuarantineBanner: eu,
            hideSummaries: ed,
            jumpBarClassName: eh
        } = e,
        ep = P.default.getCurrentUser(),
        eg = () => ea.isInitialized() || et.ready,
        ef = (0, k.r)(U),
        em = et.length > 0 && (null == (n = et.first()) ? void 0 : n.isFirstMessageInForumPost(U)),
        eb = (0, o.cI)(U),
        eA = (0, i.bG)([E.A], () => E.A.shouldShowTopicsBar() && !ed),
        ey = (0, x.l)(U.id),
        eO = (0, _.j)(U.id, J.Rx),
        e_ = (0, d.E)(U.id),
        ej = (0, G.A)(),
        ex = function(e, t) {
            if (e.isDM() && null != t)
                if (t.type === O._j.STRANGER_DANGER) return (0, r.jsx)(v.e, {
                    channelId: e.id,
                    warningId: t.id,
                    senderId: e.getRecipientId()
                });
                else if (t.type === O._j.LIKELY_ATO) return (0, r.jsx)(h.L, {
                channelId: e.id,
                warningId: t.id,
                senderId: e.getRecipientId()
            });
            else return (0, r.jsx)(j._, {
                channelId: e.id,
                warningId: t.id,
                senderId: e.getRecipientId()
            });
            return null
        }(U, null != (t = null != ey ? ey : eO) ? t : e_),
        ev = U.isForumPost() && !em ? (0, r.jsx)(f.A, {
            postId: U.id
        }) : null,
        eE = (0, b.A)(U.id),
        eC = (0, A.W1)(U);
    (0, W.A)();
    let eS = null,
        eI = [],
        eN = ei.map((e, t) => {
            if (e.type === X.TZK.DIVIDER) {
                var n, l;
                let i = null != e.unreadId;
                return null != ec ? null : e.isSummaryDivider ? (0, r.jsx)(S.A, {
                    index: t,
                    item: e,
                    channel: U,
                    isBeforeGroup: null == e.content && $(ei[t + 1])
                }) : (0, r.jsx)(H.A, {
                    isUnread: i,
                    isBeforeGroup: null == e.content && $(ei[t + 1]),
                    id: i ? q.q4 : void 0,
                    children: e.content
                }, "divider-".concat(null != (n = null != (l = e.contentKey) ? l : e.unreadId) ? n : t))
            }
            if (e.type === X.TZK.FORUM_POST_ACTION_BAR) return (0, r.jsx)(f.A, {
                parentChannelId: U.parent_id,
                postId: U.id,
                isLastItem: t + 1 === ei.length,
                isFirstMessage: !0
            }, "forum-post-action-bar-".concat(U.id));
            if (e.type === X.TZK.MESSAGE_GROUP_BLOCKED || e.type === X.TZK.MESSAGE_GROUP_IGNORED || e.type === X.TZK.MESSAGE_GROUP_SPAMMER) {
                let t;
                return t = e.type === X.TZK.MESSAGE_GROUP_BLOCKED ? Q.t["+FcYM/"] : e.type === X.TZK.MESSAGE_GROUP_IGNORED ? Q.t["VFWjc+"] : Q.t.xfkfTK, (0, r.jsx)(B.A, {
                    unreadId: q.q4,
                    messages: e,
                    channel: U,
                    compact: el,
                    collapsedReason: t
                }, e.key)
            }
            if (null != ec && ec > e.content.timestamp.getTime() * R.A.Millis.SECOND) return;
            e.type === X.TZK.MESSAGE && null == eS && (eS = e);
            let i = e.groupId === (null == eS ? void 0 : eS.groupId) ? eS.content.id : e.groupId,
                s = eC && e.content.isFirstMessageInForumPost(U),
                a = e.type === X.TZK.THREAD_STARTER_MESSAGE ? V.VO : V.Ay;
            return (0, r.jsx)(a, {
                compact: el && !s,
                channel: U,
                message: e.content,
                groupId: i,
                flashKey: e.flashKey,
                id: (0, L.j)(U.id, e.content.id),
                isLastItem: t >= ei.length - 1,
                renderContentOnly: eE || s
            }, e.content.id)
        });
    eI.push(...eN);
    let eT = ei[ei.length - 1];
    if (null != ep && es.forEach((e, t) => {
            let n = 0 === t && (0, M.l)(U, eT, new I.Ay({
                type: X.lAJ.DEFAULT,
                author: ep
            }));
            eI.push((0, r.jsx)(ee, {
                file: e,
                channel: U,
                user: ep,
                isGroupStart: n,
                compact: el
            }, "upload-".concat(e.id)))
        }), et.hasMoreBefore && null == ec) {
        et.length > 0 && eI.unshift((0, r.jsx)("div", {
            style: {
                height: q.N0,
                flex: "0 0 auto"
            }
        }, "buffer"));
        let {
            useReducedMotion: e
        } = c.A;
        (e && eg() || !e) && eI.unshift((0, r.jsx)(K.Ay, Z({
            compact: el
        }, eo), "has-more"))
    }
    if (et.hasMoreBefore && null == ec || eI.unshift((0, r.jsx)(g.A, {
            channel: U,
            showingBanner: eu
        }, "empty-message")), et.hasMoreAfter && eI.push((0, r.jsx)(K.Ay, Z({
            compact: el
        }, eo), "has-more-after")), !eu && ef && eg() && eI.push((0, r.jsx)(Y.A, {
            channel: U
        })), en > 0 && er && eg()) {
        let e, t, n = N.Ay.getOldestUnreadTimestamp(U.id),
            i = 0 !== n ? n : D.default.extractTimestamp(U.id),
            a = (0, w.ro)(new Date, new Date(i));
        if (N.Ay.isEstimated(U.id) ? (e = a ? Q.t.wvtbbG : Q.t.tHqbtg, t = Q.t.vaPWFe) : (e = a ? Q.t["BctFH/"] : Q.t["3wXb9P"], t = Q.t["4H8ldG"]), eb && (0, o.Kc)(U) && ej.includes(z.i.SUMMARIES)) {
            let n = N.Ay.ackMessageId(U.id),
                a = (0, C.L)(U.id, N.Ay.getOldestUnreadMessageId(U.id));
            if ((0, u.zV)(X.HAw.SUMMARIES_UNREAD_BAR_VIEWED, {
                    num_unread_summaries: a,
                    num_unread_messages: en,
                    last_ack_message_id: n,
                    summaries_enabled_by_user: eA,
                    summaries_enabled_for_channel: (0, o.pk)(U)
                }), (0, o.pk)(U)) {
                let n = eA ? Q.intl.format(t, {
                    count: en
                }) : Q.intl.format(e, {
                    count: en,
                    timestamp: i
                });
                if (eA) {
                    let e = a > 0 ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "currentColor",
                            children: Q.intl.format(t, {
                                count: en
                            })
                        }), (0, r.jsx)(m.A, {
                            style: {
                                paddingLeft: 8,
                                paddingRight: 8
                            },
                            height: 4,
                            width: 4
                        }), (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "currentColor",
                            children: Q.intl.format(Q.t.CBftDc, {
                                count: a
                            })
                        })]
                    }) : (0, r.jsx)(s.Text, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: n
                    });
                    l = (0, r.jsx)(F.OZ, {
                        scrollManager: ea,
                        content: e,
                        channel: U
                    })
                } else {
                    let e = (0, r.jsx)("div", {
                        style: {
                            display: "flex",
                            textTransform: "none",
                            alignItems: "center"
                        },
                        children: a > 0 ? (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "currentColor",
                                children: Q.intl.format(t, {
                                    count: en
                                })
                            }), (0, r.jsx)(m.A, {
                                style: {
                                    paddingLeft: 8,
                                    paddingRight: 8
                                },
                                height: 4,
                                width: 4
                            }), (0, r.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "currentColor",
                                children: Q.intl.format(Q.t.CBftDc, {
                                    count: a
                                })
                            })]
                        }) : (0, r.jsx)(s.Text, {
                            variant: "text-sm/medium",
                            color: "currentColor",
                            children: n
                        })
                    });
                    l = (0, r.jsx)(F.GN, {
                        content: e,
                        channelId: U.id
                    })
                }
            }
        } else ej.includes(z.i.NEW_MESSAGES) && (l = (0, r.jsx)(F.GN, {
            content: Q.intl.format(e, {
                count: en,
                timestamp: i
            }),
            channelId: U.id
        }))
    }
    if (null == l && (0, o.pk)(U) && eA && ej.includes(z.i.SUMMARIES) && (l = (0, r.jsx)(F.UK, {
            channel: U,
            scrollManager: ea
        })), et.error) p = (0, r.jsx)(F.Ez, {
        loading: et.loadingMore,
        onClick: () => {
            var e;
            return e = U.id, void a.A.fetchMessages({
                channelId: e,
                limit: X.EMb,
                truncate: !0
            })
        },
        className: eh
    });
    else if (et.hasMoreAfter && eg()) {
        let {
            jumpReturnTargetId: e
        } = et;
        p = et.loadingMore && et.jumpedToPresent ? (0, r.jsx)(F.Ab, {
            className: eh
        }) : null != e ? (0, r.jsx)(F.Ab, {
            type: F.ks.REPLY,
            onClick: () => {
                a.A.jumpToMessage({
                    channelId: U.id,
                    messageId: e,
                    flash: !0
                })
            },
            className: eh
        }) : (0, r.jsx)(F.Ab, {
            onClick: () => {
                let e;
                return a.A.jumpToPresent(U.id, X.EMb), e = T.A.getChannelId(), void(U.id === e && (0, y.iN)(U.id))
            },
            className: eh
        })
    }
    return {
        channelStreamMarkup: eI,
        newMessagesBar: l,
        jumpToPresentBar: p,
        forumPostActionBar: ev,
        safetyWarningBanner: ex
    }
}