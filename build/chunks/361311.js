/** Chunk was on 97492 **/
/** chunk id: 361311, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(429913),
    s = n(102876),
    a = n(985018);

function o(e) {
    let {
        applicationIds: t
    } = e, n = (0, i.A)(t).filter(e => null != e);
    if (0 === n.length) return null;
    let o = null;
    if (1 === n.length) o = a.intl.format(a.t.wQ6urw, {
        applicationName: () => (0, r.jsx)(s.A, {
            application: n[0]
        }, n[0].id)
    });
    else if (2 === n.length) o = a.intl.format(a.t.C98CSN, {
        applicationName: () => (0, r.jsx)(s.A, {
            application: n[0]
        }, n[0].id),
        applicationName2: () => (0, r.jsx)(s.A, {
            application: n[1]
        }, n[1].id)
    });
    else {
        let e = n[n.length - 1],
            t = n.slice(0, -1);
        o = a.intl.format(a.t.UxpwAh, {
            applications: () => t.map(e => (0, r.jsx)(s.A, {
                application: e,
                useComma: !0
            }, e.id)),
            applicationNameLast: () => (0, r.jsx)(s.A, {
                application: e
            }, e.id)
        })
    }
    return (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: o
    })
}