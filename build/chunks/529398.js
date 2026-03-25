/** chunk id: 529398 params = (module,exports,require) **/
n.d(t, {
    default: () => h
});
var r = n(627968),
    a = n(64700),
    s = n(397927),
    o = n(829219),
    i = n(890687),
    l = n(92246),
    _ = n(646764),
    c = n(109174),
    d = n(524728),
    u = n(654487),
    f = n(985018),
    p = n(322956);

function m(e) {
    let {
        quest: t,
        rewardName: n,
        location: a,
        sourceQuestContent: o
    } = e;
    return (0, r.jsxs)("div", {
        className: p.hQ,
        children: [(0, r.jsx)("div", {
            className: p.tE,
            children: (0, r.jsx)(_.A, {
                autoplay: !0,
                className: p.Qq,
                learnMoreStyle: null,
                quest: t,
                questContent: a,
                sourceQuestContent: o
            })
        }), (0, r.jsxs)("div", {
            className: p.dD,
            children: [(0, r.jsx)(s.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                className: p.R_,
                children: f.intl.string(f.t["0/Yz+Y"])
            }), (0, r.jsx)(s.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: f.intl.format(f.t["v1u/zq"], {
                    rewardName: n
                })
            })]
        }), (0, r.jsx)(s.Button, {
            variant: "secondary",
            size: "sm",
            text: f.intl.string(f.t.OD6Tvf),
            disabled: !0,
            fullWidth: !0
        })]
    })
}

function h(e) {
    let {
        initialQuest: t,
        onClose: n,
        transitionState: s,
        location: _,
        sourceQuestContent: f
    } = e, p = (0, i.C5)(t.id) ?? t, h = a.useMemo(() => (0, l.f)(p.config), [p]), x = p.userStatus?.claimedAt != null, C = !p.preview && !x, [b, g] = a.useState(C ? "loading" : "claimed");
    a.useEffect(() => {
        if (C) {
            let e = (0, l.$s)(p.config);
            (0, o.Oq)(p.id, e, _).then(() => g("claimed")).catch(() => g("error"))
        }
    }, [p, _, C]);
    let w = "error" === b || null == h;
    return (0, r.jsx)(d.A, {
        onClose: n,
        transitionState: s,
        quest: p,
        sourceQuestContent: f,
        location: u.rE.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === b,
        rewardContentHasError: w,
        rewardContent: w ? null : (0, r.jsx)(c.A, {
            rewardName: h.messages.name,
            children: (0, r.jsx)(m, {
                quest: p,
                rewardName: h.messages.name,
                location: _,
                sourceQuestContent: f
            })
        })
    })
}