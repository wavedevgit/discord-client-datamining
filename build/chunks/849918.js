/** chunk id: 849918 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(915089),
    r = n(71532),
    a = n(496794),
    o = n(832208),
    d = n(985018),
    c = n(602372);
let u = [{
        fields: [{
            expirationDate: {
                name: "expirationDate",
                id: (0, l.Ld)(),
                title: () => d.intl.string(d.t["CeBa/4"]),
                autoComplete: "cc-exp",
                placeholder: () => d.intl.string(d.t.xeEWQ6),
                pattern: "\\d*",
                getClassNameForLayout: () => c.ep,
                renderInput: e => (0, i.jsx)(a.A, {
                    ...e
                })
            }
        }.expirationDate]
    }],
    _ = function(e) {
        let {
            onCardInfoChange: t,
            className: n,
            expirationDate: l,
            error: a
        } = e, [c, _] = s.useState(!1), [m, g] = s.useState(null), [A, h] = s.useState(l);
        return s.useEffect(() => {
            t({
                expirationDate: A
            }, null === m)
        }, [A, t, m]), (0, i.jsx)(o.A, {
            className: n,
            form: u,
            values: {
                expirationDate: A
            },
            errors: null != m ? {
                expirationDate: m
            } : {},
            formError: a,
            onFieldChange: e => {
                c || "" === e || _(!0), c && "" === e || !(0, r.So)(e) ? g(d.intl.string(d.t["9/zZdl"])) : g(null), h(e)
            }
        })
    }