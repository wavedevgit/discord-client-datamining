/** chunk id: 144945 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var a = n(627968),
    i = n(64700),
    r = n(989349),
    s = n.n(r),
    l = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(943330),
    u = n(101392),
    _ = n(203982),
    m = n(927813),
    p = n(960850),
    f = n(652215),
    b = n(985018),
    h = n(357935);

function g(e) {
    let t, {
            isEnabled: n,
            rateLimitPerUser: r,
            isBypassSlowmode: l,
            slowmodeCooldownGuess: u
        } = e,
        [p, g] = i.useState(!1);
    if (i.useEffect(() => {
            function e() {
                g(!0), setTimeout(() => {
                    g(!1)
                }, 1e3)
            }
            return _._.subscribe(f.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e), () => {
                _._.unsubscribe(f.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e)
            }
        }, []), !n) return null;
    let A = (0, d.L)(r);
    if (!l && u > 0) {
        let e = s().duration(u);
        if (u > m.A.Millis.HOUR) {
            let n = `${e.minutes()}`.padStart(2, "0"),
                a = `${e.seconds()}`.padStart(2, "0");
            t = `${e.hours()}:${n}:${a}`
        } else {
            let n = `${e.seconds()}`.padStart(2, "0");
            t = `${e.minutes()}:${n}`
        }
    } else t = l ? b.intl.string(b.t["8+NidX"]) : b.intl.string(b.t.Icu3bf);
    let x = (0, a.jsxs)(c.Text, {
        className: h.rk,
        variant: "text-xs/medium",
        color: p ? "text-feedback-critical" : "text-muted",
        tabularNumbers: !0,
        children: [(0, a.jsx)(c.xbX, {
            size: "xxs",
            color: "currentColor",
            className: h.Eq
        }), t]
    });
    return (0, a.jsx)(o.m, {
        text: A,
        children: (0, a.jsx)("div", {
            className: h.ns,
            children: x
        })
    })
}

function A(e) {
    let {
        channel: t,
        isThreadCreation: n = !1
    } = e, i = (0, l.bG)([u.A], () => u.A.getSlowmodeCooldownGuess(t.id, n ? u.R.CreateThread : u.R.SendMessage)), r = (0, p._)(t, n ? u.R.CreateThread : u.R.SendMessage), {
        rateLimitPerUser: s
    } = t;
    return (0, a.jsx)(g, {
        isEnabled: s > 0,
        rateLimitPerUser: s,
        isBypassSlowmode: r,
        slowmodeCooldownGuess: i
    })
}