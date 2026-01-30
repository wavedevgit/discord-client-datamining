/** chunk id: 181094, original params: t,a,e (module,exports,require) **/
e.d(a, {
    default: () => b
});
var i = e(627968),
    l = e(189213),
    n = e(397927),
    o = e(429913),
    s = e(47167),
    c = e(713654),
    d = e(46054),
    r = e(975571),
    p = e(652215),
    h = e(985018),
    u = e(620944),
    x = e(206314);

function b(t) {
    var a, e;
    let {
        channel: b,
        guild: m,
        onClose: N,
        transitionState: k
    } = t, v = null != (a = (0, c.gU)(b, m)) ? a : void 0, f = (0, s.Ay)(b, !1), j = (0, o.h)(null == (e = b.linkedLobby) ? void 0 : e.application_id);
    return (0, i.jsxs)(l.Modal, {
        title: h.intl.string(h.t.X8jMDh),
        subtitle: null != f ? {
            text: f,
            leadingIcon: v
        } : void 0,
        actions: void 0,
        transitionState: k,
        onClose: N,
        children: [(0, i.jsx)(n.Text, {
            selectable: !0,
            variant: "text-md/normal",
            className: x.PT,
            children: d.A.parseTopic(b.topic, !0, {
                channelId: b.id
            })
        }), null != j ? (0, i.jsxs)("div", {
            className: u.a6,
            children: [(0, i.jsx)(n.fNY, {
                className: u.NB
            }), (0, i.jsx)(n.Text, {
                variant: "text-sm/normal",
                color: "text-default",
                children: h.intl.format(h.t.Ud5ryv, {
                    applicationName: j.name,
                    helpdeskArticle: r.A.getArticleURL(p.MVz.LINKED_LOBBIES),
                    separatorHook: (t, a) => (0, i.jsx)("span", {
                        className: u.fY,
                        children: t
                    }, a)
                })
            })]
        }) : null]
    })
}