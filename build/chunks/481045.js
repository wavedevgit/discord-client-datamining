/** chunk id: 481045 params = (module,exports,require) **/
i.d(t, {
    L7: () => T,
    qA: () => f
});
var l = i(627968),
    s = i(311907),
    n = i(397927),
    a = i(253932),
    r = i(780964),
    c = i(858897),
    d = i(711014),
    o = i(115063),
    u = i(365258),
    m = i(704037),
    x = i(634411),
    h = i(985018),
    j = i(830910);
let T = () => {
    (0, c.openUserSettings)(r.X.ACTIVITY_PRIVACY_PANEL)
};

function I(e) {
    let {
        children: t,
        onClick: i
    } = e;
    return (0, l.jsxs)(n.DUT, {
        className: j.E1,
        onClick: i,
        children: [(0, l.jsx)("div", {
            className: j.j3,
            children: t
        }), (0, l.jsx)(n._BQ, {
            color: n.LU0.colors.TEXT_SUBTLE,
            size: "xs"
        })]
    })
}

function f(e) {
    let {
        onClosePopout: t
    } = e, i = a.tz.useSetting(), r = (0, s.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()), c = (0, o.Kk)(), j = r.filter(e => !c.has(e)), f = (0, u.AB)(j);
    return 0 === r.length ? null : (0, l.jsxs)(I, {
        onClick: () => {
            t(), T()
        },
        children: [(0, l.jsx)(n.Text, {
            variant: "text-sm/semibold",
            children: h.intl.string(i ? x.default["3GrhnF"] : x.default["54ycKJ"])
        }), (0, l.jsx)(m.l, {
            guildIds: f,
            prioritizeSelectedGuild: !0
        })]
    })
}