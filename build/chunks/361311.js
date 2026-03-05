/** chunk id: 361311, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(429913),
    l = n(102876),
    a = n(985018);

function d(e) {
    let {
        applicationIds: t
    } = e, n = (0, r.A)(t).filter(e => null != e);
    if (0 === n.length) return null;
    let d = null;
    if (1 === n.length) d = a.intl.format(a.t.wQ6urw, {
        applicationName: () => (0, i.jsx)(l.A, {
            application: n[0]
        }, n[0].id)
    });
    else if (2 === n.length) d = a.intl.format(a.t.C98CSN, {
        applicationName: () => (0, i.jsx)(l.A, {
            application: n[0]
        }, n[0].id),
        applicationName2: () => (0, i.jsx)(l.A, {
            application: n[1]
        }, n[1].id)
    });
    else {
        let e = n[n.length - 1],
            t = n.slice(0, -1);
        d = a.intl.format(a.t.UxpwAh, {
            applications: () => t.map(e => (0, i.jsx)(l.A, {
                application: e,
                useComma: !0
            }, e.id)),
            applicationNameLast: () => (0, i.jsx)(l.A, {
                application: e
            }, e.id)
        })
    }
    return (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: d
    })
}