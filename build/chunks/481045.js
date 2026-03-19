/** chunk id: 481045 params = (module,exports,require) **/
"use strict";
n.d(t, {
    L7: () => p,
    qA: () => f
});
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(253932),
    r = n(780964),
    o = n(840065),
    c = n(711014),
    d = n(115063),
    u = n(365258),
    h = n(704037),
    A = n(730844),
    m = n(985018),
    g = n(247307);
let p = () => {
    (0, o.openUserSettings)(r.X.ACTIVITY_PRIVACY_PANEL)
};

function _(e) {
    let {
        children: t,
        onClick: n
    } = e;
    return (0, i.jsxs)(l.DUT, {
        className: g.E1,
        onClick: n,
        children: [(0, i.jsx)("div", {
            className: g.j3,
            children: t
        }), (0, i.jsx)(l._BQ, {
            color: l.LU0.colors.TEXT_SUBTLE,
            size: "xs"
        })]
    })
}

function f(e) {
    let {
        onClosePopout: t
    } = e, n = a.tz.useSetting(), r = (0, s.bG)([c.Ay], () => c.Ay.getFlattenedGuildIds()), o = (0, d.Kk)(), g = r.filter(e => !o.has(e)), f = (0, u.AB)(g);
    return 0 === r.length ? null : (0, i.jsxs)(_, {
        onClick: () => {
            t(), p()
        },
        children: [(0, i.jsx)(l.Text, {
            variant: "text-sm/semibold",
            children: m.intl.string(n ? A.default["3GrhnF"] : A.default["54ycKJ"])
        }), (0, i.jsx)(h.l, {
            guildIds: f,
            prioritizeSelectedGuild: !0
        })]
    })
}