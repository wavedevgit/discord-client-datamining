/** chunk id: 60040, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(827734),
    s = n(990078),
    o = n(397927),
    u = n(775602),
    c = n(341915),
    d = n(890687),
    m = n(92246),
    p = n(793683),
    E = n(717415),
    f = n(985018);

function h() {
    let {
        quest: e,
        sourceQuestContent: t,
        onClose: n
    } = l.useContext(E.VideoQuestModalContext), h = (0, d.LS)(e), v = (0, i.bG)([u.A], () => u.A.useReducedMotion), x = null != (0, m._Z)(e.config), g = (0, p.v)({
        quest: e,
        questContent: c.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: t,
        onCloseModal: n,
        shouldShowShopIfAlreadyClaimed: !0
    }), S = e.userStatus?.claimedAt != null ? x ? f.intl.string(f.t.WYchde) : f.intl.string(f.t.vTgCWx) : f.intl.string(f.t.cfY4PE), A = e.userStatus?.completedAt == null ? h ? f.intl.string(f.t.NJ6Bnm) : f.intl.string(f.t.USNO1K) : void 0;
    return (0, r.jsx)(s.m, {
        text: A,
        children: (0, r.jsx)("div", {
            children: (0, r.jsx)(o.Button, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e, t) => {
                    if (e.userStatus?.claimedAt == null) return {
                        type: "rive",
                        asset: o.Vs8,
                        riveProps: {
                            withReducedMotion: "play",
                            dataBinding: {
                                locked: e.userStatus?.completedAt === null,
                                fill: a.A.colors.ICON_STRONG,
                                reducedMotion: t
                            }
                        }
                    }
                })(e, v),
                onClick: g,
                text: S,
                disabled: e.userStatus?.completedAt == null
            })
        })
    })
}