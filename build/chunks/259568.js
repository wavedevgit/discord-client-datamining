/** chunk id: 259568, original params: e,t,i (module,exports,require) **/
i.d(t, {
    a: () => C
}), i(321073);
var r = i(627968);
i(64700);
var s = i(554146),
    n = i(116833),
    a = i(265486),
    o = i(942857),
    l = i(793574),
    u = i(379848),
    c = i(903223),
    d = i(997509),
    _ = i(757036),
    p = i(363487),
    m = i(828162),
    A = i(652215),
    S = i(49999),
    R = i(985018);

function C(e) {
    let {
        guild: t,
        targetElementRef: i
    } = e, C = (0, p.A)(t.id), g = (0, _.L)(), {
        enabled: h
    } = c.Ay.useExperiment({
        guildId: t.id,
        location: "progress-bar-coachmark"
    }), f = (0, o.A)(), E = (0, c._E)(t, h), O = h && E && !f, x = [];
    return null != C && C && O && x.push(s.M.BOOST_PROGRESS_BAR_ADMIN_COACHMARK), g && null != C && !C && O && x.push(s.M.BOOST_PROGRESS_BAR_MEMBER_COACHMARK), (0, r.jsx)(u.Ay, {
        contentTypes: x,
        children: e => {
            let {
                visibleContent: o,
                markAsDismissed: u
            } = e;
            return o === s.M.BOOST_PROGRESS_BAR_ADMIN_COACHMARK ? (0, r.jsx)(a.A, {
                targetElementRef: i,
                onRequestClose: () => {
                    u(S.i.USER_DISMISS)
                },
                position: "right",
                alignmentStrategy: "edge",
                align: "top",
                caretConfig: {
                    align: "start"
                },
                graphic: {
                    type: "dynamic",
                    component: n.DynamicGraphicComponent.GUILD_POWERUPS_PROGRESS_BAR_COACHMARK_GRAPHIC,
                    props: {},
                    aspectRatio: "21/9"
                },
                size: "video",
                title: R.intl.string(R.t.bjJ7xZ),
                body: R.intl.string(R.t.SeBPzu),
                actions: [{
                    text: R.intl.string(R.t["Xc9J+x"]),
                    variant: "primary",
                    onClick: () => {
                        u(S.i.TAKE_ACTION), d.A.open(t.id, A.BEX.BOOST_PERKS, l.A.GUILD_BOOSTING_PROGRESS_BAR_ADMIN_COACHMARK)
                    }
                }]
            }) : o === s.M.BOOST_PROGRESS_BAR_MEMBER_COACHMARK ? (0, r.jsx)(a.A, {
                targetElementRef: i,
                onRequestClose: () => {
                    u(S.i.USER_DISMISS)
                },
                position: "right",
                alignmentStrategy: "edge",
                align: "top",
                caretConfig: {
                    align: "start"
                },
                graphic: {
                    type: "dynamic",
                    component: n.DynamicGraphicComponent.GUILD_POWERUPS_PROGRESS_BAR_COACHMARK_GRAPHIC,
                    props: {},
                    aspectRatio: "21/9"
                },
                size: "video",
                title: R.intl.string(R.t["8W0djT"]),
                body: R.intl.string(R.t.tgSfkH),
                actions: [{
                    text: R.intl.string(R.t.cTJtBG),
                    variant: "primary",
                    onClick: () => {
                        u(S.i.TAKE_ACTION), (0, m.A)(t.id, l.A.GUILD_BOOSTING_PROGRESS_BAR_MEMBER_COACHMARK)
                    }
                }]
            }) : null
        }
    })
}