/** chunk id: 491182 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(311907),
    o = n(473193),
    u = n(397927),
    c = n(824994),
    d = n(176201),
    m = n(676608),
    h = n(317525),
    g = n(679740);
let p = function(e) {
    let {
        className: t,
        compact: n = !1,
        contentOnly: s = !1,
        zalgo: p = !0,
        preview: A = !1,
        disableInteraction: f = !1,
        childrenRepliedMessage: x,
        childrenExecutedCommand: v,
        childrenHeader: j,
        childrenSystemMessage: N,
        childrenButtons: b,
        childrenMessageContent: C,
        childrenAccessories: E,
        messageRef: I,
        focusProps: R = {
            offset: {
                left: 4,
                right: 4
            }
        },
        hasThread: T,
        isSystemMessage: y,
        hasReply: _,
        author: S,
        onMouseEnter: M,
        onMouseLeave: k,
        ...O
    } = e, P = (0, r.bG)([h.A], () => S?.guildId == null || S?.colorRoleId == null ? null : h.A.getRole(S.guildId, S.colorRoleId)), w = (0, m.jV)(S?.guildId, P) && (0, d.kz)(S), [G, D] = i.useState(!1), L = i.useCallback(e => {
        D(!0), M?.(e)
    }, [M]), U = i.useCallback(e => {
        D(!1), k?.(e)
    }, [k]), B = (0, c.W)({
        location: "BaseMessage"
    }), $ = (0, l.jsx)(o.C.Provider, {
        value: {
            animate: G,
            setAnimate: D
        },
        children: (0, l.jsx)(u.vN3, {
            ...R,
            children: (0, l.jsxs)("div", {
                className: a()(t, {
                    [g.D7]: w,
                    [g.e8]: B && S?.displayNameStyles != null && S?.guildId == null,
                    [g.iE]: !0,
                    [g.kl]: s,
                    [g.oE]: n,
                    [g.VH]: A,
                    [g.E]: !n,
                    [g.GZ]: p,
                    [g.pR]: T,
                    [g.X4]: y,
                    [g.h8]: _
                }),
                ref: I,
                ...O,
                role: "article",
                onMouseEnter: L,
                onMouseLeave: U,
                children: [x, v, (0, l.jsxs)("div", {
                    className: g.PG,
                    children: [N, j, null == N && C]
                }), E, null != b ? (0, l.jsx)("div", {
                    className: g.UD,
                    children: b
                }) : null]
            })
        })
    });
    return f ? (0, l.jsx)(u.M1G, {
        children: $
    }) : $
}