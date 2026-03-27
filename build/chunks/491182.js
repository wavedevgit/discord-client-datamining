/** chunk id: 491182 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(311907),
    o = n(473193),
    u = n(397927),
    c = n(824994),
    d = n(176201),
    m = n(676608),
    h = n(317525),
    g = n(812782);
let A = function(e) {
    let {
        className: t,
        compact: n = !1,
        contentOnly: s = !1,
        zalgo: A = !0,
        preview: f = !1,
        disableInteraction: p = !1,
        childrenRepliedMessage: x,
        childrenExecutedCommand: C,
        childrenHeader: N,
        childrenSystemMessage: v,
        childrenButtons: E,
        childrenMessageContent: T,
        childrenAccessories: b,
        messageRef: _,
        focusProps: j = {
            offset: {
                left: 4,
                right: 4
            }
        },
        hasThread: I,
        isSystemMessage: S,
        hasReply: R,
        author: y,
        onMouseEnter: M,
        onMouseLeave: O,
        ...w
    } = e, L = (0, a.bG)([h.A], () => y?.guildId == null || y?.colorRoleId == null ? null : h.A.getRole(y.guildId, y.colorRoleId)), k = (0, m.jV)(y?.guildId, L) && (0, d.kz)(y), [G, D] = i.useState(!1), U = i.useCallback(e => {
        D(!0), M?.(e)
    }, [M]), P = i.useCallback(e => {
        D(!1), O?.(e)
    }, [O]), H = (0, c.W)({
        location: "BaseMessage"
    }), V = (0, l.jsx)(o.C.Provider, {
        value: {
            animate: G,
            setAnimate: D
        },
        children: (0, l.jsx)(u.vN3, {
            ...j,
            children: (0, l.jsxs)("div", {
                className: r()(t, {
                    [g.D7]: k,
                    [g.e8]: H && y?.displayNameStyles != null && y?.guildId == null,
                    [g.iE]: !0,
                    [g.kl]: s,
                    [g.oE]: n,
                    [g.VH]: f,
                    [g.E]: !n,
                    [g.GZ]: A,
                    [g.pR]: I,
                    [g.X4]: S,
                    [g.h8]: R
                }),
                ref: _,
                ...w,
                role: "article",
                onMouseEnter: U,
                onMouseLeave: P,
                children: [x, C, (0, l.jsxs)("div", {
                    className: g.PG,
                    children: [v, N, null == v && T]
                }), b, null != E ? (0, l.jsx)("div", {
                    className: g.UD,
                    children: E
                }) : null]
            })
        })
    });
    return p ? (0, l.jsx)(u.M1G, {
        children: V
    }) : V
}