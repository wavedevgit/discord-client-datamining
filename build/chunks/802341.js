/** chunk id: 802341 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var l = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(451988),
    r = n(397927),
    o = n(714114),
    u = n(323073),
    c = n(10862),
    d = n(734057),
    m = n(576705),
    h = n(874026),
    g = n(652215),
    p = n(692827);

function A(e) {
    let {
        guild: t,
        message: n
    } = e, A = i.useRef(null), {
        voiceState: x,
        voiceChannel: f
    } = (0, o.A)({
        userId: n.author.id,
        guildId: t.id
    }), [v, j] = i.useState(!1), N = (0, s.bG)([d.A], () => d.A.getChannel(n.channel_id)?.isVocal()), C = i.useRef(new a.J_(50, () => {
        j(!0)
    })), b = i.useRef(new a.J_(175, () => {
        j(!1)
    }));
    i.useEffect(() => {
        let e = C.current,
            t = b.current;
        return () => {
            e.cancel(), t.cancel()
        }
    }, []);
    let E = i.useCallback(() => {
            b.current.cancel(), C.current.delay()
        }, []),
        I = i.useCallback(() => {
            C.current.cancel(), b.current.delay()
        }, []),
        y = (0, s.bG)([m.A], () => {
            if (null == f) return !1;
            let e = (0, u.r9)() && (0, u.UK)(f.id);
            return (f.isPrivate() || m.A.can(g.xBc.CONNECT, f)) && !e
        });
    return null != x && null != f && f.isGuildVocal() && y && !N ? (0, l.jsx)(r.YNO, {
        targetElementRef: A,
        animation: r.YNO.Animation.TRANSLATE,
        align: "center",
        autoInvert: !0,
        nudgeAlignIntoViewport: !0,
        position: "right",
        shouldShow: v,
        renderPopout: () => (0, l.jsx)("div", {
            onMouseEnter: E,
            onMouseLeave: I,
            children: (0, l.jsx)(h.A, {
                channel: f,
                message: n
            })
        }),
        children: () => (0, l.jsx)("span", {
            className: p.B,
            onMouseEnter: E,
            onMouseLeave: I,
            ref: A,
            children: (0, l.jsx)(c.A, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                channel: f
            })
        })
    }) : null
}