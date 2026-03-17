/** chunk id: 177569 params = (module,exports,require) **/
i.d(t, {
    A: () => o
});
var r = i(627968),
    a = i(158954),
    s = i(262427),
    n = i(697359),
    l = i(985018);

function o(e) {
    let {
        location: t
    } = e, {
        shouldRender: i,
        limitedOfferTimeLeft: o
    } = (0, n.A)({
        location: t
    });
    return i ? (0, r.jsx)(s.J, {
        text: l.intl.format(l.t["/bHQ84"], {
            numDays: Math.max(o, 1),
            applicationName: l.intl.string(l.t.Uu8hke)
        }),
        Icon: a.Cp8
    }) : null
}