/** Chunk was on 97492 **/
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
    p = n(426660),
    h = n(806931),
    f = n(985018),
    g = n(852887);
let m = function(e) {
    let {
        participants: t,
        channel: n,
        hasConnectPermission: m
    } = e, b = t.filter(h.Xw), A = (0, c.H)(n.guild_id), y = l.useCallback(() => {
        A ? (0, o.Ze)(n.guild_id, () => s.default.selectVoiceChannel(n.id)) : s.default.selectVoiceChannel(n.id)
    }, [n.id, n.guild_id, A]), _ = 4 === b.length ? 2 : 3;
    return (0, r.jsxs)("div", {
        className: g.kL,
        children: [(0, r.jsx)(p.A, {}), (0, r.jsx)("div", {
            className: g.os,
            style: {
                maxWidth: 168 * _
            },
            children: b.slice(0, 5).map(e => (0, r.jsx)(d.Ay, {
                participant: e,
                channel: n,
                className: g.Vs,
                inCall: !0,
                noVideoRender: !0,
                popoutType: a.N.NO_POPOUT,
                width: 48
            }, e.id))
        }), (0, r.jsx)(i.Heading, {
            className: g.HA,
            variant: "heading-xxl/semibold",
            children: n.name
        }), (0, r.jsx)("div", {
            className: g.Nu,
            children: (0, r.jsx)(i.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: 0 === b.length ? f.intl.string(f.t.zSqdrS) : 1 === b.length ? f.intl.formatToPlainString(f.t.BUyJIG, {
                    a: (0, u.A)(n, b[0])
                }) : 2 === b.length ? f.intl.formatToPlainString(f.t["dcyZf/"], {
                    a: (0, u.A)(n, b[0]),
                    b: (0, u.A)(n, b[1])
                }) : b.length > 2 ? f.intl.formatToPlainString(f.t["44/Obu"], {
                    a: (0, u.A)(n, b[0]),
                    b: (0, u.A)(n, b[1]),
                    n: b.length - 2
                }) : void 0
            })
        }), (0, r.jsx)("div", {
            className: g.PD,
            children: (0, r.jsx)(i.Button, {
                variant: "overlay-primary",
                text: m ? f.intl.string(f.t["96ANUN"]) : f.intl.string(f.t.TVBCKZ),
                onClick: y,
                disabled: !m
            })
        })]
    })
}