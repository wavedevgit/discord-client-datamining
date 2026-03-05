/** chunk id: 943330 params = (module,exports,require) **/
n.d(t, {
    L: () => r
});
var a = n(927813),
    i = n(985018);

function r(e) {
    if (e >= a.A.Seconds.HOUR) {
        let t = Math.floor(e / a.A.Seconds.HOUR),
            n = Math.floor((e - t * a.A.Seconds.HOUR) / a.A.Seconds.MINUTE),
            r = e - t * a.A.Seconds.HOUR - n * a.A.Seconds.MINUTE;
        return i.intl.formatToPlainString(i.t["3hz51F"], {
            hours: t,
            minutes: n,
            seconds: r
        })
    }
    if (!(e >= 60)) return i.intl.formatToPlainString(i.t.IWntYg, {
        seconds: e
    });
    {
        let t = Math.floor(e / 60);
        return i.intl.formatToPlainString(i.t.sY3wlG, {
            minutes: t,
            seconds: e - 60 * t
        })
    }
}