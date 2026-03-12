/** chunk id: 133238 params = (module,exports,require) **/
t.d(e, {
    m: () => E,
    y: () => p
});
var i = t(627968);
t(64700);
var r = t(735438),
    l = t.n(r),
    a = t(311907),
    c = t(397927),
    d = t(260509),
    s = t(808728),
    o = t(71393),
    u = t(181079),
    A = t(422258),
    h = t(93055),
    _ = t(652215),
    f = t(525736),
    b = t(985018);

function g(n) {
    return n ? b.intl.string(f.default.TN4nAX) : b.intl.string(f.default.G9fGlP)
}

function E(n) {
    let e = (0, a.bG)([s.Ay], () => s.Ay.getChannels(_.YYv))[_.rbe.GUILD_CATEGORY],
        {
            notifyFavoriteAdded: r
        } = (0, h.CJ)(),
        {
            hasAccess: E,
            isExperimentEnabled: p,
            hasHigherPrivileges: j
        } = (0, h.TW)("useAddToFavoritesItem"),
        x = n.isThread(),
        C = (0, a.bG)([o.A], () => {
            if (null == n.guild_id) return !0;
            let e = o.A.getGuild(n.guild_id);
            return null != e && !(0, d.DG)(e)
        }),
        v = !__OVERLAY__ && (!x || j) && C,
        y = (0, a.bG)([u.A], () => u.A.isFavorite(n.id)),
        N = g(!1);

    function G(n, e, t) {
        return (0, i.jsx)(c.Drp, {
            id: "favorite-channel",
            label: N,
            leadingAccessory: {
                type: "icon",
                icon: n
            },
            action: e,
            children: t
        })
    }
    if (!p || !v) return null;
    if (!E) return G(c.tvc, () => (0, c.mMO)(async () => {
        let {
            default: n
        } = await t.e("48609").then(t.bind(t, 168088));
        return e => (0, i.jsx)(n, {
            ...e
        })
    }));
    if (y) return null;
    let [
        [T], m
    ] = l().partition(e, n => "null" === n.channel.id);

    function O(e) {
        r(), (0, A.Jz)(n.id, e)
    }
    if (0 === m.length) return G(c.Gg5, () => O(null));
    let M = b.intl.string(f.default.CgmkFJ);
    return G(c.Gg5, () => O(null), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.rXV, {
            children: (0, i.jsx)(c.Drp, {
                id: `favorite-${T.channel.id}`,
                label: M,
                action: () => O("null" === T.channel.id ? null : T.channel.id)
            }, T.channel.id)
        }), (0, i.jsx)(c.rXV, {
            children: m.map(n => (0, i.jsx)(c.Drp, {
                id: `favorite-${n.channel.id}`,
                label: n.channel.name,
                action: () => O(n.channel.id)
            }, n.channel.id))
        })]
    }))
}

function p(n) {
    let e = (0, a.bG)([u.A], () => u.A.isFavorite(n.id)),
        {
            hasAccess: r
        } = (0, h.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && e ? (0, i.jsx)(c.Drp, {
        id: "favorite-channel",
        label: g(!0),
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