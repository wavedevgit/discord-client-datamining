/** Chunk was on 48654 **/
/** chunk id: 847816, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    o = n.n(l),
    a = n(311907),
    s = n(397927),
    c = n(966327),
    u = n(386467),
    d = n(449859),
    p = n(943220),
    f = n(734057),
    O = n(572855),
    m = n(358731),
    b = n(597351),
    y = n(985018),
    g = n(70438);
let _ = i.memo(function(e) {
    let {
        message: t
    } = e, n = (0, a.bG)([f.A], () => f.A.getChannel(t.channel_id));
    return null == n ? null : (0, r.jsx)(m.Ay, {
        children: e => (0, r.jsxs)(u.A.Provider, {
            value: n.guild_id,
            children: [(0, r.jsx)(c.A, {
                user: t.author,
                size: s._3J.SIZE_40,
                className: o()(g.Du, e)
            }), (0, r.jsxs)("div", {
                className: o()(g.cy, e),
                children: [(0, r.jsx)(s.M1G, {
                    children: (0, r.jsx)("div", {
                        className: g.mG,
                        children: (0, r.jsx)(p.A, {
                            className: g.fh,
                            message: t,
                            channel: n
                        })
                    })
                }), (0, r.jsx)(d.A, {
                    timestamp: t.timestamp,
                    className: g.vE,
                    tooltipPosition: "bottom"
                })]
            })]
        })
    })
});

function E(e) {
    var t;
    let {
        item: n,
        hideMediaOptions: i,
        onClose: l
    } = e, a = null == (t = n.sourceMetadata) ? void 0 : t.message;
    return (0, r.jsxs)("div", {
        className: g.XV,
        children: [null != a && (0, r.jsx)(_, {
            message: a
        }), (0, r.jsx)(O.A, {
            item: n,
            hideMediaOptions: i
        }), (0, r.jsx)(m.Ay, {
            mode: m.nY.PINNED,
            children: e => (0, r.jsx)(b.A, {
                onClick: l,
                icon: s.PGe,
                tooltip: y.intl.string(y.t.cpT0Cq),
                className: o()(g.b, e)
            })
        })]
    })
}