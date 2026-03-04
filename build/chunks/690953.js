/** chunk id: 690953, original params: e,t,n (module,exports,require) **/
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
    p = n(652215),
    m = n(985018);

function g(e) {
    let t = (0, s.bG)([o.A], () => o.A.getChannelId() === e.id),
        g = (0, u.A)(),
        _ = g?.channelId === e.id,
        f = (0, r.J)(e) && !e.isPrivate(),
        x = (0, r.A)(e),
        C = !(0, s.bG)([c.A], () => c.A.isInChannel(e.id)) && x || f,
        E = (0, h.A)();
    if (!_ && 0 === E.length) return null;
    let I = (0, A.A)(void 0);
    return _ ? (0, i.jsx)(l.Drp, {
        label: m.intl.string(m.t.PlwgdU),
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
            label: (r = s.type, o = t, r === p.fg2.XBOX ? o ? m.intl.string(m.t["qVE/VF"]) : m.intl.string(m.t.E8euSk) : r === p.fg2.PLAYSTATION ? o ? m.intl.string(m.t.vzfxmY) : m.intl.string(m.t.QxEYDj) : r === p.fg2.PLAYSTATION_STAGING ? o ? m.intl.string(m.t.BDiXtV) : m.intl.string(m.t["bhdB9+"]) : void 0),
            action: () => {
                !s.twoWayLink || s.revoked ? (0, a.A)({
                    platformType: s.type,
                    location: "Console Transfer Item"
                }) : s.type === p.fg2.XBOX ? (0, l.mMO)(async () => {
                    let {
                        default: t
                    } = await Promise.all([n.e("17027"), n.e("67670")]).then(n.bind(n, 188072));
                    return n => (0, i.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }) : (s.type === p.fg2.PLAYSTATION || s.type === p.fg2.PLAYSTATION_STAGING) && (0, l.mMO)(async () => {
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