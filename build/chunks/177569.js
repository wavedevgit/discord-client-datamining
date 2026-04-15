/** chunk id: 177569 params = (module,exports,require) **/
t.d(i, {
    A: () => l
});
var r = t(627968),
    a = t(158954),
    n = t(262427),
    o = t(945942),
    s = t(985018);

function l(e) {
    let {
        location: i
    } = e, {
        shouldRender: t,
        limitedOfferTimeLeft: l
    } = (0, o.A)({
        location: i
    });
    return t ? (0, r.jsx)(n.J, {
        text: s.intl.format(s.t["/bHQ84"], {
            numDays: Math.max(l, 1),
            applicationName: s.intl.string(s.t.Uu8hke)
        }),
        Icon: a.Cp8
    }) : null
}