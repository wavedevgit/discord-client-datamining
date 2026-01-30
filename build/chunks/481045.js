/** chunk id: 481045, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L7: () => m,
    qA: () => A
});
var r = n(627968),
    l = n(311907),
    i = n(397927),
    s = n(253932),
    a = n(780964),
    o = n(840065),
    c = n(711014),
    u = n(115063),
    d = n(704037),
    h = n(652215),
    p = n(536482),
    g = n(985018),
    f = n(259533);
let m = () => {
    (0, o.openUserSettings)(a.X.ACTIVITY_PRIVACY_PANEL, {
        section: h.nc_.ACTIVITY_PRIVACY
    })
};

function b(e) {
    let {
        children: t,
        onClick: n
    } = e;
    return (0, r.jsxs)(i.DUT, {
        className: f.E1,
        onClick: n,
        children: [(0, r.jsx)("div", {
            className: f.j3,
            children: t
        }), (0, r.jsx)(i._BQ, {
            color: i.LU0.colors.TEXT_SUBTLE,
            size: "xs"
        })]
    })
}

function A(e) {
    let {
        onClosePopout: t
    } = e, n = s.tz.useSetting(), a = (0, l.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()), o = (0, u.Kk)(), h = a.filter(e => !o.has(e));
    return 0 === a.length ? null : (0, r.jsxs)(b, {
        onClick: () => {
            t(), m()
        },
        children: [(0, r.jsx)(i.Text, {
            variant: "text-sm/semibold",
            children: g.intl.string(n ? p.default["3GrhnF"] : p.default["54ycKJ"])
        }), (0, r.jsx)(d.l, {
            guildIds: h
        })]
    })
}