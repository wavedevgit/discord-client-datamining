/** chunk id: 491182 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
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
    g = n(317525),
    h = n(812782);
let A = function(e) {
    let {
        className: t,
        compact: n = !1,
        contentOnly: s = !1,
        zalgo: A = !0,
        preview: f = !1,
        disableInteraction: p = !1,
        childrenRepliedMessage: x,
        childrenExecutedCommand: v,
        childrenHeader: C,
        childrenSystemMessage: N,
        childrenButtons: E,
        childrenMessageContent: _,
        childrenAccessories: I,
        messageRef: b,
        focusProps: S = {
            offset: {
                left: 4,
                right: 4
            }
        },
        hasThread: T,
        isSystemMessage: j,
        hasReply: y,
        author: R,
        onMouseEnter: M,
        onMouseLeave: O,
        ...w
    } = e, L = (0, r.bG)([g.A], () => R?.guildId == null || R?.colorRoleId == null ? null : g.A.getRole(R.guildId, R.colorRoleId)), k = (0, m.jV)(R?.guildId, L) && (0, d.kz)(R), [D, G] = i.useState(!1), U = i.useCallback(e => {
        G(!0), M?.(e)
    }, [M]), P = i.useCallback(e => {
        G(!1), O?.(e)
    }, [O]), H = (0, c.W)({
        location: "BaseMessage"
    }), V = (0, l.jsx)(o.C.Provider, {
        value: {
            animate: D,
            setAnimate: G
        },
        children: (0, l.jsx)(u.vN3, {
            ...S,
            children: (0, l.jsxs)("div", {
                className: a()(t, {
                    [h.D7]: k,
                    [h.e8]: H && R?.displayNameStyles != null && R?.guildId == null,
                    [h.iE]: !0,
                    [h.kl]: s,
                    [h.oE]: n,
                    [h.VH]: f,
                    [h.E]: !n,
                    [h.GZ]: A,
                    [h.pR]: T,
                    [h.X4]: j,
                    [h.h8]: y
                }),
                ref: b,
                ...w,
                role: "article",
                onMouseEnter: U,
                onMouseLeave: P,
                children: [x, v, (0, l.jsxs)("div", {
                    className: h.PG,
                    children: [N, C, null == N && _]
                }), I, null != E ? (0, l.jsx)("div", {
                    className: h.UD,
                    children: E
                }) : null]
            })
        })
    });
    return p ? (0, l.jsx)(u.M1G, {
        children: V
    }) : V
}