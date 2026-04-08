/** chunk id: 371648 params = (module,exports,require) **/
n.d(t, {
    A: () => J
});
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(687498),
    o = n(837381),
    c = n(311907),
    d = n(397927),
    u = n(843472),
    h = n(432371),
    m = n(765548),
    A = n(775602),
    p = n(821720),
    g = n(429913),
    f = n(17447),
    _ = n(736339),
    E = n(354328),
    x = n(559149),
    C = n(164956),
    S = n(302031),
    T = n(513272),
    N = n(253932),
    I = n(617617),
    v = n(961350),
    y = n(72314),
    b = n(580745),
    j = n(834942),
    R = n(320501),
    M = n(576705),
    D = n(222823),
    O = n(399263),
    L = n(287809),
    P = n(234320),
    k = n(863439),
    w = n(504136),
    U = n(326337),
    G = n(540385),
    F = n(830178),
    B = n(722432),
    H = n(258024),
    V = n(672341),
    K = n(652215),
    W = n(985018),
    z = n(906324);
let q = (0, r.animated)(d.fKU),
    Y = l.memo(function(e) {
        var t;
        let n, s, r, {
                className: h,
                messageGroupSpacing: p,
                scrollerClassName: g,
                channel: f,
                messages: _,
                unreadCount: E,
                showNewMessagesBar: x,
                messageDisplayCompact: S,
                channelStream: T,
                uploads: N,
                hasUnreads: v,
                editingMessageId: b,
                fontSize: j,
                keyboardModeEnabled: R,
                filterAfterTimestamp: D,
                showingQuarantineBanner: O,
                hideSummaries: L = !1,
                jumpBarClassName: k,
                typingGradient: w
            } = e,
            [F, Y] = l.useState(y.A.isAtBottom(f.id) ?? !1),
            J = (0, U.I)(S, j),
            $ = S ? J : Math.round(.87 * J),
            Z = Math.max(1, Math.round($ / 30 * 8)),
            X = l.useMemo(() => (0, G.bW)({
                compact: S,
                messageGroups: $,
                groupRange: 4,
                attachments: Z,
                fontSize: j,
                groupSpacing: p
            }), [S, $, Z, j, p]),
            Q = (0, H.Ay)({
                messages: _,
                channel: f,
                compact: S,
                hasUnreads: v,
                focusId: b,
                placeholderHeight: X.totalHeight,
                canLoadMore: null == D,
                handleScrollToBottom: l.useCallback(() => Y(!0), [Y]),
                handleScrollFromBottom: l.useCallback(() => Y(!1), [Y]),
                additionalMessagePadding: 48
            }),
            ee = (0, B.A)({
                scrollerRef: Q.ref,
                isEditing: null != b,
                keyboardModeEnabled: R,
                hasMoreAfter: _.hasMoreAfter
            }),
            et = (0, c.bG)([C.A], () => M.A.can(K.xBc.READ_MESSAGE_HISTORY, f) ? null : C.A.getViewingRolesTimestamp(f.getGuildId())),
            {
                channelStreamMarkup: en,
                newMessagesBar: ei,
                jumpToPresentBar: el,
                forumPostActionBar: es,
                safetyWarningBanner: ea
            } = (0, V.A)({
                channel: f,
                messages: _,
                unreadCount: E,
                showNewMessagesBar: x,
                messageDisplayCompact: S,
                channelStream: T,
                uploads: N,
                loadMore: Q.loadMore,
                scrollManager: Q,
                specs: X,
                filterAfterTimestamp: D ?? et,
                showingQuarantineBanner: O,
                hideSummaries: L,
                jumpToPresent: () => {
                    _.hasPresent() ? Q.ref.current?.scrollToBottom({
                        animate: !A.A.useReducedMotion
                    }) : u.A.jumpToPresent(f.id, J)
                },
                jumpBarClassName: k
            });
        t = Q.ref, n = l.useCallback(() => t.current?.scrollToBottom(), [t]), s = l.useCallback(() => t.current?.scrollPageUp({
            animate: !A.A.useReducedMotion
        }), [t]), r = l.useCallback(() => t.current?.scrollPageDown({
            animate: !A.A.useReducedMotion
        }), [t]), (0, P.Vo)({
            event: K.jej.SCROLLTO_PRESENT,
            handler: n
        }), (0, P.Vo)({
            event: K.jej.SCROLL_PAGE_UP,
            handler: s
        }), (0, P.Vo)({
            event: K.jej.SCROLL_PAGE_DOWN,
            handler: r
        });
        let er = (0, d.R7z)(),
            {
                ref: eo,
                ...ec
            } = (0, o.LT)(ee),
            ed = (0, m.A)(e => {
                Q.ref.current = e, eo.current = e?.getScrollerNode() ?? null
            }),
            eu = (0, c.bG)([I.A], () => {
                let e = I.A.settings.appearance?.clientThemeSettings;
                return e?.backgroundGradientPresetId != null || e?.customUserThemeSettings != null
            }),
            eh = l.useMemo(() => w ? F ? z.gA : z.ru : z.Zd, [w, F]),
            em = l.useMemo(() => w ? F ? z.cz : z.XF : z.U6, [w, F]);
        return (0, i.jsxs)(o.hD, {
            navigator: ee,
            children: [null != ea && ea, (0, i.jsxs)("div", {
                className: a()(z.Og, h, `group-spacing-${p}`),
                children: [null == ea && ei, (0, i.jsxs)(q, {
                    ref: ed,
                    customTheme: !0,
                    className: a()(g, z.XG, eu ? em : void 0),
                    contentClassName: z.gT,
                    onResize: Q.handleResize,
                    onScroll: Q.handleScroll,
                    onMouseDown: Q.handleMouseDown,
                    onMouseUp: Q.handleMouseUp,
                    ...er,
                    tabIndex: -1,
                    role: "group",
                    children: [es, (0, i.jsxs)("ol", {
                        className: a()(z.bv, {
                            [z.FD]: f.isModeratorReportChannel()
                        }),
                        "aria-label": W.intl.formatToPlainString(W.t.XarRiL, {
                            channelName: f.name
                        }),
                        ...ec,
                        children: [(0, i.jsx)("span", {
                            className: z.$4,
                            id: "messagesNavigationDescription",
                            "aria-hidden": !0,
                            children: W.intl.string(W.t["Spb3s/"])
                        }), en, (0, i.jsx)("div", {
                            className: a()({
                                [z.lB]: !O,
                                [z.Ie]: 0 === _.length && !_.loadingMore,
                                [z.Fb]: 1 === _.length && !_.loadingMore && f.isForumPost() && _.first()?.isFirstMessageInForumPost(f)
                            })
                        })]
                    })]
                }), eu ? null : (0, i.jsx)("div", {
                    className: eh
                }), el]
            })]
        })
    }, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden),
    J = l.memo(function(e) {
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
            canChat: C
        } = function(e) {
            let t = e.getGuildId(),
                n = (0, c.bG)([j.A], () => null == t || j.A.canChatInGuild(t), [t]),
                {
                    canManageMessages: i,
                    permissionVersion: l
                } = (0, c.cf)([M.A], () => ({
                    canManageMessages: M.A.can(K.xBc.MANAGE_MESSAGES, e),
                    permissionVersion: null != t ? M.A.getGuildVersion(t) : null
                }), [e, t]);
            return {
                canChat: n,
                permissionVersion: l,
                canManageMessages: i
            }
        }(t), {
            messageGroupSpacing: I,
            fontSize: y,
            messageDisplayCompact: P,
            renderSpoilers: U,
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
            messages: B,
            channelStream: H,
            oldestUnreadMessageId: V,
            editingMessageId: W
        } = function(e) {
            var t;
            let n, i = (0, c.bG)([R.A], () => R.A.getMessages(e.id), [e.id]),
                s = (0, c.bG)([D.Ay], () => D.Ay.getOldestUnreadMessageId(e.id) ?? null, [e.id]),
                {
                    enabled: a
                } = x.A.useExperiment({
                    location: "41de6d_1"
                }, {
                    autoTrackExposure: !1
                }),
                r = L.default.getUser(v.default.getId())?.hasFlag(K.nhx.SPAMMER) ?? !1,
                o = (0, h.cI)(e),
                d = (0, E.A)("use_topic_dividers_in_chat"),
                u = (0, c.yK)([T.A], () => o && d ? T.A.summaries(e.id) ?? [] : [], [o, e.id, d]),
                m = (0, c.bG)([T.A], () => o ? T.A.selectedSummary(e.id) : null, [o, e.id]),
                A = (0, f.f)("message_stream"),
                C = (0, c.bG)([_.A], () => A ? _.A.getSelectedConversation(e.id) : null, [A, e.id]),
                S = (t = i, n = l.useMemo(() => {
                    let e = new Set;
                    return t.forEach(t => {
                        null != t.applicationId && null == t.application && e.add(t.applicationId)
                    }), Array.from(e)
                }, [t]), (0, g.A)(n));
            (0, p.A)(i, e);
            let N = l.useMemo(() => (0, w.A)({
                channel: e,
                messages: i,
                oldestUnreadMessageId: s,
                treatSpam: a && !r,
                summaries: u,
                selectedSummary: m,
                selectedConversation: C
            }), [i, e, s, a, u, m, C, S, r]);
            return {
                messages: i,
                channelStream: N,
                oldestUnreadMessageId: s,
                editingMessageId: (0, c.bG)([b.A], () => b.A.getEditingMessage(e.id)?.id)
            }
        }(t);
        return (0, i.jsx)(S.Bs.Provider, {
            value: (0, k.A)(U, u),
            children: (0, i.jsx)(F.t, {
                children: (0, i.jsx)(Y, {
                    ...d,
                    messageGroupSpacing: I,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !r && (a || P),
                    messages: B,
                    channelStream: H,
                    permissionVersion: m,
                    uploads: (0, c.bG)([O.A], () => O.A.getFiles(t.id), [t]),
                    unreadCount: (0, c.bG)([D.Ay], () => D.Ay.getUnreadCount(t.id), [t]),
                    hasUnreads: null != V,
                    canChat: C,
                    editingMessageId: W,
                    fontSize: y,
                    keyboardModeEnabled: G,
                    showingQuarantineBanner: n,
                    hideSummaries: s,
                    typingGradient: o
                })
            })
        })
    })