/** chunk id: 218670 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(311907),
    o = n(397927),
    u = n(55619),
    d = n(734057),
    c = n(309010),
    h = n(351906),
    g = n(589051),
    m = n(494566),
    f = n(652215),
    A = n(985018),
    I = n(423005);
let E = r.memo(function() {
    let e = (0, a.bG)([h.A], () => h.A.enabled),
        t = (0, g.Mn)("StreamerModeNotice");
    return e && t ? (0, i.jsxs)(o.$Td, {
        color: o.Hv$.STREAMER_MODE,
        className: I.$X,
        children: [(0, i.jsx)(o.Text, {
            tag: "span",
            variant: "text-sm/medium",
            color: "always-white",
            children: A.intl.string(A.t.q9K7jp)
        }), (0, i.jsx)(o.Z_L, {
            className: I.lI,
            onClick: () => u.A.setEnabled(!1),
            noticeType: f.kqX.STREAMER_MODE,
            children: A.intl.string(A.t.R9GHya)
        })]
    }) : null
});

function p(e) {
    let {
        locked: t
    } = e, n = (0, a.bG)([c.A], () => c.A.getVoiceChannelId()), r = (0, a.bG)([d.A], () => d.A.getChannel(n)), l = null != r;
    return (0, i.jsxs)("div", {
        className: s()({
            [I.KE]: !0,
            [I.xt]: t
        }),
        children: [(0, i.jsx)(E, {}), (0, i.jsxs)("div", {
            className: I.Pm,
            children: [(0, i.jsxs)("div", {
                className: I.qi,
                children: [(0, i.jsx)(m.pp, {
                    voiceChannel: r,
                    locked: t
                }), (0, i.jsx)(m.Yb, {
                    voiceChannel: r,
                    locked: t
                }), (0, i.jsx)(m.GF, {
                    voiceChannel: r,
                    locked: t
                })]
            }), (0, i.jsxs)("div", {
                className: I.qi,
                children: [(0, i.jsx)(m.un, {
                    voiceChannel: r,
                    locked: t
                }), (0, i.jsx)(m.sm, {
                    voiceChannel: r,
                    locked: t
                })]
            }), (0, i.jsx)("div", {
                className: s()(I.qi, l && I.SV),
                children: (0, i.jsx)(m.NO, {
                    voiceChannel: r,
                    locked: t
                })
            })]
        }), l && (0, i.jsx)("div", {
            className: I.Pm,
            children: (0, i.jsx)(m.LK, {
                voiceChannel: r,
                locked: t
            })
        })]
    })
}