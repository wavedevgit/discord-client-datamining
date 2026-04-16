/** chunk id: 651663 params = (module,exports,require) **/
n.d(t, {
    default: () => N
});
var a = n(627968),
    i = n(64700),
    r = n(575593),
    l = n(311907),
    o = n(397927),
    d = n(631670),
    _ = n(162232),
    s = n(674658),
    u = n(587600),
    p = n(84540),
    c = n(836602),
    E = n(287809),
    S = n(728458),
    h = n(829219),
    A = n(341915),
    R = n(890687),
    I = n(579473),
    T = n(92246),
    v = n(109174),
    g = n(524728),
    f = n(654487),
    m = n(985018),
    y = n(845612);

function C(e) {
    let {
        quest: t,
        avatarDeco: n,
        onUseNow: i,
        user: r,
        mode: l
    } = e, d = (0, I.tW)(t, I.fY.REWARD).url, s = (0, R.FA)(t.config), u = r.avatarDecoration?.skuId != null && r.avatarDecoration.skuId === n?.skuId;
    return (0, a.jsxs)("div", {
        className: y.hQ,
        children: [(0, a.jsx)("div", {
            className: y.i1,
            children: (0, a.jsx)(_.A, {
                user: r,
                guildId: null,
                avatarDecorationOverride: n,
                avatarSize: o._3J.SIZE_152,
                questPreviewRewardAssetUrl: d
            })
        }), (0, a.jsxs)("div", {
            className: y.dD,
            children: [(0, a.jsx)(o.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                className: y.R_,
                children: m.intl.string(m.t["0/Yz+Y"])
            }), (0, a.jsx)(o.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: s
            })]
        }), (0, a.jsx)(o.Button, {
            variant: "secondary",
            size: "sm",
            text: u ? m.intl.string(m.t.hjaYYn) : m.intl.string(m.t.MAS7uK),
            loading: "applying" === l,
            disabled: "claimed" !== l || u,
            onClick: i,
            fullWidth: !0
        })]
    })
}

function N(e) {
    let {
        initialQuest: t,
        onClose: n,
        transitionState: o,
        preview: _,
        location: I,
        sourceQuestContent: m
    } = e, y = (0, R.C5)(t.id) ?? t, N = i.useMemo(() => (0, T.nj)(y.config), [y]), D = (0, l.bG)([E.default], () => E.default.getCurrentUser()), [L, U] = function(e) {
        let {
            product: t,
            isFetching: n
        } = (0, s.q)(e), a = i.useMemo(() => null == t || n ? null : t.items.find(e => e.type === r.R.AVATAR_DECORATION) ?? null, [t, n]), l = async () => {
            if (null == a) return S.A.addBreadcrumb({
                message: "Error saving avatar decoration; it is null"
            }), !1;
            (0, p.p)({
                avatarDecoration: a
            });
            let e = c.A.getPendingChanges(),
                t = (0, u.Sk)(e),
                n = await (0, d._L)(t);
            return (0, d.pZ)(), !!n?.ok
        };
        return [a, l]
    }(N?.skuId ?? null), O = y.userStatus?.claimedAt != null, P = !_ && !O, [k, G] = i.useState(P ? "loading" : "claimed");
    i.useEffect(() => {
        P && (0, h.Oq)(y.id, A.pY.CROSS_PLATFORM, I).then(() => G("claimed")).catch(() => G("error"))
    }, [y.id, I, P]);
    let b = !0 === _ && null === L && N?.skuId !== "",
        F = null == D,
        w = F || null == L && !0 !== _ || b || "loading" === k,
        x = "error" === k || null == N,
        M = async () => {
            G("applying"), G(await U() ? "applied" : "claimed")
        };
    return (0, a.jsx)(g.A, {
        onClose: n,
        transitionState: o,
        quest: y,
        sourceQuestContent: m,
        location: f.rE.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: w,
        rewardContentHasError: x,
        rewardContent: x || F ? null : (0, a.jsx)(v.A, {
            rewardName: N.messages.name,
            children: (0, a.jsx)(C, {
                quest: y,
                avatarDeco: L,
                user: D,
                mode: k,
                onUseNow: M
            })
        })
    })
}