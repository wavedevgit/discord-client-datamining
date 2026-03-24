/** chunk id: 361311 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => o
});
var n = i(627968);
i(64700);
var s = i(397927),
    a = i(429913),
    l = i(102876),
    r = i(985018);

function o(e) {
    let {
        applicationIds: t
    } = e, i = (0, a.A)(t).filter(e => null != e);
    if (0 === i.length) return null;
    let o = null;
    if (1 === i.length) o = r.intl.format(r.t.wQ6urw, {
        applicationName: () => (0, n.jsx)(l.A, {
            application: i[0]
        }, i[0].id)
    });
    else if (2 === i.length) o = r.intl.format(r.t.C98CSN, {
        applicationName: () => (0, n.jsx)(l.A, {
            application: i[0]
        }, i[0].id),
        applicationName2: () => (0, n.jsx)(l.A, {
            application: i[1]
        }, i[1].id)
    });
    else {
        let e = i[i.length - 1],
            t = i.slice(0, -1);
        o = r.intl.format(r.t.UxpwAh, {
            applications: () => t.map(e => (0, n.jsx)(l.A, {
                application: e,
                useComma: !0
            }, e.id)),
            applicationNameLast: () => (0, n.jsx)(l.A, {
                application: e
            }, e.id)
        })
    }
    return (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: o
    })
}