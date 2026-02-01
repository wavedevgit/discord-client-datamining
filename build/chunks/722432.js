/** chunk id: 722432, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(64700),
    r = n(884362),
    i = n(765548),
    a = n(234320),
    s = n(203982),
    o = n(375901),
    c = n(381941),
    u = n(652215);

function d(e) {
    let {
        scrollerRef: t
    } = e, n = function(e, t) {
        if (null == e) return {};
        var n, l, r, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, l, r = {},
                    i = Object.getOwnPropertyNames(e);
                for (l = 0; l < i.length; l++) n = i[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) l = n[r], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (i[l] = e[l]);
        return i
    }(e, ["scrollerRef"]), d = (0, i.A)(() => {
        let e = t.current;
        return null == e ? Promise.resolve() : new Promise(t => {
            e.scrollToBottom({
                callback: () => requestAnimationFrame(t)
            })
        })
    }), h = (0, i.A)(() => {
        let e = t.current;
        return null == e ? Promise.resolve() : new Promise(t => {
            e.scrollToTop({
                callback: () => requestAnimationFrame(t)
            })
        })
    }), p = l.useCallback(e => {
        var l, r, i;
        if (!n.keyboardModeEnabled) return;
        let a = null == (r = t.current) || null == (l = r.getScrollerNode()) ? void 0 : l.ownerDocument,
            s = null == a ? void 0 : a.querySelector(e);
        null != s && (null == (i = t.current) || i.scrollIntoViewNode({
            node: s,
            padding: 4 * c.mZ,
            callback: () => null == s ? void 0 : s.focus()
        }))
    }, [n.keyboardModeEnabled, t]), f = l.useCallback(() => {
        n.hasMoreAfter || s._.dispatchToLastSubscribed(u.jej.TEXTAREA_FOCUS)
    }, [n.hasMoreAfter]), m = (0, r.Ay)({
        id: o.D,
        preserveFocusPosition: !1,
        setFocus: p,
        isEnabled: n.keyboardModeEnabled && !n.isEditing,
        scrollToStart: h,
        scrollToEnd: d,
        onNavigateNextAtEnd: f
    }), g = l.useCallback(e => {
        let {
            atEnd: t = !1
        } = e;
        t ? m.focusLastVisibleItem() : m.focusFirstVisibleItem()
    }, [m]);
    return (0, a.Vo)({
        event: u.jej.FOCUS_MESSAGES,
        handler: g
    }), m
}