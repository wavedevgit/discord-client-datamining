/** chunk id: 16986, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(793574),
    r = n(688810),
    o = n(46054),
    d = n(753806),
    c = n(145331),
    u = n(195043),
    _ = n(954571),
    g = n(253932),
    m = n(790174),
    A = n(531525),
    h = n(652215),
    p = n(985018);

function x() {
    let e = g.ML.useSetting(),
        t = g.eK.useSetting(),
        n = g.SI.useSetting(),
        x = g.gs.useSetting(),
        E = g.SY.useSetting(),
        T = g._z.useSetting(),
        S = g.j7.useSetting(),
        C = g.X6.useSetting(),
        f = g.hD.useSetting(),
        I = g.rs.useSetting(),
        b = g.jW.useSetting(),
        N = g.Hu.useSetting(),
        {
            analyticsLocations: v
        } = (0, r.Ay)(a.A.TEXT_AND_IMAGES),
        j = s.useCallback(e => {
            let t = 1 === e;
            t ? d.A.cleanUpPrivateChannelSearchState() : d.A.cleanUpSearchState({
                type: h.I4_.DMS
            }), (0, c._k)({
                prevIsCrossDMSettingEnabled: g.Hu.getSetting(),
                isCrossDMSettingEnabled: t,
                location: c.vy.USER_SETTINGS
            }), g.Hu.updateSetting(t)
        }, []);
    return (0, i.jsx)(m.A, {
        title: p.intl.string(p.t["/VQax8"]),
        children: (0, i.jsxs)(l.BJc, {
            direction: "vertical",
            gap: 24,
            children: [(0, i.jsx)(u.x, {
                setting: A.H.CHAT_INLINE_MEDIA,
                children: (0, i.jsxs)(l.nVY, {
                    label: p.intl.string(p.t.U68Dgp),
                    children: [(0, i.jsx)(u.x, {
                        setting: A.H.CHAT_INLINE_MEDIA_LINKS,
                        children: (0, i.jsx)(l.dOG, {
                            checked: f,
                            onChange: g.hD.updateSetting,
                            label: p.intl.string(p.t.U47N1p)
                        })
                    }), (0, i.jsx)(u.x, {
                        setting: A.H.CHAT_INLINE_MEDIA_UPLOADS,
                        children: (0, i.jsx)(l.dOG, {
                            checked: C,
                            description: p.intl.formatToPlainString(p.t.qjjvqO, {
                                maxSize: 10
                            }),
                            onChange: g.X6.updateSetting,
                            label: p.intl.string(p.t.VP11No)
                        })
                    }), (0, i.jsx)(u.x, {
                        setting: A.H.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS,
                        children: (0, i.jsx)(l.dOG, {
                            checked: T,
                            description: p.intl.string(p.t.T0rbtM),
                            onChange: g._z.updateSetting,
                            label: p.intl.string(p.t["w8j+yW"])
                        })
                    })]
                })
            }), (0, i.jsxs)(u.x, {
                setting: A.H.CHAT_EMBEDS,
                children: [(0, i.jsx)(l.cGx, {}), (0, i.jsx)(l.nVY, {
                    label: p.intl.string(p.t.PWZOn4),
                    children: (0, i.jsx)(u.x, {
                        setting: A.H.CHAT_EMBEDS_LINK_PREVIEWS,
                        children: (0, i.jsx)(l.dOG, {
                            checked: I,
                            onChange: g.rs.updateSetting,
                            label: p.intl.string(p.t.xX0ZTA)
                        })
                    })
                })]
            }), (0, i.jsxs)(u.x, {
                setting: A.H.CHAT_EMOJI,
                children: [(0, i.jsx)(l.cGx, {}), (0, i.jsxs)(l.nVY, {
                    label: p.intl.string(p.t.sMOuuS),
                    children: [(0, i.jsx)(u.x, {
                        setting: A.H.CHAT_EMOJI_REACTIONS,
                        children: (0, i.jsx)(l.dOG, {
                            checked: b,
                            onChange: g.jW.updateSetting,
                            label: p.intl.string(p.t.Iv24sm)
                        })
                    }), (0, i.jsx)(u.x, {
                        setting: A.H.CHAT_EMOJI_EMOTICONS,
                        children: (0, i.jsx)(l.dOG, {
                            checked: S,
                            description: o.A.parse(p.intl.string(p.t["20dvuQ"])),
                            onChange: g.j7.updateSetting,
                            label: p.intl.string(p.t["79qal8"])
                        })
                    })]
                })]
            }), (0, i.jsxs)(u.x, {
                setting: A.H.CHAT_STICKERS,
                children: [(0, i.jsx)(l.cGx, {}), (0, i.jsx)(l.nVY, {
                    label: p.intl.string(p.t["6NtAuJ"]),
                    children: (0, i.jsx)(u.x, {
                        setting: A.H.CHAT_STICKERS_AUTOCOMPLETE,
                        children: (0, i.jsx)(l.dOG, {
                            checked: e,
                            description: p.intl.string(p.t["/eVrj8"]),
                            onChange: e => {
                                _.default.track(h.HAw.STICKERS_IN_AUTOCOMPLETE_TOGGLED, {
                                    enabled: e,
                                    location: {
                                        section: h.JJy.SETTINGS_TEXT_AND_IMAGES
                                    },
                                    location_stack: v
                                }), g.ML.updateSetting(e)
                            },
                            label: p.intl.string(p.t["29xPVZ"])
                        })
                    })
                })]
            }), (0, i.jsxs)(u.x, {
                setting: A.H.CHAT_SOUNDMOJI,
                children: [(0, i.jsx)(l.cGx, {}), (0, i.jsx)(l.nVY, {
                    label: p.intl.string(p.t.EHlAMc),
                    children: (0, i.jsx)(u.x, {
                        setting: A.H.CHAT_SOUNDMOJI_AUTOCOMPLETE,
                        children: (0, i.jsx)(l.dOG, {
                            checked: t,
                            description: p.intl.string(p.t.hrSIhN),
                            onChange: e => {
                                _.default.track(h.HAw.SOUNDMOJI_IN_AUTOCOMPLETE_TOGGLED, {
                                    checked: e,
                                    location: {
                                        section: h.JJy.SETTINGS_TEXT_AND_IMAGES
                                    }
                                }), g.eK.updateSetting(e)
                            },
                            label: p.intl.string(p.t["CtYr+U"])
                        })
                    })
                })]
            }), (0, i.jsxs)(u.x, {
                setting: A.H.CHAT_TEXT_BOX,
                children: [(0, i.jsx)(l.cGx, {}), (0, i.jsx)(l.nVY, {
                    label: p.intl.string(p.t.afR0pI),
                    children: (0, i.jsx)(u.x, {
                        setting: A.H.CHAT_TEXT_BOX_PREVIEW,
                        children: (0, i.jsx)(l.dOG, {
                            checked: n,
                            onChange: e => {
                                _.default.track(h.HAw.PREVIEW_MARKDOWN_TOGGLED, {
                                    enabled: e,
                                    location: {
                                        section: h.JJy.SETTINGS_TEXT_AND_IMAGES
                                    }
                                }), g.SI.updateSetting(e)
                            },
                            label: p.intl.string(p.t.AqGrEI)
                        })
                    })
                })]
            }), (0, i.jsxs)(u.x, {
                setting: A.H.CHAT_THREADS,
                children: [(0, i.jsx)(l.cGx, {}), (0, i.jsx)(l.nVY, {
                    label: p.intl.string(p.t.B2panI),
                    children: (0, i.jsx)(u.x, {
                        setting: A.H.CHAT_THREADS_SPLIT_VIEW,
                        children: (0, i.jsx)(l.dOG, {
                            checked: E,
                            onChange: g.SY.updateSetting,
                            label: p.intl.string(p.t.AInv5m)
                        })
                    })
                })]
            }), (0, i.jsxs)(u.x, {
                setting: A.H.MESSAGE_SEARCH,
                children: [(0, i.jsx)(l.cGx, {}), (0, i.jsx)(u.x, {
                    setting: A.H.MESSAGE_SEARCH_ALL_DMS,
                    children: (0, i.jsx)(l.z6M, {
                        label: p.intl.string(p.t["NxjN+q"]),
                        options: [{
                            name: p.intl.string(p.t["t+fGsk"]),
                            value: 0
                        }, {
                            name: p.intl.string(p.t.MwlEGN),
                            value: 1
                        }],
                        onChange: j,
                        value: +!!N
                    })
                })]
            }), (0, i.jsxs)(u.x, {
                setting: A.H.CHAT_SPOILERS,
                children: [(0, i.jsx)(l.cGx, {}), (0, i.jsx)(l.z6M, {
                    label: p.intl.string(p.t.QgwmVz),
                    description: p.intl.string(p.t.TYnRkS),
                    options: [{
                        name: p.intl.string(p.t["KFH/me"]),
                        value: h.P6Q.ON_CLICK
                    }, {
                        name: p.intl.string(p.t.K5VTBE),
                        value: h.P6Q.IF_MODERATOR
                    }, {
                        name: p.intl.string(p.t.Pe1RbL),
                        value: h.P6Q.ALWAYS
                    }],
                    onChange: e => g.gs.updateSetting(e),
                    value: x
                })]
            })]
        })
    })
}