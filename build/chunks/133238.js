/** chunk id: 133238 params = (module,exports,require) **/
t.d(n, {
    m: () => E,
    y: () => C
});
var i = t(627968);
t(64700);
var r = t(735438),
    l = t.n(r),
    a = t(311907),
    d = t(397927),
    o = t(260509),
    u = t(808728),
    s = t(71393),
    c = t(181079),
    f = t(422258),
    A = t(93055),
    h = t(5180),
    v = t(652215),
    b = t(665606),
    p = t(985018);

function _(e) {
    return e ? p.intl.string(b.default.TN4nAX) : p.intl.string(b.default.G9fGlP)
}

function E(e) {
    let n = (0, a.bG)([u.Ay], () => u.Ay.getChannels(v.YYv))[v.rbe.GUILD_CATEGORY],
        {
            notifyFavoriteAdded: r
        } = (0, A.CJ)(),
        {
            hasAccess: E,
            isExperimentEnabled: C,
            hasHigherPrivileges: m
        } = (0, A.TW)("useAddToFavoritesItem"),
        g = (0, h.IF)(e, m),
        T = (0, a.bG)([s.A], () => {
            if (null == e.guild_id) return !0;
            let n = s.A.getGuild(e.guild_id);
            return null != n && !(0, o.DG)(n)
        }),
        y = !__OVERLAY__ && g && T,
        R = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        O = _(!1);

    function I(e, n, t) {
        return (0, i.jsx)(d.Drp, {
            id: "favorite-channel",
            label: O,
            leadingAccessory: {
                type: "icon",
                icon: e
            },
            iconLeft: e,
            action: n,
            children: t
        })
    }
    if (!C || !y) return null;
    if (!E) return I(d.tvc, () => (0, d.mMO)(async () => {
        let {
            default: e
        } = await t.e("48609").then(t.bind(t, 168088));
        return n => (0, i.jsx)(e, {
            ...n
        })
    }));
    if (R) return null;
    let [
        [G], N
    ] = l().partition(n, e => "null" === e.channel.id);

    function S(n) {
        r(), c.A.favoriteGuildEnabled || (0, f.tV)(!0), (0, f.Jz)(e.id, n)
    }
    if (0 === N.length) return I(d.Gg5, () => S(null));
    let F = p.intl.string(b.default.CgmkFJ);
    return I(d.Gg5, () => S(null), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.rXV, {
            children: (0, i.jsx)(d.Drp, {
                id: `favorite-${G.channel.id}`,
                label: F,
                action: () => S("null" === G.channel.id ? null : G.channel.id)
            }, G.channel.id)
        }), (0, i.jsx)(d.rXV, {
            children: N.map(e => (0, i.jsx)(d.Drp, {
                id: `favorite-${e.channel.id}`,
                label: e.channel.name,
                action: () => S(e.channel.id)
            }, e.channel.id))
        })]
    }))
}

function C(e) {
    let n = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        {
            hasAccess: r
        } = (0, A.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && n ? (0, i.jsx)(d.Drp, {
        id: "favorite-channel",
        label: _(!0),
        color: "danger",
        action: () => e.type === v.rbe.GUILD_CATEGORY ? (0, d.mMO)(async () => {
            let {
                default: n
            } = await t.e("52210").then(t.bind(t, 862377));
            return t => (0, i.jsx)(n, {
                ...t,
                onConfirm: () => {
                    t.onClose(), (0, f.i_)(e.id)
                },
                channel: e
            })
        }) : (0, f.i_)(e.id)
    }) : null
}