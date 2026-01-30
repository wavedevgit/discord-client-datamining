/** chunk id: 529398, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => h
}), n(896048);
var s = n(627968),
    i = n(64700),
    r = n(397927),
    a = n(829219),
    l = n(890687),
    o = n(92246),
    c = n(646764),
    d = n(109174),
    u = n(524728),
    m = n(654487),
    x = n(985018),
    f = n(322956);

function _(e) {
    let {
        quest: t,
        rewardName: n,
        location: i,
        sourceQuestContent: a
    } = e;
    return (0, s.jsxs)("div", {
        className: f.hQ,
        children: [(0, s.jsx)("div", {
            className: f.tE,
            children: (0, s.jsx)(c.A, {
                autoplay: !0,
                className: f.Qq,
                learnMoreStyle: null,
                quest: t,
                questContent: i,
                sourceQuestContent: a
            })
        }), (0, s.jsxs)("div", {
            className: f.dD,
            children: [(0, s.jsx)(r.Heading, {
                variant: "heading-xl/semibold",
                color: "text-strong",
                className: f.R_,
                children: x.intl.string(x.t["0/Yz+Y"])
            }), (0, s.jsx)(r.Text, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children: x.intl.format(x.t["v1u/zq"], {
                    rewardName: n
                })
            })]
        }), (0, s.jsx)(r.Button, {
            variant: "secondary",
            size: "sm",
            text: x.intl.string(x.t.OD6Tvf),
            disabled: !0,
            fullWidth: !0
        })]
    })
}

function h(e) {
    var t, n;
    let {
        initialQuest: r,
        onClose: c,
        transitionState: x,
        location: f,
        sourceQuestContent: h
    } = e, g = null != (t = (0, l.C5)(r.id)) ? t : r, j = i.useMemo(() => (0, o.f)(g.config), [g]), v = (null == (n = g.userStatus) ? void 0 : n.claimedAt) != null, p = !g.preview && !v, [C, N] = i.useState(p ? "loading" : "claimed");
    i.useEffect(() => {
        if (p) {
            let e = (0, o.$s)(g.config);
            (0, a.Oq)(g.id, e, f).then(() => N("claimed")).catch(() => N("error"))
        }
    }, [g, f, p]);
    let y = "error" === C || null == j;
    return (0, s.jsx)(u.A, {
        onClose: c,
        transitionState: x,
        quest: g,
        sourceQuestContent: h,
        location: m.rE.INGAME_REWARD_MODAL,
        isRewardContentLoading: "loading" === C,
        rewardContentHasError: y,
        rewardContent: y ? null : (0, s.jsx)(d.A, {
            rewardName: j.messages.name,
            children: (0, s.jsx)(_, {
                quest: g,
                rewardName: j.messages.name,
                location: f,
                sourceQuestContent: h
            })
        })
    })
}