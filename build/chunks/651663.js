/** chunk id: 651663, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => I
});
var i = n(627968),
    a = n(64700),
    r = n(575593),
    s = n(311907),
    l = n(397927),
    o = n(631670),
    d = n(291661),
    c = n(674658),
    u = n(919395),
    m = n(587600),
    g = n(836602),
    p = n(287809),
    f = n(728458),
    v = n(829219),
    _ = n(341915),
    x = n(890687),
    h = n(579473),
    A = n(92246),
    N = n(109174),
    C = n(524728),
    j = n(654487),
    y = n(985018),
    E = n(201025);

function D(e) {
    let {
        quest: t,
        avatarDeco: n,
        onUseNow: a,
        user: r,
        mode: s
    } = e, o = (0, h.tW)(t, h.fY.REWARD).url, c = (0, x.FA)(t.config), u = r.avatarDecoration?.skuId != null && r.avatarDecoration.skuId === n?.skuId;
    return (0, i.jsxs)("div", {
        className: E.hQ,
        children: [(0, i.jsx)("div", {
            className: E.i1,
            children: (0, i.jsx)(d.A, {
                user: r,
                guildId: null,
                avatarDecorationOverride: n,
                avatarSize: l._3J.SIZE_152,
                questPreviewRewardAssetUrl: o
            })
        }), (0, i.jsxs)("div", {
            className: E.dD,
            children: [(0, i.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                className: E.R_,
                children: y.intl.string(y.t["0/Yz+Y"])
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: c
            })]
        }), (0, i.jsx)(l.Button, {
            variant: "secondary",
            size: "sm",
            text: u ? y.intl.string(y.t.hjaYYn) : y.intl.string(y.t.MAS7uK),
            loading: "applying" === s,
            disabled: "claimed" !== s || u,
            onClick: a,
            fullWidth: !0
        })]
    })
}

function I(e) {
    let {
        initialQuest: t,
        onClose: n,
        transitionState: l,
        preview: d,
        location: h,
        sourceQuestContent: y
    } = e, E = (0, x.C5)(t.id) ?? t, I = a.useMemo(() => (0, A.nj)(E.config), [E]), k = (0, s.bG)([p.default], () => p.default.getCurrentUser()), [L, S] = function(e) {
        let {
            product: t,
            isFetching: n
        } = (0, c.q)(e), i = a.useMemo(() => null == t || n ? null : t.items.find(e => e.type === r.R.AVATAR_DECORATION) ?? null, [t, n]), s = async () => {
            if (null == i) return f.A.addBreadcrumb({
                message: "Error saving avatar decoration; it is null"
            }), !1;
            (0, u.Dx)(i);
            let e = g.A.getPendingChanges(),
                t = (0, m.Sk)(e),
                n = await (0, o._L)(t);
            return (0, o.pZ)(), !!n?.ok
        };
        return [i, s]
    }(I?.skuId ?? null), R = E.userStatus?.claimedAt != null, T = !d && !R, [b, w] = a.useState(T ? "loading" : "claimed");
    a.useEffect(() => {
        T && (0, v.Oq)(E.id, _.pY.CROSS_PLATFORM, h).then(() => w("claimed")).catch(() => w("error"))
    }, [E.id, h, T]);
    let O = !0 === d && null === L && I?.skuId !== "",
        M = null == k,
        P = M || null == L && !0 !== d || O || "loading" === b,
        W = "error" === b || null == I,
        G = async () => {
            w("applying"), w(await S() ? "applied" : "claimed")
        };
    return (0, i.jsx)(C.A, {
        onClose: n,
        transitionState: l,
        quest: E,
        sourceQuestContent: y,
        location: j.rE.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: P,
        rewardContentHasError: W,
        rewardContent: W || M ? null : (0, i.jsx)(N.A, {
            rewardName: I.messages.name,
            children: (0, i.jsx)(D, {
                quest: E,
                avatarDeco: L,
                user: k,
                mode: b,
                onUseNow: G
            })
        })
    })
}