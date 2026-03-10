/** chunk id: 133238 params = (module,exports,require) **/
i.d(e, {
    m: () => E,
    y: () => g
});
var t = i(627968);
i(64700);
var r = i(735438),
    a = i.n(r),
    l = i(311907),
    c = i(397927),
    d = i(260509),
    o = i(808728),
    s = i(71393),
    u = i(181079),
    A = i(422258),
    h = i(93055),
    f = i(652215),
    _ = i(665606),
    b = i(985018);

function p(n) {
    return n ? b.intl.string(_.default.TN4nAX) : b.intl.string(_.default.G9fGlP)
}

function E(n) {
    let e = (0, l.bG)([o.Ay], () => o.Ay.getChannels(f.YYv))[f.rbe.GUILD_CATEGORY],
        {
            notifyFavoriteAdded: r
        } = (0, h.CJ)(),
        {
            hasAccess: E,
            isExperimentEnabled: g,
            hasHigherPrivileges: j
        } = (0, h.TW)("useAddToFavoritesItem"),
        v = n.isThread(),
        x = (0, l.bG)([s.A], () => {
            if (null == n.guild_id) return !0;
            let e = s.A.getGuild(n.guild_id);
            return null != e && !(0, d.DG)(e)
        }),
        C = !__OVERLAY__ && (!v || j) && x,
        y = (0, l.bG)([u.A], () => u.A.isFavorite(n.id));
    if (!g || !C) return null;
    if (!E) return (0, t.jsx)(c.Drp, {
        id: "favorite-channel",
        label: p(!1),
        action: () => (0, c.mMO)(async () => {
            let {
                default: n
            } = await i.e("48609").then(i.bind(i, 168088));
            return e => (0, t.jsx)(n, {
                ...e
            })
        }),
        trailingIndicator: {
            type: "icon",
            icon: c.tvc
        }
    });
    if (y) return null;
    let [
        [N], T
    ] = a().partition(e, n => "null" === n.channel.id);

    function G(e) {
        r(), (0, A.Jz)(n.id, e)
    }
    if (0 === T.length) return (0, t.jsx)(c.Drp, {
        id: "favorite-channel",
        label: p(!1),
        action: () => G(null)
    });
    let O = b.intl.string(_.default.CgmkFJ);
    return (0, t.jsxs)(c.Drp, {
        id: "favorite-channel",
        label: p(!1),
        action: () => G(null),
        children: [(0, t.jsx)(c.rXV, {
            children: (0, t.jsx)(c.Drp, {
                id: `favorite-${N.channel.id}`,
                label: O,
                action: () => G("null" === N.channel.id ? null : N.channel.id),
                trailingIndicator: {
                    type: "icon",
                    icon: c.Gg5
                }
            }, N.channel.id)
        }), (0, t.jsx)(c.rXV, {
            children: T.map(n => (0, t.jsx)(c.Drp, {
                id: `favorite-${n.channel.id}`,
                label: n.channel.name,
                action: () => G(n.channel.id)
            }, n.channel.id))
        })]
    })
}

function g(n) {
    let e = (0, l.bG)([u.A], () => u.A.isFavorite(n.id)),
        {
            hasAccess: r
        } = (0, h.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && e ? (0, t.jsx)(c.Drp, {
        id: "favorite-channel",
        label: p(!0),
        color: "danger",
        action: () => n.type === f.rbe.GUILD_CATEGORY ? (0, c.mMO)(async () => {
            let {
                default: e
            } = await i.e("52210").then(i.bind(i, 862377));
            return i => (0, t.jsx)(e, {
                ...i,
                onConfirm: () => {
                    i.onClose(), (0, A.i_)(n.id)
                },
                channel: n
            })
        }) : (0, A.i_)(n.id)
    }) : null
}