/** Chunk was on 1113 **/
/** chunk id: 484191, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(956793),
    a = n(164617),
    o = n(202384),
    c = n(51758),
    u = n(141035),
    d = n(175203),
    h = n(426660),
    p = n(806931),
    g = n(985018),
    f = n(852887);
let m = function(e) {
    let {
        participants: t,
        channel: n,
        hasConnectPermission: m
    } = e, b = t.filter(p.Xw), A = (0, c.H)(n.guild_id), y = l.useCallback(() => {
        A ? (0, o.Ze)(n.guild_id, () => s.default.selectVoiceChannel(n.id)) : s.default.selectVoiceChannel(n.id)
    }, [n.id, n.guild_id, A]), O = 4 === b.length ? 2 : 3;
    return (0, r.jsxs)("div", {
        className: f.kL,
        children: [(0, r.jsx)(h.A, {}), (0, r.jsx)("div", {
            className: f.os,
            style: {
                maxWidth: 168 * O
            },
            children: b.slice(0, 5).map(e => (0, r.jsx)(d.Ay, {
                participant: e,
                channel: n,
                className: f.Vs,
                inCall: !0,
                noVideoRender: !0,
                popoutType: a.N.NO_POPOUT,
                width: 48
            }, e.id))
        }), (0, r.jsx)(i.Heading, {
            className: f.HA,
            variant: "heading-xxl/semibold",
            children: n.name
        }), (0, r.jsx)("div", {
            className: f.Nu,
            children: (0, r.jsx)(i.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: 0 === b.length ? g.intl.string(g.t.zSqdrS) : 1 === b.length ? g.intl.formatToPlainString(g.t.BUyJIG, {
                    a: (0, u.A)(n, b[0])
                }) : 2 === b.length ? g.intl.formatToPlainString(g.t["dcyZf/"], {
                    a: (0, u.A)(n, b[0]),
                    b: (0, u.A)(n, b[1])
                }) : b.length > 2 ? g.intl.formatToPlainString(g.t["44/Obu"], {
                    a: (0, u.A)(n, b[0]),
                    b: (0, u.A)(n, b[1]),
                    n: b.length - 2
                }) : void 0
            })
        }), (0, r.jsx)("div", {
            className: f.PD,
            children: (0, r.jsx)(i.Button, {
                variant: "overlay-primary",
                text: m ? g.intl.string(g.t["96ANUN"]) : g.intl.string(g.t.TVBCKZ),
                onClick: y,
                disabled: !m
            })
        })]
    })
}