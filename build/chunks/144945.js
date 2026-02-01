/** chunk id: 144945, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(989349),
    o = n.n(l),
    s = n(311907),
    a = n(990078),
    c = n(397927),
    u = n(943330),
    d = n(101392),
    p = n(203982),
    f = n(927813),
    b = n(960850),
    O = n(652215),
    h = n(985018),
    m = n(244317);

function g(e) {
    let t, {
            isEnabled: n,
            rateLimitPerUser: l,
            isBypassSlowmode: s,
            slowmodeCooldownGuess: d
        } = e,
        [b, g] = r.useState(!1);
    if (r.useEffect(() => {
            function e() {
                g(!0), setTimeout(() => {
                    g(!1)
                }, 1e3)
            }
            return p._.subscribe(O.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e), () => {
                p._.unsubscribe(O.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e)
            }
        }, []), !n) return null;
    let y = (0, u.L)(l);
    if (!s && d > 0) {
        let e = o().duration(d);
        if (d > f.A.Millis.HOUR) {
            let n = "".concat(e.minutes()).padStart(2, "0"),
                i = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.hours(), ":").concat(n, ":").concat(i)
        } else {
            let n = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.minutes(), ":").concat(n)
        }
    } else t = s ? h.intl.string(h.t["8+NidX"]) : h.intl.string(h.t.Icu3bf);
    let A = (0, i.jsxs)(c.Text, {
        className: m.rk,
        variant: "text-xs/medium",
        color: b ? "text-feedback-critical" : "text-muted",
        tabularNumbers: !0,
        children: [(0, i.jsx)(c.xbX, {
            size: "xxs",
            color: "currentColor",
            className: m.Eq
        }), t]
    });
    return (0, i.jsx)(a.m, {
        text: y,
        children: (0, i.jsx)("div", {
            className: m.ns,
            children: A
        })
    })
}

function y(e) {
    let {
        channel: t,
        isThreadCreation: n = !1
    } = e, r = (0, s.bG)([d.A], () => d.A.getSlowmodeCooldownGuess(t.id, n ? d.R.CreateThread : d.R.SendMessage)), l = (0, b._)(t, n ? d.R.CreateThread : d.R.SendMessage), {
        rateLimitPerUser: o
    } = t;
    return (0, i.jsx)(g, {
        isEnabled: o > 0,
        rateLimitPerUser: o,
        isBypassSlowmode: l,
        slowmodeCooldownGuess: r
    })
}