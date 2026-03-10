/** chunk id: 133238 params = (module,exports,require) **/
t.d(e, {
    m: () => g,
    y: () => E
});
var i = t(627968);
t(64700);
var r = t(735438),
    l = t.n(r),
    a = t(311907),
    c = t(397927),
    d = t(260509),
    o = t(808728),
    s = t(71393),
    u = t(181079),
    A = t(422258),
    h = t(93055),
    _ = t(652215),
    f = t(665606),
    b = t(985018);

function p(n, e) {
    return n.type === _.rbe.GROUP_DM ? e ? b.intl.string(b.t["0BWmSM"]) : b.intl.string(b.t.uuVTOK) : n.type === _.rbe.DM ? e ? b.intl.string(b.t["2wfKGo"]) : b.intl.string(b.t.wPbAse) : e ? b.intl.string(b.t.Bou7lT) : b.intl.string(b.t["4wcdE/"])
}

function g(n) {
    let e = (0, a.bG)([o.Ay], () => o.Ay.getChannels(_.YYv))[_.rbe.GUILD_CATEGORY],
        {
            notifyFavoriteAdded: r
        } = (0, h.CJ)(),
        {
            hasAccess: g,
            isExperimentEnabled: E,
            hasHigherPrivileges: j
        } = (0, h.TW)("useAddToFavoritesItem"),
        v = n.isThread(),
        x = (0, a.bG)([s.A], () => {
            if (null == n.guild_id) return !0;
            let e = s.A.getGuild(n.guild_id);
            return null != e && !(0, d.DG)(e)
        }),
        y = !__OVERLAY__ && (!v || j) && x,
        C = (0, a.bG)([u.A], () => u.A.isFavorite(n.id));
    if (!E || !y) return null;
    if (!g) return (0, i.jsx)(c.Drp, {
        id: "favorite-channel",
        label: p(n, !1),
        action: () => (0, c.mMO)(async () => {
            let {
                default: n
            } = await t.e("48609").then(t.bind(t, 168088));
            return e => (0, i.jsx)(n, {
                ...e
            })
        }),
        trailingIndicator: {
            type: "icon",
            icon: c.tvc
        }
    });
    if (C) return null;
    let [
        [G], T
    ] = l().partition(e, n => "null" === n.channel.id);

    function N(e) {
        r(), (0, A.Jz)(n.id, e)
    }
    if (0 === T.length) return (0, i.jsx)(c.Drp, {
        id: "favorite-channel",
        label: p(n, !1),
        action: () => N(null)
    });
    let M = b.intl.string(f.default.G9fGlP);
    return (0, i.jsxs)(c.Drp, {
        id: "favorite-channel",
        label: p(n, !1),
        action: () => N(null),
        children: [(0, i.jsx)(c.rXV, {
            children: (0, i.jsx)(c.Drp, {
                id: `favorite-${G.channel.id}`,
                label: M,
                action: () => N("null" === G.channel.id ? null : G.channel.id),
                trailingIndicator: {
                    type: "icon",
                    icon: c.Gg5
                }
            }, G.channel.id)
        }), (0, i.jsx)(c.rXV, {
            children: T.map(n => (0, i.jsx)(c.Drp, {
                id: `favorite-${n.channel.id}`,
                label: n.channel.name,
                action: () => N(n.channel.id)
            }, n.channel.id))
        })]
    })
}

function E(n) {
    let e = (0, a.bG)([u.A], () => u.A.isFavorite(n.id)),
        {
            hasAccess: r
        } = (0, h.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && e ? (0, i.jsx)(c.Drp, {
        id: "favorite-channel",
        label: p(n, !0),
        color: "danger",
        action: () => n.type === _.rbe.GUILD_CATEGORY ? (0, c.mMO)(async () => {
            let {
                default: e
            } = await t.e("52210").then(t.bind(t, 862377));
            return t => (0, i.jsx)(e, {
                ...t,
                onConfirm: () => {
                    t.onClose(), (0, A.i_)(n.id)
                },
                channel: n
            })
        }) : (0, A.i_)(n.id)
    }) : null
}