/** Chunk was on 28636 **/
/** chunk id: 273423, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j,
    I: () => f
}), n(321073);
var r, l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    c = n(990078),
    d = n(319060),
    u = n(397927),
    p = n(573435),
    h = n(773669),
    m = n(486020),
    g = n(240248),
    _ = n(985018),
    b = n(420783),
    f = ((r = {})[r.SMALL = (0, g.xI)(d.A.GUILD_COUNT_SMALL_ICON_SIZE)] = "SMALL", r[r.LARGE = (0, g.xI)(d.A.GUILD_COUNT_LARGE_ICON_SIZE)] = "LARGE", r);
let x = {
        [f.SMALL]: b.Ps,
        [f.LARGE]: b.XY
    },
    v = {
        [f.SMALL]: b.Bx,
        [f.LARGE]: b.J3
    };

function j(e) {
    var t, n, r;
    let {
        application: a,
        mutualGuilds: d,
        mutualGuildShownMax: g = 4,
        className: j,
        textVariant: A = "text-sm/normal",
        compact: y,
        guildIconSize: C = f.LARGE,
        guildsClassName: O,
        children: S
    } = e, I = (0, o.bG)([h.default], () => h.default.locale), E = new Intl.ListFormat(I), P = null != (t = null == (r = a.directory_entry) ? void 0 : r.guild_count) ? t : 0, N = null != (n = null == d ? void 0 : d.length) ? n : 0, T = Math.max(0, P - N), {
        shownMutualGuilds: R,
        hiddenMutualGuilds: L
    } = i.useMemo(() => {
        let e = [],
            t = [];
        return null == d || d.forEach(n => {
            e.length < g && null != n.icon ? e.push(n) : t.push(n)
        }), e.length === g && t.length > 0 && (t.push(e[g - 1]), e = e.slice(0, g - 1)), {
            shownMutualGuilds: e,
            hiddenMutualGuilds: t
        }
    }, [d, g]), D = L.length, w = function(e, t, n, r, l) {
        if (0 === t && 0 === e) return null;
        if (t > 0 && 0 === n) return _.intl.formatToPlainString(_.t.pnzE1t, {
            mutualGuildCount: t
        });
        let i = t > 0 ? _.t.YR8PSL : _.t.GQjq6c,
            a = new Intl.NumberFormat(r, {
                notation: l ? "compact" : "standard",
                compactDisplay: "short"
            });
        return _.intl.formatToPlainString(i, {
            guildCount: a.format(e),
            mutualGuildCount: t,
            nonMutualGuildCount: a.format(n)
        })
    }(P, N, T, I, y);
    return 0 === R.length && null == w ? null : (0, l.jsxs)(l.Fragment, {
        children: [S, (0, l.jsxs)("div", {
            className: s()(j, b.iE),
            children: [(0, l.jsx)("div", {
                className: s()(b.Pt, O),
                children: R.length > 0 ? (0, l.jsxs)(l.Fragment, {
                    children: [R.map((e, t) => {
                        let n = t === R.length - 1 && 0 === D,
                            r = m.Ay.getGuildIconURL({
                                id: e.id,
                                icon: e.icon,
                                size: C,
                                canAnimate: !1
                            }),
                            a = (0, l.jsx)(c.m, {
                                text: e.name,
                                position: "top",
                                children: (0, l.jsx)("img", {
                                    className: s()(b.Kk, v[C]),
                                    src: r,
                                    alt: ""
                                })
                            });
                        return n ? (0, l.jsx)(i.Fragment, {
                            children: a
                        }, e.id) : (0, l.jsx)(p.Ay, {
                            className: b.SA,
                            height: C,
                            width: C,
                            mask: p.Ay.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: a
                        }, e.id)
                    }), D > 0 ? (0, l.jsx)(c.m, {
                        text: _.intl.formatToPlainString(_.t.m6oRrA, {
                            appNames: E.format(L.map(e => e.name))
                        }),
                        position: "top",
                        children: (0, l.jsxs)("div", {
                            className: s()(b.S_, x[C]),
                            children: ["+", D]
                        })
                    }) : null]
                }) : (0, l.jsx)(u.RR9, {
                    size: "custom",
                    color: "currentColor",
                    width: C,
                    height: C,
                    className: b.DE
                })
            }), null != w ? (0, l.jsx)(u.Text, {
                variant: A,
                color: "text-default",
                children: w
            }) : null]
        })]
    })
}