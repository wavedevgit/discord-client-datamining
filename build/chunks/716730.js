/** chunk id: 716730, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
}), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n(311907),
    r = n(397927),
    o = n(315502),
    c = n(709562),
    d = n(222823),
    u = n(741961),
    h = n(234320),
    A = n(795816),
    m = n(933958),
    p = n(5867),
    g = n(652215),
    _ = n(985018),
    f = n(766924);

function x(e) {
    let {
        channelId: t,
        className: n,
        ...x
    } = e, C = s.useRef(null), E = (0, a.bG)([m.Ay], () => m.Ay.getFocusedLayout() === p.E8.RESIZABLE), I = s.useCallback(() => {
        let e = E ? p.E8.NO_CHAT : p.E8.RESIZABLE;
        (0, A.i5)(e)
    }, [E]), {
        unreadCount: N,
        mentionCount: b
    } = function(e) {
        let t = (0, a.bG)([u.A], () => !(0, l.isEmpty)(u.A.getTypingUsers(e)), [e]),
            {
                unreadCount: n,
                mentionCount: i
            } = (0, a.cf)([d.Ay], () => ({
                unreadCount: d.Ay.getUnreadCount(e),
                mentionCount: d.Ay.getMentionCount(e)
            }), [e]);
        return {
            unreadCount: n,
            mentionCount: i,
            isTyping: t
        }
    }(t), S = s.useCallback(() => {
        C.current?.focus()
    }, []);
    (0, h.Vo)({
        event: g.jej.FOCUS_CHAT_BUTTON,
        handler: S
    });
    let T = E ? _.intl.string(_.t["5MstTl"]) : _.intl.string(_.t.kkKapG),
        v = [T];
    b > 0 && v.push(_.intl.formatToPlainString(_.t["3l1GOx"], {
        mentionCount: b
    })), N > 0 && v.push(_.intl.string(_.t.x5zAGZ));
    let y = (0, a.bG)([m.Ay], () => m.Ay.getFocusedLayout()),
        j = b > 0 ? b : N,
        R = j > 0;
    return (0, i.jsxs)("div", {
        className: f.iE,
        children: [(0, i.jsx)(c.l, {
            isTrayButton: !0,
            buttonRef: C,
            onClick: I,
            label: T,
            "aria-label": v.join(", "),
            tooltipPosition: "top",
            iconComponent: y === p.E8.NO_CHAT ? r.jQp : r.g8p,
            themeable: !0,
            className: n,
            ...x
        }), R ? (0, i.jsx)(o.A, {
            hasMentions: b > 0,
            truncatedCount: j > 99 ? "99+" : j,
            className: f.qS
        }) : null]
    })
}