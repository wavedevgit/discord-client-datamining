/** Chunk was on web.js **/
/** chunk id: 85845, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => N,
    L: () => w
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(565645),
    l = n(688810),
    c = n(687021),
    u = n(128450),
    d = n(195043),
    f = n(796774),
    p = n(209932),
    _ = n(536432),
    h = n(984813),
    m = n(595953),
    g = n(975571),
    E = n(617617),
    y = n(772927),
    b = n(410316),
    O = n(681677),
    v = n(531525),
    A = n(652215),
    I = n(980504),
    S = n(985018),
    T = n(646561);

function C(e) {
    return (0, a.bG)([p.A], () => {
        if (null == e) return null;
        let {
            guildId: t,
            soundId: n
        } = e;
        return p.A.getSound(t === I.XH ? I.mV : t, n)
    })
}

function N() {
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(d.x, {
            setting: v.H.VOICE_AND_VIDEO_SOUNDBOARD,
            children: [(0, r.jsx)(b.A, {}), (0, r.jsx)(O.A, {})]
        }), (0, r.jsx)(d.x, {
            setting: v.H.VOICE_AND_VIDEO_ENTRANCE_SOUNDS,
            children: (0, r.jsx)(w, {})
        })]
    })
}

function w() {
    let {
        analyticsLocations: e
    } = (0, l.Ay)(), [t, n] = i.useState(I.XH), o = (0, h.mz)(t), d = C(o), E = (null == o ? void 0 : o.type) === h.PP.GLOBAL, b = (0, a.bG)([p.A], () => p.A.hasFetchedAllSounds()) && null != o && null == d;
    i.useEffect(() => {
        b && (0, _.ND)({
            location: e
        })
    }, [b, e]), i.useEffect(() => {
        (0, f.E7)()
    }, []);
    let O = i.useCallback((e, t) => {
        let {
            inDropdown: n
        } = t;
        return null == e ? null : n ? (0, r.jsx)(R, {
            guildId: e.value
        }) : null
    }, []);
    return (0, r.jsx)(y.A, {
        children: (0, r.jsxs)(s.nVY, {
            label: S.intl.string(S.t.nzUc3B),
            description: S.intl.format(S.t.u9RWmv, {
                helpdeskArticle: g.A.getArticleURL(A.MVz.SOUNDBOARD)
            }),
            children: [(0, r.jsx)(c.A, {
                guildId: t,
                className: T.Dt,
                globalOption: {
                    label: S.intl.string(S.t["CpEUP/"]),
                    value: I.XH
                },
                onChange: e => {
                    n(null == e ? I.XH : e.id)
                },
                renderOptionSuffix: O,
                hideDivider: !0
            }), (0, r.jsxs)(u.A, {
                title: S.intl.format(S.t.I2TsYN, {
                    nitroWheelHook: () => (0, r.jsx)(s.tvc, {
                        size: "md",
                        color: "currentColor",
                        className: T.ax
                    })
                }),
                children: [(0, r.jsx)(m.A, {
                    sound: d,
                    isGlobal: E,
                    onSelect: n => {
                        null == n ? (0, _.Dv)(t, e) : (0, _.un)(t, n, e)
                    }
                }), b && (0, r.jsx)(s.po8, {
                    className: T.lm,
                    messageType: s.YCn.WARNING,
                    children: S.intl.string(S.t.WkPsFR)
                })]
            })]
        })
    })
}

function R(e) {
    let {
        guildId: t
    } = e, n = (0, a.bG)([E.A], () => {
        var e, n, r;
        return null == (r = E.A.settings.guilds) || null == (n = r.guilds) || null == (e = n[t]) ? void 0 : e.joinSound
    }), i = C(n);
    if (null == n || null == i) return null;
    let {
        emojiId: l,
        emojiName: c
    } = i, u = null != l || null != c;
    return (0, r.jsxs)("div", {
        className: T.Io,
        children: [u ? (0, r.jsx)(o.A, {
            emojiId: l,
            emojiName: c,
            className: T.nW
        }) : (0, r.jsx)(s.HKD, {
            size: "md",
            color: "currentColor",
            className: T.nW
        }), (0, r.jsx)(s.Text, {
            className: T.dK,
            variant: "text-xs/medium",
            children: i.name
        })]
    })
}