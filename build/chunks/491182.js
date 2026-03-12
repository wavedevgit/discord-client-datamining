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
    g = n(222590);
let p = function(e) {
    let {
        className: t,
        compact: n = !1,
        contentOnly: s = !1,
        zalgo: p = !0,
        preview: A = !1,
        disableInteraction: x = !1,
        childrenRepliedMessage: f,
        childrenExecutedCommand: v,
        childrenHeader: j,
        childrenSystemMessage: N,
        childrenButtons: C,
        childrenMessageContent: b,
        childrenAccessories: E,
        messageRef: I,
        focusProps: y = {
            offset: {
                left: 4,
                right: 4
            }
        },
        hasThread: T,
        isSystemMessage: R,
        hasReply: _,
        author: S,
        onMouseEnter: M,
        onMouseLeave: k,
        ...O
    } = e, w = (0, r.bG)([h.A], () => S?.guildId == null || S?.colorRoleId == null ? null : h.A.getRole(S.guildId, S.colorRoleId)), G = (0, m.jV)(S?.guildId, w) && (0, d.kz)(S), [D, P] = i.useState(!1), L = i.useCallback(e => {
        P(!0), M?.(e)
    }, [M]), U = i.useCallback(e => {
        P(!1), k?.(e)
    }, [k]), $ = (0, c.W)({
        location: "BaseMessage"
    }), H = (0, l.jsx)(o.C.Provider, {
        value: {
            animate: D,
            setAnimate: P
        },
        children: (0, l.jsx)(u.vN3, {
            ...y,
            children: (0, l.jsxs)("div", {
                className: a()(t, {
                    [g.D7]: G,
                    [g.e8]: $ && S?.displayNameStyles != null && S?.guildId == null,
                    [g.iE]: !0,
                    [g.kl]: s,
                    [g.oE]: n,
                    [g.VH]: A,
                    [g.E]: !n,
                    [g.GZ]: p,
                    [g.pR]: T,
                    [g.X4]: R,
                    [g.h8]: _
                }),
                ref: I,
                ...O,
                role: "article",
                onMouseEnter: L,
                onMouseLeave: U,
                children: [f, v, (0, l.jsxs)("div", {
                    className: g.PG,
                    children: [N, j, null == N && b]
                }), E, null != C ? (0, l.jsx)("div", {
                    className: g.UD,
                    children: C
                }) : null]
            })
        })
    });
    return x ? (0, l.jsx)(u.M1G, {
        children: H
    }) : H
}