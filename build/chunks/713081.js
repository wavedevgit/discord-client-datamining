/** chunk id: 713081 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(827734),
    s = n(990078),
    a = n(397927),
    o = n(775602),
    u = n(890687),
    c = n(92246),
    d = n(792620),
    m = n(793683),
    p = n(985018);

function f(e) {
    let {
        quest: t,
        questContent: n,
        sourceQuestContent: f,
        onClose: E,
        size: h = "md"
    } = e, v = (0, u.LS)(t), x = (0, l.bG)([o.A], () => o.A.useReducedMotion), g = null != (0, c._Z)(t.config), S = (0, d.vv)(t), A = (0, m.v)({
        quest: t,
        questContent: n,
        sourceQuestContent: f,
        onCloseModal: E,
        shouldShowShopIfAlreadyClaimed: !0
    }), C = t.userStatus?.claimedAt != null ? g ? p.intl.string(p.t.WYchde) : p.intl.string(p.t.vTgCWx) : p.intl.string(p.t.cfY4PE), _ = t.userStatus?.completedAt == null ? v ? p.intl.string(p.t.NJ6Bnm) : S ? p.intl.string(p.t.USNO1K) : void 0 : void 0;
    return (0, r.jsx)(s.m, {
        text: _,
        children: (0, r.jsx)("div", {
            children: (0, r.jsx)(a.Button, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e, t) => {
                    if (e.userStatus?.claimedAt == null) return {
                        type: "rive",
                        asset: a.Vs8,
                        riveProps: {
                            withReducedMotion: "play",
                            dataBinding: {
                                locked: e.userStatus?.completedAt === null,
                                fill: i.A.colors.ICON_STRONG,
                                reducedMotion: t
                            }
                        }
                    }
                })(t, x),
                onClick: A,
                text: C,
                disabled: t.userStatus?.completedAt == null,
                size: h
            })
        })
    })
}