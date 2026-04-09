/** chunk id: 453178 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    l = n(503698),
    s = n.n(l),
    r = n(311907),
    a = n(52133),
    o = n(397927),
    d = n(402216),
    c = n(450149),
    u = n(279250),
    m = n(877315),
    _ = n(607407),
    h = n(616356),
    p = n(734057),
    g = n(682524);

function A(e) {
    let {
        stream: t,
        currentUserId: n,
        className: l,
        onClick: A
    } = e, {
        activeStream: x,
        channel: f
    } = (0, r.bG)([h.A, p.A], () => ({
        activeStream: h.A.getActiveStreamForApplicationStream(t),
        channel: p.A.getChannel(t.channelId)
    }), [t], a.A), {
        previewUrl: C,
        isLoading: E
    } = (0, c.A)(t.guildId, t.channelId, t.ownerId), [I, v] = (0, u.zP)(f);
    return (0, i.jsxs)(o.DUT, {
        onClick: I ? A : void 0,
        className: s()(g.Um, {
            [g.qf]: null == C && !E,
            [g.vk]: I
        }, l),
        children: [(0, i.jsx)("div", {
            className: g.rB,
            children: (0, i.jsx)(_.A, {
                className: g.y6,
                stream: t,
                noText: !0
            })
        }), (0, i.jsx)(d.Ay, {
            className: g.Ok,
            size: d.ed.SMALL
        }), I ? (0, i.jsxs)("div", {
            className: g.H_,
            children: [(0, i.jsx)("div", {
                className: g.bF
            }), (0, i.jsx)(o.Button, {
                variant: "overlay-secondary",
                size: "sm",
                icon: o.Fzq,
                text: (0, m.A)(t, x, n, v)
            })]
        }) : null]
    })
}