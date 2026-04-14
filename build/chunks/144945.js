/** chunk id: 144945 params = (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968),
    l = n(64700),
    a = n(989349),
    s = n.n(a),
    r = n(311907),
    o = n(990078),
    c = n(397927),
    d = n(943330),
    u = n(101392),
    h = n(203982),
    m = n(927813),
    A = n(960850),
    g = n(652215),
    p = n(985018),
    _ = n(730034);

function f(e) {
    let t, {
            isEnabled: n,
            rateLimitPerUser: a,
            isBypassSlowmode: r,
            slowmodeCooldownGuess: u
        } = e,
        [A, f] = l.useState(!1);
    if (l.useEffect(() => {
            function e() {
                f(!0), setTimeout(() => {
                    f(!1)
                }, 1e3)
            }
            return h._.subscribe(g.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e), () => {
                h._.unsubscribe(g.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e)
            }
        }, []), !n) return null;
    let E = (0, d.L)(a);
    if (!r && u > 0) {
        let e = s().duration(u);
        if (u > m.A.Millis.HOUR) {
            let n = `${e.minutes()}`.padStart(2, "0"),
                i = `${e.seconds()}`.padStart(2, "0");
            t = `${e.hours()}:${n}:${i}`
        } else {
            let n = `${e.seconds()}`.padStart(2, "0");
            t = `${e.minutes()}:${n}`
        }
    } else t = r ? p.intl.string(p.t["8+NidX"]) : p.intl.string(p.t.Icu3bf);
    let C = (0, i.jsxs)(c.Text, {
        className: _.rk,
        variant: "text-xs/medium",
        color: A ? "text-feedback-critical" : "text-muted",
        tabularNumbers: !0,
        children: [(0, i.jsx)(c.xbX, {
            size: "xxs",
            color: "currentColor",
            className: _.Eq
        }), t]
    });
    return (0, i.jsx)(o.m, {
        text: E,
        children: (0, i.jsx)("div", {
            className: _.ns,
            children: C
        })
    })
}

function E(e) {
    let {
        channel: t,
        isThreadCreation: n = !1
    } = e, l = (0, r.bG)([u.A], () => u.A.getSlowmodeCooldownGuess(t.id, n ? u.R.CreateThread : u.R.SendMessage)), a = (0, A._)(t, n ? u.R.CreateThread : u.R.SendMessage), {
        rateLimitPerUser: s
    } = t;
    return (0, i.jsx)(f, {
        isEnabled: s > 0,
        rateLimitPerUser: s,
        isBypassSlowmode: a,
        slowmodeCooldownGuess: l
    })
}