/** chunk id: 847816 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var a = n(627968),
    i = n(64700),
    r = n(503698),
    o = n.n(r),
    l = n(311907),
    s = n(397927),
    c = n(966327),
    d = n(386467),
    u = n(449859),
    _ = n(943220),
    m = n(734057),
    p = n(572855),
    A = n(358731),
    b = n(597351),
    S = n(985018),
    h = n(197083);
let g = i.memo(function(e) {
    let {
        message: t
    } = e, n = (0, l.bG)([m.A], () => m.A.getChannel(t.channel_id));
    return null == n ? null : (0, a.jsx)(A.Ay, {
        children: e => (0, a.jsxs)(d.A.Provider, {
            value: n.guild_id,
            children: [(0, a.jsx)(c.A, {
                user: t.author,
                size: s._3J.SIZE_40,
                className: o()(h.Du, e)
            }), (0, a.jsxs)("div", {
                className: o()(h.cy, e),
                children: [(0, a.jsx)(s.M1G, {
                    children: (0, a.jsx)("div", {
                        className: h.mG,
                        children: (0, a.jsx)(_.A, {
                            className: h.fh,
                            message: t,
                            channel: n
                        })
                    })
                }), (0, a.jsx)(u.A, {
                    timestamp: t.timestamp,
                    className: h.vE,
                    tooltipPosition: "bottom"
                })]
            })]
        })
    })
});

function C(e) {
    let {
        item: t,
        hideMediaOptions: n,
        onClose: i
    } = e, r = t.sourceMetadata?.message;
    return (0, a.jsxs)("div", {
        className: h.XV,
        children: [null != r && (0, a.jsx)(g, {
            message: r
        }), (0, a.jsx)(p.A, {
            item: t,
            hideMediaOptions: n
        }), (0, a.jsx)(A.Ay, {
            mode: A.nY.PINNED,
            children: e => (0, a.jsx)(b.A, {
                onClick: i,
                icon: s.PGe,
                tooltip: S.intl.string(S.t.cpT0Cq),
                className: o()(h.b, e)
            })
        })]
    })
}