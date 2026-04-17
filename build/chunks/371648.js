/** chunk id: 371648 params = (module,exports,require) **/
n.d(t, {
    A: () => $
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(825638),
    o = n(837381),
    c = n(311907),
    d = n(397927),
    u = n(843472),
    h = n(432371),
    m = n(765548),
    A = n(775602),
    g = n(821720),
    _ = n(429913),
    p = n(47167),
    f = n(17447),
    E = n(736339),
    C = n(354328),
    x = n(559149),
    S = n(164956),
    I = n(302031),
    T = n(513272),
    N = n(253932),
    v = n(617617),
    y = n(961350),
    b = n(72314),
    j = n(580745),
    R = n(834942),
    M = n(320501),
    L = n(576705),
    D = n(222823),
    O = n(399263),
    P = n(287809),
    w = n(234320),
    U = n(863439),
    k = n(504136),
    G = n(326337),
    F = n(540385),
    H = n(830178),
    B = n(722432),
    V = n(258024),
    W = n(672341),
    K = n(652215),
    z = n(985018),
    Y = n(408899);
let J = (0, r.animated)(d.fKU),
    q = l.memo(function(e) {
        var t;
        let n, s, r, {
                className: h,
                messageGroupSpacing: g,
                scrollerClassName: _,
                channel: f,
                messages: E,
                unreadCount: C,
                showNewMessagesBar: x,
                messageDisplayCompact: I,
                channelStream: T,
                uploads: N,
                hasUnreads: y,
                editingMessageId: j,
                fontSize: R,
                keyboardModeEnabled: M,
                filterAfterTimestamp: D,
                showingQuarantineBanner: O,
                hideSummaries: P = !1,
                jumpBarClassName: U,
                typingGradient: k
            } = e,
            [H, q] = l.useState(b.A.isAtBottom(f.id) ?? !1),
            $ = (0, p.Ay)(f),
            Z = (0, G.I)(I, R),
            X = I ? Z : Math.round(.87 * Z),
            Q = Math.max(1, Math.round(X / 30 * 8)),
            ee = l.useMemo(() => (0, F.bW)({
                compact: I,
                messageGroups: X,
                groupRange: 4,
                attachments: Q,
                fontSize: R,
                groupSpacing: g
            }), [I, X, Q, R, g]),
            et = (0, V.Ay)({
                messages: E,
                channel: f,
                compact: I,
                hasUnreads: y,
                focusId: j,
                placeholderHeight: ee.totalHeight,
                canLoadMore: null == D,
                handleScrollToBottom: l.useCallback(() => q(!0), [q]),
                handleScrollFromBottom: l.useCallback(() => q(!1), [q]),
                additionalMessagePadding: 48
            }),
            en = (0, B.A)({
                scrollerRef: et.ref,
                isEditing: null != j,
                keyboardModeEnabled: M,
                hasMoreAfter: E.hasMoreAfter
            }),
            ei = (0, c.bG)([S.A], () => L.A.can(K.xBc.READ_MESSAGE_HISTORY, f) ? null : S.A.getViewingRolesTimestamp(f.getGuildId())),
            {
                channelStreamMarkup: el,
                newMessagesBar: es,
                jumpToPresentBar: ea,
                forumPostActionBar: er,
                safetyWarningBanner: eo
            } = (0, W.A)({
                channel: f,
                messages: E,
                unreadCount: C,
                showNewMessagesBar: x,
                messageDisplayCompact: I,
                channelStream: T,
                uploads: N,
                loadMore: et.loadMore,
                scrollManager: et,
                specs: ee,
                filterAfterTimestamp: D ?? ei,
                showingQuarantineBanner: O,
                hideSummaries: P,
                jumpToPresent: () => {
                    E.hasPresent() ? et.ref.current?.scrollToBottom({
                        animate: !A.A.useReducedMotion
                    }) : u.A.jumpToPresent(f.id, Z)
                },
                jumpBarClassName: U
            });
        t = et.ref, n = l.useCallback(() => t.current?.scrollToBottom(), [t]), s = l.useCallback(() => t.current?.scrollPageUp({
            animate: !A.A.useReducedMotion
        }), [t]), r = l.useCallback(() => t.current?.scrollPageDown({
            animate: !A.A.useReducedMotion
        }), [t]), (0, w.Vo)({
            event: K.jej.SCROLLTO_PRESENT,
            handler: n
        }), (0, w.Vo)({
            event: K.jej.SCROLL_PAGE_UP,
            handler: s
        }), (0, w.Vo)({
            event: K.jej.SCROLL_PAGE_DOWN,
            handler: r
        });
        let ec = (0, d.R7z)(),
            {
                ref: ed,
                ...eu
            } = (0, o.LT)(en),
            eh = (0, m.A)(e => {
                et.ref.current = e, ed.current = e?.getScrollerNode() ?? null
            }),
            em = (0, c.bG)([v.A], () => {
                let e = v.A.settings.appearance?.clientThemeSettings;
                return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null
            }),
            eA = l.useMemo(() => k ? H ? Y.gA : Y.ru : Y.Zd, [k, H]),
            eg = l.useMemo(() => k ? H ? Y.cz : Y.XF : Y.U6, [k, H]);
        return (0, i.jsxs)(o.hD, {
            navigator: en,
            children: [null != eo && eo, (0, i.jsxs)("div", {
                className: a()(Y.Og, h, `group-spacing-${g}`),
                children: [null == eo && es, (0, i.jsxs)(J, {
                    ref: eh,
                    customTheme: !0,
                    className: a()(_, Y.XG, em ? eg : void 0),
                    contentClassName: Y.gT,
                    onResize: et.handleResize,
                    onScroll: et.handleScroll,
                    onMouseDown: et.handleMouseDown,
                    onMouseUp: et.handleMouseUp,
                    ...ec,
                    tabIndex: -1,
                    role: "group",
                    children: [er, (0, i.jsxs)("ol", {
                        className: a()(Y.bv, {
                            [Y.FD]: f.isModeratorReportChannel()
                        }),
                        "aria-label": z.intl.formatToPlainString(z.t.XarRiL, {
                            channelName: $ ?? ""
                        }),
                        ...eu,
                        children: [(0, i.jsx)("span", {
                            className: Y.$4,
                            id: "messagesNavigationDescription",
                            "aria-hidden": !0,
                            children: z.intl.string(z.t["Spb3s/"])
                        }), el, (0, i.jsx)("div", {
                            className: a()({
                                [Y.lB]: !O,
                                [Y.Ie]: 0 === E.length && !E.loadingMore,
                                [Y.Fb]: 1 === E.length && !E.loadingMore && f.isForumPost() && E.first()?.isFirstMessageInForumPost(f)
                            })
                        })]
                    })]
                }), em ? null : (0, i.jsx)("div", {
                    className: eA
                }), ea]
            })]
        })
    }, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden),
    $ = l.memo(function(e) {
        let {
            channel: t,
            showingQuarantineBanner: n,
            hideSummaries: s = !1,
            forceCompact: a = !1,
            forceCozy: r = !1,
            typingGradient: o = !1,
            ...d
        } = e, {
            canManageMessages: u,
            permissionVersion: m,
            canChat: p
        } = function(e) {
            let t = e.getGuildId(),
                n = (0, c.bG)([R.A], () => null == t || R.A.canChatInGuild(t), [t]),
                {
                    canManageMessages: i,
                    permissionVersion: l
                } = (0, c.cf)([L.A], () => ({
                    canManageMessages: L.A.can(K.xBc.MANAGE_MESSAGES, e),
                    permissionVersion: null != t ? L.A.getGuildVersion(t) : null
                }), [e, t]);
            return {
                canChat: n,
                permissionVersion: l,
                canManageMessages: i
            }
        }(t), {
            messageGroupSpacing: S,
            fontSize: v,
            messageDisplayCompact: b,
            renderSpoilers: w,
            keyboardModeEnabled: G
        } = function() {
            let e = N.hH.useSetting(),
                t = N.gs.useSetting(),
                {
                    messageGroupSpacing: n,
                    fontSize: i,
                    keyboardModeEnabled: l
                } = (0, c.cf)([A.A], () => {
                    let {
                        messageGroupSpacing: e,
                        fontSize: t,
                        keyboardModeEnabled: n
                    } = A.A;
                    return {
                        messageGroupSpacing: e,
                        fontSize: t,
                        keyboardModeEnabled: n
                    }
                });
            return {
                messageGroupSpacing: n,
                messageDisplayCompact: e,
                renderSpoilers: t,
                fontSize: i,
                keyboardModeEnabled: l
            }
        }(), {
            messages: F,
            channelStream: B,
            oldestUnreadMessageId: V,
            editingMessageId: W
        } = function(e) {
            var t;
            let n, i = (0, c.bG)([M.A], () => M.A.getMessages(e.id), [e.id]),
                s = (0, c.bG)([D.Ay], () => D.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                {
                    enabled: a
                } = x.A.useExperiment({
                    location: "41de6d_1"
                }, {
                    autoTrackExposure: !1
                }),
                r = P.default.getUser(y.default.getId())?.hasFlag(K.nhx.SPAMMER) ?? !1,
                o = (0, h.cI)(e),
                d = (0, C.A)("use_topic_dividers_in_chat"),
                u = (0, c.yK)([T.A], () => o && d ? T.A.summaries(e.id) ?? [] : [], [o, e.id, d]),
                m = (0, c.bG)([T.A], () => o ? T.A.selectedSummary(e.id) : null, [o, e.id]),
                A = (0, f.f)("message_stream"),
                p = (0, c.bG)([E.A], () => A ? E.A.getSelectedConversation(e.id) : null, [A, e.id]),
                S = (t = i, n = l.useMemo(() => {
                    let e = new Set;
                    return t.forEach(t => {
                        null != t.applicationId && null == t.application && e.add(t.applicationId)
                    }), Array.from(e)
                }, [t]), (0, _.A)(n));
            (0, g.A)(i, e);
            let I = l.useMemo(() => (0, k.A)({
                channel: e,
                messages: i,
                oldestUnreadMessageId: s,
                treatSpam: a && !r,
                summaries: u,
                selectedSummary: m,
                selectedConversation: p
            }), [i, e, s, a, u, m, p, S, r]);
            return {
                messages: i,
                channelStream: I,
                oldestUnreadMessageId: s,
                editingMessageId: (0, c.bG)([j.A], () => j.A.getEditingMessage(e.id)?.id)
            }
        }(t);
        return (0, i.jsx)(I.Bs.Provider, {
            value: (0, U.A)(w, u),
            children: (0, i.jsx)(H.t, {
                children: (0, i.jsx)(q, {
                    ...d,
                    messageGroupSpacing: S,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !r && (a || b),
                    messages: F,
                    channelStream: B,
                    permissionVersion: m,
                    uploads: (0, c.bG)([O.A], () => O.A.getFiles(t.id), [t]),
                    unreadCount: (0, c.bG)([D.Ay], () => D.Ay.getUnreadCount(t.id), [t]),
                    hasUnreads: null != V,
                    canChat: p,
                    editingMessageId: W,
                    fontSize: v,
                    keyboardModeEnabled: G,
                    showingQuarantineBanner: n,
                    hideSummaries: s,
                    typingGradient: o
                })
            })
        })
    })