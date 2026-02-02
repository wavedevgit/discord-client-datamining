/** chunk id: 60040, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968),
    l = n(64700),
    o = n(311907),
    i = n(827734),
    s = n(990078),
    a = n(397927),
    c = n(775602),
    u = n(341915),
    d = n(890687),
    p = n(92246),
    f = n(793683),
    m = n(717415),
    v = n(985018);

function b() {
    var e, t, n;
    let {
        quest: b,
        sourceQuestContent: E,
        onClose: g
    } = l.useContext(m.VideoQuestModalContext), h = (0, d.LS)(b), y = (0, o.bG)([c.A], () => c.A.useReducedMotion), O = null != (0, p._Z)(b.config), S = (0, f.v)({
        quest: b,
        questContent: u.uF.QUEST_HOME_DESKTOP,
        sourceQuestContent: E,
        onCloseModal: g,
        shouldShowShopIfAlreadyClaimed: !0
    }), _ = (null == (e = b.userStatus) ? void 0 : e.claimedAt) != null ? O ? v.intl.string(v.t.WYchde) : v.intl.string(v.t.vTgCWx) : v.intl.string(v.t.cfY4PE), C = (null == (t = b.userStatus) ? void 0 : t.completedAt) == null ? h ? v.intl.string(v.t.NJ6Bnm) : v.intl.string(v.t.USNO1K) : void 0;
    return (0, r.jsx)(s.m, {
        text: C,
        children: (0, r.jsx)("div", {
            children: (0, r.jsx)(a.Button, {
                variant: "secondary",
                fullWidth: !0,
                icon: ((e, t) => {
                    var n, r;
                    if ((null == (n = e.userStatus) ? void 0 : n.claimedAt) == null) return {
                        type: "rive",
                        asset: a.Vs8,
                        riveProps: {
                            withReducedMotion: "play",
                            dataBinding: {
                                locked: (null == (r = e.userStatus) ? void 0 : r.completedAt) === null,
                                fill: i.A.colors.ICON_STRONG,
                                reducedMotion: t
                            }
                        }
                    }
                })(b, y),
                onClick: S,
                text: _,
                disabled: (null == (n = b.userStatus) ? void 0 : n.completedAt) == null
            })
        })
    })
}