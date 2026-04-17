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
    h = n(985018),
    S = n(897003);
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
                className: o()(S.Du, e)
            }), (0, a.jsxs)("div", {
                className: o()(S.cy, e),
                children: [(0, a.jsx)(s.M1G, {
                    children: (0, a.jsx)("div", {
                        className: S.mG,
                        children: (0, a.jsx)(_.A, {
                            className: S.fh,
                            message: t,
                            channel: n
                        })
                    })
                }), (0, a.jsx)(u.A, {
                    timestamp: t.timestamp,
                    className: S.vE,
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
        className: S.XV,
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
                tooltip: h.intl.string(h.t.cpT0Cq),
                className: o()(S.b, e)
            })
        })]
    })
}