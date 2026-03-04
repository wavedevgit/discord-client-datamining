/** chunk id: 133238, original params: n,t,e (module,exports,require) **/
e.d(t, {
    m: () => b,
    y: () => _
});
var i = e(627968);
e(64700);
var l = e(735438),
    r = e.n(l),
    a = e(311907),
    d = e(397927),
    s = e(808728),
    o = e(181079),
    c = e(422258),
    u = e(93055),
    h = e(652215),
    A = e(665606),
    g = e(985018);

function f(n, t) {
    return n.type === h.rbe.GROUP_DM ? t ? g.intl.string(g.t["0BWmSM"]) : g.intl.string(g.t.uuVTOK) : n.type === h.rbe.DM ? t ? g.intl.string(g.t["2wfKGo"]) : g.intl.string(g.t.wPbAse) : t ? g.intl.string(g.t.Bou7lT) : g.intl.string(g.t["4wcdE/"])
}

function b(n) {
    let t = (0, a.bG)([s.Ay], () => s.Ay.getChannels(h.YYv))[h.rbe.GUILD_CATEGORY],
        {
            notifyFavoriteAdded: e
        } = (0, u.CJ)(),
        {
            hasAccess: l,
            isExperimentEnabled: b,
            hasHigherPrivileges: _
        } = (0, u.TW)("useAddToFavoritesItem"),
        m = n.isThread(),
        p = !__OVERLAY__ && (!m || _),
        j = (0, a.bG)([o.A], () => o.A.isFavorite(n.id));
    if (!b || !p) return null;
    if (!l) return (0, i.jsx)(d.Drp, {
        id: "favorite-channel",
        label: f(n, !1),
        action: () => {},
        trailingIndicator: {
            type: "icon",
            icon: d.tvc
        }
    });
    if (j) return null;
    let [
        [v], O
    ] = r().partition(t, n => "null" === n.channel.id);

    function x(t) {
        e(), (0, c.Jz)(n.id, t)
    }
    if (0 === O.length) return (0, i.jsx)(d.Drp, {
        id: "favorite-channel",
        label: f(n, !1),
        action: () => x(null)
    });
    let y = g.intl.string(A.default["5ckhsK"]);
    return (0, i.jsxs)(d.Drp, {
        id: "favorite-channel",
        label: f(n, !1),
        action: () => x(null),
        children: [(0, i.jsx)(d.rXV, {
            children: (0, i.jsx)(d.Drp, {
                id: `favorite-${v.channel.id}`,
                label: y,
                action: () => x("null" === v.channel.id ? null : v.channel.id),
                trailingIndicator: {
                    type: "icon",
                    icon: d.Gg5
                }
            }, v.channel.id)
        }), (0, i.jsx)(d.rXV, {
            children: O.map(n => (0, i.jsx)(d.Drp, {
                id: `favorite-${n.channel.id}`,
                label: n.channel.name,
                action: () => x(n.channel.id)
            }, n.channel.id))
        })]
    })
}

function _(n) {
    let t = (0, a.bG)([o.A], () => o.A.isFavorite(n.id)),
        {
            hasAccess: l
        } = (0, u.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && l && t ? (0, i.jsx)(d.Drp, {
        id: "favorite-channel",
        label: f(n, !0),
        color: "danger",
        action: () => n.type === h.rbe.GUILD_CATEGORY ? (0, d.mMO)(async () => {
            let {
                default: t
            } = await e.e("52210").then(e.bind(e, 862377));
            return e => (0, i.jsx)(t, {
                ...e,
                onConfirm: () => {
                    e.onClose(), (0, c.i_)(n.id)
                },
                channel: n
            })
        }) : (0, c.i_)(n.id)
    }) : null
}