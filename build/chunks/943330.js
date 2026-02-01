/** chunk id: 943330, original params: e,t,n (module,exports,require) **/
n.d(t, {
    L: () => l
});
var i = n(927813),
    r = n(985018);

function l(e) {
    if (e >= i.A.Seconds.HOUR) {
        let t = Math.floor(e / i.A.Seconds.HOUR),
            n = Math.floor((e - t * i.A.Seconds.HOUR) / i.A.Seconds.MINUTE),
            l = e - t * i.A.Seconds.HOUR - n * i.A.Seconds.MINUTE;
        return r.intl.formatToPlainString(r.t["3hz51F"], {
            hours: t,
            minutes: n,
            seconds: l
        })
    }
    if (!(e >= 60)) return r.intl.formatToPlainString(r.t.IWntYg, {
        seconds: e
    });
    {
        let t = Math.floor(e / 60);
        return r.intl.formatToPlainString(r.t.sY3wlG, {
            minutes: t,
            seconds: e - 60 * t
        })
    }
}