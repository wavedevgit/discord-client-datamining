/** chunk id: 623413, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(956793),
    o = n(313961),
    c = n(164617),
    u = n(202384),
    d = n(51758),
    h = n(175203),
    p = n(426660),
    g = n(403362),
    f = n(69407),
    m = n(110618),
    b = n(566388),
    A = n(985018),
    y = n(852887);
let O = function(e) {
    let {
        participants: t,
        channel: n,
        hasConnectPermission: O
    } = e, _ = (0, d.H)(n.guild_id), j = l.useCallback(() => {
        _ ? (0, u.Ze)(n.guild_id, () => a.default.selectVoiceChannel(n.id)) : a.default.selectVoiceChannel(n.id)
    }, [n.id, n.guild_id, _]), x = t.filter(e => e.type === f.wY.VOICE), v = 4 === x.length ? 2 : 3, E = (0, i.yK)([o.A], () => x.map(e => o.A.getParticipant(n.id, e.id)).filter(g.Vq), [n.id, x]);
    return (0, r.jsxs)("div", {
        className: y.kL,
        children: [(0, r.jsx)(p.A, {}), (0, r.jsx)("div", {
            className: y.os,
            style: {
                maxWidth: 168 * v
            },
            children: E.slice(0, 5).map(e => (0, r.jsx)(h.Ay, {
                participant: e,
                channel: n,
                className: y.Vs,
                inCall: !0,
                noVideoRender: !0,
                popoutType: c.N.NO_POPOUT,
                width: 48
            }, e.id))
        }), (0, r.jsx)(s.Heading, {
            className: y.HA,
            variant: "heading-xxl/normal",
            children: n.name
        }), (0, r.jsx)("div", {
            className: y.Nu,
            children: (0, r.jsx)(s.Text, {
                tag: "div",
                color: "text-default",
                variant: "heading-lg/normal",
                children: (0, m.DO)(n, x)
            })
        }), (0, r.jsxs)("div", {
            className: y.UD,
            children: [(0, r.jsx)("div", {
                className: y.PD,
                children: (0, r.jsx)(s.Button, {
                    variant: "overlay-primary",
                    text: O ? A.intl.string(A.t["7vb2cc"]) : A.intl.string(A.t.TVBCKZ),
                    onClick: j,
                    disabled: !O
                })
            }), (0, r.jsx)(b.l, {
                channel: n
            })]
        })]
    })
}