/** chunk id: 546849 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(128450),
    r = n(985018);

function a(e) {
    let {
        sectionTitle: t,
        errors: n,
        onPronounsChange: a,
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
            placeholder: d ?? r.intl.string(r.t.NPEUUu),
            maxLength: 40,
            value: o ?? c,
            onChange: function(e) {
                a(e === c ? void 0 : e)
            },
            disabled: u
        })
    })
}