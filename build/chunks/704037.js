/** chunk id: 704037, original params: e,t,n (module,exports,require) **/
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
    u = n(960016);

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
    } = e, A = (0, l.bG)([c.A], () => r ? c.A.getGuildId() : null, [r]), m = (0, l.yK)([o.A], () => t.map(e => o.A.getGuild(e)), [t]), p = (0, s.useMemo)(() => m.filter(e => null != e), [m]), {
        visibleGuilds: g,
        numTruncated: _
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
        children: [g.map(e => (0, i.jsx)(h, {
            iconSize: n,
            children: (0, i.jsx)(d.$, {
                guild: e,
                size: n
            })
        }, e.id)), _ > 0 && (0, i.jsx)(h, {
            iconSize: n,
            children: (0, i.jsxs)(a.Text, {
                className: u.br,
                color: "text-subtle",
                variant: "text-xxs/semibold",
                children: ["+", _]
            })
        })]
    })
}