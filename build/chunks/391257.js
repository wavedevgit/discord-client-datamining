/** Chunk was on 1113 **/
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
    h = n(652215),
    p = n(985018),
    g = n(516261),
    f = n(206314);

function m(e) {
    let {
        channel: t
    } = e, n = (0, a.Ay)(t, !0), m = (0, l.bG)([u.A], () => u.A.can(h.xBc.MANAGE_CHANNELS, t) && c.bk.has(t.type));
    return (0, r.jsxs)(d.Ay, {
        channelId: t.id,
        children: [(0, r.jsx)(d.WK, {
            channelType: t.type
        }), (0, r.jsx)(d.cr, {
            children: p.intl.format(p.t.I3R7Vn, {
                channelName: n
            })
        }), (0, r.jsx)(d.j1, {
            className: f.PT,
            children: p.intl.format(p.t.pYMVRT, {
                channelName: n,
                topicHook: () => o.A.parseTopic(t.topic, !0, {
                    channelId: t.id
                })
            })
        }), m ? (0, r.jsx)("div", {
            className: g.U,
            children: (0, r.jsx)(i.Button, {
                size: "sm",
                variant: "secondary",
                text: p.intl.string(p.t["3gUsJb"]),
                onClick: () => {
                    s.Ay.open(t.id)
                },
                icon: i.R2l
            })
        }) : null]
    })
}