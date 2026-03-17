/** chunk id: 361311 params = (module,exports,require) **/
t.d(n, {
    A: () => o
});
var i = t(627968);
t(64700);
var s = t(397927),
    l = t(429913),
    a = t(102876),
    r = t(985018);

function o(e) {
    let {
        applicationIds: n
    } = e, t = (0, l.A)(n).filter(e => null != e);
    if (0 === t.length) return null;
    let o = null;
    if (1 === t.length) o = r.intl.format(r.t.wQ6urw, {
        applicationName: () => (0, i.jsx)(a.A, {
            application: t[0]
        }, t[0].id)
    });
    else if (2 === t.length) o = r.intl.format(r.t.C98CSN, {
        applicationName: () => (0, i.jsx)(a.A, {
            application: t[0]
        }, t[0].id),
        applicationName2: () => (0, i.jsx)(a.A, {
            application: t[1]
        }, t[1].id)
    });
    else {
        let e = t[t.length - 1],
            n = t.slice(0, -1);
        o = r.intl.format(r.t.UxpwAh, {
            applications: () => n.map(e => (0, i.jsx)(a.A, {
                application: e,
                useComma: !0
            }, e.id)),
            applicationNameLast: () => (0, i.jsx)(a.A, {
                application: e
            }, e.id)
        })
    }
    return (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: o
    })
}