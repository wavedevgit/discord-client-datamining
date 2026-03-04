/** chunk id: 591203, original params: t,e,i (module,exports,require) **/
i.d(e, {
    L: () => p
});
var n = i(627968),
    l = i(64700),
    s = i(311907),
    a = i(397927),
    r = i(565645),
    u = i(688810),
    o = i(687021),
    d = i(128450),
    A = i(419954),
    T = i(796774),
    S = i(209932),
    E = i(536432),
    g = i(984813),
    c = i(595953),
    _ = i(975571),
    I = i(780964),
    C = i(617617),
    N = i(652215);
i(980504);
var O = i(985018),
    b = i(17786);

function D(t) {
    return (0, s.bG)([S.A], () => {
        if (null == t) return null;
        let {
            guildId: e,
            soundId: i
        } = t;
        return S.A.getSound("0" === e ? "0" : e, i)
    })
}

function L(t) {
    let {
        guildId: e
    } = t, i = (0, s.bG)([C.A], () => C.A.settings.guilds?.guilds?.[e]?.joinSound), l = D(i);
    if (null == i || null == l) return null;
    let {
        emojiId: u,
        emojiName: o
    } = l, d = null != u || null != o;
    return (0, n.jsxs)("div", {
        className: b.Io,
        children: [d ? (0, n.jsx)(r.A, {
            emojiId: u,
            emojiName: o,
            className: b.nW
        }) : (0, n.jsx)(a.HKD, {
            size: "md",
            color: "currentColor",
            className: b.nW
        }), (0, n.jsx)(a.Text, {
            className: b.dK,
            variant: "text-xs/medium",
            children: l.name
        })]
    })
}
let p = (0, A.E2)(I.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [O.intl.string(O.t.nzUc3B)],
    Component: function() {
        let {
            analyticsLocations: t
        } = (0, u.Ay)(), [e, i] = l.useState("0"), r = (0, g.mz)(e), A = D(r), I = r?.type === g.PP.GLOBAL, C = (0, s.bG)([S.A], () => S.A.hasFetchedAllSounds()) && null != r && null == A;
        l.useEffect(() => {
            C && (0, E.ND)({
                location: t
            })
        }, [C, t]), l.useEffect(() => {
            (0, T.E7)()
        }, []);
        let p = l.useCallback((t, e) => {
            let {
                inDropdown: i
            } = e;
            return null == t ? null : i ? (0, n.jsx)(L, {
                guildId: t.value
            }) : null
        }, []);
        return (0, n.jsxs)(a.nVY, {
            label: O.intl.string(O.t.nzUc3B),
            description: O.intl.format(O.t.u9RWmv, {
                helpdeskArticle: _.A.getArticleURL(N.MVz.SOUNDBOARD)
            }),
            children: [(0, n.jsx)(o.A, {
                guildId: e,
                className: b.Dt,
                globalOption: {
                    label: O.intl.string(O.t["CpEUP/"]),
                    value: "0"
                },
                onChange: t => {
                    i(null == t ? "0" : t.id)
                },
                renderOptionSuffix: p,
                hideDivider: !0
            }), (0, n.jsxs)(d.A, {
                title: O.intl.format(O.t.I2TsYN, {
                    nitroWheelHook: () => (0, n.jsx)(a.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: b.ax
                    })
                }),
                children: [(0, n.jsx)(c.A, {
                    sound: A,
                    isGlobal: I,
                    onSelect: i => {
                        null == i ? (0, E.Dv)(e, t) : (0, E.un)(e, i, t)
                    }
                }), C && (0, n.jsx)(a.po8, {
                    className: b.lm,
                    messageType: a.YCn.WARNING,
                    children: O.intl.string(O.t.WkPsFR)
                })]
            })]
        })
    }
})