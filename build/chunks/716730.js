/** chunk id: 716730, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(735438),
    s = n(311907),
    a = n(397927),
    o = n(315502),
    c = n(709562),
    u = n(222823),
    d = n(741961),
    p = n(234320),
    h = n(795816),
    g = n(933958),
    f = n(5867),
    m = n(652215),
    b = n(985018),
    A = n(766924);

function y(e) {
    let {
        channelId: t,
        className: n
    } = e, y = function(e, t) {
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
    }(e, ["channelId", "className"]), O = l.useRef(null), j = (0, s.bG)([g.Ay], () => g.Ay.getFocusedLayout() === f.E8.RESIZABLE), x = l.useCallback(() => {
        let e = j ? f.E8.NO_CHAT : f.E8.RESIZABLE;
        (0, h.i5)(e)
    }, [j]), {
        unreadCount: _,
        mentionCount: v
    } = function(e) {
        let t = (0, s.bG)([d.A], () => !(0, i.isEmpty)(d.A.getTypingUsers(e)), [e]),
            {
                unreadCount: n,
                mentionCount: r
            } = (0, s.cf)([u.Ay], () => ({
                unreadCount: u.Ay.getUnreadCount(e),
                mentionCount: u.Ay.getMentionCount(e)
            }), [e]);
        return {
            unreadCount: n,
            mentionCount: r,
            isTyping: t
        }
    }(t), E = l.useCallback(() => {
        var e;
        null == (e = O.current) || e.focus()
    }, []);
    (0, p.Vo)({
        event: m.jej.FOCUS_CHAT_BUTTON,
        handler: E
    });
    let C = j ? b.intl.string(b.t["5MstTl"]) : b.intl.string(b.t.kkKapG),
        S = [C];
    v > 0 && S.push(b.intl.formatToPlainString(b.t["3l1GOx"], {
        mentionCount: v
    })), _ > 0 && S.push(b.intl.string(b.t.x5zAGZ));
    let I = (0, s.bG)([g.Ay], () => g.Ay.getFocusedLayout()),
        N = v > 0 ? v : _,
        T = N > 0;
    return (0, r.jsxs)("div", {
        className: A.iE,
        children: [(0, r.jsx)(c.l, function(e) {
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
        }({
            isTrayButton: !0,
            buttonRef: O,
            onClick: x,
            label: C,
            "aria-label": S.join(", "),
            tooltipPosition: "top",
            iconComponent: I === f.E8.NO_CHAT ? a.jQp : a.g8p,
            themeable: !0,
            className: n
        }, y)), T ? (0, r.jsx)(o.A, {
            hasMentions: v > 0,
            truncatedCount: N > 99 ? "99+" : N,
            className: A.qS
        }) : null]
    })
}