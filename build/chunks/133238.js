/** chunk id: 133238 params = (module,exports,require) **/
n.d(t, {
    m: () => p,
    y: () => E
});
var i = n(627968);
n(64700);
var r = n(735438),
    l = n.n(r),
    a = n(311907),
    d = n(397927),
    o = n(260509),
    u = n(808728),
    s = n(71393),
    c = n(181079),
    f = n(422258),
    A = n(93055),
    h = n(5180),
    _ = n(652215),
    v = n(665606),
    b = n(985018);

function g(e) {
    return e ? b.intl.string(v.default.TN4nAX) : b.intl.string(v.default.G9fGlP)
}

function p(e) {
    let t = (0, a.bG)([u.Ay], () => u.Ay.getChannels(_.YYv))[_.rbe.GUILD_CATEGORY],
        {
            notifyFavoriteAdded: r
        } = (0, A.CJ)(),
        {
            hasAccess: p,
            isExperimentEnabled: E,
            hasHigherPrivileges: m
        } = (0, A.TW)("useAddToFavoritesItem"),
        C = (0, h.IF)(e, m),
        O = (0, a.bG)([s.A], () => {
            if (null == e.guild_id) return !0;
            let t = s.A.getGuild(e.guild_id);
            return null != t && !(0, o.DG)(t)
        }),
        R = !__OVERLAY__ && C && O,
        T = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        I = g(!1);

    function G(e, t, n) {
        return (0, i.jsx)(d.Drp, {
            id: "favorite-channel",
            label: I,
            leadingAccessory: {
                type: "icon",
                icon: e
            },
            iconLeft: e,
            action: t,
            children: n
        })
    }
    if (!E || !R) return null;
    if (!p) return G(d.tvc, () => (0, d.mMO)(async () => {
        let {
            default: e
        } = await n.e("48609").then(n.bind(n, 168088));
        return t => (0, i.jsx)(e, {
            ...t,
            source: "channel_context_menu"
        })
    }));
    if (T) return null;
    let [
        [y], x
    ] = l().partition(t, e => "null" === e.channel.id);

    function S(t) {
        r(), c.A.favoriteGuildEnabled || (0, f.tV)(!0, "channel_context_menu"), (0, f.Jz)(e.id, t, "channel_context_menu")
    }
    if (0 === x.length) return G(d.Gg5, () => S(null));
    let D = b.intl.string(v.default.CgmkFJ);
    return G(d.Gg5, () => S(null), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.rXV, {
            children: (0, i.jsx)(d.Drp, {
                id: `favorite-${y.channel.id}`,
                label: D,
                action: () => S("null" === y.channel.id ? null : y.channel.id)
            }, y.channel.id)
        }), (0, i.jsx)(d.rXV, {
            children: x.map(e => (0, i.jsx)(d.Drp, {
                id: `favorite-${e.channel.id}`,
                label: e.channel.name,
                action: () => S(e.channel.id)
            }, e.channel.id))
        })]
    }))
}

function E(e) {
    let t = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        {
            hasAccess: r
        } = (0, A.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && t ? (0, i.jsx)(d.Drp, {
        id: "favorite-channel",
        label: g(!0),
        color: "danger",
        action: () => e.type === _.rbe.GUILD_CATEGORY ? (0, d.mMO)(async () => {
            let {
                default: t
            } = await n.e("52210").then(n.bind(n, 862377));
            return n => (0, i.jsx)(t, {
                ...n,
                onConfirm: () => {
                    n.onClose(), (0, f.i_)(e.id)
                },
                channel: e
            })
        }) : (0, f.i_)(e.id)
    }) : null
}