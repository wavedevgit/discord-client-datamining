/** chunk id: 364242, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    D: () => i,
    Y: () => a
});
var r = n(632434);

function i(e) {
    return e < 100 && (e > 50 ? e += 1900 : e += 2e3), e
}

function a(e, t, n) {
    let i = new Date(e);
    i.setMonth(n - 1), i.setDate(t);
    let a = (0, r.Gw)(i, {
            year: 1
        }),
        o = (0, r.Gw)(i, {
            year: -1
        });
    return Math.abs(a.getTime() - e.getTime()) < Math.abs(i.getTime() - e.getTime()) ? i = a : Math.abs(o.getTime() - e.getTime()) < Math.abs(i.getTime() - e.getTime()) && (i = o), i.getFullYear()
}