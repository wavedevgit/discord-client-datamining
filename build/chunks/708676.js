/** chunk id: 708676 params = (module,exports,require) **/
n.d(t, {
    A: () => s,
    J: () => a
});
var i = n(989349),
    l = n.n(i),
    r = n(985018);

function a(e) {
    let t = l()();
    if (e <= t) return;
    let n = e.diff(t, "days");
    if (n > 1) return r.intl.formatToPlainString(r.t.dex68a, {
        days: n
    });
    let i = e.diff(t, "hours");
    if (i > 1) return r.intl.formatToPlainString(r.t.BWqf0c, {
        hours: i
    });
    let a = e.diff(t, "minutes");
    return r.intl.formatToPlainString(r.t["3SLXAz"], {
        minutes: a
    })
}

function s(e) {
    if (null != e) return a(e)
}