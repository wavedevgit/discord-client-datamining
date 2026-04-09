/** chunk id: 713081 params = (module,exports,require) **/
s.d(t, {
    A: () => h
});
var n = s(627968);
s(64700);
var l = s(311907),
    i = s(827734),
    a = s(990078),
    o = s(397927),
    r = s(775602),
    u = s(890687),
    d = s(92246),
    c = s(792620),
    m = s(793683),
    x = s(985018);

function h(e) {
    let {
        quest: t,
        questContent: s,
        sourceQuestContent: h,
        onClose: C,
        size: A = "md"
    } = e, p = (0, u.LS)(t), g = (0, l.bG)([r.A], () => r.A.useReducedMotion), v = null != (0, d._Z)(t.config), j = (0, c.vv)(t), f = (0, m.v)({
        quest: t,
        questContent: s,
        sourceQuestContent: h,
        onCloseModal: C,
        shouldShowShopIfAlreadyClaimed: !0
    }), S = t.userStatus?.claimedAt != null ? v ? x.intl.string(x.t.WYchde) : x.intl.string(x.t.vTgCWx) : x.intl.string(x.t.cfY4PE), N = t.userStatus?.completedAt == null ? p ? x.intl.string(x.t.NJ6Bnm) : j ? x.intl.string(x.t.USNO1K) : void 0 : void 0;
    return (0, n.jsx)(a.m, {
        text: N,
        children: (0, n.jsx)("div", {
            children: (0, n.jsx)(o.Button, {
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
                                fill: i.A.colors.ICON_STRONG,
                                reducedMotion: t
                            }
                        }
                    }
                })(t, g),
                onClick: f,
                text: S,
                disabled: t.userStatus?.completedAt == null,
                size: A
            })
        })
    })
}