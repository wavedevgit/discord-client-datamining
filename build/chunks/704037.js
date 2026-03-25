/** chunk id: 704037 params = (module,exports,require) **/
"use strict";
n.d(t, {
    l: () => A
}), n(667532);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(573435),
    o = n(71393),
    c = n(967198),
    d = n(743790),
    u = n(960016);

function h(e) {
    let {
        children: t,
        iconSize: n
    } = e;
    return (0, i.jsx)(a.Ay, {
        className: u.Iu,
        mask: a.Ay.Masks.SQUIRCLE,
        width: n + 5,
        height: n + 5,
        children: t
    })
}

function A(e) {
    let {
        guildIds: t,
        iconSize: n = 20,
        prioritizeSelectedGuild: a = !1
    } = e, A = (0, l.bG)([c.A], () => a ? c.A.getGuildId() : null, [a]), m = (0, l.yK)([o.A], () => t.map(e => o.A.getGuild(e)), [t]), p = (0, s.useMemo)(() => m.filter(e => null != e), [m]), {
        visibleGuilds: _,
        numTruncated: g
    } = (0, s.useMemo)(() => {
        let e = [...p];
        if (null != A) {
            let t = e.findIndex(e => e.id === A);
            t > 0 && (e.splice(t, 1), e.unshift(p[t]))
        }
        return 4 === e.length ? {
            visibleGuilds: e,
            numTruncated: 0
        } : {
            visibleGuilds: e.slice(0, 3),
            numTruncated: e.length - 3
        }
    }, [p, A]);
    return (0, i.jsxs)("div", {
        className: u.WM,
        children: [_.map(e => (0, i.jsx)(h, {
            iconSize: n,
            children: (0, i.jsx)(d.$, {
                guild: e,
                size: n
            })
        }, e.id)), g > 0 && (0, i.jsx)(h, {
            iconSize: n,
            children: (0, i.jsxs)(r.Text, {
                className: u.br,
                color: "text-subtle",
                variant: "text-xxs/semibold",
                children: ["+", g]
            })
        })]
    })
}