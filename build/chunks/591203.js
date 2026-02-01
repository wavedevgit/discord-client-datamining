/** chunk id: 591203, original params: t,e,i (module,exports,require) **/
i.d(e, {
    L: () => m
}), i(896048);
var n = i(627968),
    l = i(64700),
    s = i(311907),
    r = i(397927),
    u = i(565645),
    a = i(688810),
    o = i(687021),
    d = i(128450),
    T = i(419954),
    A = i(796774),
    S = i(209932),
    c = i(536432),
    E = i(984813),
    g = i(595953),
    _ = i(975571),
    I = i(780964),
    O = i(617617),
    N = i(652215),
    C = i(980504),
    b = i(985018),
    p = i(17786);

function L(t) {
    return (0, s.bG)([S.A], () => {
        if (null == t) return null;
        let {
            guildId: e,
            soundId: i
        } = t;
        return S.A.getSound(e === C.XH ? C.mV : e, i)
    })
}

function D(t) {
    let {
        guildId: e
    } = t, i = (0, s.bG)([O.A], () => {
        var t, i, n;
        return null == (n = O.A.settings.guilds) || null == (i = n.guilds) || null == (t = i[e]) ? void 0 : t.joinSound
    }), l = L(i);
    if (null == i || null == l) return null;
    let {
        emojiId: a,
        emojiName: o
    } = l, d = null != a || null != o;
    return (0, n.jsxs)("div", {
        className: p.Io,
        children: [d ? (0, n.jsx)(u.A, {
            emojiId: a,
            emojiName: o,
            className: p.nW
        }) : (0, n.jsx)(r.HKD, {
            size: "md",
            color: "currentColor",
            className: p.nW
        }), (0, n.jsx)(r.Text, {
            className: p.dK,
            variant: "text-xs/medium",
            children: l.name
        })]
    })
}
let m = (0, T.E2)(I.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [b.intl.string(b.t.nzUc3B)],
    Component: function() {
        let {
            analyticsLocations: t
        } = (0, a.Ay)(), [e, i] = l.useState(C.XH), u = (0, E.mz)(e), T = L(u), I = (null == u ? void 0 : u.type) === E.PP.GLOBAL, O = (0, s.bG)([S.A], () => S.A.hasFetchedAllSounds()) && null != u && null == T;
        l.useEffect(() => {
            O && (0, c.ND)({
                location: t
            })
        }, [O, t]), l.useEffect(() => {
            (0, A.E7)()
        }, []);
        let m = l.useCallback((t, e) => {
            let {
                inDropdown: i
            } = e;
            return null == t ? null : i ? (0, n.jsx)(D, {
                guildId: t.value
            }) : null
        }, []);
        return (0, n.jsxs)(r.nVY, {
            label: b.intl.string(b.t.nzUc3B),
            description: b.intl.format(b.t.u9RWmv, {
                helpdeskArticle: _.A.getArticleURL(N.MVz.SOUNDBOARD)
            }),
            children: [(0, n.jsx)(o.A, {
                guildId: e,
                className: p.Dt,
                globalOption: {
                    label: b.intl.string(b.t["CpEUP/"]),
                    value: C.XH
                },
                onChange: t => {
                    i(null == t ? C.XH : t.id)
                },
                renderOptionSuffix: m,
                hideDivider: !0
            }), (0, n.jsxs)(d.A, {
                title: b.intl.format(b.t.I2TsYN, {
                    nitroWheelHook: () => (0, n.jsx)(r.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: p.ax
                    })
                }),
                children: [(0, n.jsx)(g.A, {
                    sound: T,
                    isGlobal: I,
                    onSelect: i => {
                        null == i ? (0, c.Dv)(e, t) : (0, c.un)(e, i, t)
                    }
                }), O && (0, n.jsx)(r.po8, {
                    className: p.lm,
                    messageType: r.YCn.WARNING,
                    children: b.intl.string(b.t.WkPsFR)
                })]
            })]
        })
    }
})