/** chunk id: 481045 params = (module,exports,require) **/
i.d(t, {
    L7: () => I,
    qA: () => v
});
var s = i(627968),
    l = i(311907),
    n = i(397927),
    a = i(253932),
    r = i(780964),
    c = i(840065),
    d = i(711014),
    o = i(115063),
    u = i(365258),
    m = i(704037),
    x = i(652215),
    h = i(536482),
    j = i(985018),
    T = i(259533);
let I = () => {
    (0, c.openUserSettings)(r.X.ACTIVITY_PRIVACY_PANEL, {
        section: x.nc_.ACTIVITY_PRIVACY
    })
};

function f(e) {
    let {
        children: t,
        onClick: i
    } = e;
    return (0, s.jsxs)(n.DUT, {
        className: T.E1,
        onClick: i,
        children: [(0, s.jsx)("div", {
            className: T.j3,
            children: t
        }), (0, s.jsx)(n._BQ, {
            color: n.LU0.colors.TEXT_SUBTLE,
            size: "xs"
        })]
    })
}

function v(e) {
    let {
        onClosePopout: t
    } = e, i = a.tz.useSetting(), r = (0, l.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()), c = (0, o.Kk)(), x = r.filter(e => !c.has(e)), T = (0, u.AB)(x);
    return 0 === r.length ? null : (0, s.jsxs)(f, {
        onClick: () => {
            t(), I()
        },
        children: [(0, s.jsx)(n.Text, {
            variant: "text-sm/semibold",
            children: j.intl.string(i ? h.default["3GrhnF"] : h.default["54ycKJ"])
        }), (0, s.jsx)(m.l, {
            guildIds: T,
            prioritizeSelectedGuild: !0
        })]
    })
}