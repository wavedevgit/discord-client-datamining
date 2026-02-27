/** chunk id: 704037, original params: e,t,i (module,exports,require) **/
i.d(t, {
    l: () => x
}), i(667532);
var s = i(627968),
    n = i(64700),
    l = i(311907),
    a = i(397927),
    r = i(573435),
    d = i(71393),
    c = i(967198),
    u = i(743790),
    m = i(960016);

function o(e) {
    let {
        children: t,
        iconSize: i
    } = e;
    return (0, s.jsx)(r.Ay, {
        className: m.Iu,
        mask: r.Ay.Masks.SQUIRCLE,
        width: i + 5,
        height: i + 5,
        children: t
    })
}

function x(e) {
    let {
        guildIds: t,
        iconSize: i = 20,
        prioritizeSelectedGuild: r = !1
    } = e, x = (0, l.bG)([c.A], () => r ? c.A.getGuildId() : null, [r]), h = (0, l.yK)([d.A], () => t.map(e => d.A.getGuild(e)), [t]), j = (0, n.useMemo)(() => h.filter(e => null != e), [h]), {
        visibleGuilds: f,
        numTruncated: I
    } = (0, n.useMemo)(() => {
        let e = [...j];
        if (null != x) {
            let t = e.findIndex(e => e.id === x);
            t > 0 && (e.splice(t, 1), e.unshift(j[t]))
        }
        return 4 === e.length ? {
            visibleGuilds: e,
            numTruncated: 0
        } : {
            visibleGuilds: e.slice(0, 3),
            numTruncated: e.length - 3
        }
    }, [j, x]);
    return (0, s.jsxs)("div", {
        className: m.WM,
        children: [f.map(e => (0, s.jsx)(o, {
            iconSize: i,
            children: (0, s.jsx)(u.$, {
                guild: e,
                size: i
            })
        }, e.id)), I > 0 && (0, s.jsx)(o, {
            iconSize: i,
            children: (0, s.jsxs)(a.Text, {
                className: m.br,
                color: "text-subtle",
                variant: "text-xxs/semibold",
                children: ["+", I]
            })
        })]
    })
}