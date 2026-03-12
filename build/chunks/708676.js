/** chunk id: 708676 params = (module,exports,require) **/
n.d(t, {
    A: () => s,
    J: () => l
});
var i = n(989349),
    r = n.n(i),
    a = n(985018);

function l(e) {
    let t = r()();
    if (e <= t) return;
    let n = e.diff(t, "days");
    if (n > 1) return a.intl.formatToPlainString(a.t.dex68a, {
        days: n
    });
    let i = e.diff(t, "hours");
    if (i > 1) return a.intl.formatToPlainString(a.t.BWqf0c, {
        hours: i
    });
    let l = e.diff(t, "minutes");
    return a.intl.formatToPlainString(a.t["3SLXAz"], {
        minutes: l
    })
}

function s(e) {
    if (null != e) return l(e)
}