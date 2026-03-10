/** chunk id: 531335 params = (module,exports,require) **/
t.d(e, {
    A: () => s
});
var l = t(627968);
t(64700);
var r = t(311907),
    a = t(397927),
    i = t(855687),
    c = t(576705),
    d = t(652215),
    A = t(985018);

function s(n) {
    let {
        source: e,
        guild: t,
        channel: l,
        stageInstance: a
    } = n, d = (0, r.bG)([c.A], () => (0, i.K)(c.A, t, l, a)), A = o(e, t, l), s = E(e, l);
    return d ? A : s
}

function u(n, e) {
    return null != e && [d.PE1.GUILD_HEADER, d.PE1.GUILD_CONTEXT_MENU].includes(e) || null == n ? A.intl.string(A.t.Sd8Ixw) : n.type === d.rbe.GUILD_VOICE ? A.intl.string(A.t["EE+P0H"]) : A.intl.string(A.t["0jeAXt"])
}
let o = (n, e, r) => {
        if (null == e) return null;
        let i = u(r, n);
        return (0, l.jsx)(a.Drp, {
            id: "invite-people",
            label: i,
            color: "brand",
            icon: n === d.PE1.GUILD_HEADER ? a.DpX : void 0,
            leadingAccessory: n === d.PE1.GUILD_HEADER ? {
                type: "icon",
                icon: a.DpX
            } : void 0,
            action: () => (0, a.mMO)(async () => {
                let {
                    default: a
                } = await Promise.all([t.e("43600"), t.e("28136"), t.e("8421")]).then(t.bind(t, 234355));
                return t => (0, l.jsx)(a, {
                    ...t,
                    guild: e,
                    channel: r,
                    source: n
                })
            })
        })
    },
    E = (n, e) => {
        let r = u(e, n);
        return (0, l.jsx)(a.Drp, {
            id: "invite-people",
            label: r,
            color: "brand",
            icon: n === d.PE1.GUILD_HEADER ? a.DpX : void 0,
            leadingAccessory: n === d.PE1.GUILD_HEADER ? {
                type: "icon",
                icon: a.DpX
            } : void 0,
            action: () => (0, a.mMO)(async () => {
                let {
                    default: n
                } = await t.e("62751").then(t.bind(t, 132610));
                return e => (0, l.jsx)(n, {
                    ...e
                })
            })
        })
    }