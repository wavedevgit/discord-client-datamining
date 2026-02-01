/** chunk id: 704037, original params: e,t,n (module,exports,require) **/
n.d(t, {
    l: () => h
}), n(896048), n(667532);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(573435),
    o = n(71393),
    c = n(967198),
    u = n(743790),
    d = n(960016);

function p(e) {
    let {
        children: t
    } = e;
    return (0, r.jsx)(a.Ay, {
        className: d.Iu,
        mask: a.Ay.Masks.SQUIRCLE,
        width: 25,
        height: 25,
        children: t
    })
}

function h(e) {
    let {
        guildIds: t
    } = e, n = (0, i.bG)([c.A], () => c.A.getGuildId()), a = (0, i.yK)([o.A], () => t.map(e => o.A.getGuild(e)), [t]), h = (0, l.useMemo)(() => a.filter(e => null != e), [a]), {
        visibleGuilds: g,
        numTruncated: f
    } = (0, l.useMemo)(() => {
        let e = [...h];
        if (null != n) {
            let t = h.findIndex(e => e.id === n); - 1 !== t && (e.splice(t, 1), e.unshift(h[t]))
        }
        return 4 === e.length ? {
            visibleGuilds: e,
            numTruncated: 0,
            visibleGuildsTooltip: e,
            numTruncatedTooltipGuilds: 0
        } : {
            visibleGuilds: e.slice(0, 3),
            numTruncated: e.length - 3
        }
    }, [h, n]);
    return (0, r.jsxs)("div", {
        className: d.WM,
        children: [g.map(e => (0, r.jsx)(p, {
            children: (0, r.jsx)(u.$, {
                guild: e,
                size: 20
            })
        }, e.id)), f > 0 && (0, r.jsx)(p, {
            children: (0, r.jsxs)(s.Text, {
                className: d.br,
                color: "text-subtle",
                variant: "text-xxs/semibold",
                children: ["+", f]
            })
        })]
    })
}