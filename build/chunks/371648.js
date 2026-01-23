/** Chunk was on 97492 **/
/** chunk id: 371648, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => X
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(108531),
    o = n(837381),
    c = n(311907),
    u = n(397927),
    d = n(843472),
    p = n(432371),
    h = n(765548),
    f = n(775602),
    g = n(821720),
    m = n(429913),
    b = n(354328),
    A = n(559149),
    y = n(164956),
    _ = n(302031),
    O = n(513272),
    j = n(253932),
    v = n(617617),
    x = n(961350),
    E = n(72314),
    C = n(580745),
    S = n(834942),
    I = n(320501),
    N = n(576705),
    T = n(222823),
    P = n(399263),
    w = n(287809),
    R = n(234320),
    D = n(863439),
    M = n(504136),
    L = n(540385),
    k = n(830178),
    G = n(722432),
    U = n(258024),
    B = n(672341),
    V = n(652215),
    F = n(985018),
    H = n(478186);

function K(e) {
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

function W(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function z(e, t) {
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
}
let Y = (0, a.animated)(u.fKU),
    q = l.memo(function(e) {
        var t, n, i;
        let a, p, g, {
                className: m,
                messageGroupSpacing: b,
                scrollerClassName: A,
                channel: _,
                messages: O,
                unreadCount: j,
                showNewMessagesBar: x,
                messageDisplayCompact: C,
                channelStream: S,
                uploads: I,
                hasUnreads: T,
                editingMessageId: P,
                fontSize: w,
                keyboardModeEnabled: D,
                filterAfterTimestamp: M,
                showingQuarantineBanner: k,
                hideSummaries: q = !1,
                jumpBarClassName: X,
                typingGradient: J
            } = e,
            [Q, Z] = l.useState(null != (t = E.A.isAtBottom(_.id)) && t),
            $ = l.useMemo(() => C ? (0, L.bW)({
                compact: !0,
                messageGroups: 30,
                groupRange: 4,
                attachments: 8,
                fontSize: w,
                groupSpacing: b
            }) : (0, L.bW)({
                compact: !1,
                messageGroups: 26,
                groupRange: 4,
                attachments: 8,
                fontSize: w,
                groupSpacing: b
            }), [C, w, b]),
            ee = (0, U.Ay)({
                messages: O,
                channel: _,
                compact: C,
                hasUnreads: T,
                focusId: P,
                placeholderHeight: $.totalHeight,
                canLoadMore: null == M,
                handleScrollToBottom: l.useCallback(() => Z(!0), [Z]),
                handleScrollFromBottom: l.useCallback(() => Z(!1), [Z]),
                additionalMessagePadding: 48
            }),
            et = (0, G.A)({
                scrollerRef: ee.ref,
                isEditing: null != P,
                keyboardModeEnabled: D,
                hasMoreAfter: O.hasMoreAfter
            }),
            en = (0, c.bG)([y.A], () => N.A.can(V.xBc.READ_MESSAGE_HISTORY, _) ? null : y.A.getViewingRolesTimestamp(_.getGuildId())),
            {
                channelStreamMarkup: er,
                newMessagesBar: el,
                jumpToPresentBar: ei,
                forumPostActionBar: es,
                safetyWarningBanner: ea
            } = (0, B.A)({
                channel: _,
                messages: O,
                unreadCount: j,
                showNewMessagesBar: x,
                messageDisplayCompact: C,
                channelStream: S,
                uploads: I,
                loadMore: ee.loadMore,
                scrollManager: ee,
                specs: $,
                filterAfterTimestamp: null != M ? M : en,
                showingQuarantineBanner: k,
                hideSummaries: q,
                jumpToPresent: () => {
                    if (O.hasPresent()) {
                        var e;
                        null == (e = ee.ref.current) || e.scrollToBottom({
                            animate: !f.A.useReducedMotion
                        })
                    } else d.A.jumpToPresent(_.id, V.EMb)
                },
                jumpBarClassName: X
            });
        i = ee.ref, a = l.useCallback(() => {
            var e;
            return null == (e = i.current) ? void 0 : e.scrollToBottom()
        }, [i]), p = l.useCallback(() => {
            var e;
            return null == (e = i.current) ? void 0 : e.scrollPageUp({
                animate: !f.A.useReducedMotion
            })
        }, [i]), g = l.useCallback(() => {
            var e;
            return null == (e = i.current) ? void 0 : e.scrollPageDown({
                animate: !f.A.useReducedMotion
            })
        }, [i]), (0, R.Vo)({
            event: V.jej.SCROLLTO_PRESENT,
            handler: a
        }), (0, R.Vo)({
            event: V.jej.SCROLL_PAGE_UP,
            handler: p
        }), (0, R.Vo)({
            event: V.jej.SCROLL_PAGE_DOWN,
            handler: g
        });
        let eo = (0, u.R7z)(),
            ec = (0, o.LT)(et),
            {
                ref: eu
            } = ec,
            ed = z(ec, ["ref"]),
            ep = (0, h.A)(e => {
                var t;
                ee.ref.current = e, eu.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null
            }),
            eh = (0, c.bG)([v.A], () => {
                var e;
                let t = null == (e = v.A.settings.appearance) ? void 0 : e.clientThemeSettings;
                return (null == t ? void 0 : t.backgroundGradientPresetId) != null || (null == t ? void 0 : t.customUserThemeSettings) != null
            }),
            ef = l.useMemo(() => J ? Q ? H.gA : H.ru : H.Zd, [J, Q]),
            eg = l.useMemo(() => J ? Q ? H.cz : H.XF : H.U6, [J, Q]);
        return (0, r.jsxs)(o.hD, {
            navigator: et,
            children: [null != ea && ea, (0, r.jsxs)("div", {
                className: s()(H.Og, m, "group-spacing-".concat(b)),
                children: [null == ea && el, (0, r.jsxs)(Y, W(K({
                    ref: ep,
                    customTheme: !0,
                    className: s()(A, H.XG, eh ? eg : void 0),
                    contentClassName: H.gT,
                    onResize: ee.handleResize,
                    onScroll: ee.handleScroll,
                    onMouseDown: ee.handleMouseDown,
                    onMouseUp: ee.handleMouseUp
                }, eo), {
                    tabIndex: -1,
                    role: "group",
                    children: [es, (0, r.jsxs)("ol", W(K({
                        className: s()(H.bv, {
                            [H.FD]: _.isModeratorReportChannel()
                        }),
                        "aria-label": F.intl.formatToPlainString(F.t.XarRiL, {
                            channelName: _.name
                        })
                    }, ed), {
                        children: [(0, r.jsx)("span", {
                            className: H.$4,
                            id: "messagesNavigationDescription",
                            "aria-hidden": !0,
                            children: F.intl.string(F.t["Spb3s/"])
                        }), er, (0, r.jsx)("div", {
                            className: s()({
                                [H.lB]: !k,
                                [H.Ie]: 0 === O.length && !O.loadingMore,
                                [H.Fb]: 1 === O.length && !O.loadingMore && _.isForumPost() && (null == (n = O.first()) ? void 0 : n.isFirstMessageInForumPost(_))
                            })
                        })]
                    }))]
                })), eh ? null : (0, r.jsx)("div", {
                    className: ef
                }), ei]
            })]
        })
    }, (e, t) => null != e.isHidden && null != t.isHidden && e.isHidden && t.isHidden),
    X = l.memo(function(e) {
        let {
            channel: t,
            showingQuarantineBanner: n,
            hideSummaries: i = !1,
            forceCompact: s = !1,
            forceCozy: a = !1,
            typingGradient: o = !1
        } = e, u = z(e, ["channel", "showingQuarantineBanner", "hideSummaries", "forceCompact", "forceCozy", "typingGradient"]), {
            canManageMessages: d,
            permissionVersion: h,
            canChat: y
        } = function(e) {
            let t = e.getGuildId(),
                n = (0, c.bG)([S.A], () => null == t || S.A.canChatInGuild(t), [t]),
                {
                    canManageMessages: r,
                    permissionVersion: l
                } = (0, c.cf)([N.A], () => ({
                    canManageMessages: N.A.can(V.xBc.MANAGE_MESSAGES, e),
                    permissionVersion: null != t ? N.A.getGuildVersion(t) : null
                }), [e, t]);
            return {
                canChat: n,
                permissionVersion: l,
                canManageMessages: r
            }
        }(t), {
            messageGroupSpacing: v,
            fontSize: E,
            messageDisplayCompact: R,
            renderSpoilers: L,
            keyboardModeEnabled: G
        } = function() {
            let e = j.hH.useSetting(),
                t = j.gs.useSetting(),
                {
                    messageGroupSpacing: n,
                    fontSize: r,
                    keyboardModeEnabled: l
                } = (0, c.cf)([f.A], () => {
                    let {
                        messageGroupSpacing: e,
                        fontSize: t,
                        keyboardModeEnabled: n
                    } = f.A;
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
                fontSize: r,
                keyboardModeEnabled: l
            }
        }(), {
            messages: U,
            channelStream: B,
            oldestUnreadMessageId: F,
            editingMessageId: H
        } = function(e) {
            var t, n, r;
            let i, s = (0, c.bG)([I.A], () => I.A.getMessages(e.id), [e.id]),
                a = (0, c.bG)([T.Ay], () => {
                    var t;
                    return null != (t = T.Ay.getOldestUnreadMessageId(e.id)) ? t : null
                }, [e.id]),
                {
                    enabled: o
                } = A.A.useExperiment({
                    location: "41de6d_1"
                }, {
                    autoTrackExposure: !1
                }),
                u = null != (t = null == (n = w.default.getUser(x.default.getId())) ? void 0 : n.hasFlag(V.nhx.SPAMMER)) && t,
                d = (0, p.cI)(e),
                h = (0, b.A)("use_topic_dividers_in_chat"),
                f = (0, c.yK)([O.A], () => {
                    var t;
                    return d && h && null != (t = O.A.summaries(e.id)) ? t : []
                }, [d, e.id, h]),
                y = (0, c.bG)([O.A], () => d ? O.A.selectedSummary(e.id) : null, [d, e.id]),
                _ = (r = s, i = l.useMemo(() => {
                    let e = new Set;
                    return r.forEach(t => {
                        null != t.applicationId && null == t.application && e.add(t.applicationId)
                    }), Array.from(e)
                }, [r]), (0, m.A)(i));
            (0, g.A)(s, e);
            let j = l.useMemo(() => (0, M.A)({
                channel: e,
                messages: s,
                oldestUnreadMessageId: a,
                treatSpam: o && !u,
                summaries: f,
                selectedSummary: y
            }), [s, e, a, o, f, y, _, u]);
            return {
                messages: s,
                channelStream: j,
                oldestUnreadMessageId: a,
                editingMessageId: (0, c.bG)([C.A], () => {
                    var t;
                    return null == (t = C.A.getEditingMessage(e.id)) ? void 0 : t.id
                })
            }
        }(t);
        return (0, r.jsx)(_.Bs.Provider, {
            value: (0, D.A)(L, d),
            children: (0, r.jsx)(k.t, {
                children: (0, r.jsx)(q, W(K({}, u), {
                    messageGroupSpacing: v,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !a && (s || R),
                    messages: U,
                    channelStream: B,
                    permissionVersion: h,
                    uploads: (0, c.bG)([P.A], () => P.A.getFiles(t.id), [t]),
                    unreadCount: (0, c.bG)([T.Ay], () => T.Ay.getUnreadCount(t.id), [t]),
                    hasUnreads: null != F,
                    canChat: y,
                    editingMessageId: H,
                    fontSize: E,
                    keyboardModeEnabled: G,
                    showingQuarantineBanner: n,
                    hideSummaries: i,
                    typingGradient: o
                }))
            })
        })
    })