/** chunk id: 133238 params = (module,exports,require) **/
t.d(n, {
    m: () => _,
    y: () => E
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
    h = t(93055),
    A = t(652215),
    v = t(525736),
    p = t(985018);

function b(e) {
    return e ? p.intl.string(v.default.TN4nAX) : p.intl.string(v.default.G9fGlP)
}

function _(e) {
    let n = (0, a.bG)([u.Ay], () => u.Ay.getChannels(A.YYv))[A.rbe.GUILD_CATEGORY],
        {
            notifyFavoriteAdded: r
        } = (0, h.CJ)(),
        {
            hasAccess: _,
            isExperimentEnabled: E,
            hasHigherPrivileges: m
        } = (0, h.TW)("useAddToFavoritesItem"),
        C = e.isThread(),
        g = (0, a.bG)([s.A], () => {
            if (null == e.guild_id) return !0;
            let n = s.A.getGuild(e.guild_id);
            return null != n && !(0, o.DG)(n)
        }),
        T = !__OVERLAY__ && (!C || m) && g,
        y = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        R = b(!1);

    function O(e, n, t) {
        return (0, i.jsx)(d.Drp, {
            id: "favorite-channel",
            label: R,
            leadingAccessory: {
                type: "icon",
                icon: e
            },
            action: n,
            children: t
        })
    }
    if (!E || !T) return null;
    if (!_) return O(d.tvc, () => (0, d.mMO)(async () => {
        let {
            default: e
        } = await t.e("48609").then(t.bind(t, 168088));
        return n => (0, i.jsx)(e, {
            ...n
        })
    }));
    if (y) return null;
    let [
        [I], G
    ] = l().partition(n, e => "null" === e.channel.id);

    function N(n) {
        r(), (0, f.Jz)(e.id, n)
    }
    if (0 === G.length) return O(d.Gg5, () => N(null));
    let S = p.intl.string(v.default.CgmkFJ);
    return O(d.Gg5, () => N(null), (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.rXV, {
            children: (0, i.jsx)(d.Drp, {
                id: `favorite-${I.channel.id}`,
                label: S,
                action: () => N("null" === I.channel.id ? null : I.channel.id)
            }, I.channel.id)
        }), (0, i.jsx)(d.rXV, {
            children: G.map(e => (0, i.jsx)(d.Drp, {
                id: `favorite-${e.channel.id}`,
                label: e.channel.name,
                action: () => N(e.channel.id)
            }, e.channel.id))
        })]
    }))
}

function E(e) {
    let n = (0, a.bG)([c.A], () => c.A.isFavorite(e.id)),
        {
            hasAccess: r
        } = (0, h.TW)("useRemoveFromFavoritesItem");
    return !__OVERLAY__ && r && n ? (0, i.jsx)(d.Drp, {
        id: "favorite-channel",
        label: b(!0),
        color: "danger",
        action: () => e.type === A.rbe.GUILD_CATEGORY ? (0, d.mMO)(async () => {
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