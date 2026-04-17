/** chunk id: 708676 params = (module,exports,require) **/
n.d(t, {
    A: () => s,
    J: () => r
});
var i = n(989349),
    a = n.n(i),
    l = n(985018);

function r(e) {
    let t = a()();
    if (e <= t) return;
    let n = e.diff(t, "days");
    if (n > 1) return l.intl.formatToPlainString(l.t.dex68a, {
        days: n
    });
    let i = e.diff(t, "hours");
    if (i > 1) return l.intl.formatToPlainString(l.t.BWqf0c, {
        hours: i
    });
    let r = e.diff(t, "minutes");
    return l.intl.formatToPlainString(l.t["3SLXAz"], {
        minutes: r
    })
}

function s(e) {
    if (null != e) return r(e)
}