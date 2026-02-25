/** chunk id: 361311, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => u
});
var s = l(627968);
l(64700);
var n = l(397927),
    a = l(429913),
    i = l(102876),
    r = l(985018);

function u(e) {
    let {
        applicationIds: t
    } = e, l = (0, a.A)(t).filter(e => null != e);
    if (0 === l.length) return null;
    let u = null;
    if (1 === l.length) u = r.intl.format(r.t.wQ6urw, {
        applicationName: () => (0, s.jsx)(i.A, {
            application: l[0]
        }, l[0].id)
    });
    else if (2 === l.length) u = r.intl.format(r.t.C98CSN, {
        applicationName: () => (0, s.jsx)(i.A, {
            application: l[0]
        }, l[0].id),
        applicationName2: () => (0, s.jsx)(i.A, {
            application: l[1]
        }, l[1].id)
    });
    else {
        let e = l[l.length - 1],
            t = l.slice(0, -1);
        u = r.intl.format(r.t.UxpwAh, {
            applications: () => t.map(e => (0, s.jsx)(i.A, {
                application: e,
                useComma: !0
            }, e.id)),
            applicationNameLast: () => (0, s.jsx)(i.A, {
                application: e
            }, e.id)
        })
    }
    return (0, s.jsx)(n.Text, {
        variant: "text-sm/normal",
        children: u
    })
}