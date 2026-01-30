/** chunk id: 712209, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => Q,
    mJ: () => F,
    sz: () => K,
    xB: () => H
}), n(321073), n(896048);
var r, l, i = n(64700),
    s = n(143236),
    a = n(284009),
    o = n.n(a),
    c = n(735438),
    u = n.n(c),
    d = n(73153),
    h = n(843472),
    p = n(334738),
    g = n(775602),
    f = n(323073),
    m = n(181079),
    b = n(567035),
    A = n(455234),
    y = n(863005),
    O = n(970278),
    _ = n(152007),
    j = n(607508),
    x = n(594061),
    v = n(617617),
    E = n(95701),
    C = n(734057),
    S = n(808728),
    I = n(71393),
    N = n(320501),
    T = n(576705),
    P = n(222823),
    w = n(711014),
    R = n(543465),
    D = n(927813),
    L = n(403362),
    M = n(661191),
    G = n(652215),
    k = n(37411);

function U(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            U(e, t, n[t])
        })
    }
    return e
}

function B(e, t) {
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
var H = ((r = {})[r.Favorite = 0] = "Favorite", r[r.PrivateChannel = 1] = "PrivateChannel", r[r.HighImportanceMentioned = 2] = "HighImportanceMentioned", r[r.LowImportanceMentioned = 3] = "LowImportanceMentioned", r[r.AllMessagesNotifications = 4] = "AllMessagesNotifications", r[r.GuildChannel = 5] = "GuildChannel", r[r.OldChannel = 6] = "OldChannel", r[r.NoNotifications = 7] = "NoNotifications", r[r.ReallyOldChannel = 8] = "ReallyOldChannel", r),
    F = ((l = {}).Loading = "loading", l.Loaded = "loaded", l.Done = "done", l);
let K = 25;
class Y extends s.EventEmitter {
    loadMore() {
        let {
            loadState: e,
            channels: t
        } = this.state;
        if ("loaded" !== e) return;
        let n = !1,
            r = t.map(e => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return B(V({}, e), {
                        hasLoadedAnything: !0
                    });
                    else return e;
                return (e = this.populateInitialStateFromStore(e)).isFullyLoaded || (o()("nsfw" !== e.type, "this channel should already be loaded"), "messages" === e.type && this.loadChannelMessages(e) && (n = !0)), e
            });
        (!n || r.some((e, n) => e !== t[n])) && this.setState({
            channels: r,
            loadState: n ? this.state.loadState : "done"
        })
    }
    populateInitialStateFromStore(e) {
        if ("messages" === e.type) return W(e, !1);
        if ("nsfw" === e.type) return B(V({}, e), {
            isFullyLoaded: !0,
            hasLoadedAnything: !0
        });
        if ("forum" === e.type) {
            let t = O.A.hasLoaded(e.guildId);
            return B(V({}, e), {
                isFullyLoaded: t,
                hasLoadedAnything: !0
            })
        }(0, L.xb)(e)
    }
    clearScrollToChannelIndex() {
        this.setState({
            scrollToChannelIndex: null
        })
    }
    loadChannelMessages(e) {
        h.A.clearChannel(e.channelId);
        let t = h.A.fetchMessages({
            channelId: e.channelId,
            limit: G.EMb,
            jump: {
                messageId: e.oldestReadMessageId,
                flash: !0
            }
        });
        return null != t && !1 !== t && (this.setState({
            loadState: "loading"
        }), t.then(t => {
            this.setState({
                loadState: "loaded",
                channels: this.updateChannel(e.channelId, e => {
                    o()("messages" === e.type, "channel cannot change type");
                    let n = W(e, !0);
                    return (0 === n.messages.length || n.messages.length === e.messages.length) && (n = B(V({}, n), {
                        hasLoadedAnything: !0,
                        isFullyLoaded: !0,
                        hasError: !t
                    })), n
                })
            })
        }, () => {
            this.setState({
                loadState: "loaded",
                channels: this.updateChannel(e.channelId, e => {
                    var t;
                    return o()("messages" === e.type, "channel cannot change type"), B(V({}, W(e, !0)), {
                        isFullyLoaded: !0,
                        hasError: !0,
                        hasLoadedAnything: !0,
                        newestUnreadMessageId: null == (t = e.messages[e.messages.length - 1]) ? void 0 : t.id
                    })
                })
            })
        }), !0)
    }
    updateChannel(e, t) {
        return this.state.channels.map(n => n.channelId === e ? t(n) : n)
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                this.state = V({}, this.state, e), this.emit("change", this.state);
                return
            }
    }
    constructor(e, t) {
        super(), U(this, "state", void 0), U(this, "scrollerRef", void 0), U(this, "undoStack", void 0), U(this, "maybeLoadMore", void 0), U(this, "reloadMessages", void 0), U(this, "getNumUnreadChannels", void 0), U(this, "markChannelRead", void 0), U(this, "undoMarkChannelRead", void 0), U(this, "markGuildRead", void 0), U(this, "deleteChannel", void 0), U(this, "markAllRead", void 0), U(this, "toggle", void 0), U(this, "handleUserGuildSettingsStoreChange", void 0), U(this, "handleJoinedThreadsStoreChange", void 0), U(this, "handleActiveThreadsStoreChange", void 0), this.state = e, this.scrollerRef = t, this.undoStack = [], this.maybeLoadMore = () => {
            var e;
            let t = null == (e = this.scrollerRef.current) ? void 0 : e.getScrollerState();
            null == t || t.scrollHeight - t.scrollTop - t.offsetHeight < 2e3 && this.loadMore()
        }, this.reloadMessages = () => {
            this.setState({
                channels: this.state.channels.map(e => "messages" === e.type && e.hasLoadedAnything ? W(e, !1, !0) : e)
            })
        }, this.getNumUnreadChannels = () => this.state.channels.length, this.markChannelRead = e => {
            let {
                channelId: t,
                newestUnreadMessageId: n
            } = e;
            d.h.wait(() => p.ack(t, {
                section: G.JJy.INBOX,
                object: G.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                objectType: G.AnalyticsObjectTypes.ACK_AUTOMATIC
            }, !0, void 0, n));
            let r = this.state.channels.find(e => e.channelId === t);
            (null != r && this.undoStack.push(r), 1 === this.state.channels.length) ? this.deleteChannel(t): (this.setState({
                channels: this.updateChannel(t, e => B(V({}, e), {
                    deleted: !0
                }))
            }), g.A.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore())
        }, this.undoMarkChannelRead = () => {
            if (0 === this.undoStack.length) return;
            let e = this.undoStack.pop();
            if (null == e) return;
            p.ack(e.channelId, {
                section: G.JJy.INBOX,
                object: G.ZSU.UNDO_MARK_AS_READ,
                objectType: G.AnalyticsObjectTypes.ACK_MANUAL
            }, !0, void 0, e.oldestReadMessageId);
            let t = this.state.channels.findIndex(t => t.order > e.order),
                n = [...this.state.channels];
            t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({
                scrollToChannelIndex: t,
                channels: n
            })
        }, this.markGuildRead = e => {
            d.h.wait(() => (0, b.A)([e], G.JJy.INBOX)), this.setState({
                channels: this.state.channels.filter(t => t.guildId !== e)
            }), this.maybeLoadMore()
        }, this.deleteChannel = e => {
            this.setState({
                scrollToChannelIndex: u().findIndex(this.state.channels, t => t.channelId === e),
                channels: this.state.channels.filter(t => t.channelId !== e)
            }), this.maybeLoadMore()
        }, this.markAllRead = () => {
            p.Uq(this.state.channels.map(e => ({
                channelId: e.channelId,
                messageId: e.newestUnreadMessageId
            }))), this.setState({
                channels: []
            })
        }, this.toggle = e => {
            let {
                channelId: t,
                guildId: n
            } = e, {
                channels: r,
                collapsedChannels: l,
                loadState: i
            } = this.state, s = u().findIndex(r, e => e.channelId === t), a = r[s], o = !a.collapsed;
            l[t] = o, (0, x.ji)(n, t, e => {
                e.collapsedInInbox = o
            }, x.Sb.FREQUENT_USER_ACTION), this.setState({
                scrollToChannelIndex: s,
                collapsedChannels: l,
                loadState: "done" !== i || o || a.isFullyLoaded ? i : "loaded",
                channels: this.updateChannel(t, e => B(V({}, e), {
                    collapsed: o
                }))
            }), a.collapsed ? a.isFullyLoaded || this.loadMore() : this.maybeLoadMore()
        }, this.handleUserGuildSettingsStoreChange = () => {
            let e = this.state.channels.filter(e => !R.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
            e.length !== this.state.channels.length && this.setState({
                channels: e
            })
        }, this.handleJoinedThreadsStoreChange = () => {
            let e = this.state.channels.filter(e => !_.A.isMuted(e.channelId));
            e.length !== this.state.channels.length && this.setState({
                channels: e
            })
        }, this.handleActiveThreadsStoreChange = () => {
            let e = this.state.channels.map(e => {
                if ("forum" !== e.type) return e;
                {
                    if (!e.hasLoadedAnything) return e;
                    let t = O.A.hasLoaded(e.guildId);
                    return B(V({}, e), {
                        isFullyLoaded: t,
                        hasLoadedAnything: !0
                    })
                }
            });
            this.setState({
                channels: e
            })
        };
        for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t
    }
}

function W(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = N.A.getMessages(e.channelId),
        i = l.toArray().filter(t => M.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= M.default.compare(t.id, e.newestUnreadMessageId));
    if (i.length === e.messages.length && i.every((t, n) => e.messages[n] === t) && r) return e;
    let s = null != l.getAfter(e.oldestReadMessageId) || (null == (n = i[0]) ? void 0 : n.id) === e.oldestUnreadMessageId,
        a = i[i.length - 1],
        o = M.default.compare(null == a ? void 0 : a.id, e.newestUnreadMessageId) >= 0 || i.length >= K;
    return B(V({}, e), {
        messages: i,
        hasLoadedAnything: e.hasLoadedAnything || s || t,
        hasLoadedFirst: e.hasLoadedFirst || s || t,
        isFullyLoaded: e.isFullyLoaded || s && o || t && !l.hasMoreAfter
    })
}

function z() {
    var e;
    let t, n = function() {
            var e, t;
            let n = {},
                r = null != (e = null == (t = v.A.settings.guilds) ? void 0 : t.guilds) ? e : {};
            for (let e in r)
                for (let t in r[e].channels) {
                    let l = C.A.getChannel(t);
                    t in n && (null == l ? void 0 : l.guild_id) !== e || (n[t] = r[e].channels[t].collapsedInInbox)
                }
            return n
        }(),
        r = (e = n, t = [], C.A.getSortedPrivateChannels().forEach(n => q(e, t, null, n.id)), w.Ay.getFlattenedGuildIds().forEach(n => {
            if (null == n) return;
            let r = S.Ay.getSelectableChannelIds(n),
                l = y.A.getActiveJoinedUnreadThreadsForGuild(n);
            r.forEach(r => {
                var i;
                q(e, t, n, r);
                let s = null != (i = l[r]) ? i : {};
                for (let r in s) q(e, t, n, r)
            })
        }), u().sortBy(t, e => e.sortOrder)),
        l = u().uniq(r.map(e => e.guildId)).filter(L.Vq);
    return d.h.dispatch({
        type: "INBOX_OPEN",
        guildIds: l
    }), {
        collapsedChannels: n,
        loadState: "loaded",
        channels: r,
        scrollToChannelIndex: null
    }
}

function q(e, t, n, r) {
    if (null == r) return;
    let l = C.A.getChannel(r);
    if (null == l || !E.Le.has(l.type) && R.Ay.isGuildOrCategoryOrChannelMuted(n, l.id)) return;
    if (l.isPrivate()) {
        if (0 === P.Ay.getMentionCount(r)) return
    } else if (!(0, A.Y)(l) && 0 === P.Ay.getMentionCount(r)) return;
    if (!l.isPrivate() && !T.A.can(G.xBc.READ_MESSAGE_HISTORY, l) || (0, f.qR)(l)) return;
    let i = P.Ay.ackMessageId(r);
    if (null == i) {
        let e = I.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        i = M.default.fromTimestamp(e.joinedAt.getTime())
    }
    let s = P.Ay.getOldestUnreadMessageId(r),
        a = P.Ay.lastMessageId(r),
        o = P.Ay.getMentionCount(r),
        c = o > 0 || l.isPrivate();
    if (null == a || M.default.compare(i, a) >= 0) return;
    let u = {
        guildId: n,
        channelId: r,
        oldestReadMessageId: i,
        oldestUnreadMessageId: s,
        newestUnreadMessageId: a,
        collapsed: !0 === e[r],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: c,
        mentionCount: o,
        sortOrder: function(e, t, n) {
            let r = C.A.getChannel(t);
            if (m.A.isFavorite(t)) return 0;
            if (r.isPrivate()) return 1;
            if (P.Ay.getMentionCount(t) > 0) return P.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = M.default.extractTimestamp(n);
                if (Date.now() - e > J) return 8;
                if (Date.now() - e > X) return 6
            }
            if (r.isThread()) {
                let e = (0, j.l)(r);
                return e === k.CP.ALL_MESSAGES ? 4 : e === k.CP.NO_MESSAGES ? 7 : 5
            } {
                let n = R.Ay.getChannelMessageNotifications(e, t),
                    r = n === G.orn.NULL ? R.Ay.getMessageNotifications(e) : n;
                return r === G.orn.ALL_MESSAGES ? 4 : r === G.orn.NO_MESSAGES ? 7 : 5
            }
        }(n, r, a),
        order: 0
    };
    (0, f.qR)(l) ? t.push(B(V({}, u), {
        type: "nsfw"
    })): l.isForumLikeChannel() ? t.push(B(V({}, u), {
        type: "forum"
    })) : t.push(B(V({}, u), {
        type: "messages",
        messages: []
    }))
}
let X = 2 * D.A.Millis.DAY,
    J = 10 * D.A.Millis.DAY;

function Q(e) {
    let [t, n] = i.useState(() => new Y(z(), e)), [r, l] = i.useState(!1), s = i.useRef(Date.now()), [a, o] = i.useState(() => z());
    i.useEffect(() => {
        let e = e => o(e);
        return t.on("change", e), o(t.state), () => {
            t.off("change", e)
        }
    }, [t]), i.useEffect(() => {
        if (null == a || a.channels.length > 0 || r) return;
        let t = Date.now(),
            i = z();
        0 === i.channels.length || t - s.current < 10 * D.A.Millis.SECOND ? l(!0) : (s.current = Date.now(), n(new Y(i, e)))
    }, [a, r, e]);
    let c = i.useRef(t);
    return i.useLayoutEffect(() => {
        c.current = t
    }), i.useLayoutEffect(() => {
        null == a || a.channels, null == a || a.loadState, c.current.maybeLoadMore()
    }, [null == a ? void 0 : a.channels, null == a ? void 0 : a.loadState]), i.useEffect(() => (N.A.addChangeListener(t.reloadMessages), () => N.A.removeChangeListener(t.reloadMessages)), [t.reloadMessages]), i.useEffect(() => (R.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange), () => R.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]), i.useEffect(() => (_.A.addChangeListener(t.handleJoinedThreadsStoreChange), () => _.A.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]), i.useEffect(() => (O.A.addChangeListener(t.handleActiveThreadsStoreChange), () => O.A.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]), [a, t]
}