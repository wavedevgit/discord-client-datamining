/** chunk id: 591203 params = (module,exports,require) **/
n.d(t, {
    L: () => N
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(565645),
    o = n(688810),
    d = n(687021),
    c = n(128450),
    u = n(419954),
    m = n(796774),
    _ = n(209932),
    g = n(536432),
    A = n(984813),
    x = n(595953),
    p = n(975571),
    h = n(780964),
    f = n(617617),
    T = n(652215);
n(980504);
var E = n(985018),
    S = n(17786);

function b(e) {
    return (0, l.bG)([_.A], () => {
        if (null == e) return null;
        let {
            guildId: t,
            soundId: n
        } = e;
        return _.A.getSound("0" === t ? "0" : t, n)
    })
}

function C(e) {
    let {
        guildId: t
    } = e, n = (0, l.bG)([f.A], () => f.A.settings.guilds?.guilds?.[t]?.joinSound), s = b(n);
    if (null == n || null == s) return null;
    let {
        emojiId: o,
        emojiName: d
    } = s, c = null != o || null != d;
    return (0, i.jsxs)("div", {
        className: S.Io,
        children: [c ? (0, i.jsx)(r.A, {
            emojiId: o,
            emojiName: d,
            className: S.nW
        }) : (0, i.jsx)(a.HKD, {
            size: "md",
            color: "currentColor",
            className: S.nW
        }), (0, i.jsx)(a.Text, {
            className: S.dK,
            variant: "text-xs/medium",
            children: s.name
        })]
    })
}
let N = (0, u.E2)(h.X.ENTRANCE_SOUNDS_SETTING, {
    useSearchTerms: () => [E.intl.string(E.t.nzUc3B)],
    Component: function() {
        let {
            analyticsLocations: e
        } = (0, o.Ay)(), [t, n] = s.useState("0"), r = (0, A.mz)(t), u = b(r), h = r?.type === A.PP.GLOBAL, f = (0, l.bG)([_.A], () => _.A.hasFetchedAllSounds()) && null != r && null == u;
        s.useEffect(() => {
            f && (0, g.ND)({
                location: e
            })
        }, [f, e]), s.useEffect(() => {
            (0, m.E7)()
        }, []);
        let N = s.useCallback((e, t) => {
            let {
                inDropdown: n
            } = t;
            return null == e ? null : n ? (0, i.jsx)(C, {
                guildId: e.value
            }) : null
        }, []);
        return (0, i.jsxs)(a.nVY, {
            label: E.intl.string(E.t.nzUc3B),
            description: E.intl.format(E.t.u9RWmv, {
                helpdeskArticle: p.A.getArticleURL(T.MVz.SOUNDBOARD)
            }),
            children: [(0, i.jsx)(d.A, {
                guildId: t,
                className: S.Dt,
                globalOption: {
                    label: E.intl.string(E.t["CpEUP/"]),
                    value: "0"
                },
                onChange: e => {
                    n(null == e ? "0" : e.id)
                },
                renderOptionSuffix: N,
                hideDivider: !0
            }), (0, i.jsxs)(c.A, {
                title: E.intl.format(E.t.I2TsYN, {
                    nitroWheelHook: () => (0, i.jsx)(a.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: S.ax
                    })
                }),
                children: [(0, i.jsx)(x.A, {
                    sound: u,
                    isGlobal: h,
                    onSelect: n => {
                        null == n ? (0, g.Dv)(t, e) : (0, g.un)(t, n, e)
                    }
                }), f && (0, i.jsx)(a.po8, {
                    className: S.lm,
                    messageType: a.YCn.WARNING,
                    children: E.intl.string(E.t.WkPsFR)
                })]
            })]
        })
    }
})