/** chunk id: 900254, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var s = n(397927),
    a = n(631670),
    l = n(253932),
    r = n(985018);

function o(e) {
    let {
        legacyUsername: t,
        pendingLegacyUsernameDisabled: n
    } = e, o = l.m$.useSetting(), c = void 0 !== n ? n : o;
    return (0, i.jsx)(s.dOG, {
        label: r.intl.string(r.t["3cWDuO"]),
        description: c ? null : r.intl.formatToPlainString(r.t.aYhclf, {
            username: t
        }),
        checked: !c,
        onChange: e => {
            !e === o ? (0, a._e)() : (0, a.VG)(!e)
        }
    })
}