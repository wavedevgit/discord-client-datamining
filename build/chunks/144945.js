/** chunk id: 144945 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var a = n(627968),
    i = n(64700),
    l = n(989349),
    s = n.n(l),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(943330),
    u = n(101392),
    m = n(203982),
    p = n(927813),
    _ = n(960850),
    h = n(652215),
    A = n(985018),
    g = n(730034);

function f(e) {
    let t, {
            isEnabled: n,
            rateLimitPerUser: l,
            isBypassSlowmode: r,
            slowmodeCooldownGuess: u
        } = e,
        [_, f] = i.useState(!1);
    if (i.useEffect(() => {
            function e() {
                f(!0), setTimeout(() => {
                    f(!1)
                }, 1e3)
            }
            return m._.subscribe(h.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e), () => {
                m._.unsubscribe(h.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e)
            }
        }, []), !n) return null;
    let b = (0, d.L)(l);
    if (!r && u > 0) {
        let e = s().duration(u);
        if (u > p.A.Millis.HOUR) {
            let n = `${e.minutes()}`.padStart(2, "0"),
                a = `${e.seconds()}`.padStart(2, "0");
            t = `${e.hours()}:${n}:${a}`
        } else {
            let n = `${e.seconds()}`.padStart(2, "0");
            t = `${e.minutes()}:${n}`
        }
    } else t = r ? A.intl.string(A.t["8+NidX"]) : A.intl.string(A.t.Icu3bf);
    let T = (0, a.jsxs)(c.Text, {
        className: g.rk,
        variant: "text-xs/medium",
        color: _ ? "text-feedback-critical" : "text-muted",
        tabularNumbers: !0,
        children: [(0, a.jsx)(c.xbX, {
            size: "xxs",
            color: "currentColor",
            className: g.Eq
        }), t]
    });
    return (0, a.jsx)(o.m, {
        text: b,
        children: (0, a.jsx)("div", {
            className: g.ns,
            children: T
        })
    })
}

function b(e) {
    let {
        channel: t,
        isThreadCreation: n = !1
    } = e, i = (0, r.bG)([u.A], () => u.A.getSlowmodeCooldownGuess(t.id, n ? u.R.CreateThread : u.R.SendMessage)), l = (0, _._)(t, n ? u.R.CreateThread : u.R.SendMessage), {
        rateLimitPerUser: s
    } = t;
    return (0, a.jsx)(f, {
        isEnabled: s > 0,
        rateLimitPerUser: s,
        isBypassSlowmode: l,
        slowmodeCooldownGuess: i
    })
}