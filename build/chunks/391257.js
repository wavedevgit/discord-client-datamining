/** chunk id: 391257, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(435183),
    s = n(47167),
    o = n(46054),
    c = n(95701),
    u = n(576705),
    d = n(314307),
    h = n(652215),
    p = n(985018),
    f = n(516261),
    m = n(206314);

function g(e) {
    let {
        channel: t
    } = e, n = (0, s.Ay)(t, !0), g = (0, r.bG)([u.A], () => u.A.can(h.xBc.MANAGE_CHANNELS, t) && c.bk.has(t.type));
    return (0, l.jsxs)(d.Ay, {
        channelId: t.id,
        children: [(0, l.jsx)(d.WK, {
            channelType: t.type
        }), (0, l.jsx)(d.cr, {
            children: p.intl.format(p.t.I3R7Vn, {
                channelName: n
            })
        }), (0, l.jsx)(d.j1, {
            className: m.PT,
            children: p.intl.format(p.t.pYMVRT, {
                channelName: n,
                topicHook: () => o.A.parseTopic(t.topic, !0, {
                    channelId: t.id
                })
            })
        }), g ? (0, l.jsx)("div", {
            className: f.U,
            children: (0, l.jsx)(i.Button, {
                size: "sm",
                variant: "secondary",
                text: p.intl.string(p.t["3gUsJb"]),
                onClick: () => {
                    a.Ay.open(t.id)
                },
                icon: i.R2l
            })
        }) : null]
    })
}