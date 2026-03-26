/** chunk id: 484191 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(956793),
    r = n(164617),
    o = n(47167),
    c = n(202384),
    d = n(51758),
    u = n(141035),
    h = n(175203),
    A = n(426660),
    m = n(806931),
    _ = n(985018),
    p = n(616124);
let g = function(e) {
    let {
        participants: t,
        channel: n,
        hasConnectPermission: g
    } = e, f = t.filter(m.Xw), x = (0, d.H)(n.guild_id), E = s.useCallback(() => {
        x ? (0, c.Ze)(n.guild_id, () => a.default.selectVoiceChannel(n.id)) : a.default.selectVoiceChannel(n.id)
    }, [n.id, n.guild_id, x]), C = 4 === f.length ? 2 : 3, I = (0, o.Ay)(n);
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [(0, i.jsx)(A.A, {}), (0, i.jsx)("div", {
            className: p.os,
            style: {
                maxWidth: 168 * C
            },
            children: f.slice(0, 5).map(e => (0, i.jsx)(h.Ay, {
                participant: e,
                channel: n,
                className: p.Vs,
                inCall: !0,
                noVideoRender: !0,
                popoutType: r.N.NO_POPOUT,
                width: 48
            }, e.id))
        }), (0, i.jsx)(l.Heading, {
            className: p.HA,
            variant: "heading-xxl/semibold",
            children: I
        }), (0, i.jsx)("div", {
            className: p.Nu,
            children: (0, i.jsx)(l.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: 0 === f.length ? _.intl.string(_.t.zSqdrS) : 1 === f.length ? _.intl.formatToPlainString(_.t.BUyJIG, {
                    a: (0, u.A)(n, f[0])
                }) : 2 === f.length ? _.intl.formatToPlainString(_.t["dcyZf/"], {
                    a: (0, u.A)(n, f[0]),
                    b: (0, u.A)(n, f[1])
                }) : f.length > 2 ? _.intl.formatToPlainString(_.t["44/Obu"], {
                    a: (0, u.A)(n, f[0]),
                    b: (0, u.A)(n, f[1]),
                    n: f.length - 2
                }) : void 0
            })
        }), (0, i.jsx)("div", {
            className: p.PD,
            children: (0, i.jsx)(l.Button, {
                variant: "overlay-primary",
                text: g ? _.intl.string(_.t["96ANUN"]) : _.intl.string(_.t.TVBCKZ),
                onClick: E,
                disabled: !g
            })
        })]
    })
}