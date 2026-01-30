/** Chunk was on 1113 **/
/** chunk id: 371648, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => X
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(970984),
    o = n(837381),
    c = n(311907),
    u = n(397927),
    d = n(843472),
    h = n(432371),
    p = n(765548),
    g = n(775602),
    f = n(821720),
    m = n(429913),
    b = n(354328),
    A = n(559149),
    y = n(164956),
    O = n(302031),
    _ = n(513272),
    j = n(253932),
    x = n(617617),
    v = n(961350),
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
    L = n(504136),
    M = n(540385),
    G = n(830178),
    k = n(722432),
    U = n(258024),
    V = n(672341),
    B = n(652215),
    H = n(985018),
    F = n(478186);

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

function Y(e, t) {
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

function W(e, t) {
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
let z = (0, a.animated)(u.fKU),
    q = l.memo(function(e) {
        var t, n, i;
        let a, h, f, {
                className: m,
                messageGroupSpacing: b,
                scrollerClassName: A,
                channel: O,
                messages: _,
                unreadCount: j,
                showNewMessagesBar: v,
                messageDisplayCompact: C,
                channelStream: S,
                uploads: I,
                hasUnreads: T,
                editingMessageId: P,
                fontSize: w,
                keyboardModeEnabled: D,
                filterAfterTimestamp: L,
                showingQuarantineBanner: G,
                hideSummaries: q = !1,
                jumpBarClassName: X,
                typingGradient: J
            } = e,
            [Q, Z] = l.useState(null != (t = E.A.isAtBottom(O.id)) && t),
            $ = l.useMemo(() => C ? (0, M.bW)({
                compact: !0,
                messageGroups: 30,
                groupRange: 4,
                attachments: 8,
                fontSize: w,
                groupSpacing: b
            }) : (0, M.bW)({
                compact: !1,
                messageGroups: 26,
                groupRange: 4,
                attachments: 8,
                fontSize: w,
                groupSpacing: b
            }), [C, w, b]),
            ee = (0, U.Ay)({
                messages: _,
                channel: O,
                compact: C,
                hasUnreads: T,
                focusId: P,
                placeholderHeight: $.totalHeight,
                canLoadMore: null == L,
                handleScrollToBottom: l.useCallback(() => Z(!0), [Z]),
                handleScrollFromBottom: l.useCallback(() => Z(!1), [Z]),
                additionalMessagePadding: 48
            }),
            et = (0, k.A)({
                scrollerRef: ee.ref,
                isEditing: null != P,
                keyboardModeEnabled: D,
                hasMoreAfter: _.hasMoreAfter
            }),
            en = (0, c.bG)([y.A], () => N.A.can(B.xBc.READ_MESSAGE_HISTORY, O) ? null : y.A.getViewingRolesTimestamp(O.getGuildId())),
            {
                channelStreamMarkup: er,
                newMessagesBar: el,
                jumpToPresentBar: ei,
                forumPostActionBar: es,
                safetyWarningBanner: ea
            } = (0, V.A)({
                channel: O,
                messages: _,
                unreadCount: j,
                showNewMessagesBar: v,
                messageDisplayCompact: C,
                channelStream: S,
                uploads: I,
                loadMore: ee.loadMore,
                scrollManager: ee,
                specs: $,
                filterAfterTimestamp: null != L ? L : en,
                showingQuarantineBanner: G,
                hideSummaries: q,
                jumpToPresent: () => {
                    if (_.hasPresent()) {
                        var e;
                        null == (e = ee.ref.current) || e.scrollToBottom({
                            animate: !g.A.useReducedMotion
                        })
                    } else d.A.jumpToPresent(O.id, B.EMb)
                },
                jumpBarClassName: X
            });
        i = ee.ref, a = l.useCallback(() => {
            var e;
            return null == (e = i.current) ? void 0 : e.scrollToBottom()
        }, [i]), h = l.useCallback(() => {
            var e;
            return null == (e = i.current) ? void 0 : e.scrollPageUp({
                animate: !g.A.useReducedMotion
            })
        }, [i]), f = l.useCallback(() => {
            var e;
            return null == (e = i.current) ? void 0 : e.scrollPageDown({
                animate: !g.A.useReducedMotion
            })
        }, [i]), (0, R.Vo)({
            event: B.jej.SCROLLTO_PRESENT,
            handler: a
        }), (0, R.Vo)({
            event: B.jej.SCROLL_PAGE_UP,
            handler: h
        }), (0, R.Vo)({
            event: B.jej.SCROLL_PAGE_DOWN,
            handler: f
        });
        let eo = (0, u.R7z)(),
            ec = (0, o.LT)(et),
            {
                ref: eu
            } = ec,
            ed = W(ec, ["ref"]),
            eh = (0, p.A)(e => {
                var t;
                ee.ref.current = e, eu.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null
            }),
            ep = (0, c.bG)([x.A], () => {
                var e;
                let t = null == (e = x.A.settings.appearance) ? void 0 : e.clientThemeSettings;
                return (null == t ? void 0 : t.backgroundGradientPresetId) != null || (null == t ? void 0 : t.customUserThemeSettings) != null
            }),
            eg = l.useMemo(() => J ? Q ? F.gA : F.ru : F.Zd, [J, Q]),
            ef = l.useMemo(() => J ? Q ? F.cz : F.XF : F.U6, [J, Q]);
        return (0, r.jsxs)(o.hD, {
            navigator: et,
            children: [null != ea && ea, (0, r.jsxs)("div", {
                className: s()(F.Og, m, "group-spacing-".concat(b)),
                children: [null == ea && el, (0, r.jsxs)(z, Y(K({
                    ref: eh,
                    customTheme: !0,
                    className: s()(A, F.XG, ep ? ef : void 0),
                    contentClassName: F.gT,
                    onResize: ee.handleResize,
                    onScroll: ee.handleScroll,
                    onMouseDown: ee.handleMouseDown,
                    onMouseUp: ee.handleMouseUp
                }, eo), {
                    tabIndex: -1,
                    role: "group",
                    children: [es, (0, r.jsxs)("ol", Y(K({
                        className: s()(F.bv, {
                            [F.FD]: O.isModeratorReportChannel()
                        }),
                        "aria-label": H.intl.formatToPlainString(H.t.XarRiL, {
                            channelName: O.name
                        })
                    }, ed), {
                        children: [(0, r.jsx)("span", {
                            className: F.$4,
                            id: "messagesNavigationDescription",
                            "aria-hidden": !0,
                            children: H.intl.string(H.t["Spb3s/"])
                        }), er, (0, r.jsx)("div", {
                            className: s()({
                                [F.lB]: !G,
                                [F.Ie]: 0 === _.length && !_.loadingMore,
                                [F.Fb]: 1 === _.length && !_.loadingMore && O.isForumPost() && (null == (n = _.first()) ? void 0 : n.isFirstMessageInForumPost(O))
                            })
                        })]
                    }))]
                })), ep ? null : (0, r.jsx)("div", {
                    className: eg
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
        } = e, u = W(e, ["channel", "showingQuarantineBanner", "hideSummaries", "forceCompact", "forceCozy", "typingGradient"]), {
            canManageMessages: d,
            permissionVersion: p,
            canChat: y
        } = function(e) {
            let t = e.getGuildId(),
                n = (0, c.bG)([S.A], () => null == t || S.A.canChatInGuild(t), [t]),
                {
                    canManageMessages: r,
                    permissionVersion: l
                } = (0, c.cf)([N.A], () => ({
                    canManageMessages: N.A.can(B.xBc.MANAGE_MESSAGES, e),
                    permissionVersion: null != t ? N.A.getGuildVersion(t) : null
                }), [e, t]);
            return {
                canChat: n,
                permissionVersion: l,
                canManageMessages: r
            }
        }(t), {
            messageGroupSpacing: x,
            fontSize: E,
            messageDisplayCompact: R,
            renderSpoilers: M,
            keyboardModeEnabled: k
        } = function() {
            let e = j.hH.useSetting(),
                t = j.gs.useSetting(),
                {
                    messageGroupSpacing: n,
                    fontSize: r,
                    keyboardModeEnabled: l
                } = (0, c.cf)([g.A], () => {
                    let {
                        messageGroupSpacing: e,
                        fontSize: t,
                        keyboardModeEnabled: n
                    } = g.A;
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
            channelStream: V,
            oldestUnreadMessageId: H,
            editingMessageId: F
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
                u = null != (t = null == (n = w.default.getUser(v.default.getId())) ? void 0 : n.hasFlag(B.nhx.SPAMMER)) && t,
                d = (0, h.cI)(e),
                p = (0, b.A)("use_topic_dividers_in_chat"),
                g = (0, c.yK)([_.A], () => {
                    var t;
                    return d && p && null != (t = _.A.summaries(e.id)) ? t : []
                }, [d, e.id, p]),
                y = (0, c.bG)([_.A], () => d ? _.A.selectedSummary(e.id) : null, [d, e.id]),
                O = (r = s, i = l.useMemo(() => {
                    let e = new Set;
                    return r.forEach(t => {
                        null != t.applicationId && null == t.application && e.add(t.applicationId)
                    }), Array.from(e)
                }, [r]), (0, m.A)(i));
            (0, f.A)(s, e);
            let j = l.useMemo(() => (0, L.A)({
                channel: e,
                messages: s,
                oldestUnreadMessageId: a,
                treatSpam: o && !u,
                summaries: g,
                selectedSummary: y
            }), [s, e, a, o, g, y, O, u]);
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
        return (0, r.jsx)(O.Bs.Provider, {
            value: (0, D.A)(M, d),
            children: (0, r.jsx)(G.t, {
                children: (0, r.jsx)(q, Y(K({}, u), {
                    messageGroupSpacing: x,
                    showNewMessagesBar: !0,
                    channel: t,
                    messageDisplayCompact: !a && (s || R),
                    messages: U,
                    channelStream: V,
                    permissionVersion: p,
                    uploads: (0, c.bG)([P.A], () => P.A.getFiles(t.id), [t]),
                    unreadCount: (0, c.bG)([T.Ay], () => T.Ay.getUnreadCount(t.id), [t]),
                    hasUnreads: null != H,
                    canChat: y,
                    editingMessageId: F,
                    fontSize: E,
                    keyboardModeEnabled: k,
                    showingQuarantineBanner: n,
                    hideSummaries: i,
                    typingGradient: o
                }))
            })
        })
    })