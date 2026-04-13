/** chunk id: 133238 params = (module,exports,require) **/
t.d(e, {
    m: () => v,
    y: () => C
});
var i = t(627968);
t(64700);
var r = t(735438),
    l = t.n(r),
    a = t(311907),
    c = t(397927),
    d = t(47167),
    o = t(260509),
    s = t(808728),
    u = t(71393),
    A = t(994500),
    h = t(287809),
    _ = t(181079),
    f = t(422258),
    b = t(93055),
    g = t(5180),
    E = t(652215),
    x = t(415303),
    j = t(985018);

function p(n) {
    return n ? j.intl.string(x.default.TN4nAX) : j.intl.string(x.default.G9fGlP)
}

function v(n) {
    let e = (0, a.bG)([s.Ay], () => s.Ay.getChannels(E.YYv))[E.rbe.GUILD_CATEGORY],
        {
            notifyFavoriteAdded: r
        } = (0, b.CJ)(),
        {
            hasAccess: v,
            isExperimentEnabled: C,
            hasHigherPrivileges: N
        } = (0, b.TW)("useAddToFavoritesItem"),
        y = (0, g.IF)(n, N),
        G = (0, a.bG)([u.A], () => {
            if (null == n.guild_id) return !0;
            let e = u.A.getGuild(n.guild_id);
            return null != e && !(0, o.DG)(e)
        }),
        m = !__OVERLAY__ && y && G,
        T = (0, a.bG)([_.A], () => _.A.isFavorite(n.id)),
        O = p(!1);

    function M(n, e, t) {
        return (0, i.jsx)(c.Drp, {
            id: "favorite-channel",
            label: O,
            leadingAccessory: {
                type: "icon",
                icon: n
            },
            iconLeft: n,
            action: e,
            children: t
        })
    }
    if (!C || !m) return null;
    if (!v) return M(c.tvc, () => (0, c.mMO)(async () => {
        let {
            default: n
        } = await t.e("48609").then(t.bind(t, 168088));
        return e => (0, i.jsx)(n, {
            ...e,
            source: "channel_context_menu"
        })
    }));
    if (T) return null;
    let [
        [L], U
    ] = l().partition(e, n => "null" === n.channel.id);

    function R(e) {
        r(), _.A.favoriteGuildEnabled || (0, f.tV)(!0, "channel_context_menu"), (0, f.Jz)(n.id, e, "channel_context_menu")
    }
    if (0 === U.length) return M(c.Gg5, () => R(null));
    let D = j.intl.string(x.default.CgmkFJ);
    return M(c.Gg5, () => R(null), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.rXV, {
            children: (0, i.jsx)(c.Drp, {
                id: `favorite-${L.channel.id}`,
                label: D,
                action: () => R("null" === L.channel.id ? null : L.channel.id)
            }, L.channel.id)
        }), (0, i.jsx)(c.rXV, {
            children: U.map(n => (0, i.jsx)(c.Drp, {
                id: `favorite-${n.channel.id}`,
                label: (0, d.m1)(n.channel, h.default, A.A),
                action: () => R(n.channel.id)
            }, n.channel.id))
        })]
    }))
}

function C(n) {
    let e = (0, a.bG)([_.A], () => _.A.isFavorite(n.id)),
        {
            hasAccess: r
        } = (0, b.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && e ? (0, i.jsx)(c.Drp, {
        id: "favorite-channel",
        label: p(!0),
        color: "danger",
        action: () => n.type === E.rbe.GUILD_CATEGORY ? (0, c.mMO)(async () => {
            let {
                default: e
            } = await t.e("52210").then(t.bind(t, 862377));
            return t => (0, i.jsx)(e, {
                ...t,
                onConfirm: () => {
                    t.onClose(), (0, f.i_)(n.id)
                },
                channel: n
            })
        }) : (0, f.i_)(n.id)
    }) : null
}