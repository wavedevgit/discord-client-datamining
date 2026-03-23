/** chunk id: 802341 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var l = n(627968),
    s = n(64700),
    i = n(311907),
    r = n(451988),
    a = n(397927),
    o = n(714114),
    u = n(323073),
    c = n(10862),
    d = n(734057),
    m = n(576705),
    h = n(874026),
    g = n(652215),
    A = n(575157);

function f(e) {
    let {
        guild: t,
        message: n
    } = e, f = s.useRef(null), {
        voiceState: p,
        voiceChannel: x
    } = (0, o.A)({
        userId: n.author.id,
        guildId: t.id
    }), [v, C] = s.useState(!1), N = (0, i.bG)([d.A], () => d.A.getChannel(n.channel_id)?.isVocal()), T = s.useRef(new r.J_(50, () => {
        C(!0)
    })), b = s.useRef(new r.J_(175, () => {
        C(!1)
    }));
    s.useEffect(() => {
        let e = T.current,
            t = b.current;
        return () => {
            e.cancel(), t.cancel()
        }
    }, []);
    let j = s.useCallback(() => {
            b.current.cancel(), T.current.delay()
        }, []),
        E = s.useCallback(() => {
            T.current.cancel(), b.current.delay()
        }, []),
        I = (0, i.bG)([m.A], () => {
            if (null == x) return !1;
            let e = (0, u.r9)() && (0, u.UK)(x.id);
            return (x.isPrivate() || m.A.can(g.xBc.CONNECT, x)) && !e
        });
    return null != p && null != x && x.isGuildVocal() && I && !N ? (0, l.jsx)(a.YNO, {
        targetElementRef: f,
        animation: a.YNO.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "right",
        shouldShow: v,
        renderPopout: () => (0, l.jsx)("div", {
            onMouseEnter: j,
            onMouseLeave: E,
            children: (0, l.jsx)(h.A, {
                channel: x,
                message: n
            })
        }),
        children: () => (0, l.jsx)("span", {
            className: A.B,
            onMouseEnter: j,
            onMouseLeave: E,
            ref: f,
            children: (0, l.jsx)(c.A, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                channel: x
            })
        })
    }) : null
}