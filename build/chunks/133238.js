/** chunk id: 133238 params = (module,exports,require) **/
t.d(e, {
    m: () => x,
    y: () => j
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
    _ = t(5180),
    f = t(652215),
    b = t(525736),
    g = t(985018);

function E(n) {
    return n ? g.intl.string(b.default.TN4nAX) : g.intl.string(b.default.G9fGlP)
}

function x(n) {
    let e = (0, a.bG)([o.Ay], () => o.Ay.getChannels(f.YYv))[f.rbe.GUILD_CATEGORY],
        {
            notifyFavoriteAdded: r
        } = (0, h.CJ)(),
        {
            hasAccess: x,
            isExperimentEnabled: j,
            hasHigherPrivileges: p
        } = (0, h.TW)("useAddToFavoritesItem"),
        v = (0, _.IF)(n, p),
        C = (0, a.bG)([s.A], () => {
            if (null == n.guild_id) return !0;
            let e = s.A.getGuild(n.guild_id);
            return null != e && !(0, d.DG)(e)
        }),
        N = !__OVERLAY__ && v && C,
        y = (0, a.bG)([u.A], () => u.A.isFavorite(n.id)),
        G = E(!1);

    function m(n, e, t) {
        return (0, i.jsx)(c.Drp, {
            id: "favorite-channel",
            label: G,
            leadingAccessory: {
                type: "icon",
                icon: n
            },
            iconLeft: n,
            action: e,
            children: t
        })
    }
    if (!j || !N) return null;
    if (!x) return m(c.tvc, () => (0, c.mMO)(async () => {
        let {
            default: n
        } = await t.e("48609").then(t.bind(t, 168088));
        return e => (0, i.jsx)(n, {
            ...e,
            source: "channel_context_menu"
        })
    }));
    if (y) return null;
    let [
        [T], O
    ] = l().partition(e, n => "null" === n.channel.id);

    function M(e) {
        r(), u.A.favoriteGuildEnabled || (0, A.tV)(!0, "channel_context_menu"), (0, A.Jz)(n.id, e, "channel_context_menu")
    }
    if (0 === O.length) return m(c.Gg5, () => M(null));
    let L = g.intl.string(b.default.CgmkFJ);
    return m(c.Gg5, () => M(null), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.rXV, {
            children: (0, i.jsx)(c.Drp, {
                id: `favorite-${T.channel.id}`,
                label: L,
                action: () => M("null" === T.channel.id ? null : T.channel.id)
            }, T.channel.id)
        }), (0, i.jsx)(c.rXV, {
            children: O.map(n => (0, i.jsx)(c.Drp, {
                id: `favorite-${n.channel.id}`,
                label: n.channel.name,
                action: () => M(n.channel.id)
            }, n.channel.id))
        })]
    }))
}

function j(n) {
    let e = (0, a.bG)([u.A], () => u.A.isFavorite(n.id)),
        {
            hasAccess: r
        } = (0, h.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && e ? (0, i.jsx)(c.Drp, {
        id: "favorite-channel",
        label: E(!0),
        color: "danger",
        action: () => n.type === f.rbe.GUILD_CATEGORY ? (0, c.mMO)(async () => {
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