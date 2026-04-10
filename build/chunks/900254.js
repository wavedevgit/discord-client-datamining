/** chunk id: 900254 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(631670),
    r = n(84540),
    a = n(253932),
    o = n(985018);

function d(e) {
    let {
        legacyUsername: t,
        pendingLegacyUsernameDisabled: n
    } = e, d = a.m$.useSetting(), c = void 0 !== n ? n : d;
    return (0, i.jsx)(s.dOG, {
        label: o.intl.string(o.t["3cWDuO"]),
        description: c ? null : o.intl.formatToPlainString(o.t.aYhclf, {
            username: t
        }),
        checked: !c,
        onChange: e => {
            !e === d ? (0, l._e)() : (0, r.p)({
                legacyUsernameDisabled: !e
            })
        }
    })
}