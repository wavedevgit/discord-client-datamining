/** Chunk was on 97492 **/
/** chunk id: 391257, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(435183),
    a = n(47167),
    o = n(46054),
    c = n(95701),
    u = n(576705),
    d = n(314307),
    p = n(652215),
    h = n(985018),
    f = n(516261),
    g = n(206314);

function m(e) {
    let {
        channel: t
    } = e, n = (0, a.Ay)(t, !0), m = (0, l.bG)([u.A], () => u.A.can(p.xBc.MANAGE_CHANNELS, t) && c.bk.has(t.type));
    return (0, r.jsxs)(d.Ay, {
        channelId: t.id,
        children: [(0, r.jsx)(d.WK, {
            channelType: t.type
        }), (0, r.jsx)(d.cr, {
            children: h.intl.format(h.t.I3R7Vn, {
                channelName: n
            })
        }), (0, r.jsx)(d.j1, {
            className: g.PT,
            children: h.intl.format(h.t.pYMVRT, {
                channelName: n,
                topicHook: () => o.A.parseTopic(t.topic, !0, {
                    channelId: t.id
                })
            })
        }), m ? (0, r.jsx)("div", {
            className: f.U,
            children: (0, r.jsx)(i.Button, {
                size: "sm",
                variant: "secondary",
                text: h.intl.string(h.t["3gUsJb"]),
                onClick: () => {
                    s.Ay.open(t.id)
                },
                icon: i.R2l
            })
        }) : null]
    })
}