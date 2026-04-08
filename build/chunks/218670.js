/** chunk id: 218670 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    s = n(311907),
    l = n(734057),
    o = n(309010),
    d = n(494566),
    c = n(882014);

function u(e) {
    let {
        locked: t
    } = e, n = (0, s.bG)([o.A], () => o.A.getVoiceChannelId()), a = (0, s.bG)([l.A], () => l.A.getChannel(n)), u = null != a;
    return (0, i.jsxs)("div", {
        className: r()({
            [c.KE]: !0,
            [c.xt]: t
        }),
        children: [(0, i.jsxs)("div", {
            className: c.Pm,
            children: [(0, i.jsxs)("div", {
                className: c.qi,
                children: [(0, i.jsx)(d.pp, {
                    voiceChannel: a,
                    locked: t
                }), (0, i.jsx)(d.Yb, {
                    voiceChannel: a,
                    locked: t
                }), (0, i.jsx)(d.GF, {
                    voiceChannel: a,
                    locked: t
                })]
            }), (0, i.jsxs)("div", {
                className: c.qi,
                children: [(0, i.jsx)(d.un, {
                    voiceChannel: a,
                    locked: t
                }), (0, i.jsx)(d.sm, {
                    voiceChannel: a,
                    locked: t
                })]
            }), (0, i.jsx)("div", {
                className: r()(c.qi, u && c.SV),
                children: (0, i.jsx)(d.NO, {
                    voiceChannel: a,
                    locked: t
                })
            })]
        }), u && (0, i.jsx)("div", {
            className: c.Pm,
            children: (0, i.jsx)(d.LK, {
                voiceChannel: a,
                locked: t
            })
        })]
    })
}