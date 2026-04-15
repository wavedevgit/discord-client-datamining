/** chunk id: 480680 params = (module,exports,require) **/
n.d(t, {
    A: () => k
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(969528),
    o = n(311907),
    d = n(827734);
n(990078);
var c = n(397927),
    u = n(73153),
    h = n(334738),
    A = n(964486);
n(793574), n(688810);
var _ = n(952790),
    m = n(85109),
    p = n(734057),
    g = n(71393),
    f = n(320501),
    E = n(222823),
    x = n(661191),
    I = n(851109),
    C = n(706341),
    N = n(932883),
    T = n(599486),
    S = n(320697),
    b = n(394953),
    y = n(628325),
    v = n(524628),
    R = n(81435),
    j = n(313452),
    O = n(849077),
    L = n(652215),
    M = n(985018),
    D = n(674823);
let U = [],
    G = {
        controller: new r.Controller({
            value: 1,
            immediate: !0
        }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: O.Sp,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0
    };

function P(e) {
    let {
        includePanelSpacing: t
    } = e, n = (0, N.op)(), {
        selectedFilter: s
    } = (0, T.A)(), r = (0, o.bG)([S.A], () => S.A.oldestDisplayedMessageId), d = (0, o.yK)([S.A], () => S.A.getInboxMessages()), y = (0, o.yK)([E.Ay, g.A, S.A], () => d.filter(e => !(0, b.EJ)({
        messageId: e.id,
        channelId: e.channelId,
        guildId: e.guildId,
        ReadStateStore_: E.Ay,
        GuildStore_: g.A
    }) && !(0, b.zo)(e, S.A.selectedItemInfo))), v = (0, o.yK)([E.Ay, g.A, S.A], () => d.filter(e => (0, b.EJ)({
        messageId: e.id,
        channelId: e.channelId,
        guildId: e.guildId,
        ReadStateStore_: E.Ay,
        GuildStore_: g.A
    }) || (0, b.zo)(e, S.A.selectedItemInfo))), R = l.useCallback(e => {
        s !== O.Io.BOOKMARKS && C.A.loadMoreInbox({
            viewId: n,
            loadingTrigger: e
        })
    }, [s, n]), {
        hasLoadedEver: M,
        canLoadMore: P
    } = (0, o.cf)([S.A], () => ({
        hasLoadedEver: S.A.hasLoadedEver,
        canLoadMore: S.A.canLoadMore({})
    }));
    l.useEffect(() => {
            P && !M && R(O.VA.ON_OPEN)
        }, [P, M, R]),
        function(e) {
            let {
                unreadChannelIds: t
            } = (0, b.U4)();
            l.useEffect(() => {
                null != e && t.forEach(e => {
                    let t = f.A.getMessages(e),
                        n = t.last()?.id,
                        i = E.Ay.ackMessageId(e),
                        l = t.hasPresent() && t.ready && !t.cached;
                    null != n && null != i && l && x.default.compare(i, n) >= 0 && h.ack(e, {
                        section: L.JJy.NOTIFICATIONS_INBOX,
                        object: L.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                        objectType: L.AnalyticsObjectTypes.ACK_AUTOMATIC
                    }, !0)
                })
            }, [e, t])
        }(M ? v : null);
    let k = (0, o.yK)([m.A], () => m.A.getSavedMessages()),
        F = l.useMemo(() => k.flatMap(e => {
            let {
                message: t
            } = e;
            return null == t ? U : [{
                id: t.id,
                channelId: t.channel_id,
                guildId: p.A.getBasicChannel(t.channel_id)?.guild_id,
                kind: O.yL.BOOKMARK,
                message: t
            }]
        }), [k]),
        W = w(y, s, r),
        K = w(v, s, null);
    (0, A.Ay)(() => {
        u.h.dispatch({
            type: "NOTIFICATIONS_INBOX_OPEN"
        });
        let e = (0, I.GE)({
                location: "NotificationsInboxSidebar"
            }).notificationCenterVariant,
            t = S.A.getDevOverrides().navOnClick ?? !0;
        if (e !== I.U5.SIDEBAR || !1 === t) return;
        let {
            message: i,
            isUnread: l
        } = function(e, t) {
            let n = e[e.length - 1]?.message,
                i = t[t.length - 1]?.message,
                l = i ?? n;
            if (null != l) return {
                message: l,
                isUnread: null != i
            };
            let s = S.A.getNotifyingChannelIds();
            if (null == s || 0 === s.length) return {
                message: null,
                isUnread: !1
            };
            let a = s[0],
                r = E.Ay.getTrackedAckMessageId(a);
            return null == r ? {
                message: null,
                isUnread: !1
            } : {
                message: {
                    id: x.default.atNextMillisecond(r),
                    channel_id: a
                },
                isUnread: E.Ay.hasUnread(a) ?? !1
            }
        }(W, K);
        null != i && C.A.inboxItemClick({
            message: i,
            channel: {
                id: i.channel_id
            },
            isUnread: l,
            isSidebar: !0,
            track: !1,
            autoTriggeredOnInboxOpen: !0,
            viewId: n
        })
    }), (0, A.l0)(() => {
        u.h.dispatch({
            type: "NOTIFICATIONS_INBOX_CLOSE"
        })
    });
    let {
        filterStyle: Y
    } = (0, I.X8)({
        location: "NotificationsInboxSidebar"
    }), z = Y === I.yF.DROPDOWN && s !== O.Io.ALL, X = (0, O.Yw)(s);
    return (0, i.jsx)("nav", {
        className: a()(D.kL, {
            [D.Yu]: t
        }),
        children: (0, i.jsxs)(c.Fmo, {
            forceLevel: 1,
            component: (0, i.jsx)(_.Ay, {
                hasSubheader: !0,
                guild: X,
                ...G
            }),
            children: [s === O.Io.ALL && (0, i.jsx)(H, {
                hideBanner: !M || s !== O.Io.ALL
            }), z && (0, i.jsx)(c.hKd, {
                size: 8
            }), (0, i.jsx)(j.A, {
                className: D.cl,
                renderMessageGroup: V,
                messages: s === O.Io.BOOKMARKS ? F : W,
                unreadMessages: s === O.Io.BOOKMARKS ? [] : K,
                listName: "notifications-inbox",
                renderLoadingState: B,
                ignoreGrouping: s === O.Io.BOOKMARKS,
                loadMore: R
            })]
        })
    })
}

function k(e) {
    return (0, i.jsx)(N.GM, {
        children: (0, i.jsx)(P, {
            ...e
        })
    })
}

function w(e, t, n) {
    return l.useMemo(() => 0 === e.length || t === O.Io.BOOKMARKS ? U : e.filter(e => {
        let {
            id: i
        } = e;
        return !(x.default.age(i) > O.V$ || null != n && 0 >= x.default.compare(i, n)) && t === O.Io.ALL
    }), [e, t, n])
}

function B() {
    return (0, i.jsx)(v.A, {})
}

function V(e, t) {
    return (0, i.jsx)(R.A, {
        message: e[0],
        groupedMessages: e.slice(1),
        isUnread: t
    }, e[0].id)
}

function H(e) {
    let {
        hideBanner: t
    } = e, n = (0, y.S)(e => e.shouldHide());
    return (0, i.jsx)("div", {
        className: a()(D.dl, {
            [D.jD]: n || t
        }),
        children: (0, i.jsxs)("div", {
            className: D.XD,
            children: [(0, i.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-feedback-positive",
                className: D.vi,
                children: M.intl.string(M.t["6XMM+D"])
            }), (0, i.jsx)(c.iA$, {
                size: "sm",
                color: d.A.colors.TEXT_FEEDBACK_POSITIVE.css
            })]
        })
    })
}