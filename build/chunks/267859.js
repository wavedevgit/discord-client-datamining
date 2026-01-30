/** chunk id: 267859, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => u
});
var l = n(405269),
    r = n(927813),
    i = n(403362),
    a = n(403918),
    o = n(985018);
let s = t => {
    let e = Date.now() + t;
    return (0, l.ro)(new Date, new Date(e)) ? o.intl.formatToPlainString(o.t["+3jw2j"], {
        time: o.intl.data.formatTime(e, {
            format: "short"
        })
    }) : o.intl.formatToPlainString(o.t["/Avy4C"], {
        time: o.intl.data.formatTime(e, {
            format: "short"
        })
    })
};

function u(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t) {
        case a.yt.TODAY:
            if (e) return s(r.A.Millis.DAY);
            return o.intl.string(o.t.TOEOae);
        case a.yt.HOURS_4:
            if (e) return s(4 * r.A.Millis.HOUR);
            return o.intl.formatToPlainString(o.t.YizuvW, {
                hours: 4
            });
        case a.yt.HOURS_1:
            if (e) return s(+r.A.Millis.HOUR);
            return o.intl.formatToPlainString(o.t.YizuvW, {
                hours: 1
            });
        case a.yt.MINUTES_30:
            if (e) return s(30 * r.A.Millis.MINUTE);
            return o.intl.formatToPlainString(o.t["/XUoq5"], {
                minutes: 30
            });
        case a.yt.DONT_CLEAR:
            return o.intl.string(o.t.bRn8cq);
        default:
            (0, i.xb)(t)
    }
}