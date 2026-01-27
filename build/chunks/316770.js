/** Chunk was on web.js **/
/** chunk id: 316770, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(397927),
    l = n(956793),
    c = n(47167),
    u = n(378570),
    d = n(345942),
    f = n(323443),
    p = n(576705),
    _ = n(531648),
    h = n(10862),
    m = n(818348),
    g = n(985018),
    E = n(380297);

function y(e) {
    let {
        channel: t,
        guild: n,
        onAction: i,
        onClose: y
    } = e, b = (0, c.Ay)(t), O = (0, o.bG)([p.A], () => t.isPrivate() || p.A.can(m.xB.CONNECT, t)), v = () => {
        if (!O) return b;
        let e = e => {
            e.stopPropagation(), t.isGuildStageVoice() ? (0, f.av)(t) : (l.default.selectVoiceChannel(t.id), (0, u.iN)(t.id)), null == i || i({
                action: "OPEN_VOICE_CHANNEL"
            }), null == y || y()
        };
        return (0, r.jsx)(s.DUT, {
            className: a()(E.sd, E.mG),
            onClick: e,
            children: b
        })
    }, A = () => {
        if (null == n) return null;
        let e = e => {
            e.stopPropagation(), (0, d.u)(n.id), null == i || i({
                action: "OPEN_VOICE_GUILD"
            }), null == y || y()
        };
        return (0, r.jsx)(_.A, {
            variant: "text-xs/normal",
            text: g.intl.formatToPlainString(g.t["hq/Qze"], {
                guildName: n.name
            }),
            onClick: e
        })
    };
    return (0, r.jsxs)("div", {
        children: [(0, r.jsxs)(s.Heading, {
            variant: "heading-sm/semibold",
            color: "text-default",
            className: E.CT,
            children: [(0, r.jsx)(h.A, {
                channel: t,
                size: "xxs",
                color: s.LU0.colors.TEXT_DEFAULT,
                className: E.Ow
            }), v()]
        }), A()]
    })
}