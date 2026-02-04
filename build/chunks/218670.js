/** chunk id: 218670, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(734057),
    s = n(309010),
    u = n(494566),
    c = n(5172);

function d(e) {
    let {
        locked: t
    } = e, n = (0, a.bG)([s.A], () => s.A.getVoiceChannelId()), r = (0, a.bG)([o.A], () => o.A.getChannel(n)), d = null != r;
    return (0, i.jsxs)("div", {
        className: l()({
            [c.KE]: !0,
            [c.xt]: t
        }),
        children: [(0, i.jsxs)("div", {
            className: c.Pm,
            children: [(0, i.jsxs)("div", {
                className: c.qi,
                children: [(0, i.jsx)(u.pp, {
                    voiceChannel: r,
                    locked: t
                }), (0, i.jsx)(u.Yb, {
                    voiceChannel: r,
                    locked: t
                }), (0, i.jsx)(u.GF, {
                    voiceChannel: r,
                    locked: t
                })]
            }), (0, i.jsxs)("div", {
                className: c.qi,
                children: [(0, i.jsx)(u.un, {
                    voiceChannel: r,
                    locked: t
                }), (0, i.jsx)(u.sm, {
                    voiceChannel: r,
                    locked: t
                })]
            }), (0, i.jsx)("div", {
                className: l()(c.qi, d && c.SV),
                children: (0, i.jsx)(u.NO, {
                    voiceChannel: r,
                    locked: t
                })
            })]
        }), d && (0, i.jsx)("div", {
            className: c.Pm,
            children: (0, i.jsx)(u.LK, {
                voiceChannel: r,
                locked: t
            })
        })]
    })
}