/** chunk id: 361311 params = (module,exports,require) **/
s.d(t, {
    A: () => o
});
var l = s(627968);
s(64700);
var n = s(397927),
    a = s(429913),
    i = s(102876),
    r = s(985018);

function o(e) {
    let {
        applicationIds: t
    } = e, s = (0, a.A)(t).filter(e => null != e);
    if (0 === s.length) return null;
    let o = null;
    if (1 === s.length) o = r.intl.format(r.t.wQ6urw, {
        applicationName: () => (0, l.jsx)(i.A, {
            application: s[0]
        }, s[0].id)
    });
    else if (2 === s.length) o = r.intl.format(r.t.C98CSN, {
        applicationName: () => (0, l.jsx)(i.A, {
            application: s[0]
        }, s[0].id),
        applicationName2: () => (0, l.jsx)(i.A, {
            application: s[1]
        }, s[1].id)
    });
    else {
        let e = s[s.length - 1],
            t = s.slice(0, -1);
        o = r.intl.format(r.t.UxpwAh, {
            applications: () => t.map(e => (0, l.jsx)(i.A, {
                application: e,
                useComma: !0
            }, e.id)),
            applicationNameLast: () => (0, l.jsx)(i.A, {
                application: e
            }, e.id)
        })
    }
    return (0, l.jsx)(n.Text, {
        variant: "text-sm/normal",
        children: o
    })
}