/** chunk id: 218670, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(311907),
    a = n(734057),
    o = n(309010),
    u = n(494566),
    d = n(5172);

function c(e) {
    let {
        locked: t
    } = e, n = (0, s.bG)([o.A], () => o.A.getVoiceChannelId()), l = (0, s.bG)([a.A], () => a.A.getChannel(n)), c = null != l;
    return (0, i.jsxs)("div", {
        className: r()({
            [d.KE]: !0,
            [d.xt]: t
        }),
        children: [(0, i.jsxs)("div", {
            className: d.Pm,
            children: [(0, i.jsxs)("div", {
                className: d.qi,
                children: [(0, i.jsx)(u.pp, {
                    voiceChannel: l,
                    locked: t
                }), (0, i.jsx)(u.Yb, {
                    voiceChannel: l,
                    locked: t
                }), (0, i.jsx)(u.GF, {
                    voiceChannel: l,
                    locked: t
                })]
            }), (0, i.jsxs)("div", {
                className: d.qi,
                children: [(0, i.jsx)(u.un, {
                    voiceChannel: l,
                    locked: t
                }), (0, i.jsx)(u.sm, {
                    voiceChannel: l,
                    locked: t
                })]
            }), (0, i.jsx)("div", {
                className: r()(d.qi, c && d.SV),
                children: (0, i.jsx)(u.NO, {
                    voiceChannel: l,
                    locked: t
                })
            })]
        }), c && (0, i.jsx)("div", {
            className: d.Pm,
            children: (0, i.jsx)(u.LK, {
                voiceChannel: l,
                locked: t
            })
        })]
    })
}