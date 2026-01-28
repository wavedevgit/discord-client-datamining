/** Chunk was on 60449 **/
/** chunk id: 85845, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _,
    L: () => I
}), n(896048);
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(565645),
    o = n(688810),
    c = n(687021),
    d = n(128450),
    u = n(195043),
    g = n(796774),
    h = n(209932),
    x = n(536432),
    A = n(984813),
    p = n(595953),
    m = n(975571),
    j = n(617617),
    O = n(772927),
    E = n(410316),
    b = n(681677),
    S = n(531525),
    v = n(652215),
    C = n(980504),
    f = n(985018),
    T = n(646561);

function N(e) {
    return (0, l.bG)([h.A], () => {
        if (null == e) return null;
        let {
            guildId: t,
            soundId: n
        } = e;
        return h.A.getSound(t === C.XH ? C.mV : t, n)
    })
}

function _() {
    return (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(u.x, {
            setting: S.H.VOICE_AND_VIDEO_SOUNDBOARD,
            children: [(0, i.jsx)(E.A, {}), (0, i.jsx)(b.A, {})]
        }), (0, i.jsx)(u.x, {
            setting: S.H.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
            children: (0, i.jsx)(I, {})
        })]
    })
}

function I() {
    let {
        analyticsLocations: e
    } = (0, o.Ay)(), [t, n] = s.useState(C.XH), a = (0, A.mz)(t), u = N(a), j = (null == a ? void 0 : a.type) === A.PP.GLOBAL, E = (0, l.bG)([h.A], () => h.A.hasFetchedAllSounds()) && null != a && null == u;
    s.useEffect(() => {
        E && (0, x.ND)({
            location: e
        })
    }, [E, e]), s.useEffect(() => {
        (0, g.E7)()
    }, []);
    let b = s.useCallback((e, t) => {
        let {
            inDropdown: n
        } = t;
        return null == e ? null : n ? (0, i.jsx)(y, {
            guildId: e.value
        }) : null
    }, []);
    return (0, i.jsx)(O.A, {
        children: (0, i.jsxs)(r.nVY, {
            label: f.intl.string(f.t.nzUc3B),
            description: f.intl.format(f.t.u9RWmv, {
                helpdeskArticle: m.A.getArticleURL(v.MVz.SOUNDBOARD)
            }),
            children: [(0, i.jsx)(c.A, {
                guildId: t,
                className: T.Dt,
                globalOption: {
                    label: f.intl.string(f.t["CpEUP/"]),
                    value: C.XH
                },
                onChange: e => {
                    n(null == e ? C.XH : e.id)
                },
                renderOptionSuffix: b,
                hideDivider: !0
            }), (0, i.jsxs)(d.A, {
                title: f.intl.format(f.t.I2TsYN, {
                    nitroWheelHook: () => (0, i.jsx)(r.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: T.ax
                    })
                }),
                children: [(0, i.jsx)(p.A, {
                    sound: u,
                    isGlobal: j,
                    onSelect: n => {
                        null == n ? (0, x.Dv)(t, e) : (0, x.un)(t, n, e)
                    }
                }), E && (0, i.jsx)(r.po8, {
                    className: T.lm,
                    messageType: r.YCn.WARNING,
                    children: f.intl.string(f.t.WkPsFR)
                })]
            })]
        })
    })
}

function y(e) {
    let {
        guildId: t
    } = e, n = (0, l.bG)([j.A], () => {
        var e, n, i;
        return null == (i = j.A.settings.guilds) || null == (n = i.guilds) || null == (e = n[t]) ? void 0 : e.joinSound
    }), s = N(n);
    if (null == n || null == s) return null;
    let {
        emojiId: o,
        emojiName: c
    } = s, d = null != o || null != c;
    return (0, i.jsxs)("div", {
        className: T.Io,
        children: [d ? (0, i.jsx)(a.A, {
            emojiId: o,
            emojiName: c,
            className: T.nW
        }) : (0, i.jsx)(r.HKD, {
            size: "md",
            color: "currentColor",
            className: T.nW
        }), (0, i.jsx)(r.Text, {
            className: T.dK,
            variant: "text-xs/medium",
            children: s.name
        })]
    })
}