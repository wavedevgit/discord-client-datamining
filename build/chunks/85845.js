/** Chunk was on 60667 **/
/** chunk id: 85845, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => v,
    L: () => N
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(565645),
    o = n(688810),
    c = n(687021),
    d = n(128450),
    u = n(195043),
    _ = n(796774),
    p = n(209932),
    m = n(536432),
    g = n(984813),
    A = n(595953),
    f = n(975571),
    h = n(617617),
    b = n(772927),
    E = n(410316),
    x = n(681677),
    O = n(531525),
    C = n(652215),
    I = n(980504),
    T = n(985018),
    S = n(646561);

function j(e) {
    return (0, l.bG)([p.A], () => {
        if (null == e) return null;
        let {
            guildId: t,
            soundId: n
        } = e;
        return p.A.getSound(t === I.XH ? I.mV : t, n)
    })
}

function v() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(u.x, {
            setting: O.H.VOICE_AND_VIDEO_SOUNDBOARD,
            children: [(0, r.jsx)(E.A, {}), (0, r.jsx)(x.A, {})]
        }), (0, r.jsx)(u.x, {
            setting: O.H.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
            children: (0, r.jsx)(N, {})
        })]
    })
}

function N() {
    let {
        analyticsLocations: e
    } = (0, o.Ay)(), [t, n] = i.useState(I.XH), a = (0, g.mz)(t), u = j(a), h = (null == a ? void 0 : a.type) === g.PP.GLOBAL, E = (0, l.bG)([p.A], () => p.A.hasFetchedAllSounds()) && null != a && null == u;
    i.useEffect(() => {
        E && (0, m.ND)({
            location: e
        })
    }, [E, e]), i.useEffect(() => {
        (0, _.E7)()
    }, []);
    let x = i.useCallback((e, t) => {
        let {
            inDropdown: n
        } = t;
        return null == e ? null : n ? (0, r.jsx)(y, {
            guildId: e.value
        }) : null
    }, []);
    return (0, r.jsx)(b.A, {
        children: (0, r.jsxs)(s.nVY, {
            label: T.intl.string(T.t.nzUc3B),
            description: T.intl.format(T.t.u9RWmv, {
                helpdeskArticle: f.A.getArticleURL(C.MVz.SOUNDBOARD)
            }),
            children: [(0, r.jsx)(c.A, {
                guildId: t,
                className: S.Dt,
                globalOption: {
                    label: T.intl.string(T.t["CpEUP/"]),
                    value: I.XH
                },
                onChange: e => {
                    n(null == e ? I.XH : e.id)
                },
                renderOptionSuffix: x,
                hideDivider: !0
            }), (0, r.jsxs)(d.A, {
                title: T.intl.format(T.t.I2TsYN, {
                    nitroWheelHook: () => (0, r.jsx)(s.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: S.ax
                    })
                }),
                children: [(0, r.jsx)(A.A, {
                    sound: u,
                    isGlobal: h,
                    onSelect: n => {
                        null == n ? (0, m.Dv)(t, e) : (0, m.un)(t, n, e)
                    }
                }), E && (0, r.jsx)(s.po8, {
                    className: S.lm,
                    messageType: s.YCn.WARNING,
                    children: T.intl.string(T.t.WkPsFR)
                })]
            })]
        })
    })
}

function y(e) {
    let {
        guildId: t
    } = e, n = (0, l.bG)([h.A], () => {
        var e, n, r;
        return null == (r = h.A.settings.guilds) || null == (n = r.guilds) || null == (e = n[t]) ? void 0 : e.joinSound
    }), i = j(n);
    if (null == n || null == i) return null;
    let {
        emojiId: o,
        emojiName: c
    } = i, d = null != o || null != c;
    return (0, r.jsxs)("div", {
        className: S.Io,
        children: [d ? (0, r.jsx)(a.A, {
            emojiId: o,
            emojiName: c,
            className: S.nW
        }) : (0, r.jsx)(s.HKD, {
            size: "md",
            color: "currentColor",
            className: S.nW
        }), (0, r.jsx)(s.Text, {
            className: S.dK,
            variant: "text-xs/medium",
            children: i.name
        })]
    })
}