/** chunk id: 849918 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(915089),
    a = n(71532),
    r = n(496794),
    o = n(832208),
    d = n(985018),
    c = n(784550);
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
                renderInput: e => (0, i.jsx)(r.A, {
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
            error: r
        } = e, [c, _] = s.useState(!1), [g, m] = s.useState(null), [A, h] = s.useState(l);
        return s.useEffect(() => {
            t({
                expirationDate: A
            }, null === g)
        }, [A, t, g]), (0, i.jsx)(o.A, {
            className: n,
            form: u,
            values: {
                expirationDate: A
            },
            errors: null != g ? {
                expirationDate: g
            } : {},
            formError: r,
            onFieldChange: e => {
                c || "" === e || _(!0), c && "" === e || !(0, a.So)(e) ? m(d.intl.string(d.t["9/zZdl"])) : m(null), h(e)
            }
        })
    }