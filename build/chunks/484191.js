/** chunk id: 484191 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(956793),
    a = n(164617),
    o = n(47167),
    c = n(202384),
    d = n(51758),
    u = n(141035),
    h = n(175203),
    A = n(426660),
    m = n(806931),
    p = n(985018),
    g = n(852887);
let _ = function(e) {
    let {
        participants: t,
        channel: n,
        hasConnectPermission: _
    } = e, f = t.filter(m.Xw), x = (0, d.H)(n.guild_id), C = s.useCallback(() => {
        x ? (0, c.Ze)(n.guild_id, () => r.default.selectVoiceChannel(n.id)) : r.default.selectVoiceChannel(n.id)
    }, [n.id, n.guild_id, x]), E = 4 === f.length ? 2 : 3, I = (0, o.Ay)(n);
    return (0, i.jsxs)("div", {
        className: g.kL,
        children: [(0, i.jsx)(A.A, {}), (0, i.jsx)("div", {
            className: g.os,
            style: {
                maxWidth: 168 * E
            },
            children: f.slice(0, 5).map(e => (0, i.jsx)(h.Ay, {
                participant: e,
                channel: n,
                className: g.Vs,
                inCall: !0,
                noVideoRender: !0,
                popoutType: a.N.NO_POPOUT,
                width: 48
            }, e.id))
        }), (0, i.jsx)(l.Heading, {
            className: g.HA,
            variant: "heading-xxl/semibold",
            children: I
        }), (0, i.jsx)("div", {
            className: g.Nu,
            children: (0, i.jsx)(l.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: 0 === f.length ? p.intl.string(p.t.zSqdrS) : 1 === f.length ? p.intl.formatToPlainString(p.t.BUyJIG, {
                    a: (0, u.A)(n, f[0])
                }) : 2 === f.length ? p.intl.formatToPlainString(p.t["dcyZf/"], {
                    a: (0, u.A)(n, f[0]),
                    b: (0, u.A)(n, f[1])
                }) : f.length > 2 ? p.intl.formatToPlainString(p.t["44/Obu"], {
                    a: (0, u.A)(n, f[0]),
                    b: (0, u.A)(n, f[1]),
                    n: f.length - 2
                }) : void 0
            })
        }), (0, i.jsx)("div", {
            className: g.PD,
            children: (0, i.jsx)(l.Button, {
                variant: "overlay-primary",
                text: _ ? p.intl.string(p.t["96ANUN"]) : p.intl.string(p.t.TVBCKZ),
                onClick: C,
                disabled: !_
            })
        })]
    })
}