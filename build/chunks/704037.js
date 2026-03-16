/** chunk id: 704037 params = (module,exports,require) **/
i.d(t, {
    l: () => x
}), i(667532);
var s = i(627968),
    l = i(64700),
    n = i(311907),
    a = i(397927),
    r = i(573435),
    c = i(71393),
    d = i(967198),
    o = i(743790),
    u = i(960016);

function m(e) {
    let {
        children: t,
        iconSize: i
    } = e;
    return (0, s.jsx)(r.Ay, {
        className: u.Iu,
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
    } = e, x = (0, n.bG)([d.A], () => r ? d.A.getGuildId() : null, [r]), h = (0, n.yK)([c.A], () => t.map(e => c.A.getGuild(e)), [t]), j = (0, l.useMemo)(() => h.filter(e => null != e), [h]), {
        visibleGuilds: T,
        numTruncated: I
    } = (0, l.useMemo)(() => {
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
        className: u.WM,
        children: [T.map(e => (0, s.jsx)(m, {
            iconSize: i,
            children: (0, s.jsx)(o.$, {
                guild: e,
                size: i
            })
        }, e.id)), I > 0 && (0, s.jsx)(m, {
            iconSize: i,
            children: (0, s.jsxs)(a.Text, {
                className: u.br,
                color: "text-subtle",
                variant: "text-xxs/semibold",
                children: ["+", I]
            })
        })]
    })
}