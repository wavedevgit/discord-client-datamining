/** chunk id: 690953 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(397927),
    a = n(882997),
    r = n(731474),
    o = n(383501),
    c = n(977997),
    d = n(458829),
    u = n(857253),
    h = n(694967),
    A = n(431516),
    m = n(652215),
    _ = n(985018);

function g(e) {
    let t = (0, s.bG)([o.A], () => o.A.getChannelId() === e.id),
        g = (0, u.A)(),
        p = g?.channelId === e.id,
        f = (0, r.J)(e) && !e.isPrivate(),
        x = (0, r.A)(e),
        C = !(0, s.bG)([c.A], () => c.A.isInChannel(e.id)) && x || f,
        E = (0, h.A)();
    if (!p && 0 === E.length) return null;
    let I = (0, A.A)(void 0);
    return p ? (0, i.jsx)(l.Drp, {
        label: _.intl.string(_.t.PlwgdU),
        id: "handoff",
        action: () => {
            (0, d.x)(g)
        },
        icon: I,
        leadingAccessory: {
            type: "icon",
            icon: I
        },
        disabled: C
    }) : E.map(s => {
        var r, o;
        let c = (0, A.A)(s.type);
        return (0, i.jsx)(l.Drp, {
            id: `transfer-${s.type}-${s.id}`,
            label: (r = s.type, o = t, r === m.fg2.XBOX ? o ? _.intl.string(_.t["qVE/VF"]) : _.intl.string(_.t.E8euSk) : r === m.fg2.PLAYSTATION ? o ? _.intl.string(_.t.vzfxmY) : _.intl.string(_.t.QxEYDj) : r === m.fg2.PLAYSTATION_STAGING ? o ? _.intl.string(_.t.BDiXtV) : _.intl.string(_.t["bhdB9+"]) : void 0),
            action: () => {
                !s.twoWayLink || s.revoked ? (0, a.A)({
                    platformType: s.type,
                    location: "Console Transfer Item"
                }) : s.type === m.fg2.XBOX ? (0, l.mMO)(async () => {
                    let {
                        default: t
                    } = await Promise.all([n.e("94201"), n.e("67670")]).then(n.bind(n, 188072));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }) : (s.type === m.fg2.PLAYSTATION || s.type === m.fg2.PLAYSTATION_STAGING) && (0, l.mMO)(async () => {
                    let {
                        default: t
                    } = await n.e("71282").then(n.bind(n, 315337));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        platform: s.type,
                        channel: e
                    })
                })
            },
            icon: c,
            leadingAccessory: {
                type: "icon",
                icon: c
            },
            disabled: C
        }, s.id)
    })
}