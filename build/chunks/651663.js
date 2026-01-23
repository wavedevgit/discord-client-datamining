/** Chunk was on 90948 **/
/** chunk id: 651663, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => w
}), n(896048);
var i = n(627968),
    r = n(64700),
    a = n(575593),
    s = n(311907),
    l = n(397927),
    o = n(631670),
    d = n(291661),
    c = n(674658),
    u = n(919395),
    m = n(587600),
    x = n(752319),
    f = n(287809),
    _ = n(728458),
    g = n(829219),
    v = n(341915),
    h = n(890687),
    j = n(579473),
    p = n(92246),
    C = n(109174),
    y = n(524728),
    N = n(654487),
    A = n(985018),
    b = n(885283);

function E(e) {
    var t;
    let {
        quest: n,
        avatarDeco: r,
        onUseNow: a,
        user: s,
        mode: o
    } = e, c = (0, j.tW)(n, j.fY.REWARD).url, u = (0, h.FA)(n.config), m = (null == (t = s.avatarDecoration) ? void 0 : t.skuId) != null && s.avatarDecoration.skuId === (null == r ? void 0 : r.skuId);
    return (0, i.jsxs)("div", {
        className: b.hQ,
        children: [(0, i.jsx)("div", {
            className: b.i1,
            children: (0, i.jsx)(d.A, {
                user: s,
                guildId: null,
                avatarDecorationOverride: r,
                avatarSize: l._3J.SIZE_152,
                questPreviewRewardAssetUrl: c
            })
        }), (0, i.jsxs)("div", {
            className: b.dD,
            children: [(0, i.jsx)(l.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                className: b.R_,
                children: A.intl.string(A.t["0/Yz+Y"])
            }), (0, i.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: u
            })]
        }), (0, i.jsx)(l.Button, {
            variant: "secondary",
            size: "sm",
            text: m ? A.intl.string(A.t.hjaYYn) : A.intl.string(A.t.MAS7uK),
            loading: "applying" === o,
            disabled: "claimed" !== o || m,
            onClick: a,
            fullWidth: !0
        })]
    })
}

function w(e) {
    var t, n, l;
    let {
        initialQuest: d,
        onClose: j,
        transitionState: A,
        preview: b,
        location: w,
        sourceQuestContent: D
    } = e, L = null != (t = (0, h.C5)(d.id)) ? t : d, O = r.useMemo(() => (0, p.nj)(L.config), [L]), k = (0, s.bG)([f.default], () => f.default.getCurrentUser()), [R, I] = function(e) {
        let {
            product: t,
            isFetching: n
        } = (0, c.q)(e), i = r.useMemo(() => {
            if (null == t || n) return null;
            let e = t.items.find(e => e.type === a.R.AVATAR_DECORATION);
            return null != e ? e : null
        }, [t, n]), s = async () => {
            if (null == i) return _.A.addBreadcrumb({
                message: "Error saving avatar decoration; it is null"
            }), !1;
            (0, u.Dx)(i);
            let e = x.A.getAllPending(),
                t = (0, m.Sk)(e),
                n = await (0, o.yu)(t);
            return (0, o.pZ)(), !!(null == n ? void 0 : n.ok)
        };
        return [i, s]
    }(null != (n = null == O ? void 0 : O.skuId) ? n : null), S = (null == (l = L.userStatus) ? void 0 : l.claimedAt) != null, T = !b && !S, [P, W] = r.useState(T ? "loading" : "claimed");
    r.useEffect(() => {
        T && (0, g.Oq)(L.id, v.pY.CROSS_PLATFORM, w).then(() => W("claimed")).catch(() => W("error"))
    }, [L.id, w, T]);
    let M = !0 === b && null === R && (null == O ? void 0 : O.skuId) !== "",
        Y = null == k,
        q = Y || null == R && !0 !== b || M || "loading" === P,
        G = "error" === P || null == O,
        H = async () => {
            W("applying"), W(await I() ? "applied" : "claimed")
        };
    return (0, i.jsx)(y.A, {
        onClose: j,
        transitionState: A,
        quest: L,
        sourceQuestContent: D,
        location: N.rE.COLLECTIBLE_REWARD_MODAL,
        isRewardContentLoading: q,
        rewardContentHasError: G,
        rewardContent: G || Y ? null : (0, i.jsx)(C.A, {
            rewardName: O.messages.name,
            children: (0, i.jsx)(E, {
                quest: L,
                avatarDeco: R,
                user: k,
                mode: P,
                onUseNow: H
            })
        })
    })
}