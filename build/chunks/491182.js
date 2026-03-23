/** chunk id: 491182 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var l = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    a = n(311907),
    o = n(473193),
    u = n(397927),
    c = n(824994),
    d = n(176201),
    m = n(676608),
    h = n(317525),
    g = n(679740);
let A = function(e) {
    let {
        className: t,
        compact: n = !1,
        contentOnly: i = !1,
        zalgo: A = !0,
        preview: f = !1,
        disableInteraction: p = !1,
        childrenRepliedMessage: x,
        childrenExecutedCommand: v,
        childrenHeader: C,
        childrenSystemMessage: N,
        childrenButtons: T,
        childrenMessageContent: b,
        childrenAccessories: j,
        messageRef: E,
        focusProps: I = {
            offset: {
                left: 4,
                right: 4
            }
        },
        hasThread: S,
        isSystemMessage: _,
        hasReply: R,
        author: y,
        onMouseEnter: M,
        onMouseLeave: O,
        ...w
    } = e, k = (0, a.bG)([h.A], () => y?.guildId == null || y?.colorRoleId == null ? null : h.A.getRole(y.guildId, y.colorRoleId)), L = (0, m.jV)(y?.guildId, k) && (0, d.kz)(y), [G, D] = s.useState(!1), P = s.useCallback(e => {
        D(!0), M?.(e)
    }, [M]), U = s.useCallback(e => {
        D(!1), O?.(e)
    }, [O]), H = (0, c.W)({
        location: "BaseMessage"
    }), V = (0, l.jsx)(o.C.Provider, {
        value: {
            animate: G,
            setAnimate: D
        },
        children: (0, l.jsx)(u.vN3, {
            ...I,
            children: (0, l.jsxs)("div", {
                className: r()(t, {
                    [g.D7]: L,
                    [g.e8]: H && y?.displayNameStyles != null && y?.guildId == null,
                    [g.iE]: !0,
                    [g.kl]: i,
                    [g.oE]: n,
                    [g.VH]: f,
                    [g.E]: !n,
                    [g.GZ]: A,
                    [g.pR]: S,
                    [g.X4]: _,
                    [g.h8]: R
                }),
                ref: E,
                ...w,
                role: "article",
                onMouseEnter: P,
                onMouseLeave: U,
                children: [x, v, (0, l.jsxs)("div", {
                    className: g.PG,
                    children: [N, C, null == N && b]
                }), j, null != T ? (0, l.jsx)("div", {
                    className: g.UD,
                    children: T
                }) : null]
            })
        })
    });
    return p ? (0, l.jsx)(u.M1G, {
        children: V
    }) : V
}