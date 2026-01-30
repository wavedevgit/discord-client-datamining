/** chunk id: 452778, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(989349),
    s = n.n(a),
    o = n(990078),
    c = n(397927),
    d = n(927813),
    u = n(985018),
    m = n(612605);
let h = e => {
    let t, n, {
        rateLimitPerUser: l,
        slowmodeCooldownGuess: a,
        isBypassSlowmode: h,
        leadingIcon: g = !1
    } = e;
    if (l >= d.A.Seconds.HOUR) {
        let e = Math.floor(l / d.A.Seconds.HOUR),
            t = Math.floor((l - e * d.A.Seconds.HOUR) / d.A.Seconds.MINUTE),
            r = l - e * d.A.Seconds.HOUR - t * d.A.Seconds.MINUTE;
        n = u.intl.formatToPlainString(u.t.oEwLez, {
            hours: e,
            minutes: t,
            seconds: r
        })
    } else if (l >= 60) {
        let e = Math.floor(l / 60);
        n = u.intl.formatToPlainString(u.t.DARKYm, {
            minutes: e,
            seconds: l - 60 * e
        })
    } else n = u.intl.formatToPlainString(u.t["9yE8Ga"], {
        seconds: l
    });
    if (!h && a > 0) {
        let e = s().duration(a);
        if (a > d.A.Millis.HOUR) {
            let n = "".concat(e.minutes()).padStart(2, "0"),
                r = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.hours(), ":").concat(n, ":").concat(r)
        } else {
            let n = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.minutes(), ":").concat(n)
        }
    } else t = h ? u.intl.string(u.t.SSzXvQ) : u.intl.string(u.t.Icu3bf);
    let f = (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: t
        }),
        x = (0, r.jsx)(c.xbX, {
            size: "xs",
            color: "currentColor",
            className: i()(m.Eq, {
                [m.iE]: g
            })
        });
    return (0, r.jsx)(o.m, {
        text: n,
        children: (0, r.jsx)("div", {
            className: m.ns,
            children: g ? (0, r.jsxs)(r.Fragment, {
                children: [x, f]
            }) : (0, r.jsxs)(r.Fragment, {
                children: [f, x]
            })
        })
    })
}