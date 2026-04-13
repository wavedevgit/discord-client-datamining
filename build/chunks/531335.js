/** chunk id: 531335 params = (module,exports,require) **/
l.d(t, {
    A: () => d
});
var e = l(627968);
l(64700);
var i = l(311907),
    r = l(397927),
    o = l(855687),
    a = l(576705),
    c = l(652215),
    u = l(985018);

function d(n) {
    let {
        source: t,
        guild: l,
        channel: e,
        stageInstance: r
    } = n, c = (0, i.bG)([a.A], () => (0, o.K)(a.A, l, e, r)), u = p(t, l, e), d = E(t, e);
    return c ? u : d
}

function s(n, t) {
    return null != t && [c.PE1.GUILD_HEADER, c.PE1.GUILD_CONTEXT_MENU].includes(t) || null == n ? u.intl.string(u.t.Sd8Ixw) : n.type === c.rbe.GUILD_VOICE ? u.intl.string(u.t["EE+P0H"]) : u.intl.string(u.t["0jeAXt"])
}
let p = (n, t, i) => {
        if (null == t) return null;
        let o = s(i, n);
        return (0, e.jsx)(r.Drp, {
            id: "invite-people",
            label: o,
            color: "brand",
            icon: n === c.PE1.GUILD_HEADER ? r.DpX : void 0,
            leadingAccessory: n === c.PE1.GUILD_HEADER ? {
                type: "icon",
                icon: r.DpX
            } : void 0,
            action: () => (0, r.mMO)(async () => {
                let {
                    default: r
                } = await Promise.all([l.e("43600"), l.e("28136"), l.e("72469")]).then(l.bind(l, 234355));
                return l => (0, e.jsx)(r, {
                    ...l,
                    guild: t,
                    channel: i,
                    source: n
                })
            })
        })
    },
    E = (n, t) => {
        let i = s(t, n);
        return (0, e.jsx)(r.Drp, {
            id: "invite-people",
            label: i,
            color: "brand",
            icon: n === c.PE1.GUILD_HEADER ? r.DpX : void 0,
            leadingAccessory: n === c.PE1.GUILD_HEADER ? {
                type: "icon",
                icon: r.DpX
            } : void 0,
            action: () => (0, r.mMO)(async () => {
                let {
                    default: n
                } = await l.e("62751").then(l.bind(l, 132610));
                return t => (0, e.jsx)(n, {
                    ...t
                })
            })
        })
    }