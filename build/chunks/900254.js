/** chunk id: 900254 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(631670),
    r = n(253932),
    a = n(985018);

function o(e) {
    let {
        legacyUsername: t,
        pendingLegacyUsernameDisabled: n
    } = e, o = r.m$.useSetting(), d = void 0 !== n ? n : o;
    return (0, i.jsx)(s.dOG, {
        label: a.intl.string(a.t["3cWDuO"]),
        description: d ? null : a.intl.formatToPlainString(a.t.aYhclf, {
            username: t
        }),
        checked: !d,
        onChange: e => {
            !e === o ? (0, l._e)() : (0, l.VG)(!e)
        }
    })
}