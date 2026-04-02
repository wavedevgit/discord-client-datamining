/** chunk id: 63342 params = (module,exports,require) **/
t.d(i, {
    A: () => x
});
var l = t(627968),
    s = t(64700),
    a = t(503698),
    n = t.n(a),
    r = t(47762),
    o = t(990078),
    d = t(397927),
    c = t(573435),
    u = t(885151),
    m = t(985018),
    _ = t(439570);

function h(e) {
    let {
        game: i,
        activityLevel: t
    } = e, {
        data: s
    } = (0, u.k)(i.id), a = s?.supplementalData?.coverImageUrl;
    if (null == a) return null;
    let n = t?.level === r._.HIGH;
    return (0, l.jsx)(o.m, {
        position: "bottom",
        "aria-label": i.name,
        text: i.name,
        children: (0, l.jsxs)("div", {
            className: _.Xy,
            children: [(0, l.jsx)("img", {
                className: _._s,
                src: a,
                alt: i.name
            }), n && (0, l.jsx)(c.Ay, {
                mask: c.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
                width: 16,
                height: 16,
                className: _.Sy,
                children: (0, l.jsx)("div", {
                    className: _.oZ,
                    children: (0, l.jsx)(d.Y3C, {
                        color: d.LU0.unsafe_rawColors.ORANGE_330.css,
                        width: 12,
                        height: 12,
                        size: "custom"
                    })
                })
            })]
        })
    })
}

function x(e) {
    let {
        gamesToDisplay: i,
        lastGameToDisplay: t,
        remainingGames: a,
        activity: r,
        onExpandClick: c
    } = e, [x, g] = s.useState(!1), {
        data: p
    } = (0, u.k)(t?.id), A = s.useCallback(() => {
        c?.(), g(!0)
    }, [c]), E = s.useMemo(() => {
        if (null == t) return null;
        let e = p?.supplementalData?.coverImageUrl;
        return null == e ? null : 0 === a.length || x ? (0, l.jsx)(h, {
            game: t,
            activityLevel: r?.[t.id]
        }) : (0, l.jsx)(o.m, {
            position: "bottom",
            "aria-label": m.intl.string(m.t.yohc6E),
            text: m.intl.string(m.t.yohc6E),
            children: (0, l.jsxs)(d.DUT, {
                className: n()(_.Xy, _.oL, _.vk),
                onClick: A,
                "aria-label": `Show ${a.length} more games`,
                children: [(0, l.jsx)("img", {
                    className: n()(_._s, _.tJ),
                    src: e,
                    alt: t.name
                }), (0, l.jsx)("div", {
                    className: _.Fg
                }), (0, l.jsx)("div", {
                    className: _.AZ,
                    children: (0, l.jsx)(d.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children: `+${a.length}`
                    })
                })]
            })
        })
    }, [t, p, a, r, x, A]);
    if (null == i || 0 === i.length) return null;
    let j = x && a.length > 0 ? a : [];
    return (0, l.jsxs)(d.BJc, {
        direction: "horizontal",
        gap: 8,
        wrap: !0,
        children: [i.map(e => (0, l.jsx)(h, {
            game: e,
            activityLevel: r?.[e.id]
        }, e.id)), x && a.length > 0 ? j.map(e => (0, l.jsx)(h, {
            game: e,
            activityLevel: r?.[e.id]
        }, e.id)) : E]
    })
}