/** Chunk was on 78528 **/
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
    p = n(652215),
    h = n(536482),
    f = n(985018),
    g = n(259533);
let m = () => {
    (0, o.openUserSettings)(a.X.ACTIVITY_PRIVACY_PANEL, {
        section: p.nc_.ACTIVITY_PRIVACY
    })
};

function b(e) {
    let {
        children: t,
        onClick: n
    } = e;
    return (0, r.jsxs)(i.DUT, {
        className: g.E1,
        onClick: n,
        children: [(0, r.jsx)("div", {
            className: g.j3,
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
    } = e, n = s.tz.useSetting(), a = (0, l.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()), o = (0, u.Kk)(), p = a.filter(e => !o.has(e));
    return 0 === a.length ? null : (0, r.jsxs)(b, {
        onClick: () => {
            t(), m()
        },
        children: [(0, r.jsx)(i.Text, {
            variant: "text-sm/semibold",
            children: f.intl.string(n ? h.default["3GrhnF"] : h.default["54ycKJ"])
        }), (0, r.jsx)(d.l, {
            guildIds: p
        })]
    })
}