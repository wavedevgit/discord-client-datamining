/** chunk id: 546849, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(128450),
    a = n(985018);

function r(e) {
    let {
        sectionTitle: t,
        errors: n,
        onPronounsChange: r,
        pendingPronouns: o,
        placeholder: d,
        currentPronouns: c,
        disabled: u = !1
    } = e;
    return (0, i.jsx)(l.A, {
        title: t,
        errors: n,
        disabled: u,
        children: (0, i.jsx)(s.ksK, {
            placeholder: d ?? a.intl.string(a.t.NPEUUu),
            maxLength: 40,
            value: o ?? c,
            onChange: function(e) {
                r(e === c ? void 0 : e)
            },
            disabled: u
        })
    })
}