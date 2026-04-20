/** chunk id: 684018 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(397927),
    c = n(793574),
    d = n(573435),
    u = n(622543),
    h = n(576622),
    m = n(657331),
    A = n(287809),
    g = n(486020),
    _ = n(403362),
    p = n(518477),
    f = n(985018),
    E = n(864401);

function C(e) {
    let {
        userId: t,
        channelId: n,
        showDivider: a = !1
    } = e, C = (0, r.bG)([u.A], () => u.A.getMutualGuilds(t), [t]), x = A.default.getUser(t);
    l.useEffect(() => {
        null == C && null != x && (0, h.A)(t, x.getAvatarURL(null, 80), {
            withMutualGuilds: !0
        })
    }, [C, t, x]);
    let S = l.useMemo(() => {
        if (null == C) return [];
        let e = C.slice(0, 3),
            t = e.length - 1;
        return e.map((e, n) => {
            let {
                guild: l
            } = e, a = g.Ay.getGuildIconURL({
                id: l.id,
                icon: l.icon,
                size: 24
            });
            if (null == a) return null;
            let s = (0, i.jsx)("img", {
                src: a,
                alt: "",
                className: E.my
            }, l.id);
            return n === t ? s : (0, i.jsx)(d.Ay, {
                className: E.cp,
                mask: d.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                width: 24,
                height: 24,
                children: s
            }, l.id)
        }).filter(_.Vq)
    }, [C]);
    return null == C || 0 === C.length ? (0, i.jsx)("div", {
        className: s()(E.kL, a ? E.yF : null),
        children: (0, i.jsx)(o.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: f.intl.string(f.t.zjVh8h)
        })
    }) : (0, i.jsxs)(o.DUT, {
        className: s()(E.kL, E.vk, {
            [E.yF]: a
        }),
        onClick: () => {
            (0, m.openUserProfileModal)({
                userId: t,
                channelId: n,
                tabSection: p.RP.MUTUAL_GUILDS,
                sourceAnalyticsLocations: [c.A.DM_CHANNEL]
            })
        },
        children: [(0, i.jsx)("div", {
            className: E.H,
            children: S
        }), (0, i.jsx)(o.Text, {
            className: E.NI,
            variant: "text-sm/normal",
            children: f.intl.format(f.t.eE3oep, {
                count: C.length
            })
        })]
    })
}