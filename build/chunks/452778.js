/** Chunk was on 46875 **/
/** chunk id: 452778, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(989349),
    s = n.n(a),
    o = n(990078),
    c = n(397927),
    d = n(927813),
    u = n(985018),
    m = n(612605);
let h = e => {
    let t, n, {
        rateLimitPerUser: r,
        slowmodeCooldownGuess: a,
        isBypassSlowmode: h,
        leadingIcon: g = !1
    } = e;
    if (r >= d.A.Seconds.HOUR) {
        let e = Math.floor(r / d.A.Seconds.HOUR),
            t = Math.floor((r - e * d.A.Seconds.HOUR) / d.A.Seconds.MINUTE),
            l = r - e * d.A.Seconds.HOUR - t * d.A.Seconds.MINUTE;
        n = u.intl.formatToPlainString(u.t.oEwLez, {
            hours: e,
            minutes: t,
            seconds: l
        })
    } else if (r >= 60) {
        let e = Math.floor(r / 60);
        n = u.intl.formatToPlainString(u.t.DARKYm, {
            minutes: e,
            seconds: r - 60 * e
        })
    } else n = u.intl.formatToPlainString(u.t["9yE8Ga"], {
        seconds: r
    });
    if (!h && a > 0) {
        let e = s().duration(a);
        if (a > d.A.Millis.HOUR) {
            let n = "".concat(e.minutes()).padStart(2, "0"),
                l = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.hours(), ":").concat(n, ":").concat(l)
        } else {
            let n = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.minutes(), ":").concat(n)
        }
    } else t = h ? u.intl.string(u.t.SSzXvQ) : u.intl.string(u.t.Icu3bf);
    let x = (0, l.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: t
        }),
        f = (0, l.jsx)(c.xbX, {
            size: "xs",
            color: "currentColor",
            className: i()(m.Eq, {
                [m.iE]: g
            })
        });
    return (0, l.jsx)(o.m, {
        text: n,
        children: (0, l.jsx)("div", {
            className: m.ns,
            children: g ? (0, l.jsxs)(l.Fragment, {
                children: [f, x]
            }) : (0, l.jsxs)(l.Fragment, {
                children: [x, f]
            })
        })
    })
}