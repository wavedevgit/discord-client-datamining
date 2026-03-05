/** chunk id: 133238, original params: n,e,t (module,exports,require) **/
t.d(e, {
    m: () => b,
    y: () => p
});
var i = t(627968);
t(64700);
var r = t(735438),
    a = t.n(r),
    l = t(311907),
    c = t(397927),
    o = t(808728),
    s = t(181079),
    d = t(422258),
    A = t(93055),
    u = t(652215),
    h = t(665606),
    _ = t(985018);

function f(n, e) {
    return n.type === u.rbe.GROUP_DM ? e ? _.intl.string(_.t["0BWmSM"]) : _.intl.string(_.t.uuVTOK) : n.type === u.rbe.DM ? e ? _.intl.string(_.t["2wfKGo"]) : _.intl.string(_.t.wPbAse) : e ? _.intl.string(_.t.Bou7lT) : _.intl.string(_.t["4wcdE/"])
}

function b(n) {
    let e = (0, l.bG)([o.Ay], () => o.Ay.getChannels(u.YYv))[u.rbe.GUILD_CATEGORY],
        {
            notifyFavoriteAdded: t
        } = (0, A.CJ)(),
        {
            hasAccess: r,
            isExperimentEnabled: b,
            hasHigherPrivileges: p
        } = (0, A.TW)("useAddToFavoritesItem"),
        E = n.isThread(),
        g = !__OVERLAY__ && (!E || p),
        v = (0, l.bG)([s.A], () => s.A.isFavorite(n.id));
    if (!b || !g) return null;
    if (!r) return (0, i.jsx)(c.Drp, {
        id: "favorite-channel",
        label: f(n, !1),
        action: () => {},
        trailingIndicator: {
            type: "icon",
            icon: c.tvc
        }
    });
    if (v) return null;
    let [
        [j], x
    ] = a().partition(e, n => "null" === n.channel.id);

    function y(e) {
        t(), (0, d.Jz)(n.id, e)
    }
    if (0 === x.length) return (0, i.jsx)(c.Drp, {
        id: "favorite-channel",
        label: f(n, !1),
        action: () => y(null)
    });
    let C = _.intl.string(h.default.G9fGlP);
    return (0, i.jsxs)(c.Drp, {
        id: "favorite-channel",
        label: f(n, !1),
        action: () => y(null),
        children: [(0, i.jsx)(c.rXV, {
            children: (0, i.jsx)(c.Drp, {
                id: `favorite-${j.channel.id}`,
                label: C,
                action: () => y("null" === j.channel.id ? null : j.channel.id),
                trailingIndicator: {
                    type: "icon",
                    icon: c.Gg5
                }
            }, j.channel.id)
        }), (0, i.jsx)(c.rXV, {
            children: x.map(n => (0, i.jsx)(c.Drp, {
                id: `favorite-${n.channel.id}`,
                label: n.channel.name,
                action: () => y(n.channel.id)
            }, n.channel.id))
        })]
    })
}

function p(n) {
    let e = (0, l.bG)([s.A], () => s.A.isFavorite(n.id)),
        {
            hasAccess: r
        } = (0, A.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && e ? (0, i.jsx)(c.Drp, {
        id: "favorite-channel",
        label: f(n, !0),
        color: "danger",
        action: () => n.type === u.rbe.GUILD_CATEGORY ? (0, c.mMO)(async () => {
            let {
                default: e
            } = await t.e("52210").then(t.bind(t, 862377));
            return t => (0, i.jsx)(e, {
                ...t,
                onConfirm: () => {
                    t.onClose(), (0, d.i_)(n.id)
                },
                channel: n
            })
        }) : (0, d.i_)(n.id)
    }) : null
}