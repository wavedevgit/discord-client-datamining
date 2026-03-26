/** chunk id: 690953 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var s = n(417597),
    l = n(397927),
    r = n(882997),
    a = n(731474),
    o = n(383501),
    c = n(977997),
    d = n(458829),
    u = n(857253),
    h = n(694967),
    A = n(431516),
    m = n(652215),
    p = n(985018);

function _(e) {
    let t = (0, s.bG)([o.A], () => o.A.getChannelId() === e.id),
        _ = (0, u.A)(),
        g = _?.channelId === e.id,
        f = (0, a.J)(e) && !e.isPrivate(),
        x = (0, a.A)(e),
        C = !(0, s.bG)([c.A], () => c.A.isInChannel(e.id)) && x || f,
        E = (0, h.A)();
    if (!g && 0 === E.length) return null;
    let I = (0, A.A)(void 0);
    return g ? (0, i.jsx)(l.Drp, {
        label: p.intl.string(p.t.PlwgdU),
        id: "handoff",
        action: () => {
            (0, d.x)(_)
        },
        icon: I,
        leadingAccessory: {
            type: "icon",
            icon: I
        },
        disabled: C
    }) : E.map(s => {
        var a, o;
        let c = (0, A.A)(s.type);
        return (0, i.jsx)(l.Drp, {
            id: `transfer-${s.type}-${s.id}`,
            label: (a = s.type, o = t, a === m.fg2.XBOX ? o ? p.intl.string(p.t["qVE/VF"]) : p.intl.string(p.t.E8euSk) : a === m.fg2.PLAYSTATION ? o ? p.intl.string(p.t.vzfxmY) : p.intl.string(p.t.QxEYDj) : a === m.fg2.PLAYSTATION_STAGING ? o ? p.intl.string(p.t.BDiXtV) : p.intl.string(p.t["bhdB9+"]) : void 0),
            action: () => {
                !s.twoWayLink || s.revoked ? (0, r.A)({
                    platformType: s.type,
                    location: "Console Transfer Item"
                }) : s.type === m.fg2.XBOX ? (0, l.mMO)(async () => {
                    let {
                        default: t
                    } = await Promise.all([n.e("56838"), n.e("67670")]).then(n.bind(n, 188072));
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