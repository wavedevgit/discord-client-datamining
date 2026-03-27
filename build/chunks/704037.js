/** chunk id: 704037 params = (module,exports,require) **/
"use strict";
n.d(t, {
    l: () => A
}), n(667532);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(573435),
    o = n(71393),
    c = n(967198),
    d = n(743790),
    u = n(529690);

function h(e) {
    let {
        children: t,
        iconSize: n
    } = e;
    return (0, i.jsx)(r.Ay, {
        className: u.Iu,
        mask: r.Ay.Masks.SQUIRCLE,
        width: n + 5,
        height: n + 5,
        children: t
    })
}

function A(e) {
    let {
        guildIds: t,
        iconSize: n = 20,
        prioritizeSelectedGuild: r = !1
    } = e, A = (0, l.bG)([c.A], () => r ? c.A.getGuildId() : null, [r]), m = (0, l.yK)([o.A], () => t.map(e => o.A.getGuild(e)), [t]), _ = (0, s.useMemo)(() => m.filter(e => null != e), [m]), {
        visibleGuilds: p,
        numTruncated: g
    } = (0, s.useMemo)(() => {
        let e = [..._];
        if (null != A) {
            let t = e.findIndex(e => e.id === A);
            t > 0 && (e.splice(t, 1), e.unshift(_[t]))
        }
        return 4 === e.length ? {
            visibleGuilds: e,
            numTruncated: 0
        } : {
            visibleGuilds: e.slice(0, 3),
            numTruncated: e.length - 3
        }
    }, [_, A]);
    return (0, i.jsxs)("div", {
        className: u.WM,
        children: [p.map(e => (0, i.jsx)(h, {
            iconSize: n,
            children: (0, i.jsx)(d.$, {
                guild: e,
                size: n
            })
        }, e.id)), g > 0 && (0, i.jsx)(h, {
            iconSize: n,
            children: (0, i.jsxs)(a.Text, {
                className: u.br,
                color: "text-subtle",
                variant: "text-xxs/semibold",
                children: ["+", g]
            })
        })]
    })
}