/** chunk id: 531461, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => _
});
var a = i(627968),
    l = i(64700),
    n = i(158954),
    r = i(397927),
    s = i(154672),
    o = i(198982),
    c = i(330936),
    d = i(652215),
    u = i(985018);
let _ = t => {
    let {
        email: e,
        setStep: i,
        onBack: _,
        school: I,
        setSchool: E,
        ...A
    } = t, [g, h] = l.useState(null), [m, S] = l.useState(!1), y = async () => {
        h(null), S(!0);
        try {
            await s.A.signup(e, I), i(c.Di.EMAIL_WAITLIST)
        } catch (t) {
            h(new o.LG(t))
        } finally {
            S(!1)
        }
    }, x = async t => {
        null != I && "" !== I && t.charCode === d.Ks6.ENTER && await y()
    };
    return (0, a.jsx)(n.Modal, {
        ...A,
        title: u.intl.string(u.t["2FNWBG"]),
        subtitle: u.intl.string(u.t["/4y6ox"]),
        actions: [{
            variant: "secondary",
            onClick: _,
            text: u.intl.string(u.t["13/7kX"])
        }, {
            variant: "primary",
            text: u.intl.string(u.t.PDsYAo),
            onClick: y,
            loading: m
        }],
        children: (0, a.jsx)(r.ksK, {
            label: u.intl.string(u.t["L+AfJr"]),
            onKeyPress: x,
            placeholder: u.intl.string(u.t.Y1btJd),
            onChange: t => {
                E(t)
            },
            error: g?.getAnyErrorMessage()
        })
    })
}