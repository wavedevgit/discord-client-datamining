/** chunk id: 900254, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(631670),
    s = n(253932),
    a = n(985018);

function o(e) {
    let {
        legacyUsername: t,
        pendingLegacyUsernameDisabled: n
    } = e, o = s.m$.useSetting(), c = void 0 !== n ? n : o;
    return (0, r.jsx)(i.dOG, {
        label: a.intl.string(a.t["3cWDuO"]),
        description: c ? null : a.intl.formatToPlainString(a.t.aYhclf, {
            username: t
        }),
        checked: !c,
        onChange: e => {
            !e === o ? (0, l._e)() : (0, l.VG)(!e)
        }
    })
}