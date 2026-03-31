/** chunk id: 708676 params = (module,exports,require) **/
n.d(t, {
    A: () => s,
    J: () => l
});
var i = n(989349),
    a = n.n(i),
    r = n(985018);

function l(e) {
    let t = a()();
    if (e <= t) return;
    let n = e.diff(t, "days");
    if (n > 1) return r.intl.formatToPlainString(r.t.dex68a, {
        days: n
    });
    let i = e.diff(t, "hours");
    if (i > 1) return r.intl.formatToPlainString(r.t.BWqf0c, {
        hours: i
    });
    let l = e.diff(t, "minutes");
    return r.intl.formatToPlainString(r.t["3SLXAz"], {
        minutes: l
    })
}

function s(e) {
    if (null != e) return l(e)
}