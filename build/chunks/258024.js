/** Chunk was on 77870 **/
/** chunk id: 258024, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => E
}), n(896048), n(638769), n(321073);
var r = n(64700),
    l = n(735438),
    i = n.n(l),
    s = n(621466),
    a = n(951001),
    o = n(843472),
    c = n(334738),
    u = n(775602),
    d = n(267102),
    p = n(976860),
    h = n(863922),
    f = n(72314),
    g = n(661191),
    m = n(61939),
    b = n(371741),
    A = n(420819),
    y = n(381941),
    _ = n(652215);

function O(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function j(e) {
    var t, n;
    if (null == e.jumpTargetId || !e.ready) return null;
    let {
        jumpTargetId: r,
        jumpTargetOffset: l
    } = e;
    if (e.has(r) || !e.hasMoreBefore && r === g.default.castChannelIdAsMessageId(e.channelId)) {
        if (0 === l) return r;
        let t = e.getByIndex(e.indexOf(r) + l);
        return null != (n = null == t ? void 0 : t.id) ? n : r
    }
    let i = [r, ...e.map(e => {
            let {
                id: t
            } = e;
            return t
        })].sort(g.default.compare),
        s = i.indexOf(r),
        a = null != (t = i[s + (Math.abs(l) > 0 ? l : 1)]) ? t : i[s - 1];
    return null != a ? a : null
}
let v = {
    scrollTop: 0,
    scrollHeight: 0,
    offsetHeight: 0
};
class x {
    isReady() {
        return this.props.messages.ready
    }
    isLoading() {
        return this.loading || this.props.messages.loadingMore
    }
    isPinned() {
        return this.pinned
    }
    isJumping() {
        return this.jumping
    }
    isDragging() {
        return this.dragging
    }
    isInitialized() {
        return void 0 === this.initialScrollTop
    }
    isScrollLoadingDisabled() {
        return this.isLoading() || !this.isInitialized() || this.isJumping() || this.isDragging() || !this.props.canLoadMore
    }
    isActivelyScrolling() {
        return this.scrollCounter >= 5
    }
    getDocument() {
        var e, t;
        return null == (t = this.ref.current) || null == (e = t.getScrollerNode()) ? void 0 : e.ownerDocument
    }
    getElementFromMessageId(e) {
        let t = this.getDocument(),
            {
                channel: {
                    id: n
                }
            } = this.props;
        return null == t ? null : (0, b.Av)(t, n, e)
    }
    isScrolledToBottom() {
        let {
            scrollTop: e,
            scrollHeight: t,
            offsetHeight: n
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollerState();
        return e >= t - n - 2 && !this.props.messages.hasMoreAfter
    }
    mergePropsAndUpdate(e) {
        this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck()
    }
    mergePropsAndUpdate_(e) {
        let t = this.props.messages,
            n = this.props.focusId;
        this.props = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    O(e, t, n[t])
                })
            }
            return e
        }({}, e);
        let {
            offsetHeight: r,
            scrollHeight: l
        } = this.getScrollerState(), i = this.isHeightChange(r, l);
        if (this.offsetHeightCache = r, this.scrollHeightCache = l, this.loading = e.messages.loadingMore, this.isInitialized() || this.isReady()) {
            if (!this.isInitialized()) return void this.restoreScroll()
        } else {
            null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
            return
        }
        if (null != e.messages.jumpTargetId) {
            if (this.isLoading()) return;
            let n = j(e.messages);
            if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                if (this.isJumping()) return void(null != n ? this.scrollToMessage(n, !0) : this.jumping = !1)
            } else {
                let r, l = t.first();
                null != l && e.messages.last() !== t.last() && e.messages.first() !== t.first() && (r = g.default.extractTimestamp(l.id)), this.scrollToMessage(n, !0, r);
                return
            }
        }
        if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
            this.jumping = !0, this.scrollTo(0), this.setScrollToBottom(!0);
            return
        }
        let s = e.messages.last(),
            a = t.last();
        if (null != s && s.state === _.cmJ.SENDING && (null == a ? void 0 : a.id) !== s.id) return void this.setScrollToBottom();
        let {
            focusId: o
        } = this.props;
        if (null != o && n !== o) {
            let e = this.getElementFromMessageId(o);
            if (null != e) {
                var c;
                null == (c = this.ref.current) || c.scrollIntoViewNode({
                    node: e,
                    padding: y.mZ + this.props.additionalMessagePadding,
                    callback: this.handleScroll
                });
                return
            }
        }
        i && this.fixScrollPosition(r, l)
    }
    getAnchorData(e, t, n) {
        var r;
        let l = this.getElementFromMessageId(e),
            i = null == (r = this.ref.current) ? void 0 : r.getScrollerNode();
        if (!(0, s.vq)(l) || null == i) return null;
        let {
            offsetHeight: a
        } = l, o = (0, A.A)(l, i), c = o - t;
        return null != n && (c = Math.max(-a, Math.min(n, c))), {
            id: e,
            offsetFromTop: c,
            offsetTop: o,
            offsetHeight: a,
            clamped: null != c
        }
    }
    cleanAutomaticAnchor() {
        this.setAutomaticAnchor(null)
    }
    newMessageBarBuffer() {
        return this.props.channel.isForumPost() ? y.Gt : y.k8
    }
    findAnchor() {
        let {
            messages: e,
            hasUnreads: t,
            channel: n
        } = this.props, r = this.getScrollerState(), {
            scrollTop: l
        } = r, i = t && l >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0, s = null, a = t => {
            var r;
            return -1 === t ? g.default.castChannelIdAsMessageId(n.id) : null == (r = e._array[t]) ? void 0 : r.id
        }, o = -1, c = !1;
        for (;;) {
            let t = a(o);
            if (null == t) break;
            let n = this.getAnchorData(t, l);
            if (this._bottomAnchor = n, c && null != n && n.offsetTop > l + i + r.offsetHeight) break;
            if (c) {
                o++;
                continue
            }
            null != n && (n.offsetTop >= l + i || o === e.length - 1) && (s = n, c = !0), o++
        }
        return s
    }
    findFetchAnchor(e) {
        let {
            messages: t
        } = this.props, {
            scrollTop: n
        } = this.getScrollerState(), r = e ? -1 : 1, l = null, i = t._array.length - 1;
        for (let s = e ? i : 0; null != t._array[s]; s += r) {
            let e = t._array[s],
                r = this.getAnchorData(e.id, n);
            if (null != r) {
                l = r;
                break
            }
        }
        return l
    }
    getAnchorFixData() {
        for (let e of [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor]) {
            if (null == e) continue;
            let t = this.getElementFromMessageId(e.id);
            if (!(0, s.vq)(t)) continue;
            let n = e === this.messageFetchAnchor ? e.offsetHeight - t.offsetHeight : 0;
            return {
                node: t,
                fixedScrollTop: t.offsetTop - (e.offsetFromTop + n)
            }
        }
        return null
    }
    fixAnchorScrollPosition() {
        let e = this.getAnchorFixData();
        if (null == e) return void this.handleScroll();
        let {
            node: t,
            fixedScrollTop: n
        } = e;
        if (null != this.focusAnchor) {
            var r;
            this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.mergeTo(n, this.handleScroll), null == (r = this.ref.current) || r.scrollIntoViewNode({
                node: t,
                padding: y.mZ + this.props.additionalMessagePadding,
                callback: this.handleScroll
            })
        } else this.mergeTo(n, this.handleScroll);
        this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()), this.isLoading() || (this.messageFetchAnchor = null)
    }
    hasAnchor() {
        return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor
    }
    updateFocusAnchor(e, t, n) {
        let r = this.focusAnchor = null != e ? this.getAnchorData(e, t) : null;
        null != r && (r.offsetFromTop >= n || t > r.offsetTop + r.offsetHeight) && (this.focusAnchor = null)
    }
    handleFocusAnchorScroll(e, t) {
        var n;
        this.updateFocusAnchor(null == (n = this.focusAnchor) ? void 0 : n.id, e, t)
    }
    updateFetchAnchor(e, t, n) {
        var r;
        let l = null == (r = this.ref.current) ? void 0 : r.getScrollerNode();
        null != this.messageFetchAnchor && null != l && (this.messageFetchAnchor = this.getAnchorData(this.messageFetchAnchor.id, e, this.isInPlaceholderRegion({
            scrollTop: e,
            offsetHeight: t,
            scrollHeight: n
        }) > 0 ? t : void 0))
    }
    updateAutomaticAnchor(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = null == (t = this.ref.current) ? void 0 : t.getScrollerNode();
        if (null == this.automaticAnchor || null == r) return;
        let l = this.getAnchorData(this.automaticAnchor.id, e);
        n && null != l && null != this.automaticAnchor && (l.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(l)
    }
    setAutomaticAnchor(e) {
        var t, n;
        this.automaticAnchor = e, null == (t = this._automaticAnchorCallbacks) || t.forEach(e => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? void 0 : e.id, null == (n = this._bottomAnchor) ? void 0 : n.id)
    }
    getScrollerState() {
        var e, t;
        return null != (e = null == (t = this.ref.current) ? void 0 : t.getScrollerState()) ? e : v
    }
    isHeightChange(e, t) {
        return e !== this.offsetHeightCache || t !== this.scrollHeightCache
    }
    isInPlaceholderRegion(e) {
        let {
            scrollTop: t,
            offsetHeight: n,
            scrollHeight: r
        } = e, {
            messages: l,
            placeholderHeight: i
        } = this.props;
        return l.hasMoreBefore && t < i && r > n ? 1 : l.hasMoreAfter && t >= r - n - i ? 2 : 0
    }
    isInScrollTriggerLoadingRegion(e) {
        let {
            scrollTop: t,
            offsetHeight: n,
            scrollHeight: r
        } = e, {
            messages: l
        } = this.props;
        return l.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && r > n ? 1 : l.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e) ? 2 : 0
    }
    handleScrollSpeed(e) {
        if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
        let {
            scrollTop: t,
            offsetHeight: n,
            scrollHeight: r
        } = e, {
            prevScrollTop: l,
            props: {
                placeholderHeight: i
            }
        } = this;
        if (this.prevScrollTop = t, null == l) return;
        let s = this.isInPlaceholderRegion(e),
            a = t - l;
        0 !== s && 0 !== a && (1 === s && t + a <= 0 ? (this.mergeTo(i - n), this.prevScrollTop = i - n) : 2 === s && t + a >= r - n && (this.mergeTo(r - i), this.prevScrollTop = r - i))
    }
    enableAutomaticAck() {
        this.isInitialized() && !this.acking && (this.acking = !0, this.updateStoreDimensions(() => {
            (0, c._9)(this.props.channel.id, this.props.windowId)
        }))
    }
    fixScrollPosition(e, t) {
        this.offsetHeightCache = e, this.scrollHeightCache = t, this.fixJumpTarget(), this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.fixAnchorScrollPosition()
    }
    fixJumpTarget() {
        if (!this.isJumping()) return;
        let {
            messages: e,
            hasUnreads: t
        } = this.props;
        if (null != e.jumpTargetId) {
            let n = j(e);
            if (null == n) return;
            let r = this.getElementFromMessageId(n);
            (0, s.vq)(r) ? this.scrollTo(this.getOffsetOrientationFromNode(r, "middle", t ? this.newMessageBarBuffer() : y.mZ), !0): this.scrollToNewMessages(!0, "middle")
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0)
    }
    scrollToNewMessages() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            r = arguments.length > 2 ? arguments[2] : void 0,
            l = null == (e = this.getDocument()) ? void 0 : e.getElementById(y.q4),
            i = () => {
                this.jumping = !1, this.setAutomaticAnchor(this.findAnchor()), null != r && r(), this.handleScroll()
            };
        this.pinned = !1, this.jumping = t, null != l ? this.scrollTo(this.getOffsetOrientationFromNode(l, n, this.newMessageBarBuffer()), t, i) : this.scrollTo(this.getOffsetToPreventLoading("top"), t, i)
    }
    getOffsetOrientationFromNode(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            l = null == (n = this.ref.current) ? void 0 : n.getScrollerNode();
        if (null == l) return 0;
        let i = this.getScrollerState(),
            s = (0, A.A)(e, l);
        return "middle" === t ? Math.min(s - .5 * i.offsetHeight + .5 * e.offsetHeight + -8, s - r) : s - r
    }
    restoreScroll() {
        if (this.isInitialized()) return;
        let {
            initialScrollTop: e
        } = this;
        this.initialScrollTop = void 0;
        let t = j(this.props.messages);
        null != t ? this.scrollToMessage(t, !1) : this.props.hasUnreads && this.props.channel.type !== _.rbe.GUILD_VOICE && this.props.channel.type !== _.rbe.GUILD_STAGE_VOICE ? ((0, m.x)(this.props.channel, this.props.messages), this.scrollToNewMessages()) : null != e ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll) : this.setScrollToBottom()
    }
    scrollTo(e) {
        var t;
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0;
        null == (t = this.ref.current) || t.scrollTo({
            to: e,
            animate: !u.A.useReducedMotion && n,
            callback: r
        }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced()
    }
    mergeTo(e, t) {
        var n;
        null == (n = this.ref.current) || n.mergeTo({
            to: e,
            callback: t
        }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced()
    }
    setScrollToBottom() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            {
                messages: t,
                channel: n
            } = this.props;
        if (t.hasMoreAfter) {
            var r;
            o.A.jumpToPresent(n.id, _.EMb), (0, p.uh)(null != (r = n.getGuildId()) ? r : _.ME, n.id)
        } else this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
            this.jumping = !1, this.handleScroll()
        })
    }
    updateStoreDimensions(e) {
        if (this.isJumping() || !this.isInitialized()) return;
        let {
            channel: t
        } = this.props;
        if (this.isPinned()) a.A.updateChannelDimensions(t.id, 1, 1, 0, e);
        else {
            let {
                placeholderHeight: n
            } = this.props, {
                scrollTop: r,
                scrollHeight: l,
                offsetHeight: i
            } = this.getScrollerState();
            a.A.updateChannelDimensions(t.id, r - n, l - n, i, e)
        }
    }
    scrollIntoViewRect() {}
    scrollPageUp() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == (e = this.ref.current) || e.scrollPageUp({
            animate: t
        })
    }
    scrollPageDown() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        null == (e = this.ref.current) || e.scrollPageDown({
            animate: t
        })
    }
    scrollToMessage(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.ref.current) return;
        if (e === this.props.channel.id) return void this.scrollTo(0);
        let r = this.getElementFromMessageId(e);
        this.isJumping() || !t || null == n || u.A.useReducedMotion || (g.default.extractTimestamp(e) > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)), this.pinned = !1, this.jumping = !0;
        let l = () => {
            this.jumping = !1, (0, s.vq)(r) && (r.tabIndex = -1, r.focus({
                preventScroll: !0
            })), this.scrollCounter = 0, this.handleScroll(), this._scrollCompleteCallbacks.forEach(e => e())
        };
        (0, s.vq)(r) ? this.scrollTo(this.getOffsetOrientationFromNode(r, "middle", this.props.hasUnreads ? this.newMessageBarBuffer() : y.mZ), t, l): this.scrollToNewMessages(t, "middle", l)
    }
    getOffsetToTriggerLoading(e, t) {
        let {
            scrollHeight: n,
            offsetHeight: r
        } = t, {
            messages: l,
            hasUnreads: i,
            placeholderHeight: s
        } = this.props;
        if ("top" === e)
            if (!l.hasMoreBefore) return 0;
            else return i ? s - y.N0 - 2 : s + 500;
        return l.hasMoreAfter ? n - r - s - 500 : n - r
    }
    getOffsetToPreventLoading(e) {
        let {
            messages: t
        } = this.props, n = 0;
        return "top" === e && t.hasMoreBefore ? n = 2 : "bottom" === e && t.hasMoreAfter && (n = -2), this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n
    }
    getSnapshotBeforeUpdate(e) {
        if (this.hasAnchor() || null != e) {
            let {
                scrollTop: t,
                offsetHeight: n,
                scrollHeight: r
            } = this.getScrollerState();
            this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, r), this.updateAutomaticAnchor(t)
        }
    }
    addAutomaticAnchorCallback(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        this._automaticAnchorCallbacks.push(e), this._automaticAnchorCallbacks = i().uniq(this._automaticAnchorCallbacks), !0 === t && this.setAutomaticAnchor(this.findAnchor())
    }
    removeAutomaticAnchorCallback(e) {
        this._automaticAnchorCallbacks = i().without(this._automaticAnchorCallbacks, e)
    }
    addScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks.push(e), this._scrollCompleteCallbacks = i().uniq(this._scrollCompleteCallbacks)
    }
    removeScrollCompleteCallback(e) {
        this._scrollCompleteCallbacks = i().without(this._scrollCompleteCallbacks, e)
    }
    cleanup() {
        this.acking = !1, this.updateStoreDimensionsDebounced.cancel(), this._automaticAnchorCallbacks.forEach(e => this.removeAutomaticAnchorCallback(e)), (0, c.Z5)(this.props.channel.id, this.props.windowId)
    }
    constructor(e) {
        var t, n, l = this;
        if (O(this, "props", void 0), O(this, "ref", r.createRef()), O(this, "automaticAnchor", null), O(this, "messageFetchAnchor", null), O(this, "focusAnchor", null), O(this, "loading", void 0), O(this, "jumping", !1), O(this, "pinned", void 0), O(this, "dragging", !1), O(this, "isAtBottom", !1), O(this, "prevScrollTop", null), O(this, "anchorTimeout", null), O(this, "initialScrollTop", null), O(this, "acking", !1), O(this, "scrollCounter", 0), O(this, "offsetHeightCache", 0), O(this, "scrollHeightCache", 0), O(this, "scrollTopCache", -1), O(this, "_bottomAnchor", null), O(this, "_automaticAnchorCallbacks", []), O(this, "_scrollCompleteCallbacks", []), O(this, "updateVisibleMessagesDebounced", i().debounce(h.s_, 300)), O(this, "handleScroll", e => {
                var t;
                if (!this.isInitialized()) return;
                let n = this.getScrollerState(),
                    r = this.isScrolledToBottom(n);
                if (r !== this.isAtBottom && (r ? (this.isAtBottom = !0, this.props.handleScrollToBottom()) : (this.isAtBottom = !1, this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache) this.scrollCounter = 0, clearTimeout(this.anchorTimeout), this.isPinned() || (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, !0)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), this.scrollTopCache = n.scrollTop;
                else {
                    if (null != e && e.target !== (null == (t = this.ref.current) ? void 0 : t.getScrollerNode())) return;
                    this.scrollTopCache !== n.scrollTop && (this.pinned = r, this.scrollCounter = Math.min(this.scrollCounter + 1, 5), this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, !0) : this.setAutomaticAnchor(this.findAnchor()), this.scrollTopCache = n.scrollTop, clearTimeout(this.anchorTimeout), this.anchorTimeout = setTimeout(() => {
                        this.scrollCounter = 0, this.anchorTimeout = null, this.prevScrollTop = null;
                        let {
                            scrollHeight: e,
                            offsetHeight: t
                        } = this.getScrollerState();
                        this.isHeightChange(t, e) ? this.handleScroll() : (this.cleanAutomaticAnchor(), this.isPinned() || this.setAutomaticAnchor(this.findAnchor()))
                    }, 35))
                }
                if (this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight), this.updateStoreDimensionsDebounced(), this.isScrollLoadingDisabled()) return this.props.canLoadMore || this.enableAutomaticAck(), this.handleScrollSpeed(n);
                let l = this.isInScrollTriggerLoadingRegion(n);
                1 === l ? this.loadMore() : 2 === l ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(n)
            }), O(this, "handleResize", (e, t) => {
                let {
                    offsetHeightCache: n,
                    scrollHeightCache: r
                } = this;
                "container" === t ? n = e.contentRect.height : "content" === t && (r = e.contentRect.height), this.isHeightChange(n, r) && this.fixScrollPosition(n, r)
            }), O(this, "handleMouseDown", e => {
                e.target === e.currentTarget && (this.dragging = !0)
            }), O(this, "handleMouseUp", () => {
                this.dragging = !1, this.handleScroll()
            }), O(this, "loadMore", function() {
                let e, t, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    {
                        messages: r
                    } = l.props;
                if (n) {
                    let e = r.last();
                    null != e && (t = e.id)
                } else {
                    let t = r.first();
                    null != t && (e = t.id)
                }
                l.messageFetchAnchor = l.findFetchAnchor(n), l.loading = !0, o.A.fetchMessages({
                    channelId: l.props.channel.id,
                    before: e,
                    after: t,
                    limit: _.EMb,
                    truncate: !0
                })
            }), O(this, "updateStoreDimensionsDebounced", i().debounce(this.updateStoreDimensions, 200)), this.props = e, this.loading = e.messages.loadingMore, null != e.messages.jumpTargetId) this.pinned = !1;
        else {
            const r = f.A.isAtBottom(e.channel.id);
            this.pinned = null == r || r, this.initialScrollTop = r ? null : null != (t = null == (n = f.A.getChannelDimensions(e.channel.id)) ? void 0 : n.scrollTop) ? t : null
        }
    }
}

function E(e) {
    let {
        messages: t,
        channel: n,
        compact: l,
        hasUnreads: i,
        focusId: s,
        placeholderHeight: a,
        canLoadMore: o = !0,
        handleScrollToBottom: c,
        handleScrollFromBottom: u,
        additionalMessagePadding: p = 0
    } = e, {
        windowId: h
    } = r.useContext(d.Ay), [f] = r.useState(() => new x({
        messages: t,
        channel: n,
        compact: l,
        hasUnreads: i,
        focusId: s,
        placeholderHeight: a,
        canLoadMore: o,
        windowId: h,
        handleScrollToBottom: c,
        handleScrollFromBottom: u,
        additionalMessagePadding: p
    }));
    return f.getSnapshotBeforeUpdate(s), r.useLayoutEffect(() => f.mergePropsAndUpdate({
        messages: t,
        channel: n,
        compact: l,
        hasUnreads: i,
        focusId: s,
        placeholderHeight: a,
        canLoadMore: o,
        windowId: h,
        handleScrollToBottom: c,
        handleScrollFromBottom: u,
        additionalMessagePadding: p
    })), r.useLayoutEffect(() => () => f.cleanup(), [f]), f
}