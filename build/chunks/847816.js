/** Chunk was on 48654 **/
/** chunk id: 847816, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var l = n(627968),
    i = n(64700),
    r = n(503698),
    o = n.n(r),
    a = n(311907),
    s = n(397927),
    c = n(966327),
    u = n(386467),
    d = n(449859),
    p = n(943220),
    f = n(734057),
    m = n(572855),
    O = n(358731),
    b = n(597351),
    y = n(985018),
    E = n(70438);
let h = i.memo(function(e) {
    let {
        message: t
    } = e, n = (0, a.bG)([f.A], () => f.A.getChannel(t.channel_id));
    return null == n ? null : (0, l.jsx)(O.Ay, {
        children: e => (0, l.jsxs)(u.A.Provider, {
            value: n.guild_id,
            children: [(0, l.jsx)(c.A, {
                user: t.author,
                size: s._3J.SIZE_40,
                className: o()(E.Du, e)
            }), (0, l.jsxs)("div", {
                className: o()(E.cy, e),
                children: [(0, l.jsx)(s.M1G, {
                    children: (0, l.jsx)("div", {
                        className: E.mG,
                        children: (0, l.jsx)(p.A, {
                            className: E.fh,
                            message: t,
                            channel: n
                        })
                    })
                }), (0, l.jsx)(d.A, {
                    timestamp: t.timestamp,
                    className: E.vE,
                    tooltipPosition: "bottom"
                })]
            })]
        })
    })
});

function g(e) {
    var t;
    let {
        item: n,
        hideMediaOptions: i,
        onClose: r
    } = e, a = null == (t = n.sourceMetadata) ? void 0 : t.message;
    return (0, l.jsxs)("div", {
        className: E.XV,
        children: [null != a && (0, l.jsx)(h, {
            message: a
        }), (0, l.jsx)(m.A, {
            item: n,
            hideMediaOptions: i
        }), (0, l.jsx)(O.Ay, {
            mode: O.nY.PINNED,
            children: e => (0, l.jsx)(b.A, {
                onClick: r,
                icon: s.PGe,
                tooltip: y.intl.string(y.t.cpT0Cq),
                className: o()(E.b, e)
            })
        })]
    })
}