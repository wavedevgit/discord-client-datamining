/** Chunk was on web.js **/
/** chunk id: 62199, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(64700),
    i = n(311907),
    a = n(385612),
    o = n(101058),
    s = n(696451),
    l = n(352413),
    c = n(45837);

function u(e) {
    let {
        user: t,
        guildId: n,
        size: u,
        showPending: d = !1,
        animateOnHover: f = !1,
        avatarOverride: p
    } = e, {
        onMouseEnter: _,
        onMouseLeave: h,
        shouldAnimate: m
    } = (0, c.A)(f), {
        pendingAvatar: g
    } = (0, l.A)({
        guildId: null === n ? void 0 : n
    }), E = d && null != t ? (0, o.V7)({
        userId: t.id,
        image: g,
        canAnimate: m,
        size: u
    }) : void 0, y = void 0 !== p ? p : E, b = (0, i.bG)([s.Ay], () => null != n && null != t ? s.Ay.getMember(n, t.id) : null);
    return {
        avatarSrc: r.useMemo(() => null != t ? (0, a.sv)(y, b, t, {
            canAnimate: m,
            size: u
        }) : void 0, [y, b, t, m, u]),
        isAvatarAnimating: m,
        eventHandlers: {
            onMouseEnter: _,
            onMouseLeave: h
        }
    }
}