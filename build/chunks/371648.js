/** chunk id: 371648 params = (module,exports,require) **/
n.d(t, {
    A: () => $
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(445887),
    o = n(837381),
    c = n(311907),
    d = n(397927),
    u = n(843472),
    h = n(432371),
    m = n(765548),
    A = n(775602),
    g = n(821720),
    p = n(429913),
    _ = n(47167),
    f = n(17447),
    E = n(736339),
    C = n(354328),
    x = n(559149),
    S = n(164956),
    I = n(302031),
    T = n(513272),
    v = n(253932),
    N = n(617617),
    y = n(961350),
    b = n(72314),
    j = n(580745),
    R = n(834942),
    M = n(320501),
    L = n(576705),
    O = n(222823),
    D = n(399263),
    P = n(287809),
    k = n(234320),
    w = n(863439),
    U = n(504136),
    G = n(326337),
    F = n(540385),
    H = n(830178),
    B = n(722432),
    V = n(258024),
    W = n(672341),
    K = n(652215),
    z = n(985018),
    Y = n(317651);
let J = (0, r.animated)(d.fKU),
    q = l.memo(function(e) {
        var t;
        let n, a, r, {
                className: h,
                messageGroupSpacing: g,
                scrollerClassName: p,
                channel: f,
                messages: E,
                unreadCount: C,
                showNewMessagesBar: x,
                messageDisplayCompact: I,
                channelStream: T,
                uploads: v,
                hasUnreads: y,
                editingMessageId: j,
                fontSize: R,
                keyboardModeEnabled: M,
                filterAfterTimestamp: O,
                showingQuarantineBanner: D,
                hideSummaries: P = !1,
                jumpBarClassName: w,
                typingGradient: U
            } = e,
            [H, q] = l.useState(b.A.isAtBottom(f.id) ?? !1),
            $ = (0, _.Ay)(f),
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
                canLoadMore: null == O,
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
                newMessagesBar: ea,
                jumpToPresentBar: es,
                forumPostActionBar: er,
                safetyWarningBanner: eo
            } = (0, W.A)({
                channel: f,
                messages: E,
                unreadCount: C,
                showNewMessagesBar: x,
                messageDisplayCompact: I,
                channelStream: T,
                uploads: v,
                loadMore: et.loadMore,
                scrollManager: et,
                specs: ee,
                filterAfterTimestamp: O ?? ei,
                showingQuarantineBanner: D,
                hideSummaries: P,
                jumpToPresent: () => {
                    E.hasPresent() ? et.ref.current?.scrollToBottom({
                        animate: !A.A.useReducedMotion
                    }) : u.A.jumpToPresent(f.id, Z)
                },
                jumpBarClassName: w
            });
        t = et.ref, n = l.useCallback(() => t.current?.scrollToBottom(), [t]), a = l.useCallback(() => t.current?.scrollPageUp({
            animate: !A.A.useReducedMotion
        }), [t]), r = l.useCallback(() => t.current?.scrollPageDown({
            animate: !A.A.useReducedMotion
        }), [t]), (0, k.Vo)({
            event: K.jej.SCROLLTO_PRESENT,
            handler: n
        }), (0, k.Vo)({
            event: K.jej.SCROLL_PAGE_UP,
            handler: a
        }), (0, k.Vo)({
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
            em = (0, c.bG)([N.A], () => {
                let e = N.A.settings.appearance?.clientThemeSettings;
                return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null
            }),
            eA = l.useMemo(() => U ? H ? Y.gA : Y.ru : Y.Zd, [U, H]),
            eg = l.useMemo(() => U ? H ? Y.cz : Y.XF : Y.U6, [U, H]);
        return (0, i.jsxs)(o.hD, {
            navigator: en,
            children: [null != eo && eo, (0, i.jsxs)("div", {
                className: s()(Y.Og, h, `group-spacing-${g}`),
                children: [null == eo && ea, (0, i.jsxs)(J, {
                    ref: eh,
                    customTheme: !0,
                    className: s()(p, Y.XG, em ? eg : void 0),
                    contentClassName: Y.gT,
                    onResize: et.handleResize,
                    onScroll: et.handleScroll,
                    onMouseDown: et.handleMouseDown,
                    onMouseUp: et.handleMouseUp,
                    ...ec,
                    tabIndex: -1,
                    role: "group",
                    children: [er, (0, i.jsxs)("ol", {
                        className: s()(Y.bv, {
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
                            className: s()({
                                [Y.lB]: !D,
                                [Y.Ie]: 0 === E.length && !E.loadingMore,
                                [Y.Fb]: 1 === E.length && !E.loadingMore && f.isForumPost() && E.first()?.isFirstMessageInForumPost(f)
                            })
                        })]
                    })]
                }), em ? null : (0, i.jsx)("div", {
                    className: eA
                }), es]
            })]
        })
    }, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden),
    $ = l.memo(function(e) {
        let {
            channel: t,
            showingQuarantineBanner: n,
            hideSummaries: a = !1,
            forceCompact: s = !1,
            forceCozy: r = !1,
            typingGradient: o = !1,
            ...d
        } = e, {
            canManageMessages: u,
            permissionVersion: m,
            canChat: _
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
            fontSize: N,
            messageDisplayCompact: b,
            renderSpoilers: k,
            keyboardModeEnabled: G
        } = function() {
            let e = v.hH.useSetting(),
                t = v.gs.useSetting(),
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
                a = (0, c.bG)([O.Ay], () => O.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                {
                    enabled: s
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
                _ = (0, c.bG)([E.A], () => A ? E.A.getSelectedConversation(e.id) : null, [A, e.id]),
                S = (t = i, n = l.useMemo(() => {
                    let e = new Set;
                    return t.forEach(t => {
                        null != t.applicationId && null == t.application && e.add(t.applicationId)
                    }), Array.from(e)
                }, [t]), (0, p.A)(n));
            (0, g.A)(i, e);
            let I = l.useMemo(() => (0, U.A)({
                channel: e,
                messages: i,
                oldestUnreadMessageId: a,
                treatSpam: s && !r,
                summaries: u,
                selectedSummary: m,
                selectedConversation: _
            }), [i, e, a, s, u, m, _, S, r]);
            return {
                messages: i,
                channelStream: I,
                oldestUnreadMessageId: a,
                editingMessageId: (0, c.bG)([j.A], () => j.A.getEditingMessage(e.id)?.id)
            }
        }(t);
        return (0, i.jsx)(I.Bs.Provider, {
            value: (0, w.A)(k, u),
            children: (0, i.jsx)(H.t, {
                children: (0, i.jsx)(q, {
                    ...d,
                    messageGroupSpacing: S,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !r && (s || b),
                    messages: F,
                    channelStream: B,
                    permissionVersion: m,
                    uploads: (0, c.bG)([D.A], () => D.A.getFiles(t.id), [t]),
                    unreadCount: (0, c.bG)([O.Ay], () => O.Ay.getUnreadCount(t.id), [t]),
                    hasUnreads: null != V,
                    canChat: _,
                    editingMessageId: W,
                    fontSize: N,
                    keyboardModeEnabled: G,
                    showingQuarantineBanner: n,
                    hideSummaries: a,
                    typingGradient: o
                })
            })
        })
    })