/** chunk id: 704037 params = (module,exports,require) **/
i.d(t, {
    l: () => x
}), i(667532);
var l = i(627968),
    s = i(64700),
    n = i(311907),
    a = i(397927),
    r = i(573435),
    c = i(71393),
    d = i(967198),
    o = i(743790),
    u = i(529690);

function m(e) {
    let {
        children: t,
        iconSize: i
    } = e;
    return (0, l.jsx)(r.Ay, {
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
    } = e, x = (0, n.bG)([d.A], () => r ? d.A.getGuildId() : null, [r]), h = (0, n.yK)([c.A], () => t.map(e => c.A.getGuild(e)), [t]), j = (0, s.useMemo)(() => h.filter(e => null != e), [h]), {
        visibleGuilds: T,
        numTruncated: I
    } = (0, s.useMemo)(() => {
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
    return (0, l.jsxs)("div", {
        className: u.WM,
        children: [T.map(e => (0, l.jsx)(m, {
            iconSize: i,
            children: (0, l.jsx)(o.$, {
                guild: e,
                size: i
            })
        }, e.id)), I > 0 && (0, l.jsx)(m, {
            iconSize: i,
            children: (0, l.jsxs)(a.Text, {
                className: u.br,
                color: "text-subtle",
                variant: "text-xxs/semibold",
                children: ["+", I]
            })
        })]
    })
}