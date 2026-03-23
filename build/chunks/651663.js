/** chunk id: 651663 params = (module,exports,require) **/
n.d(t, {
    default: () => y
});
var i = n(627968),
    a = n(64700),
    r = n(575593),
    s = n(311907),
    l = n(397927),
    o = n(631670),
    d = n(291661),
    c = n(674658),
    _ = n(587600),
    u = n(84540),
    p = n(836602),
    E = n(287809),
    m = n(728458),
    h = n(829219),
    g = n(341915),
    f = n(890687),
    S = n(579473),
    v = n(92246),
    A = n(109174),
    N = n(524728),
    T = n(654487),
    C = n(985018),
    I = n(885283);

function R(e) {
    let {
        quest: t,
        avatarDeco: n,
        onUseNow: a,
        user: r,
        mode: s
    } = e, o = (0, S.tW)(t, S.fY.REWARD).url, c = (0, f.FA)(t.config), _ = r.avatarDecoration?.skuId != null && r.avatarDecoration.skuId === n?.skuId;
    return (0, i.jsxs)("div", {
        className: I.hQ,
        children: [(0, i.jsx)("div", {
            className: I.i1,
            children: (0, i.jsx)(d.A, {
                user: r,
                guildId: null,
                avatarDecorationOverride: n,
                avatarSize: l._3J.SIZE_152,
                questPreviewRewardAssetUrl: o
            })
        }), (0, i.jsxs)("div", {
            className: I.dD,
            children: [(0, i.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                className: I.R_,
                children: C.intl.string(C.t["0/Yz+Y"])
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: c
            })]
        }), (0, i.jsx)(l.Button, {
            variant: "secondary",
            size: "sm",
            text: _ ? C.intl.string(C.t.hjaYYn) : C.intl.string(C.t.MAS7uK),
            loading: "applying" === s,
            disabled: "claimed" !== s || _,
            onClick: a,
            fullWidth: !0
        })]
    })
}

function y(e) {
    let {
        initialQuest: t,
        onClose: n,
        transitionState: l,
        preview: d,
        location: S,
        sourceQuestContent: C
    } = e, I = (0, f.C5)(t.id) ?? t, y = a.useMemo(() => (0, v.nj)(I.config), [I]), x = (0, s.bG)([E.default], () => E.default.getCurrentUser()), [D, L] = function(e) {
        let {
            product: t,
            isFetching: n
        } = (0, c.q)(e), i = a.useMemo(() => null == t || n ? null : t.items.find(e => e.type === r.R.AVATAR_DECORATION) ?? null, [t, n]), s = async () => {
            if (null == i) return m.A.addBreadcrumb({
                message: "Error saving avatar decoration; it is null"
            }), !1;
            (0, u.p)({
                avatarDecoration: i
            });
            let e = p.A.getPendingChanges(),
                t = (0, _.Sk)(e),
                n = await (0, o._L)(t);
            return (0, o.pZ)(), !!n?.ok
        };
        return [i, s]
    }(y?.skuId ?? null), j = I.userStatus?.claimedAt != null, O = !d && !j, [k, G] = a.useState(O ? "loading" : "claimed");
    a.useEffect(() => {
        O && (0, h.Oq)(I.id, g.pY.CROSS_PLATFORM, S).then(() => G("claimed")).catch(() => G("error"))
    }, [I.id, S, O]);
    let P = !0 === d && null === D && y?.skuId !== "",
        U = null == x,
        w = U || null == D && !0 !== d || P || "loading" === k,
        b = "error" === k || null == y,
        M = async () => {
            G("applying"), G(await L() ? "applied" : "claimed")
        };
    return (0, i.jsx)(N.A, {
        onClose: n,
        transitionState: l,
        quest: I,
        sourceQuestContent: C,
        location: T.rE.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: w,
        rewardContentHasError: b,
        rewardContent: b || U ? null : (0, i.jsx)(A.A, {
            rewardName: y.messages.name,
            children: (0, i.jsx)(R, {
                quest: I,
                avatarDeco: D,
                user: x,
                mode: k,
                onUseNow: M
            })
        })
    })
}