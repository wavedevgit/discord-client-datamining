/** Chunk was on 77870 **/
/** chunk id: 722432, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(64700),
    l = n(884362),
    i = n(765548),
    s = n(234320),
    a = n(203982),
    o = n(375901),
    c = n(381941),
    u = n(652215);

function d(e) {
    let {
        scrollerRef: t
    } = e, n = function(e, t) {
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
    }(e, ["scrollerRef"]), d = (0, i.A)(() => {
        let e = t.current;
        return null == e ? Promise.resolve() : new Promise(t => {
            e.scrollToBottom({
                callback: () => requestAnimationFrame(t)
            })
        })
    }), p = (0, i.A)(() => {
        let e = t.current;
        return null == e ? Promise.resolve() : new Promise(t => {
            e.scrollToTop({
                callback: () => requestAnimationFrame(t)
            })
        })
    }), h = r.useCallback(e => {
        var r, l, i;
        if (!n.keyboardModeEnabled) return;
        let s = null == (l = t.current) || null == (r = l.getScrollerNode()) ? void 0 : r.ownerDocument,
            a = null == s ? void 0 : s.querySelector(e);
        null != a && (null == (i = t.current) || i.scrollIntoViewNode({
            node: a,
            padding: 4 * c.mZ,
            callback: () => null == a ? void 0 : a.focus()
        }))
    }, [n.keyboardModeEnabled, t]), f = r.useCallback(() => {
        n.hasMoreAfter || a._.dispatchToLastSubscribed(u.jej.TEXTAREA_FOCUS)
    }, [n.hasMoreAfter]), g = (0, l.Ay)({
        id: o.D,
        preserveFocusPosition: !1,
        setFocus: h,
        isEnabled: n.keyboardModeEnabled && !n.isEditing,
        scrollToStart: p,
        scrollToEnd: d,
        onNavigateNextAtEnd: f
    }), m = r.useCallback(e => {
        let {
            atEnd: t = !1
        } = e;
        t ? g.focusLastVisibleItem() : g.focusFirstVisibleItem()
    }, [g]);
    return (0, s.Vo)({
        event: u.jej.FOCUS_MESSAGES,
        handler: m
    }), g
}