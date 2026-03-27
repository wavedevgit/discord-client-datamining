/** chunk id: 651663 params = (module,exports,require) **/
t.d(n, {
    default: () => C
});
var a = t(627968),
    i = t(64700),
    r = t(575593),
    o = t(311907),
    l = t(397927),
    d = t(631670),
    _ = t(162232),
    s = t(674658),
    p = t(587600),
    c = t(84540),
    u = t(836602),
    E = t(287809),
    S = t(728458),
    h = t(829219),
    A = t(341915),
    f = t(890687),
    g = t(579473),
    T = t(92246),
    I = t(109174),
    R = t(524728),
    v = t(654487),
    m = t(985018),
    y = t(836017);

function N(e) {
    let {
        quest: n,
        avatarDeco: t,
        onUseNow: i,
        user: r,
        mode: o
    } = e, d = (0, g.tW)(n, g.fY.REWARD).url, s = (0, f.FA)(n.config), p = r.avatarDecoration?.skuId != null && r.avatarDecoration.skuId === t?.skuId;
    return (0, a.jsxs)("div", {
        className: y.hQ,
        children: [(0, a.jsx)("div", {
            className: y.i1,
            children: (0, a.jsx)(_.A, {
                user: r,
                guildId: null,
                avatarDecorationOverride: t,
                avatarSize: l._3J.SIZE_152,
                questPreviewRewardAssetUrl: d
            })
        }), (0, a.jsxs)("div", {
            className: y.dD,
            children: [(0, a.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                className: y.R_,
                children: m.intl.string(m.t["0/Yz+Y"])
            }), (0, a.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: s
            })]
        }), (0, a.jsx)(l.Button, {
            variant: "secondary",
            size: "sm",
            text: p ? m.intl.string(m.t.hjaYYn) : m.intl.string(m.t.MAS7uK),
            loading: "applying" === o,
            disabled: "claimed" !== o || p,
            onClick: i,
            fullWidth: !0
        })]
    })
}

function C(e) {
    let {
        initialQuest: n,
        onClose: t,
        transitionState: l,
        preview: _,
        location: g,
        sourceQuestContent: m
    } = e, y = (0, f.C5)(n.id) ?? n, C = i.useMemo(() => (0, T.nj)(y.config), [y]), D = (0, o.bG)([E.default], () => E.default.getCurrentUser()), [L, U] = function(e) {
        let {
            product: n,
            isFetching: t
        } = (0, s.q)(e), a = i.useMemo(() => null == n || t ? null : n.items.find(e => e.type === r.R.AVATAR_DECORATION) ?? null, [n, t]), o = async () => {
            if (null == a) return S.A.addBreadcrumb({
                message: "Error saving avatar decoration; it is null"
            }), !1;
            (0, c.p)({
                avatarDecoration: a
            });
            let e = u.A.getPendingChanges(),
                n = (0, p.Sk)(e),
                t = await (0, d._L)(n);
            return (0, d.pZ)(), !!t?.ok
        };
        return [a, o]
    }(C?.skuId ?? null), O = y.userStatus?.claimedAt != null, P = !_ && !O, [k, G] = i.useState(P ? "loading" : "claimed");
    i.useEffect(() => {
        P && (0, h.Oq)(y.id, A.pY.CROSS_PLATFORM, g).then(() => G("claimed")).catch(() => G("error"))
    }, [y.id, g, P]);
    let b = !0 === _ && null === L && C?.skuId !== "",
        w = null == D,
        x = w || null == L && !0 !== _ || b || "loading" === k,
        F = "error" === k || null == C,
        B = async () => {
            G("applying"), G(await U() ? "applied" : "claimed")
        };
    return (0, a.jsx)(R.A, {
        onClose: t,
        transitionState: l,
        quest: y,
        sourceQuestContent: m,
        location: v.rE.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: x,
        rewardContentHasError: F,
        rewardContent: F || w ? null : (0, a.jsx)(I.A, {
            rewardName: C.messages.name,
            children: (0, a.jsx)(N, {
                quest: y,
                avatarDeco: L,
                user: D,
                mode: k,
                onUseNow: B
            })
        })
    })
}