/** chunk id: 716730 params = (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(311907),
    r = n(397927),
    o = n(315502),
    d = n(709562),
    c = n(222823),
    u = n(741961),
    h = n(234320),
    A = n(795816),
    _ = n(933958),
    m = n(5867),
    p = n(652215),
    g = n(985018),
    f = n(825346);

function x(e) {
    let {
        channelId: t,
        className: n,
        ...x
    } = e, E = l.useRef(null), I = (0, a.bG)([_.Ay], () => _.Ay.getFocusedLayout() === m.E8.RESIZABLE), C = l.useCallback(() => {
        let e = I ? m.E8.NO_CHAT : m.E8.RESIZABLE;
        (0, A.i5)(e)
    }, [I]), {
        unreadCount: N,
        mentionCount: T
    } = function(e) {
        let t = (0, a.bG)([u.A], () => !(0, s.isEmpty)(u.A.getTypingUsers(e)), [e]),
            {
                unreadCount: n,
                mentionCount: i
            } = (0, a.cf)([c.Ay], () => ({
                unreadCount: c.Ay.getUnreadCount(e),
                mentionCount: c.Ay.getMentionCount(e)
            }), [e]);
        return {
            unreadCount: n,
            mentionCount: i,
            isTyping: t
        }
    }(t), S = l.useCallback(() => {
        E.current?.focus()
    }, []);
    (0, h.Vo)({
        event: p.jej.FOCUS_CHAT_BUTTON,
        handler: S
    });
    let b = I ? g.intl.string(g.t["5MstTl"]) : g.intl.string(g.t.kkKapG),
        v = [b];
    T > 0 && v.push(g.intl.formatToPlainString(g.t["3l1GOx"], {
        mentionCount: T
    })), N > 0 && v.push(g.intl.string(g.t.x5zAGZ));
    let y = (0, a.bG)([_.Ay], () => _.Ay.getFocusedLayout()),
        j = T > 0 ? T : N,
        R = j > 0;
    return (0, i.jsxs)("div", {
        className: f.iE,
        children: [(0, i.jsx)(d.l, {
            isTrayButton: !0,
            buttonRef: E,
            onClick: C,
            label: b,
            "aria-label": v.join(", "),
            tooltipPosition: "top",
            iconComponent: y === m.E8.NO_CHAT ? r.jQp : r.g8p,
            themeable: !0,
            className: n,
            ...x
        }), R ? (0, i.jsx)(o.A, {
            hasMentions: T > 0,
            truncatedCount: j > 99 ? "99+" : j,
            className: f.qS
        }) : null]
    })
}