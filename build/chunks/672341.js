/** Chunk was on 41727 **/
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
    p = n(454148),
    h = n(718468),
    f = n(816144),
    g = n(928764),
    m = n(640708),
    b = n(265869),
    A = n(715757),
    y = n(378570),
    _ = n(349435),
    O = n(452082),
    j = n(357179),
    v = n(74114),
    x = n(221059),
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
    M = n(375901),
    L = n(857069),
    k = n(675171),
    G = n(806621),
    U = n(636922),
    B = n(371741),
    V = n(66149),
    F = n(922529),
    H = n(652176),
    K = n(540385),
    W = n(613907),
    z = n(829444),
    Y = n(626360),
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
                content: (0, r.jsx)(h.e, {
                    channelId: n.id,
                    file: t
                })
            }
        })
    })
});

function et(e) {
    var t, n;
    let l, h, {
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
            jumpBarClassName: ep
        } = e,
        eh = P.default.getCurrentUser(),
        ef = () => ea.isInitialized() || et.ready,
        eg = (0, G.r)(U),
        em = et.length > 0 && (null == (n = et.first()) ? void 0 : n.isFirstMessageInForumPost(U)),
        eb = (0, o.cI)(U),
        eA = (0, i.bG)([E.A], () => E.A.shouldShowTopicsBar() && !ed),
        ey = (0, v.l)(U.id),
        e_ = (0, O.j)(U.id, J.Rx),
        eO = (0, d.E)(U.id),
        ej = (0, k.A)(),
        ev = function(e, t) {
            if (e.isDM() && null != t)
                if (t.type === _._j.STRANGER_DANGER) return (0, r.jsx)(x.e, {
                    channelId: e.id,
                    warningId: t.id,
                    senderId: e.getRecipientId()
                });
                else if (t.type === _._j.LIKELY_ATO) return (0, r.jsx)(p.L, {
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
        }(U, null != (t = null != ey ? ey : e_) ? t : eO),
        ex = U.isForumPost() && !em ? (0, r.jsx)(g.A, {
            postId: U.id
        }) : null,
        eE = (0, b.A)(U.id),
        eC = (0, A.W1)(U);
    (0, z.A)();
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
                }) : (0, r.jsx)(F.A, {
                    isUnread: i,
                    isBeforeGroup: null == e.content && $(ei[t + 1]),
                    id: i ? q.q4 : void 0,
                    children: e.content
                }, "divider-".concat(null != (n = null != (l = e.contentKey) ? l : e.unreadId) ? n : t))
            }
            if (e.type === X.TZK.FORUM_POST_ACTION_BAR) return (0, r.jsx)(g.A, {
                parentChannelId: U.parent_id,
                postId: U.id,
                isLastItem: t + 1 === ei.length,
                isFirstMessage: !0
            }, "forum-post-action-bar-".concat(U.id));
            if (e.type === X.TZK.MESSAGE_GROUP_BLOCKED || e.type === X.TZK.MESSAGE_GROUP_IGNORED || e.type === X.TZK.MESSAGE_GROUP_SPAMMER) {
                let t;
                return t = e.type === X.TZK.MESSAGE_GROUP_BLOCKED ? Q.t["+FcYM/"] : e.type === X.TZK.MESSAGE_GROUP_IGNORED ? Q.t["VFWjc+"] : Q.t.xfkfTK, (0, r.jsx)(V.A, {
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
                a = e.type === X.TZK.THREAD_STARTER_MESSAGE ? B.VO : B.Ay;
            return (0, r.jsx)(a, {
                compact: el && !s,
                channel: U,
                message: e.content,
                groupId: i,
                flashKey: e.flashKey,
                id: (0, M.j)(U.id, e.content.id),
                isLastItem: t >= ei.length - 1,
                renderContentOnly: eE || s
            }, e.content.id)
        });
    eI.push(...eN);
    let eT = ei[ei.length - 1];
    if (null != eh && es.forEach((e, t) => {
            let n = 0 === t && (0, L.l)(U, eT, new I.Ay({
                type: X.lAJ.DEFAULT,
                author: eh
            }));
            eI.push((0, r.jsx)(ee, {
                file: e,
                channel: U,
                user: eh,
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
        (e && ef() || !e) && eI.unshift((0, r.jsx)(K.Ay, Z({
            compact: el
        }, eo), "has-more"))
    }
    if (et.hasMoreBefore && null == ec || eI.unshift((0, r.jsx)(f.A, {
            channel: U,
            showingBanner: eu
        }, "empty-message")), et.hasMoreAfter && eI.push((0, r.jsx)(K.Ay, Z({
            compact: el
        }, eo), "has-more-after")), !eu && eg && ef() && eI.push((0, r.jsx)(W.A, {
            channel: U
        })), en > 0 && er && ef()) {
        let e, t, n = N.Ay.getOldestUnreadTimestamp(U.id),
            i = 0 !== n ? n : D.default.extractTimestamp(U.id),
            a = (0, w.ro)(new Date, new Date(i));
        if (N.Ay.isEstimated(U.id) ? (e = a ? Q.t.wvtbbG : Q.t.tHqbtg, t = Q.t.vaPWFe) : (e = a ? Q.t["BctFH/"] : Q.t["3wXb9P"], t = Q.t["4H8ldG"]), eb && (0, o.Kc)(U) && ej.includes(Y.i.SUMMARIES)) {
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
                    l = (0, r.jsx)(H.OZ, {
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
                    l = (0, r.jsx)(H.GN, {
                        content: e,
                        channelId: U.id
                    })
                }
            }
        } else ej.includes(Y.i.NEW_MESSAGES) && (l = (0, r.jsx)(H.GN, {
            content: Q.intl.format(e, {
                count: en,
                timestamp: i
            }),
            channelId: U.id
        }))
    }
    if (null == l && (0, o.pk)(U) && eA && ej.includes(Y.i.SUMMARIES) && (l = (0, r.jsx)(H.UK, {
            channel: U,
            scrollManager: ea
        })), et.error) h = (0, r.jsx)(H.Ez, {
        loading: et.loadingMore,
        onClick: () => {
            var e;
            return e = U.id, void a.A.fetchMessages({
                channelId: e,
                limit: X.EMb,
                truncate: !0
            })
        },
        className: ep
    });
    else if (et.hasMoreAfter && ef()) {
        let {
            jumpReturnTargetId: e
        } = et;
        h = et.loadingMore && et.jumpedToPresent ? (0, r.jsx)(H.Ab, {
            className: ep
        }) : null != e ? (0, r.jsx)(H.Ab, {
            type: H.ks.REPLY,
            onClick: () => {
                a.A.jumpToMessage({
                    channelId: U.id,
                    messageId: e,
                    flash: !0
                })
            },
            className: ep
        }) : (0, r.jsx)(H.Ab, {
            onClick: () => {
                let e;
                return a.A.jumpToPresent(U.id, X.EMb), e = T.A.getChannelId(), void(U.id === e && (0, y.iN)(U.id))
            },
            className: ep
        })
    }
    return {
        channelStreamMarkup: eI,
        newMessagesBar: l,
        jumpToPresentBar: h,
        forumPostActionBar: ex,
        safetyWarningBanner: ev
    }
}