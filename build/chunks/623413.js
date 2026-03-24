/** chunk id: 623413 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(956793),
    o = n(313961),
    c = n(164617),
    d = n(47167),
    u = n(202384),
    h = n(51758),
    A = n(175203),
    m = n(426660),
    _ = n(403362),
    p = n(69407),
    g = n(110618),
    f = n(566388),
    x = n(985018),
    C = n(852887);
let E = function(e) {
    let {
        participants: t,
        channel: n,
        hasConnectPermission: E
    } = e, I = (0, h.H)(n.guild_id), N = s.useCallback(() => {
        I ? (0, u.Ze)(n.guild_id, () => r.default.selectVoiceChannel(n.id)) : r.default.selectVoiceChannel(n.id)
    }, [n.id, n.guild_id, I]), b = t.filter(e => e.type === p.wY.VOICE), S = (0, d.Ay)(n), T = 4 === b.length ? 2 : 3, v = (0, l.yK)([o.A], () => b.map(e => o.A.getParticipant(n.id, e.id)).filter(_.Vq), [n.id, b]);
    return (0, i.jsxs)("div", {
        className: C.kL,
        children: [(0, i.jsx)(m.A, {}), (0, i.jsx)("div", {
            className: C.os,
            style: {
                maxWidth: 168 * T
            },
            children: v.slice(0, 5).map(e => (0, i.jsx)(A.Ay, {
                participant: e,
                channel: n,
                className: C.Vs,
                inCall: !0,
                noVideoRender: !0,
                popoutType: c.N.NO_POPOUT,
                width: 48
            }, e.id))
        }), (0, i.jsx)(a.Heading, {
            className: C.HA,
            variant: "heading-xxl/normal",
            children: S
        }), (0, i.jsx)("div", {
            className: C.Nu,
            children: (0, i.jsx)(a.Text, {
                tag: "div",
                color: "text-default",
                variant: "heading-lg/normal",
                children: (0, g.DO)(n, b)
            })
        }), (0, i.jsxs)("div", {
            className: C.UD,
            children: [(0, i.jsx)("div", {
                className: C.PD,
                children: (0, i.jsx)(a.Button, {
                    variant: "overlay-primary",
                    text: E ? x.intl.string(x.t["7vb2cc"]) : x.intl.string(x.t.TVBCKZ),
                    onClick: N,
                    disabled: !E
                })
            }), (0, i.jsx)(f.l, {
                channel: n
            })]
        })]
    })
}